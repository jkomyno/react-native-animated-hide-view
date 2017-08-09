import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  ViewPropTypes,
} from 'react-native';

export default class AnimatedHideView extends PureComponent {

  static propTypes = {
    visible: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    unmountOnHide: PropTypes.bool,
    animate: PropTypes.bool,
    style: ViewPropTypes.style,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    duration: 300,
    animate: true,
    unmountOnHide: false,
    style: {},
  }

  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(props.visible ? 1 : 0);
  }

  componentWillUpdate(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.animate();
    }
  }

  animate = () => {
    const {
      animate,
      duration,
      visible,
    } = this.props;

    Animated.timing(this.opacity, {
      toValue: visible ? 0 : 1,
      duration: animate ? duration : 0,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {
      unmountOnHide,
      visible,
      style,
      children,
      ...otherProps
    } = this.props;

    const renderStyle = {
      opacity: this.opacity,
      zIndex: visible ? 1 : 0,
    };

    const pointerEvents = visible ? 'auto' : 'none';

    if (unmountOnHide && !visible) {
      return null;
    }

    return (
      <Animated.View
        pointerEvents={pointerEvents}
        style={[renderStyle, style]}
        {...otherProps}
      >
        {children}
      </Animated.View>
    );
  }
}
