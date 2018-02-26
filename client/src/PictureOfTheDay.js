import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPOD} from './actions/pod-action';

class PictureOfTheDay extends Component {
  componentDidMount() {
    this.props.fetchPOD();
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

const mapDispatchToProps = dispatch =>  ({
  fetchPOD: () => dispatch(fetchPOD())
})

const mapStateToProps = state => ({
  pod: state.pod
})


export default connect(mapStateToProps,mapDispatchToProps)(PictureOfTheDay);
