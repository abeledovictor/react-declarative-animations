# react-declarative-animations


Declarative animations made easy!

  - Doesn't use setTimeout
  - Prevents you from adding extra logic in your components
  - Uses High Order Component pattern


#### Codepen Example of usage: [react-declarative-animations](https://codepen.io/victorabeledo/project/editor/XrMnBo#)

# One modifier animation usage

```javascript
import React from 'react';
import { withAnimation } from 'react-declarative-animations';

const BasicAnimationComponent = ({ animationClassName, stopAnimation, animate }) => (
  <div>
      <div className={animationClassName} onAnimationEnd={stopAnimation}>Animated div </div>
      <button onClick={animate}>Triggers animation</button>
      <button onClick={stopAnimation}>Stops animation </button>
  </div>
);

export default withAnimation(BasicAnimationComponent, 'animation-class');
```

# 2+ modifiers animation usage

```javascript
import React from 'react';
import { withAnimation } from 'react-declarative-animations';

const BasicAnimationComponent = ({ animationClassName, stopAnimation, animate }) => (
  <div>
      <div className={animationClassName} onAnimationEnd={stopAnimation}>Animated div </div>
      <button onClick={() => animate('red')}> Triggers red class animation</button>
      <button onClick={() => animate('blue')}>Triggers blue class animation</button>
  </div>
);

export default withAnimation(BasicAnimationComponent, { red: 'animation-class--red', blue: 'animation-class--blue' });
```
The argument passed to animate() matches the class corresponding to the key with the same name.
Example :
`animate('left')` matches class 'class-left' at `withAnimation(Component, {left: 'class-left', right: 'class-right'})`

### Injected props to your withAnimation(Component)

| Prop | Description |
| ------ | ------ |
| animate | function that triggers animation. Expects no arguments for one modifier usage |
| stopAnimation | function that stops animation |
| animationClassName | string with the animation className triggered by animate(). Undefined if no animation is set |

### What is onAnimationEnd?
It's an event triggered when css animation ends. It's HTML native and react also uses it. You should almost always put stopAnimation prop here for animations to work properly.

