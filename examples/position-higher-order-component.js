webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(181);


/***/ },

/***/ 181:
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
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick(evt) {
	              _this2.showTourGuide(evt);
	            } },
	          'Show Tour Guide'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick(evt) {
	              _this2.showTourGuide(evt, true);
	            } },
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
	  };
	
	  return Example;
	}(_react.Component);
	
	var tour = {
	  startIndex: 0,
	  scrollToSteps: true,
	  steps: [{
	    text: 'Tooltip 1, as same as bottom-left',
	    selector: '.no-placement'
	  }, {
	    text: 'Tooltip 2',
	    selector: '.position1',
	    placement: 'topLeft'
	  }, {
	    text: 'Tooltip 3',
	    selector: '.position2',
	    placement: 'top'
	  }, {
	    text: 'Tooltip 4',
	    selector: '.position3',
	    placement: 'topRight'
	  }, {
	    text: 'Tooltip 5',
	    selector: '.position6',
	    placement: 'rightTop'
	  }, {
	    text: 'Tooltip 6',
	    selector: '.position8',
	    placement: 'right'
	  }, {
	    text: 'Tooltip 7',
	    selector: '.position10',
	    placement: 'rightBottom'
	  }, {
	    text: 'Tooltip 8',
	    selector: '.position13',
	    placement: 'bottomRight'
	  }, {
	    text: 'Tooltip 9',
	    selector: '.position12',
	    placement: 'bottom'
	  }, {
	    text: 'Tooltip 10',
	    selector: '.position11',
	    placement: 'bottomLeft'
	  }, {
	    text: 'Tooltip 11',
	    selector: '.position9',
	    placement: 'leftBottom'
	  }, {
	    text: 'Tooltip 12',
	    selector: '.position7',
	    placement: 'left'
	  }, {
	    text: 'Tooltip 13',
	    selector: '.position4',
	    placement: 'leftTop'
	  }]
	};
	
	var cb = function cb() {
	  console.log('User has completed tour!');
	};
	
	var TourGuide = (0, _rcTourGuide2.default)(tour, cb)(Example);
	
	_reactDom2.default.render(_react2.default.createElement(TourGuide, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=position-higher-order-component.js.map