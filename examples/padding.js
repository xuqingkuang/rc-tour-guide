// use jsx to render html, do not modify simple.html

import React from 'react';
import ReactDOM from 'react-dom';
import { tourGuideMixin } from 'rc-tour-guide';
require('rc-tour-guide/assets/index.less');
require('./style.less');

const tour = {
  placement: 'bottom-right',
  steps: [
    {
      text: 'I have 2px padding',
      selector: '.padding-1px',
    },
    {
      text: 'I have 4px padding',
      selector: '.padding-3px',
      maskPadding: 4,
    },
    {
      text: 'I have 6px padding',
      selector: '.padding-5px',
      maskPadding: 6,
    },
    {
      text: 'I have 10px padding',
      selector: '.padding-10px',
      maskPadding: 10,
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
              <td className="padding-1px">
                Default 2px padding
              </td>
              <td className="padding-3px">
                Step defined 4px padding
              </td>
              <td className="padding-5px">
                Step defined 6px padding
              </td>
              <td className="padding-10px">
                Step defined 10px padding
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});

ReactDOM.render(<TourGuide />, document.getElementById('__react-content'));
