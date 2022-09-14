import React from 'react';
import './App.scss';
import { ButtonsGroupe } from './components/ButtonsGroupe';
import { DropzoneCopy } from './components/DropzoneCopy';
import { WindowInfo } from './components/WindowInfo';

export const App: React.FC = () => {
  return (
    <div className="App">
      <ButtonsGroupe />
      <WindowInfo />
      <DropzoneCopy />
    </div>
  );
};
