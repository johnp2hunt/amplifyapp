import React from 'react';
import img from './20220707083019474.bmp'

// images data
import birdImages from './birdImages';
var i = 0;

class MediaPage extends React.Component{
    render(){
        return(
          <>
          <p>Image[{i}]: <img src={birdImages[i].img} width="200"/></p>
          <div className="birdImageArea">
            {birdImages.map(({img, alt}) => (
              <p key={img}>{alt}<br/><img width="400" src={img} alt={alt} className="birdImage" /></p>
            ))}
          </div>
          </>
        )
    }
}
export default MediaPage;
