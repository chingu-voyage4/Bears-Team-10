import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from "../actions/index.js";

class POD extends Component {
  render() {
    console.log({this.props.data});
    return(
      <div>
        <PictureofTheDay
        props={this.props.data}
        title={this.props.data.title}
        explanation={this.props.data.explanation}
        hdurl={this.props.data.hdurl}>
        </PictureofTheDay>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps, actionCreators)(POD);
