import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

import { useEffect, useRef, useState, useMemo, useContext } from '../../__mocks__/react-hooks';
import React from '../../__mocks__/react';

// Overwrite console.info to disable the following print message
// "Download the React DevTools for a better development experience"
console.info = () => {};

const mockReactWithHooks = ({ effect = false, state = false, ref = false, memo = false, context = false }) => {
  return {
    ...React,
    ...(effect && { useEffect }),
    ...(state && { useState }),
    ...(ref && { useRef }),
    ...(memo && { useMemo }),
    ...(context && { useContext }),
  };
};

global.mockReactWithHooks = mockReactWithHooks;

Enzyme.configure({ adapter: new Adapter() });
