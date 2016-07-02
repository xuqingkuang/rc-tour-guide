import objectAssign from 'object-assign';
import mixin from './Mixin';

// TODO: Higher order component implementation.
const tourGuide = (options, done) => (Component) => {
  options.higherOrder = true;  // Using for event bindding in Mixin.jsx

  const m = mixin(options, done);
  const getInitialState = m.getInitialState;

  // mixin getInitialState
  m.componentWillMount = function() {
    let state = this.state || {};
    state = objectAssign(state, getInitialState.call(this));
    this.state = state;
  };
  delete m.getInitialState;

  // Other mixin keys.
  Object.keys(m).forEach(function(key) {
    var left = Component.prototype[key], right = m[key];
    if (left === undefined && right === undefined) {
      return;
    }
    if (typeof right === 'function') {
      if (typeof left === 'function') {
        left.bind(this);
      }
      right.bind(this);
      Component.prototype[key] = function() {
        if (right && !left) {
          return right.apply(this, arguments);
        }
        if (right) {
          right.apply(this, arguments);
        }
        if (left) {
          left.apply(this, arguments);
        }
      }
    } else {
      Component.prototype[key] = right;
    }
  })
  return Component;
};

tourGuide.tourGuideMixin = mixin;

export default tourGuide;
