import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEPIC } from '../../actions/epic-action';

class Epic extends Component {
  componentDidMount() {
    this.props.fetchEPIC();
  }

  render() {
    const {epic} = this.props;
    const data = epic.epicData;
    console.log(this.props.epic.epicData);
    return (
      <div className="route-container epic-container">
        <h2>Epic Picture of the Day</h2>
        <h3>{data.caption}</h3>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchEPIC: () => dispatch(fetchEPIC())
})

const mapStateToProps = state => ({
  epic: state.epic
})


export default connect(mapStateToProps, mapDispatchToProps)(Epic);
