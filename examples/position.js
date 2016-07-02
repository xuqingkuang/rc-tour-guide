webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(180);


/***/ },

/***/ 180:
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