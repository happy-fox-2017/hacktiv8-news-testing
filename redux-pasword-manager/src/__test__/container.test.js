import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Container from '../component/container'
import FormSearch from '../component/FormSearch'
import List from '../component/list'

describe ('Container', () =>{
     it('should render FormSearch and List', ()=>{
          const wrapper = shallow(<Container />);
          expect(wrapper.containsAllMatchingElements([
               <FormSearch />
               <List />
          ])).to.be.true
     })
})
