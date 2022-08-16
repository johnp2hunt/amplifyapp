import React from 'react';
import ResponsiveImage from "./ResponsiveImageOrig-3";
import Button from '@mui/material/Button';
import SelectVariants from "./selectVariants";


// images data
import birdImages from './birdImages';

//const ImageWheel = props => {
function ImageWheel(imgNum) {
//  constructor(props){
//    super(props)

    // Set initial state
//    this.state = {imageNum : i}
//    this.state = { age: '' }

//  }
  var i = 0;
  const handleNextClick = () => {
    console.log('nextclick');
    if (i < (birdImages.length - 1)){
      i = i + 1
    }
    setImageNum(i)
    console.log('i: ' + i + ', imgNum: ' + imageNum)
  }
  const handleBackClick = () => {
    console.log('backclick');
    if (i > 0) {
      i = i - 1
      console.log(i)
    }
  }

  const [imageNum, setImageNum] = React.useState(0);
  const [data, setData] = React.useState('');
  const [index, setIndex] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const childToParent = (childdata) => {
    alert("This is an alert from the Child Component: " + childdata)
  };

//  render(){
    return(
      <>
      <h1 style={{marginLeft: 16}}>Hunt-Cashman Bluebird Box</h1>
      <Button
        variant="contained"
        sx={{margin: 1, marginLeft: 2}}
        onClick={handleNextClick}>
        Next
      </Button>
      <Button
        variant="contained"
        sx={{margin: 1, marginLeft: 2}}
        onClick={handleBackClick}>
        Back
      </Button>
      <SelectVariants  childToParent={childToParent} />
      <ResponsiveImage
        uri={birdImages[i].img}
        src={birdImages[i].img}
        srcWidth={birdImages[i].width} // replace with your image width
        srcHeight={birdImages[i].height} // replace with your image height
      />
      </>
    )
//  }
}
export default ImageWheel;
