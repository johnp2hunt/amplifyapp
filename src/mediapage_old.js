import React from 'react';
import img from './20220707083019474.bmp'

//const cache = {};

//function importAll(r) {
//    r.keys().forEach((key) => (cache[key] = r(key)));
//}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
//importAll(require.context("./images", false, /\.(bmp|png|jpe?g|svg)$/));

//const images = Object.entries(cache).map(module => module[1].default);

//function importAll(r) {
//    let images = {};
//    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//    return images;
//}

//const images = importAll(require.context('./images', false, /\.(bmp|png|jpe?g|svg)$/));
var listOfImages =[];

const onImgLoad = ({ target: img }) => {
  const { naturalHeight, naturalWidth } = img;
  console.log(naturalHeight, naturalWidth);
};

class MediaPage extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {
        listOfImages = this.importAll(require.context('./images/', false, /\.(bmp|png|jpe?g|svg)$/));
    }
    render(){
        return(
          <>
          <div>
              {
                    listOfImages.map(
                      (image, index) =>    <p>{index}<img onLoad={onImgLoad} key={index} width="120" border="4" src={image} alt="info"></img></p>
                    )

              }
          </div>
          <div>
            <p>{img}</p>

          </div>
          </>
        )
    }
}
/*const MediaPage = () => {
    return (
        <>
            <p>Media Page..</p>

            {Object.entries(cache).map(module => {
                const image = module[1].default;
                const name = module[0].replace("","");
                return (
                    <div style={{float: 'left', padding: 10, margin: 10, border: '2px solid blue' }}>
                        <img style={{width: 100, margin: 'auto', display: 'block'}} src={module[1].default} />
                        <p>{img}</p>
                    </div>
                )
            })}
        </>
    );
}*/
export default MediaPage;
