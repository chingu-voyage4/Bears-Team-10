import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPOD} from './actions/pod-action';

class PictureOfTheDay extends Component {
  componentDidMount() {
    this.props.fetchPOD();
  }

  render() {
    const {pod} = this.props;
    const media = this.props.pod.podData.url;
    // generates html tag from media type
    const tag = this.props.pod.podData.media_type === "video" ?
                <iframe type="text/html"
                        width="320"
                        height="240"
                        src={media} /> :
                 <img src={media}/>

    const data = pod.podData;

    return (
      <div className="container">
        {tag}

        {Object.keys(data).map((key) => (
          <p> {data[key]} </p>
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
