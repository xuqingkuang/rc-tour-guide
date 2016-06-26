webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(178);


/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTourGuide = __webpack_require__(169);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(177); // use jsx to render html, do not modify simple.html
	
	var tour = {
	  startIndex: 0,
	  scrollToSteps: true,
	  steps: [{
	    text: 'Tooltip 1, as same as bottom-left',
	    element: '.no-placement'
	  }, {
	    text: 'Tooltip 2',
	    element: '.position1',
	    placement: 'top-left'
	  }, {
	    text: 'Tooltip 3',
	    element: '.position2',
	    placement: 'top-center'
	  }, {
	    text: 'Tooltip 4',
	    element: '.position3',
	    placement: 'top-right'
	  }, {
	    text: 'Tooltip 5',
	    element: '.position6',
	    placement: 'right-top'
	  }, {
	    text: 'Tooltip 6',
	    element: '.position8',
	    placement: 'right-middle'
	  }, {
	    text: 'Tooltip 7',
	    element: '.position10',
	    placement: 'right-bottom'
	  }, {
	    text: 'Tooltip 8',
	    element: '.position13',
	    placement: 'bottom-right'
	  }, {
	    text: 'Tooltip 9',
	    element: '.position12',
	    placement: 'bottom-center'
	  }, {
	    text: 'Tooltip 10',
	    element: '.position11',
	    placement: 'bottom-left'
	  }, {
	    text: 'Tooltip 11',
	    element: '.position9',
	    placement: 'left-bottom'
	  }, {
	    text: 'Tooltip 12',
	    element: '.position7',
	    placement: 'left-middle'
	  }, {
	    text: 'Tooltip 13',
	    element: '.position4',
	    placement: 'left-top'
	  }]
	};
	
	var cb = function cb() {
	  console.log('User has completed tour!');
	};
	
	var TourGuide = _react2.default.createClass({
	  displayName: 'TourGuide',
	
	  mixins: [(0, _rcTourGuide.tourGuideMixin)(tour, cb)],
	  componentDidMount: function componentDidMount() {
	    this.showTourGuide();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.showTourGuide },
	          'Show Tour Guide'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function (evt) {
	              this.showTourGuide(evt, true);
	            }.bind(this) },
	          'Reset and Show Tour Guide'
	        )
	      ),
	      _react2.default.createElement(
	        'table',
	        { className: 'position-table' },
	        _react2.default.createElement(
	          'tbody',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'td',
	              { className: 'position1' },
	              'top-left'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'position2' },
	              'top-center'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'position3' },
	              'top-right'
	            )
	          ),
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'td',
	              { className: 'position4' },
	              'left-top'
	            ),
	            _react2.default.createElement('td', { className: 'position5' }),
	            _react2.default.createElement(
	              'td',
	              { className: 'position6' },
	              'right-top'
	            )
	          ),
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'td',
	              { className: 'position7' },
	              'left-middle'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'no-placement' },
	              'No placment'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'position8' },
	              'right-middle'
	            )
	          ),
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'td',
	              { className: 'position9' },
	              'left-bottom'
	            ),
	            _react2.default.createElement('td', null),
	            _react2.default.createElement(
	              'td',
	              { className: 'position10' },
	              'right-bottom'
	            )
	          ),
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'td',
	              { className: 'position11' },
	              'bottom-left'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'position12' },
	              'bottom-center'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'position13' },
	              'bottom-right'
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(TourGuide, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=position.js.map