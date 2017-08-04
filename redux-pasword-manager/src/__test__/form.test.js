import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import TextField from 'material-ui/TextField';

import store from '../store';
import Form from '../component/Form'

describe('Form',()=>{
  it('should render div',()=>{
      const wrapper =shallow(<Form store={store}/>);
      expect(wrapper.containsAllMatchingElements([
          <div></div>
      ])).to.be.false
  })
})
