import React from 'react'
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Header from '../component/header'

describe('Header' ,()=>{
     it('should render div ', ()=>{
          const wrapper = shallow(<Header />);
          expect(wrapper.containsAllMatchingElements([
               <h2>Welcome Aplikasi Password Manager</h2>
          ])).to.be.true
     })
})
