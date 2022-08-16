// ResponsiveImage.ts

import React, { useMemo, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

//export default function ResponsiveImage() {
function ResponsiveImage (props, {childToParent}) {
  const [containerWidth, setContainerWidth] = useState(0);
  const _onViewLayoutChange = event => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  }
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 5

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
    if (isRightSwipe) {
      childToParent(props.imgNum + 1);
    } else if (isLeftSwipe) {
      childToParent(props.imgNum + 1);
    }
      // add your conditional logic here
  }

  const imageStyles = useMemo(() => {
    const ratio = containerWidth / props.srcWidth;
    const aspectRatio = props.srcWidth / props.srcHeight
    return {
      padding: 40,
      paddingLeft: 30,
      aspectRatio: aspectRatio,
      width: "100%",
      maxHeight: "80%",
      marginTop: 10
    };
  }, [containerWidth]);

  const aspectRatio = props.srcWidth / props.srcHeight;
  const heightRatio = 100 * (window.innerHeight / props.srcHeight) + "%"
  const widthRatio = 100 * (window.innerWidth / props.srcWidth) + "%"
//  <p>Height: {props.srcHeight}, {window.innerHeight}, HeightRatio: {heightRatio}, WidthRatio: {widthRatio}</p>
  return (
    <>
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className="bird-image">
    <View style={styles.container} onLayout={_onViewLayoutChange}>
      <Image source={props.src} style={{padding: 0, paddingLeft:20, width: "100%", aspectRatio: aspectRatio}} imageStyle={{aspectRatio: aspectRatio}} />
    </View>
    </div>
    </>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", padding: 16 }
});

export default ResponsiveImage;
