# rc-tour-guide
---

React tour guide or introduction for user is first time using.


[![NPM version][npm-image]][npm-url]
[![Dependency Status](https://david-dm.org/xuqingkuang/rc-tour-guide.svg)](https://david-dm.org/xuqingkuang/rc-tour-guide)
[![devDependency Status](https://david-dm.org/xuqingkuang/rc-tour-guide/dev-status.svg)](https://david-dm.org/xuqingkuang/rc-tour-guide#info=devDependencies)
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-tour-guide.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-tour-guide
[download-image]: https://img.shields.io/npm/dm/rc-tour-guide.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-tour-guide

## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples/


online example: http://xuqingkuang.github.io/rc-tour-guide/


## install


[![rc-tour-guide](https://nodei.co/npm/rc-tour-guide.png)](https://npmjs.org/package/rc-tour-guide)


## Usage

```js
// use jsx to render html, do not modify simple.html

import React from 'react';
import ReactDOM from 'react-dom';
import { tourGuideMixin } from 'rc-tour-guide';
require('./style.less');

const tour = {
  startIndex: 0,
  scrollToSteps: true,
  steps: [
    {
      text: 'This is the first step in the tour.',
      element: '.block',
    },
    {
      text: 'This is the second step in the tour.',
      element: '.inline-block',
      placement: 'right-bottom'
    },
    {
      text: 'This is the third step in the tour.',
      element: '.float-right',
      placement: 'left-middle',
    },
    {
      text: 'This is the fourth step in the tour.',
      element: '.position-absolute',
      placement: 'top-right',
    }
  ]
};

const cb = function() {
  console.log('User has completed tour!');
};

const TourGuide = React.createClass({
  mixins: [ tourGuideMixin(tour, cb) ],
  componentDidMount: function() {
    this.showTourGuide();
  },
  render: function() {
    return (
      <div>
        <div>
          <button onClick={this.showTourGuide}>
            Show Tour Guide
          </button>
          <button onClick={function(evt) { this.showTourGuide(evt, true) }.bind(this)}>
            Reset and Show Tour Guide
          </button>
        </div>
        <div className="block">
          I am a block text.
        </div>
        <div>
          <span className="inline-block">
            I am a inline-block text
          </span>
        </div>
        <div className="float-right">
          I am float right text.
        </div>
        <div className="position-absolute">
          I am the position absolute text.
        </div>
      </div>
    )
  }
});

ReactDOM.render(<TourGuide />, document.getElementById('__react-content'));
```

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rc-tour-guide is released under the MIT license.
