import React, { useEffect, useState } from 'react';

import { shallow } from 'enzyme';

import App from '../App';

import MockedArticles from '../../../fixtures/articles.json';

import * as ApiUtils from '../utils/api.utils';

let wrapper;
const emptyArray = [];

ApiUtils.getArticles = jest.fn().mockResolvedValue(MockedArticles);

jest.mock('react', () => global.mockReactWithHooks({ effect: true, state: true }));

const getWrapper = () => shallow(<App />);

beforeEach(() => {
  jest.clearAllMocks();
  useEffect.mockClear();
  useState.mockClear();
  wrapper = getWrapper();
});

describe('App', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain the correct markup', () => {
    expect(wrapper.find(`[data-testid='app']`).exists()).toBeTruthy();
    expect(wrapper.find(`[data-testid='app-title']`).text()).toBe('Home Page');
    expect(wrapper.find(`[data-testid='articles-container']`).exists()).toBeTruthy();
    expect(wrapper.find(`[data-testid='articles-title']`).text()).toBe('Articles');
    expect(wrapper.find(`[data-testid='articles-list']`).exists()).toBeTruthy();
  });

  it('should call useState with an empty array', () => {
    expect(useState).toHaveBeenCalledWith(emptyArray);
    const [initialsArticles] = useState.mock.results[0].value;
    expect(initialsArticles).toEqual(emptyArray);
  });

  it('should call useEffect with a function and an empty array', () => {
    expect(useEffect).toHaveBeenCalledWith(expect.any(Function), [emptyArray]);
  });

  it('should call getArticles once', () => {
    expect(ApiUtils.getArticles).toHaveBeenCalledTimes(1);
  });

  it('should call setArticles once with MockedArticles', () => {
    const [, setArticles] = useState.mock.results[0].value;
    expect(setArticles).toHaveBeenCalledWith(MockedArticles);
    expect(setArticles).toHaveBeenCalledTimes(1);
  });
});
