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
      text: 'Tooltip 1, as same as bottom-left',
      element: '.no-placement',
    },
    {
      text: 'Tooltip 2',
      element: '.position1',
      placement: 'top-left',
    },
    {
      text: 'Tooltip 3',
      element: '.position2',
      placement: 'top-center',
    },
    {
      text: 'Tooltip 4',
      element: '.position3',
      placement: 'top-right',
    },
    {
      text: 'Tooltip 5',
      element: '.position6',
      placement: 'right-top',
    },
    {
      text: 'Tooltip 6',
      element: '.position8',
      placement: 'right-middle',
    },
    {
      text: 'Tooltip 7',
      element: '.position10',
      placement: 'right-bottom',
    },
    {
      text: 'Tooltip 8',
      element: '.position13',
      placement: 'bottom-right',
    },
    {
      text: 'Tooltip 9',
      element: '.position12',
      placement: 'bottom-center',
    },
    {
      text: 'Tooltip 10',
      element: '.position11',
      placement: 'bottom-left',
    },
    {
      text: 'Tooltip 11',
      element: '.position9',
      placement: 'left-bottom',
    },
    {
      text: 'Tooltip 12',
      element: '.position7',
      placement: 'left-middle',
    },
    {
      text: 'Tooltip 13',
      element: '.position4',
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
