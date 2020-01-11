import React from 'react';
// import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import App from '../App';

// jest.mock('react', () => global.mockReactWithHooks({ effect: true, state: true }));

describe('App', () => {
  // it('renders user data', async () => {
  //   const fakeUser = {
  //     name: 'Joni Baez',
  //     age: '32',
  //     address: '123, Charming Avenue',
  //   };

  //   jest.spyOn(global, 'fetch').mockImplementation(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(fakeUser),
  //     }),
  //   );

  //   // Use the asynchronous version of act to apply resolved promises
  //   await act(async () => {
  //     render(<User id="123" />, container);
  //   });

  //   expect(container.querySelector('summary').textContent).toBe(fakeUser.name);
  //   expect(container.querySelector('strong').textContent).toBe(fakeUser.age);
  //   expect(container.textContent).toContain(fakeUser.address);

  //   // remove the mock to ensure tests are completely isolated
  //   global.fetch.mockRestore();
  // });

  it('should render correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
