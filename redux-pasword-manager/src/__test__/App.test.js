import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../App';
import MainComponent from '../component'

describe('App',()=>{
  it('should render maincomponent',()=>{
      const wrapper =shallow(<App />);
      expect(wrapper.containsAllMatchingElements([
        <MainComponent />
      ])).to.be.true
  })
})
