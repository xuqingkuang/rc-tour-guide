// use jsx to render html, do not modify simple.html

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import tourGuide from 'rc-tour-guide';
require('rc-tour-guide/assets/index.less');
require('./style.less');

const tour = {
  startIndex: 0,
  scrollToSteps: true,
  steps: [
    {
      text: 'This is the first step in the tour.',
      selector: '.block',
    },
    {
      text: 'This is the second step in the tour.',
      selector: '.inline-block',
      placement: 'right-bottom',
      enableCloseButton: false,
    },
    {
      text: 'This is the third step in the tour.',
      selector: '.float-right',
      placement: 'left-middle',
    },
    {
      text: 'This is the fourth step in the tour.',
      selector: '.position-absolute',
      placement: 'bottom-right',
    },
    {
      text: 'This is the fifth step in the tour.',
      selector: '.position-fixed',
      beCurrent: function($target) {
        $target.addClass('red');
      },
      bePrevious: function($target) {
        $target.removeClass('red');
      }
    }
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

const callback = function() {
  console.log('Show tour guide!')
}

class Example extends Component {

  componentDidMount () {
    this.showTourGuide();
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={() => { this.showTourGuide() }}>
            Show Tour Guide
          </button>
          <button onClick={(evt) => { this.showTourGuide(evt, true, callback) }}>
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
        <div className="position-fixed">
          I am the position fixed text.
        </div>
      </div>
    )
  }
}

const TourGuide = tourGuide(tour, cb, cancel)(Example);

ReactDOM.render(<TourGuide />, document.getElementById('__react-content'));
