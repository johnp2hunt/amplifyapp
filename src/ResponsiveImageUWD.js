// ResponsiveImage.ts

import React, { useMemo, useRef, useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import useWindowDimensions from './useWindowDimensions';

const ResponsiveImage = props => {
  console.log('Moving................')
//  const { height, width } = useWindowDimensions();
  const [containerWidth, setContainerWidth] = useState(1600);
  const [containerHeight, setContainerHeight] = useState(900);
  const _onViewLayoutChange = event => {
//  const { width, height } = event.nativeEvent.layout;
//  const { width, height } = useWindowDimensions();
//    const { width, height } = useWindowDimensions();
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    setContainerWidth(width);
    setContainerHeight(height)
    console.log('windowWidth: ' + containerWidth)
    console.log('windowHeight: ' + containerHeight)
}

  const imageStyles = useMemo(() => {
    const widthRatio = props.srcWidth / containerWidth;
    const heightRatio = props.srcHeight / containerHeight;
    if (widthRatio > heightRatio) {
      console.log('container ONE');
      console.log('width: ' + props.srcWidth/widthRatio)
      console.log('height: ' + props.srcHeight/widthRatio)
      return {
        width: (props.srcWidth/widthRatio),
        height: props.srcHeight/widthRatio
      };
    } else {
      console.log('container TWO');
      console.log('width: ' + props.srcWidth/heightRatio)
      console.log('height: ' + props.srcHeight/heightRatio)
      return {
        width: props.srcWidth/heightRatio,
        height: props.srcHeight/heightRatio
      };
    }
  }, [containerWidth, containerHeight]);

  return (
    console.log('SET IMAGE'),
    <View onLayout={_onViewLayoutChange}>
      <Image source={props.src} style={imageStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "90%" }
});

export default ResponsiveImage;
