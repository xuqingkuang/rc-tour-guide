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
	  maskPadding: 2,
	  toolTipOffset: 0,
	  steps: [{
	    text: 'I have 2px padding',
	    selector: '.padding-2px'
	  }, {
	    text: 'I have 4px padding',
	    selector: '.padding-4px',
	    maskPadding: 4
	  }, {
	    text: 'I have 6px padding',
	    selector: '.padding-6px',
	    maskPadding: 6
	  }, {
	    text: 'I have 10px padding',
	    selector: '.padding-10px',
	    maskPadding: 10
	  }, {
	    text: 'I have 2px padding and 4px offset',
	    selector: '.padding-2px-offset-4px',
	    toolTipOffset: 4
	  }, {
	    text: 'I have 4px padding and 8px offset',
	    selector: '.padding-4px-offset-8px',
	    maskPadding: 4,
	    toolTipOffset: 8
	  }, {
	    text: 'I have 6px padding and 10px offset',
	    selector: '.padding-6px-offset-10px',
	    maskPadding: 6,
	    toolTipOffset: 10
	  }, {
	    text: 'I have 10px padding and 20px offset',
	    selector: '.padding-10px-offset-20px',
	    maskPadding: 10,
	    toolTipOffset: 20
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
	              { className: 'padding-2px' },
	              'Default 2px padding'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-4px' },
	              'Step defined 4px padding'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-6px' },
	              'Step defined 6px padding'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-10px' },
	              'Step defined 10px padding'
	            )
	          ),
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-2px-offset-4px' },
	              'Default 2px padding and 4px offset'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-4px-offset-8px' },
	              'Step defined 4px padding and 8px offset'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-6px-offset-10px' },
	              'Step defined 6px padding and 10px offset'
	            ),
	            _react2.default.createElement(
	              'td',
	              { className: 'padding-10px-offset-20px' },
	              'Step defined 10px padding and 20px offset'
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