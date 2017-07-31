import React from 'react'
import { shallow } from 'enzyme'

import Form from '../components/Form'

describe('<Form> component', () => {
  const formSection = shallow(<Form />)

  it('Have 3 input', () => {
    expect(formSection.find('input').toHaveLength(3))
  })
})
