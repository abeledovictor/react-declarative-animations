import React from 'react';

export const withAnimation = (WrappedComponent, className) => {
  class withAnimation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        animate: false,
      };
      this.propsHandler = this.propsHandler.bind(this);
      this.animatePropHelper = this.animatePropHelper.bind(this);
    }

    animatePropHelper(type) {
      // expects a string that matches a key of the object passed
      // as second argument to withAnimation. Example:  animate('left')
      if (className[type] === undefined) {
        console.warn(`Key ${type} was not passed as a key of withAnimation second argument`);
      } else {
        this.setState({ animate: type });
      }
    }

    propsHandler() {
      const { animate } = this.state;
      const stopAnimation = () => this.setState({ animate: false });
      // expects a string or an object like
      // {left: 'classname-animation--left', right: 'classname-animation--right'}
      if (typeof className === 'string') {
        return {
          animate: (() => this.setState({ animate: true })),
          stopAnimation,
          animationClassName: (animate ? className : undefined),
        };
      }

      return {
        animate: this.animatePropHelper,
        stopAnimation,
        animationClassName: (animate ? className[animate] : undefined),
      };
    }

    render() {
      return (
        <WrappedComponent
          {...this.propsHandler()}
        />
      );
    }
  }

  return withAnimation;
};
