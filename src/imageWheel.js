import React from 'react';
import ResponsiveImage from "./ResponsiveImageOrig-3";
import Button from '@mui/material/Button';
import SelectVariants from "./selectVariants";


// images data
import birdImages from './birdImages';

var i = 0;
var backDisabled = true;
var nextDisabled = false;

class ImageWheel extends React.Component{
  constructor(props){
    super(props)

    // Set initial state
    this.state = {imageNum : i}
  }

  handleNextClick = () => {
    if (i < (birdImages.length - 1)){
      i = i + 1
      this.setState({imageNum : i});
      this.changeBackDisableState();
      this.changeNextDisableState();
    }
  }
  handleBackClick = () => {
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
    if (i === (birdImages.length - 1)){
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
    console.log('childdata: ' + childdata);
  }

  render(){
    return(
      <>
      <Button
        variant="contained"
        className="back-button"
        sx={{margin: 0, marginLeft: 2, marginTop: -1}}
        disabled={backDisabled}
        onClick={this.handleBackClick}>
        Back
      </Button>
      <Button
        variant="contained"
        className="next-button"
        sx={{margin: 0, marginLeft: 1, marginTop: -1}}
        disabled={nextDisabled}
        onClick={this.handleNextClick}>
        Next
      </Button>
      <SelectVariants
        sx={{margin: 1}}
        childToParent={this.childToParent} />
      <ResponsiveImage
        className="responsive-image"
        imgNum={i}
        uri={birdImages[i].img}
        src={birdImages[i].img}
        srcWidth={birdImages[i].width}
        srcHeight={birdImages[i].height}
        childToParent={this.childToParent}
      />
      <p className="img-info">Image {i+1} of {birdImages.length}; {birdImages[i].dt_m.slice(5,10)} at {birdImages[i].dt_m.slice(11,16)}</p>
      </>
    )
  }
}
export default ImageWheel;
