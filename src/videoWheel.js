import React from 'react';
import Button from '@mui/material/Button';
import ReactPlayer from 'react-player';
import SelectVariants from "./selectVidVariants";



// images data
import birdMovies from './birdMovies';
var i = 0;
var backDisabled = true;
var nextDisabled = false;
var videoUrl = ""

class VideoWheel extends React.Component{
  constructor(props){
    super(props)
    // Set initial state
    this.state = {imageNum : i}
  }
  handleNextClick = () => {
    // Changing state
    if (i < (birdMovies.length - 1)){
      i = i + 1
      this.setState({imageNum : i});
      this.changeBackDisableState();
      this.changeNextDisableState();
    }
  }
  handleBackClick = () => {
  // Changing state
    if (i > 0) {
      i = i - 1
      this.setState({imageNum : i});
      this.changeBackDisableState();
      this.changeNextDisableState();
    }
  }
  changeBackDisableState = () => {
    if (i === 0) {
      backDisabled = true;
    } else {
      backDisabled = false;
    }
  };

  changeNextDisableState = () => {
    console.log('birdmovieslength: '+ birdMovies.length);
    console.log('i: ' + i)
    if (i === (birdMovies.length - 1)){
      console.log('disable next now')
      nextDisabled = true;
    } else {
      nextDisabled = false;
    }
  };

  childToParent = (childdata) => {
    i = childdata;
    this.changeNextDisableState();
    this.changeBackDisableState();
    this.setState({imageNum : childdata});
  };

  videoUrl = birdMovies[i].uri + "#t=0.1";


    render(){
        return(
          <>
          <Button
            variant="contained"
            className="next-button"
            sx={{margin: 0, marginLeft: 1, marginTop: -1}}
            disabled={nextDisabled}
            onClick={this.handleNextClick}>
            Next
          </Button>
          <Button
            variant="contained"
            className="back-button"
            sx={{margin: 0, marginLeft: 2, marginTop: -1}}
            disabled={backDisabled}
            onClick={this.handleBackClick}>
            Back
          </Button>
          <SelectVariants
            sx={{margin: 1}}
            childToParent={this.childToParent} />
          <div className='player-wrapper'>
          <p className="video-info">Video {i+1} of {birdMovies.length}; {birdMovies[i].dt_m.slice(5,10)} at {birdMovies[i].dt_m.slice(11,16)}</p>
            <ReactPlayer
              className='react-player fixed-bottom bird-video'
              width='100px%'
              height='100%'
              controls = {true}
              url={birdMovies[i].uri}
              childToParent={this.childToParent}
            />
           </div>
          </>
        )
    }
}
export default VideoWheel;
