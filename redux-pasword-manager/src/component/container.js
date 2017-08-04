import React, { Component } from 'react';

import FormSearch from './FormSearch'
import List from './list'

class Container extends Component {
  render() {
    return (
      <div className="col-9">
        <FormSearch/>
        <List/>
      </div>
    )
  }
}

export default Container;
