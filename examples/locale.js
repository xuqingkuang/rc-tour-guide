// use jsx to render html, do not modify simple.html

import React from 'react';
import ReactDOM from 'react-dom';
import { tourGuideMixin } from 'rc-tour-guide';
require('rc-tour-guide/assets/index.less');
require('./style.less');

/* Defined the button texts */
const locale = {
  next: 'Next',
  previous: 'Previous',
  done: 'Done'
}

const tour = {
  locale,
  startIndex: 0,
  scrollToSteps: true,
  steps: [
    {
      text: 'Tooltip 1, as same as bottom-left',
      selector: '.no-placement',
    },
    {
      text: 'Tooltip 2',
      selector: '.position1',
      placement: 'top-left',
    },
    {
      text: 'Tooltip 3',
      selector: '.position2',
      placement: 'top-center',
    },
    {
      text: 'Tooltip 4',
      selector: '.position3',
      placement: 'top-right',
    },
    {
      text: 'Tooltip 5',
      selector: '.position6',
      placement: 'right-top',
    },
    {
      text: 'Tooltip 6',
      selector: '.position8',
      placement: 'right-middle',
    },
    {
      text: 'Tooltip 7',
      selector: '.position10',
      placement: 'right-bottom',
    },
    {
      text: 'Tooltip 8',
      selector: '.position13',
      placement: 'bottom-right',
    },
    {
      text: 'Tooltip 9',
      selector: '.position12',
      placement: 'bottom-center',
    },
    {
      text: 'Tooltip 10',
      selector: '.position11',
      placement: 'bottom-left',
    },
    {
      text: 'Tooltip 11',
      selector: '.position9',
      placement: 'left-bottom',
    },
    {
      text: 'Tooltip 12',
      selector: '.position7',
      placement: 'left-middle',
    },
    {
      text: 'Tooltip 13',
      selector: '.position4',
      placement: 'left-top',
    },
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
        <table className="position-table">
          <tbody>
            <tr>
              <td className="position1">top-left</td>
              <td className="position2">top-center</td>
              <td className="position3">top-right</td>
            </tr>
            <tr>
              <td className="position4">left-top</td>
              <td className="position5"></td>
              <td className="position6">right-top</td>
            </tr>
            <tr>
              <td className="position7">left-middle</td>
              <td className="no-placement">No placment</td>
              <td className="position8">right-middle</td>
            </tr>
            <tr>
              <td className="position9">left-bottom</td>
              <td></td>
              <td className="position10">right-bottom</td>
            </tr>
            <tr>
              <td className="position11">bottom-left</td>
              <td className="position12">bottom-center</td>
              <td className="position13">bottom-right</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});

ReactDOM.render(<TourGuide />, document.getElementById('__react-content'));
