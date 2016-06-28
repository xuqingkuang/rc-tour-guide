// use jsx to render html, do not modify simple.html

import React from 'react';
import ReactDOM from 'react-dom';
import { tourGuideMixin } from 'rc-tour-guide';
require('rc-tour-guide/assets/index.less');
require('./style.less');

const tour = {
  startIndex: 0,
  scrollToSteps: true,
  steps: [
    {
      text: 'Used to express a greeting, answer a telephone, or attract attention.',
      element: '.hello',
      extraButtons: [
        (<button key="1" onClick={function() { alert("hello") }}>say</button>)
      ],
    },
    {
      text: 'The class of persons devoted to the affairs, interests, or pursuits of this life.',
      element: '.world',
      extraButtons: [
        (<button key="1" onClick={function() { alert("world") }}>say</button>)
      ],
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
        <span className="hello">Hello</span>
        &nbsp;
        <span className="world">World</span>
      </div>
    )
  }
});

ReactDOM.render(<TourGuide />, document.getElementById('__react-content'));
