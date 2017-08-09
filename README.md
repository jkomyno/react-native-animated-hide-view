### React Native Animated Hide View
---

A performant-wise and configurable react-native component that can toggle the opacity of its children, with or without animation. Developed with proper touch event handling in mind (pointerEvents).


## Installation

`yarn add react-native-animated-hide-view`

Or, if you prefer using npm:

`npm i -S react-native-animated-hide-view`

## How to use

```
import AnimatedHideView from 'react-native-animated-hide-view';

...

const isChildVisible = true;

<AnimatedHideView
  visible={isChildVisible}
  style={{ backgroundColor: 'red', padding: 10 }}
>
  <YourChildView />
</AnimatedHideView>
```

## Props

Prop              | Type     | Default  | Required           | Description
----------------- | -------- | -------- | ------------------ | --------------------
visible           | bool     | -        | :heavy_check_mark: | Show/Hide the View
duration          | int      | 500      |                    | Animation time (ms)
unmountOnHide     | bool     | false    |                    | Unmount component when visible === false
animated          | bool     | true     |                    | If false, disables the animation
style             | style    | {}       |                    | Custom style to be passed to the wrapper Animated.View **(*)**
children          | node     | -        | :heavy_check_mark: | Children components

You can also pass every other valid Animated.View's props.

**(*)**: you don't need to handle zIndex or pointerEvents when the `visible` property changes: it's already handled automatically by this library!

## Known Issues

Nothing here yet!

## Contributing

PRs are obviously welcome! :octocat: 
