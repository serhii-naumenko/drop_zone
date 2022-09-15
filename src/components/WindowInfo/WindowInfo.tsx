import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropzone } from '../Dropzone/Dropzone';
import { selectors } from '../../redux/reduser';
import './WindowInfo.scss';

export const WindowInfo: React.FC = () => {
  const isChosenPerson = useSelector(selectors.getIsChosenperson);
  const chosenUser = useSelector(selectors.getChosenUser);
  const [user, setUser] = useState({
    id: 0,
    name: '',
    status: '',
    dateStart: '',
    dateFinish: '',
  });

  useEffect(() => {
    const newUser = chosenUser;

    setUser(newUser);
  }, [chosenUser]);

  return (!isChosenPerson
    ? (
      <div className="WindowInfo">
        <p className="WindowInfo__text">
          {user.id !== 0 && `Статус сертифікату: ${user.status}`}
        </p>
        <p className="WindowInfo__text">
          {user.id !== 0 && `Дата оформлення: ${user.dateStart}`}
        </p>
        <p className="WindowInfo__text">
          {user.id !== 0 && `Дата завершення терміну дії: ${user.dateFinish}`}
        </p>
      </div>
    )
    : <Dropzone />
  );
};
