webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(179);


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTourGuide = __webpack_require__(169);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(176); // use jsx to render html, do not modify simple.html
	
	__webpack_require__(177);
	
	var tour = {
	  startIndex: 0,
	  scrollToSteps: true,
	  steps: [{
	    text: 'This is the first step in the tour.',
	    element: '.block'
	  }, {
	    text: 'This is the second step in the tour.',
	    element: '.inline-block',
	    placement: 'right-bottom'
	  }, {
	    text: 'This is the third step in the tour.',
	    element: '.float-right',
	    placement: 'left-middle'
	  }, {
	    text: 'This is the fourth step in the tour.',
	    element: '.position-absolute',
	    placement: 'top-right'
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
	        'div',
	        { className: 'block' },
	        'I am a block text.'
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'span',
	          { className: 'inline-block' },
	          'I am a inline-block text'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'float-right' },
	        'I am float right text.'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'position-absolute' },
	        'I am the position absolute text.'
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(TourGuide, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map