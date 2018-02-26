import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPOD} from './actions/pod-action';

class PictureOfTheDay extends Component {
  componentDidMount() {
    this.props.fetchPOD();
  }

  render() {
    const {pod} = this.props;
    const blah = {pod};

    return (
      <div>
        {Object.keys(blah).map((key) => (
            <div>
              {blah[key].title}
            </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>  ({
  fetchPOD: () => dispatch(fetchPOD())
})

const mapStateToProps = state => ({
  pod: state.pod
})


export default connect(mapStateToProps,mapDispatchToProps)(PictureOfTheDay);
