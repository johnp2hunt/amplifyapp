import './App.css';
import VideoWheel from './videoWheel.js'
import ImageWheel from './imageWheel.js'
import Button from '@mui/material/Button';
import {useState} from 'react';

function App(props, {childToParent}) {
  const [isVideo, setIsVideo] = useState(false);
  const [isImage, setIsImage] = useState(true);

  const showImagesClick = () => {
    setIsVideo(current => !current);
    setIsImage(current => !current);
  }
  const showVideosClick = () => {
    setIsVideo(current => !current);
    setIsImage(current => !current);
  }

  return (
    <>
    <div className="imagediv" style={{display: isImage ? 'block' : 'none'}}>
      <h1 className="title" style={{marginLeft: 16}}>Bluebirds&nbsp;-&nbsp;Images</h1>
      <Button
        variant="contained"
        className="show-videos-button"
        sx={{margin: 0, marginLeft: 1, marginTop: -1}}
        onClick={showVideosClick}>
        Show videos
      </Button>
      <ImageWheel />
    </div>
    <div className="videodiv" style={{display: isVideo ? 'block' : 'none'}}>
      <h1 className="title" style={{marginLeft: 16}}>Bluebirds&nbsp;-&nbsp;Videos</h1>
      <Button
        variant="contained"
        className="show-images-button"
        sx={{margin: 0, marginLeft: 1, marginTop: -1, left: 100}}
        onClick={showImagesClick}>
        Show images
      </Button>
      <VideoWheel />
    </div>
    </>
  );
}

export default App;
