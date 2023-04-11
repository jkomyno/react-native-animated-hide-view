import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

const AnimatedHideView = ({ visible, unmountOnHide, style, children, ...otherProps }) => {
  const fadeAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;
  const [pointerEvents, setPointerEvents] = useState(visible ? 'auto' : 'none');

  useEffect(() => {
    if (visible) {
      setPointerEvents('auto');
    }
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (!visible && unmountOnHide) {
        setPointerEvents('none');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (unmountOnHide && !visible) {
    return null;
  }

  return (
    <Animated.View
      {...otherProps}
      pointerEvents={pointerEvents}
      style={{ ...style, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedHideView;
