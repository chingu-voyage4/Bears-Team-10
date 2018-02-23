import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchPOD} from './actions/pod-action';

connect((store) => {
  return {
    pod: store.podData
  };
})

export default class PictureOfTheDay extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPOD());
  }

  render() {
    const {pod} = this.props;

    return (
      <div>
        {pod}
      </div>
    )
  }
}
