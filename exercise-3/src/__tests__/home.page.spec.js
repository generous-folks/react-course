import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { shallow } from 'enzyme';

import { HomePage } from '../pages/home.page';

import MockedArticles from '../../../fixtures/articles.json';
import * as ApiUtils from '../utils/api.utils';

let wrapper;
const emptyArray = [];

ApiUtils.getArticles = jest.fn().mockResolvedValue(MockedArticles);

jest.mock('react', () => global.mockReactWithHooks({ effect: true, state: true }));

const getWrapper = () => shallow(<HomePage />);

beforeEach(() => {
  jest.clearAllMocks();
  useEffect.mockClear();
  useState.mockClear();
  wrapper = getWrapper();
});

describe('<HomePage />', () => {
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find(`[data-testid='app']`).exists()).toBeTruthy();
      expect(wrapper.find(`[data-testid='app-title']`).text()).toBe('Home Page');
      expect(wrapper.find(`[data-testid='articles-container']`).exists()).toBeTruthy();
      expect(wrapper.find(`[data-testid='articles-title']`).text()).toBe('Articles');
      expect(wrapper.find(`[data-testid='articles-list']`).exists()).toBeTruthy();
      expect(
        wrapper
          .find(Link)
          .first()
          .prop('to'),
      ).toBe('/about');
      expect(
        wrapper
          .find(Link)
          .last()
          .prop('to'),
      ).toBe('/contact');
    });
  });

  describe('State checks', () => {
    // Don't test Jest mocks or React, it is useless
    // In the following example we test that our react mock is working
    // const [initialsArticles] = useState.mock.results[0].value;
    // expect(initialsArticles).toEqual(emptyArray);

    it('should call useState with an empty array', () => {
      expect(useState).toHaveBeenCalledWith(emptyArray);
    });
  });

  describe('Effects checks', () => {
    it('should call useEffect with a function and an empty array', () => {
      expect(useEffect).toHaveBeenCalledWith(expect.any(Function), [emptyArray]);
    });

    it('should call getArticles once', () => {
      expect(ApiUtils.getArticles).toHaveBeenCalledTimes(1);
    });

    it('should call getArticles once even when re-rendered', () => {
      wrapper.update();
      expect(ApiUtils.getArticles).toHaveBeenCalledTimes(1);
    });

    it('should call setArticles once with MockedArticles', () => {
      const [, setArticles] = useState.mock.results[0].value;
      expect(setArticles).toHaveBeenCalledWith(MockedArticles);
      expect(setArticles).toHaveBeenCalledTimes(1);
    });
  });
});
