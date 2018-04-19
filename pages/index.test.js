/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import App from './index.js'
import { mount } from 'enzyme'
jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate HoC receive the t function as a prop
    translate: () => Component => props => <Component t={() => ''} {...props} />,
}));
// TODO:write unit test about pages

// describe('With Enzyme', () => {
//   it('App shows "Hello world!"', () => {
//     const app = shallow(<App />)
//     expect(app.find('p').text()).toEqual('Hello World!')
//   })
// })

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    // const component = renderer.create(<App />)
    // const tree = component.toJSON()
    // expect(tree).toMatchSnapshot()
  })
})
