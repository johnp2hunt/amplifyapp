// ResponsiveImage.ts

import React, { useMemo, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const ResponsiveImage = props => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(1);
  const _onViewLayoutChange = event => {
    const { width, height } = event.nativeEvent.layout;
    console.log(width)
    console.log(height)
    setContainerWidth(width);
    setContainerHeight(height);
  }

  const imageStyles = useMemo(() => {
    const containerRatio = containerWidth / containerHeight;
    const imageRatio = props.srcWidth / props.srcheight;
      return {
        width: containerWidth,
        height: props.srcheight * containerRatio
      };
  }, [containerWidth]);

  return (
    <View style={styles.container} onLayout={_onViewLayoutChange}>
      <Image source={props.src} style={imageStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" }
});

export default ResponsiveImage;
