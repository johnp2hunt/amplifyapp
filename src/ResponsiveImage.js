// ResponsiveImage.ts

import React, { useMemo, useRef, useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const ResponsiveImage = props => {
  console.log('Moving................')
  const [containerWidth, setContainerWidth] = useState(1600);
  const [containerHeight, setContainerHeight] = useState(900);
  const _onViewLayoutChange = event => {
    const { width, height } = event.nativeEvent.layout;
    setContainerWidth(width);
    setContainerHeight(height)
    console.log('containerWidth: ' + containerWidth)
    console.log('containerHeight: ' + containerHeight)
  }

  const imageStyles = useMemo(() => {
    const widthRatio = props.srcWidth / containerWidth;
    console.log('WidthRatio:' + widthRatio)
    const heightRatio = props.srcHeight / containerHeight;
    console.log('HeightRatio:' + heightRatio)
    console.log('containerHeight: ' + containerHeight)
    if (widthRatio > heightRatio) {
      console.log('container ONE');
      console.log('width: props.srcWidth/widthRatio: ' + props.srcWidth/widthRatio)
      return {
        width: props.srcWidth/widthRatio,
        height: props.srcHeight/widthRatio
      };
    } else {
      console.log('container TWO');
      console.log('width: props.srcWidth/heightRatio: ' + props.srcWidth/heightRatio)
      return {
        width: props.srcWidth/heightRatio,
        height: props.srcHeight/heightRatio
      };
    }
  }, [containerWidth]);

  return (
    console.log('SET IMAGE'),
    <View style={styles.container} onLayout={_onViewLayoutChange}>
      <Image source={props.src} style={imageStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" }
});

export default ResponsiveImage;
