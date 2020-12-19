import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ExerciseContainer } from './__hints__/dialog';

ReactDOM.render(
  <ExerciseContainer>
    <App />
  </ExerciseContainer>,
  document.getElementById('root'),
);
