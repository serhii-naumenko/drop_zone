import React, { useCallback, useState } from 'react';
import ASN1 from '@lapo/asn1js';
// import Hex from '@lapo/asn1js/hex';
import classNames from 'classnames';
import './ButtonsGroupe.scss';
import { useDispatch } from 'react-redux';

import { setChosenUser, setIsChosenPerson } from '../../redux/reduser';
// eslint-disable-next-line max-len
// import certData from '../../external_files/test_certs/cert.cer';

// const ASN1 = require('@lapo/asn1js');

const users = [
  {
    id: 1,
    name: 'Іванов Іван Іванович',
    status: 'valid',
    dateStart: '10.08.2022',
    dateFinish: '09.08.2024',
  },
  {
    id: 2,
    name: 'Петров Петро Петрович',
    status: 'invalid',
    dateStart: '15.06.2020',
    dateFinish: '14.06.2022',
  },
  {
    id: 3,
    name: 'Сидоров Сидор Сидорович',
    status: 'valid',
    dateStart: '06.07.2021',
    dateFinish: '05.07.2023',
  },
];

export const ButtonsGroupe: React.FC = () => {
  const [addText, setAddText] = useState('Додати');
  const [addTitle, setAddTitle] = useState('Go to Додавання сертифіката');
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();

  const handlerAdd = useCallback(() => {
    const currentAddText = addText;

    if (currentAddText === 'Додати') {
      setAddText('Скасувати');
      setAddTitle('Go to Головна');
      setIsAdd(true);
      dispatch(setIsChosenPerson(true));
    } else {
      setAddText('Додати');
      setAddTitle('Go to Додавання сертифіката');
      setIsAdd(false);
      dispatch(setIsChosenPerson(false));
      dispatch(setChosenUser({
        id: 0,
        name: '',
        status: '',
        dateStart: '',
        dateFinish: '',
      }));
    }
  }, [addText, addTitle, isAdd]);

  const handlerChoisePerson = useCallback((chosenId) => {
    const chosenUser = users.find((user) => user.id === chosenId);

    if (chosenUser) {
      dispatch(setChosenUser(chosenUser));
    }
  }, []);

  const handlerChangeFile = useCallback((exactFile) => {
    const result = ASN1.decode(exactFile);

    if (result.typeName() !== 'SEQUENCE') {
      throw new Error('Неправильна структура конверта сертифіката (очікується SEQUENCE)');
    }

    const tbsCertificate = result.sub[0];

    // eslint-disable-next-line no-console
    console.log(tbsCertificate);

    // eslint-disable-next-line no-console
    console.log(exactFile);
  }, []);

  return (
    <div className="ButtonsGroupe">
      {users.map((user) => (
        <button
          type="button"
          key={user.id}
          title={`Go to Перегляд сертифікату ${user.name.split(' ')[0]}`}
          className={classNames(
            'ButtonsGroupe__item',
            {
              'ButtonsGroupe__item-passive': isAdd,
            },
          )}
          disabled={isAdd}
          onClick={() => handlerChoisePerson(user.id)}
        >
          {user.name}
        </button>
      ))}
      <button
        type="button"
        title={addTitle}
        className="ButtonsGroupe__add"
        onClick={handlerAdd}
      >
        {addText}
      </button>
      <input
        title="add your file"
        type="file"
        className="ButtonsGroupe__file"
        accept="multiple"
        onChange={(event) => handlerChangeFile(event.target.files)}
      />
    </div>
  );
};
