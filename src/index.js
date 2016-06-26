import { mixin } from './Mixin';

// TODO: Higher order component implementation.
export default (options, done) => {
  return (Component) => {
    const m = mixin(options, done);
    const descs = Object.getOwnPropertyDescriptor(m);
    for (const key in descs) {
      if (!(key in Component.prototype)) {
        Object.defineProperty(Component.prototype, key, descs[key]);
      }
    }
    return Component;
  };
};
