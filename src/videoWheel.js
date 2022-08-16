import React from 'react';
import ResponsiveImage from "./ResponsiveImageOrig-2";
import AutoHeightImage from "./AutoHeightImage"
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';


// images data
import birdImages from './birdImages';
var i = 0;

function next() {
//  alert('You clicked me!');
  i = i + 1;
    return(
      <p>Image[{3}]: <img src={birdImages[3].img} width="600"/></p>
    )
}

class VideoWheel extends React.Component{
  constructor(props){
    super(props)

    // Set initial state
    this.state = {imageNum : i}

    // Binding this keyword
//    this.handleNextClick = this.handleClick.bind(this)
  }
  handleNextClick = () => {
    // Changing state
    if (i < (birdImages.length - 1)){
      i = i + 1
      this.setState({imageNum : i});
    }
  }
  handleBackClick = () => {
  // Changing state
    if (i > 0) {
      i = i - 1
      this.setState({imageNum : i});
    }
  }
  //          <p>&nbsp;&nbsp;&nbsp;<img src={birdImages[i].img} width="960"/></p>

    render(){
        return(
          <>
          <h1 style={{marginLeft: 16}}>birdImages.length: {birdImages.length}; Image[{this.state.imageNum}]</h1>
          <p style={{marginLeft:16}}>Date/Time: {birdImages[i].dt_m}</p>
          <Button
            variant="contained"
            sx={{margin: 1, marginLeft: 2}}
            onClick={this.handleNextClick}>
            Next
          </Button>
          <Button
            variant="contained"
            sx={{margin: 1, marginLeft: 2}}
            onClick={this.handleBackClick}>
            Back
          </Button>
          <video>
            <source src="./videos/testvid3.m4v" />
            Sorry, your browser doesn't support videos.
          </video>
          </>
        )
    }
}
export default VideoWheel;
