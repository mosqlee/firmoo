import PureComponent from './PureComponent';
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate HoC receive the t function as a prop
    translate: () => Component => props => <Component t={() => ''} {...props} />,
}));
import {translate} from 'react-i18next'
describe('With render currect', () => {
    it('App shows "Hello world!"', () => {
        const oure = shallow(<PureComponent t={translate}/>);
        expect(oure.find('p').text()).toEqual('');
        // expect(typeof(oure)).toEqual(typeof({}));
        // expect(oure.find('p').text()).toEqual('1');
        // const oure = renderer.create(<PureComponent t={translate}/>);
        // console.log(oure,'qqq'.repeat(100));
        // expect(oure.find('p').text()).toEqual('1');
    })
})