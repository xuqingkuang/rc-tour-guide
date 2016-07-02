webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(183);


/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTourGuide = __webpack_require__(169);
	
	var _rcTourGuide2 = _interopRequireDefault(_rcTourGuide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // use jsx to render html, do not modify simple.html
	
	__webpack_require__(176);
	__webpack_require__(177);
	
	var tour = {
	  startIndex: 0,
	  scrollToSteps: true,
	  steps: [{
	    text: 'This is the first step in the tour.',
	    selector: '.block'
	  }, {
	    text: 'This is the second step in the tour.',
	    selector: '.inline-block',
	    placement: 'right-bottom',
	    enableCloseButton: false
	  }, {
	    text: 'This is the third step in the tour.',
	    selector: '.float-right',
	    placement: 'left-middle'
	  }, {
	    text: 'This is the fourth step in the tour.',
	    selector: '.position-absolute',
	    placement: 'bottom-right'
	  }, {
	    text: 'This is the fifth step in the tour.',
	    selector: '.position-fixed',
	    beCurrent: function beCurrent($target) {
	      $target.addClass('red');
	    },
	    bePrevious: function bePrevious($target) {
	      $target.removeClass('red');
	    }
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
	
	var Example = function (_Component) {
	  _inherits(Example, _Component);
	
	  function Example() {
	    _classCallCheck(this, Example);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Example.prototype.componentDidMount = function componentDidMount() {
	    this.showTourGuide();
	  };
	
	  Example.prototype.render = function render() {
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
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'position-fixed' },
	        'I am the position fixed text.'
	      )
	    );
	  };
	
	  return Example;
	}(_react.Component);
	
	var TourGuide = (0, _rcTourGuide2.default)(tour, cb, cancel)(Example);
	
	_reactDom2.default.render(_react2.default.createElement(TourGuide, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple-higher-order-component.js.map