# rc-tour-guide
---

Best React Tour Guide component for new user.


[![NPM version](http://img.shields.io/npm/v/rc-tour-guide.svg?style=flat-square)](http://npmjs.org/package/rc-tour-guide)
[![Dependency Status](https://david-dm.org/xuqingkuang/rc-tour-guide.svg)](https://david-dm.org/xuqingkuang/rc-tour-guide)
[![devDependency Status](https://david-dm.org/xuqingkuang/rc-tour-guide/dev-status.svg)](https://david-dm.org/xuqingkuang/rc-tour-guide#info=devDependencies)
[![npm download](https://img.shields.io/npm/dm/rc-tour-guide.svg?style=flat-square)](https://npmjs.org/package/rc-tour-guide)

## Screen capture

![Screen Capture](http://o8gb937mp.bkt.clouddn.com/github/rc-tour-guide.gif)

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


## Simple Usage


```js
// use jsx to render html, do not modify simple.html

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import tourGuide from 'rc-tour-guide';
require('rc-tour-guide/assets/index.less');

const tour = {
  startIndex: 0,
  scrollToSteps: true,
  steps: [
    {
      text: 'This is the first step in the tour.',
      selector: '.block'
    }
  ]
};

const completed = function() {
  console.log('User has completed tour!');
};

const canceled = function() {
  console.log('User has canceled the tour!');
}

class Example extends Component {

  componentDidMount () {
    this.showTourGuide();
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={(evt) => { this.showTourGuide(evt, true) }}>
            Reset and Show Tour Guide
          </button>
        </div>
        <div className="block">
          I am a block text.
        </div>
      </div>
    )
  }
}

const TourGuide = tourGuide(tour, completed, canceled)(Example);

ReactDOM.render(<TourGuide />, document.getElementById('__react-content'));```
```

## Options and Defaults

```js
{
  placement: 'bottom-left',           // Global tooltip appear placement
  maskPadding: 6,                     // Mask border distance with target element
  toolTipOffset: 3,                   // Tooltip distance with mask
  startIndex: 0,                      // Default start tooltip index
  scrollToSteps: true,                // When it enabled it will scroll to target
  enableCloseButton: true,            // Global close button enabled
  locale: {                           // Translations by default it's Chinese
    close: '关闭',
    previous: '上一个',
    next: '下一个',
    done: '完成',
  },
  classNames: {                       // Customize the related element class name
    target: 'rc-tour-guide-target',
    position: 'rc-tour-guide-relative',
  }
  steps: [
    {
      text: 'I am the text',          // Tooltip text
      selector: '.tour-guide-target', // Target css selector
      placement: 'bottom-left',       // Specific tooltip appear placement
      maskPadding: 6,                 // Specific tooltip mask padding
      toolTipOffset: 3,               // As same as global options
      enableCloseButton: true,        // As same as global options
      beCurrent: ($target) => {},     // When be current executor, $target is jquery object
      bePrevious: ($target) => {},    // When be previous executor, $target is jquery object
    }
  ],
}

```

## Methods

All of the methods could be called in instance

<table class="table table-bordered table-striped">
  <thead>
    <tr>
        <th style="width: 120px;">Name</th>
        <th style="width: 200px;">Arguments</th>
        <th style="width: 200px">Response</th>
        <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>setTourSteps</td>
      <td>(steps, callback)</td>
      <td></td>
      <td>After Tour Guide initialized, reset the steps</td>
    </tr>
    <tr>
      <td>getProgress</td>
      <td></td>
      <td>{index, total, percentageComplete, step}</td>
      <td>Get current step progress</td>
    </tr>
    <tr>
      <td>showTourGuide</td>
      <td>(evt, reset = false, callback)</td>
      <td></td>
      <td>Show tour guide</td>
    </tr>
    <tr>
      <td>hideTourGuide</td>
      <td>(evt, reset = false, callback)</td>
      <td></td>
      <td>Hide tour guide</td>
    </tr>
    <tr>
      <td>previousTooltip</td>
      <td></td>
      <td></td>
      <td>Go to previous Tooltip</td>
    </tr>
    <tr>
      <td>nextTooltip</td>
      <td></td>
      <td></td>
      <td>Go to next Tooltip</td>
    </tr>
  </tbody>
</table>

## License

rc-tour-guide is released under the MIT license.
