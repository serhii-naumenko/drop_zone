import React, { useCallback, useState } from 'react';
import ASN1 from '@lapo/asn1js';
// import Hex from '@lapo/asn1js/hex';
import classNames from 'classnames';
import './ButtonsGroupe.scss';
import { useDispatch } from 'react-redux';

import { setIsChosenPerson } from '../../redux/reduser';
// eslint-disable-next-line max-len
// import certData from '../../external_files/test_certs/cert.cer';

// const ASN1 = require('@lapo/asn1js');

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
    }
  }, [addText, addTitle, isAdd]);

  const handlerChoisePerson = useCallback(() => {

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
      <button
        type="button"
        title="Go to Перегляд сертифікату Іванов"
        className={classNames(
          'ButtonsGroupe__item',
          {
            'ButtonsGroupe__item-passive': isAdd,
          },
        )}
        disabled={isAdd}
      >
        Іванов Іван Іванович
      </button>
      <button
        type="button"
        title="Go to Перегляд сертифікату Петров"
        className={classNames(
          'ButtonsGroupe__item',
          {
            'ButtonsGroupe__item-passive': isAdd,
          },
        )}
        disabled={isAdd}
        onClick={handlerChoisePerson}
      >
        Петров Петро Петрович
      </button>
      <button
        type="button"
        title="Go to Перегляд сертифікату Сидоров"
        className={classNames(
          'ButtonsGroupe__item',
          {
            'ButtonsGroupe__item-passive': isAdd,
          },
        )}
        disabled={isAdd}
      >
        Сидоров Сидор Сидорович
      </button>
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
