// ResponsiveImage.ts

import React, { useMemo, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const ResponsiveImage = props => {
  const [containerWidth, setContainerWidth] = useState(0);
  const _onViewLayoutChange = event => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
    console.log('doing layoutchange...')
  }
  console.log('doing ResponsiveImage...')

  const imageStyles = useMemo(() => {
    const ratio = containerWidth / props.srcWidth;
    const aspectRatio = props.srcWidth / props.srcHeight
    console.log('doing imageStyles...')
    console.log('aspectratio: ' + aspectRatio)
    return {
      padding: 40,
      paddingLeft: 30,
      aspectRatio: aspectRatio,
      width: "100%",
      maxHeight: "80%"
    };
  }, [containerWidth]);

  const aspectRatio = props.srcWidth / props.srcHeight;
  const heightRatio = 100 * (window.innerHeight / props.srcHeight) + "%"
  const widthRatio = 100 * (window.innerWidth / props.srcWidth) + "%"
  console.log('outside aspectratio: ' + aspectRatio)
//  <p>Height: {props.srcHeight}, {window.innerHeight}, HeightRatio: {heightRatio}, WidthRatio: {widthRatio}</p>
  return (
    <View style={styles.container} onLayout={_onViewLayoutChange}>
      <Image source={props.src} style={{padding: 40, paddingLeft:30, width: "100%", aspectRatio: aspectRatio}} imageStyle={{aspectRatio: aspectRatio}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", padding: 20 }
});

export default ResponsiveImage;
