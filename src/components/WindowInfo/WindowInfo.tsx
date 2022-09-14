import React from 'react';
import { useSelector } from 'react-redux';
import { Dropzone } from '../Dropzone/Dropzone';
import { selectors } from '../../redux/reduser';
import './WindowInfo.scss';

export const WindowInfo: React.FC = () => {
  const isChosenPerson = useSelector(selectors.getIsChosenperson);

  return (!isChosenPerson
    ? (<div className="WindowInfo"></div>)
    : <Dropzone />
  );
};
