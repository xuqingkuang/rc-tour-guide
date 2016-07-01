// use jsx to render html, do not modify simple.html

import React from 'react';
import ReactDOM from 'react-dom';
import { tourGuideMixin } from 'rc-tour-guide';
require('rc-tour-guide/assets/index.less');
require('./style.less');

const tour = {
  placement: 'bottom-right',
  maskPadding: 2,
  toolTipOffset: 0,
  steps: [
    {
      text: 'I have 2px padding',
      selector: '.padding-2px',
    },
    {
      text: 'I have 4px padding',
      selector: '.padding-4px',
      maskPadding: 4,
    },
    {
      text: 'I have 6px padding',
      selector: '.padding-6px',
      maskPadding: 6,
    },
    {
      text: 'I have 10px padding',
      selector: '.padding-10px',
      maskPadding: 10,
    },
    {
      text: 'I have 2px padding and 4px offset',
      selector: '.padding-2px-offset-4px',
      toolTipOffset: 4
    },
    {
      text: 'I have 4px padding and 8px offset',
      selector: '.padding-4px-offset-8px',
      maskPadding: 4,
      toolTipOffset: 8
    },
    {
      text: 'I have 6px padding and 10px offset',
      selector: '.padding-6px-offset-10px',
      maskPadding: 6,
      toolTipOffset: 10
    },
    {
      text: 'I have 10px padding and 20px offset',
      selector: '.padding-10px-offset-20px',
      maskPadding: 10,
      toolTipOffset: 20
    },
  ]
};

const cb = function() {
  console.log(this);
  console.log('User has completed tour!');
};

const cancel = function() {
  console.log(this);
  console.log('User has canceled the tour!');
}

const TourGuide = React.createClass({
  mixins: [ tourGuideMixin(tour, cb, cancel) ],
  componentDidMount: function() {
    this.showTourGuide();
  },
  render: function() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className="padding-2px">
                Default 2px padding
              </td>
              <td className="padding-4px">
                Step defined 4px padding
              </td>
              <td className="padding-6px">
                Step defined 6px padding
              </td>
              <td className="padding-10px">
                Step defined 10px padding
              </td>
            </tr>
            <tr>
              <td className="padding-2px-offset-4px">
                Default 2px padding and 4px offset
              </td>
              <td className="padding-4px-offset-8px">
                Step defined 4px padding and 8px offset
              </td>
              <td className="padding-6px-offset-10px">
                Step defined 6px padding and 10px offset
              </td>
              <td className="padding-10px-offset-20px">
                Step defined 10px padding and 20px offset
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});

ReactDOM.render(<TourGuide />, document.getElementById('__react-content'));
