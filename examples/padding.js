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
	  placement: 'bottom-right',
	  steps: [{
	    text: 'I have 2px padding',
	    selector: '.padding-1px'
	  }, {
	    text: 'I have 4px padding',
	    selector: '.padding-3px',
	    maskPadding: 4
	  }, {
	    text: 'I have 6px padding',
	    selector: '.padding-5px',
	    maskPadding: 6
	  }, {
	    text: 'I have 10px padding',
	    selector: '.padding-10px',
	    maskPadding: 10
	  }]
	};
	
	var cb = function cb() {
	  console.log(this);
	  console.log('User has completed tour!');
	};
	
	var cancel = function cancel() {
	  console.log(this);
	  console.log('User has canceled the tour!');
	};
	
	var TourGuide = _react2.default.createClass({
	  displayName: 'TourGuide',
	
	  mixins: [(0, _rcTourGuide.tourGuideMixin)(tour, cb, cancel)],
	  componentDidMount: function componentDidMount() {
	    this.showTourGuide();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'table',
	        null,
	        _react2.default.createElement(
	          'tbody',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-1px' },
	              'Default 2px padding'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-3px' },
	              'Step defined 4px padding'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-5px' },
	              'Step defined 6px padding'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-10px' },
	              'Step defined 10px padding'
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
//# sourceMappingURL=padding.js.map