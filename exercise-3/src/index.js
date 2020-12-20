import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ExerciseContainer } from './__hints__/dialog';
import { instructions } from './__hints__/instructions';

ReactDOM.render(
  <ExerciseContainer instructions={instructions}>
    <App />
  </ExerciseContainer>,
  document.getElementById('root'),
);
