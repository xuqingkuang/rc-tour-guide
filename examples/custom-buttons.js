webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
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
	    text: 'Used to express a greeting, answer a telephone, or attract attention.',
	    element: '.hello',
	    extraButtons: [_react2.default.createElement(
	      'button',
	      { key: '1', onClick: function onClick() {
	          alert("hello");
	        } },
	      'say'
	    )]
	  }, {
	    text: 'The class of persons devoted to the affairs, interests, or pursuits of this life.',
	    element: '.world',
	    extraButtons: [_react2.default.createElement(
	      'button',
	      { key: '1', onClick: function onClick() {
	          alert("world");
	        } },
	      'say'
	    )]
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
	        'span',
	        { className: 'hello' },
	        'Hello'
	      ),
	      ' ',
	      _react2.default.createElement(
	        'span',
	        { className: 'world' },
	        'World'
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(TourGuide, null), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=custom-buttons.js.map