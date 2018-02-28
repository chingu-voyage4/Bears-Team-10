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
                  <iframe className="daily-media" type="text/html"
                          height="400"
                          src={media} /> :
                   <img className="daily-media" src={media}/>

    const data = pod.podData;
    const d = new Date();
    const date = d.toDateString();

    return (
      <div className="container">
        <h2>Picture of the Day for {date}</h2>
        <h3>{data.title}</h3>
        <div className="iframe-container">
          {tag}
        </div>
        <div className="description">
          <p>{data.explanation}</p>
        </div>

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
