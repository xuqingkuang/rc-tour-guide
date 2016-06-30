import $ from 'jquery';
import objectAssign from 'object-assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';
import Locale from './locale/zh_CN';

export default (options, done, cancel) => {

  if (!done) {
    done = () => {};
  }
  if (!cancel) {
    cancel = () => {};
  }

  return {
    options: objectAssign({
      placement: 'bottom-left',
      maskPadding: 2,
      toolTipTopOffset: 2,
      toolTipLeftOffset: 2,
      startIndex: 0,
      scrollToSteps: true,
      locale: Locale,
      steps: [],
      classNames: {
        target: 'rc-tour-guide-target',
        position: 'rc-tour-guide-relative',
      }
    }, options),

    getInitialState: function () {
      return {
        currentIndex: this.options.startIndex,
        show: false,
        xPos: -1000,
        yPos: -1000,
        targetXPos: 0,
        targetYPos: 0,
        targetWidth: -1000,
        targetHeight: -1000,
      };
    },

    _renderLayer: function () {
      this.setState({
        xPos: -1000,
        yPos: -1000,
        targetXPos: 0,
        targetYPos: 0,
        targetWidth: -1000,
        targetHeight: -1000,
      });
      ReactDOM.render(this.renderCurrentStep(), this._target);
      this.calculatePosition();
    },

    _unrenderLayer: function () {
      ReactDOM.unmountComponentAtNode(this._target);
    },

    componentDidUpdate: function (prevProps, prevState) {
      const hasNewIndex = this.state.currentIndex !== prevState.currentIndex;
      const hasNewStep = !!this.options.steps[this.state.currentIndex];
      const hasSteps = this.options.steps.length > 0;
      const hasNewX = this.state.xPos !== prevState.xPos;
      const hasNewY = this.state.yPos !== prevState.yPos;
      const didToggleTooltip = this.state.show && this.state.show !== prevState.show;

      if ( (hasNewIndex && hasNewStep) || didToggleTooltip || hasNewX || hasNewY ) {
        this._renderLayer();
      } else if ( hasSteps && hasNewIndex && !hasNewStep ) {
        this._unrenderLayer();
      }
    },

    componentDidMount: function () {
      this._target = document.createElement('div');
      document.body.appendChild(this._target);

      if ( this.options.steps[this.state.currentIndex] ) {
        this._renderLayer();
      }
      $(window).on('resize', this.calculatePosition);
    },

    componentWillUnmount: function () {
      this._unrenderLayer();
      document.body.removeChild(this._target);
      $(window).off('resize', this.calculatePosition);
    },

    setTourSteps: function (steps, cb) {
      if (!(steps instanceof Array)) {
        return false;
      }
      cb = cb || function () {};
      this.options.steps = steps;

      this.setState({
        currentIndex: this.state.currentIndex < 0 ? 0 : this.state.currentIndex,
      }, cb);
    },

    getProgress: function () {
      return {
        index: this.state.currentIndex,
        total: this.options.steps.length,
        percentageComplete: (this.state.currentIndex/this.options.steps.length)*100,
        step: this.options.steps[this.state.currentIndex],
      };
    },

    preventWindowOverflow: function (value, axis, elWidth, elHeight) {
      const winWidth = parseInt($(window).width());
      const docHeight = parseInt($(document).height());

      if ( axis.toLowerCase() === 'x' ) {
        if ( value + elWidth > winWidth ) {
          value = winWidth - elWidth;
        } else if ( value < 0 ) {
          value = 0;
        }
      } else if ( axis.toLowerCase() === 'y' ) {
        if ( value + elHeight > docHeight ) {
          value = docHeight - elHeight;
        } else if ( value < 0 ) {
          value = 0;
        }
      }

      return value;
    },

    calculatePosition: function () {
      if (!this.state.show) {
        return
      }
      const step = this.options.steps[this.state.currentIndex];
      const maskPadding = this.getStepOption(step, 'maskPadding');
      const toolTipTopOffset = this.getStepOption(step, 'toolTipTopOffset') + maskPadding;
      const toolTipLeftOffset = this.getStepOption(step, 'toolTipLeftOffset') + maskPadding;
      const placement = this.getStepOption(step, 'placement');
      const $target = $(step.selector);
      const targetOffset = $target.offset();
      const targetWidth = $target.outerWidth();
      const targetHeight = $target.outerHeight();
      const $element = $('.rc-tour-tooltip');
      const elWidth = $element.outerWidth();
      const elHeight = $element.outerHeight();
      const position = { x: -1000, y: -1000, };

      // Calculate x position
      switch (placement) {
        case 'top-left':
          position.x = targetOffset.left - toolTipLeftOffset;
          position.y = targetOffset.top - elHeight - toolTipTopOffset;
          break;
        case 'top-center':
          position.x = (targetOffset.left + targetWidth / 2) - (elWidth / 2);
          position.y = targetOffset.top - elHeight - toolTipTopOffset;
          break;
        case 'top-right':
          position.x = targetOffset.left + targetWidth - elWidth + toolTipLeftOffset;
          position.y = targetOffset.top - elHeight - toolTipTopOffset;
          break;
        case 'right-top':
          position.x = targetOffset.left + targetWidth + toolTipLeftOffset;
          position.y = targetOffset.top - toolTipTopOffset;
          break;
        case 'right-middle':
          position.x = targetOffset.left + targetWidth + toolTipLeftOffset;
          position.y = (targetOffset.top + targetHeight / 2) - (elHeight / 2);
          break;
        case 'right-bottom':
          position.x = targetOffset.left + targetWidth + toolTipLeftOffset;
          position.y = targetOffset.top + targetHeight - elHeight + toolTipTopOffset;
          break;
        case 'bottom-right':
          position.x = targetOffset.left + targetWidth - elWidth + toolTipLeftOffset;
          position.y = targetOffset.top + targetHeight + toolTipTopOffset;
          break;
        case 'bottom-center':
          position.x = (targetOffset.left + targetWidth / 2) - (elWidth / 2);
          position.y = targetOffset.top + targetHeight + toolTipTopOffset;
          break;
        case 'bottom-left':
          position.x = targetOffset.left - toolTipLeftOffset;
          position.y = targetOffset.top + targetHeight + toolTipTopOffset;
          break;
        case 'left-bottom':
          position.x = targetOffset.left - elWidth - toolTipLeftOffset;
          position.y = targetOffset.top + targetHeight - elHeight + toolTipTopOffset;
          break;
        case 'left-middle':
          position.x = targetOffset.left - elWidth - toolTipLeftOffset;
          position.y = (targetOffset.top + targetHeight / 2) - (elHeight / 2);
          break;
        case 'left-top':
          position.x = targetOffset.left - elWidth - toolTipLeftOffset;
          position.y = targetOffset.top - toolTipTopOffset;
          break;
      }

      this.setState({
        xPos: this.preventWindowOverflow(position.x, 'x', elWidth, elHeight),
        yPos: this.preventWindowOverflow(position.y, 'y', elWidth, elHeight),
        targetXPos: targetOffset.left,
        targetYPos: targetOffset.top,
        targetWidth: targetWidth,
        targetHeight: targetHeight,
      });
    },

    showTourGuide: function (evt, reset = false) {
      let currentIndex = this.state.currentIndex;
      if (this.state.currentIndex === this.options.steps.length) {
        currentIndex = this.options.startIndex
      }
      if (reset) {
        currentIndex = this.options.startIndex
      }
      this.currentTarget(currentIndex);
      this.setState({
        show: true,
        currentIndex: currentIndex,
      });
    },

    hideTourGuide: function (evt, reset = false, callback) {
      let currentIndex = this.state.currentIndex;
      this.previousTarget(currentIndex);
      // Reset currentIndex
      if (reset) {
        currentIndex = this.options.startIndex
      }
      this.setState({
        show: false,
        currentIndex: currentIndex,
      }, this._renderLayer);
      if (typeof callback === 'function') {
        callback.call(this);
      }
    },

    previousTooltip: function (evt) {
      const previousIndex = this.state.currentIndex;
      const currentIndex = previousIndex - 1;
      this.previousTarget(previousIndex);
      this.currentTarget(currentIndex);
      this.setState({ show: true, currentIndex }, this.scrollToNextStep);
    },

    nextTooltip: function (evt) {
      const previousIndex = this.state.currentIndex;
      const currentIndex = previousIndex + 1;
      this.previousTarget(previousIndex);
      this.currentTarget(currentIndex);
      this.setState({ show: true, currentIndex }, this.scrollToNextStep);
    },

    getStepOption: function(step, name, type) {
      if (step[name]) {
        return step[name]
      }
      return this.options[name]
    },

    getClassNames: function(names, step) {
      return names.map((name) => {
        let className = this.options.classNames[name];
        if (!step) {
          return className
        }
        if (step.classNames && step.classNames[name]) {
          className = step.classNames[name];
        }
        return className
      })
    },

    currentTarget: function(index) {
      const step = this.options.steps[index];
      const $target = step && step.selector ? $(step.selector) : null;
      if (!$target) {
        return
      }
      // Added identified target
      const noPositionClassNames = ['fixed', 'relative', 'absolute'];
      const needClass = (() => {
        if (noPositionClassNames.indexOf($target.css('position')) < 0) {
          return ['target', 'position']
        };
        return ['target']
      })();
      const classNames  = this.getClassNames(needClass, step);
      $target.addClass(classNames.join(' '));
      if (typeof step.beCurrent === 'function') {
        step.beCurrent.call(this, $target);
      }
    },

    previousTarget: function(index) {
      const step = this.options.steps[index];
      const $target = step && step.selector ? $(step.selector) : null;
      if (!$target) {
        return
      }
      // Added identified target
      const classNames = this.getClassNames(['target', 'position'], step);
      $target.removeClass(classNames.join(' '));
      if (typeof step.bePrevious === 'function') {
        step.bePrevious.call(this, $target);
      }
    },

    scrollToNextStep: function () {
      const $next = $('.rc-tour-guide-indicator');

      if ( $next && $next.length && this.options.scrollToSteps ) {
        $('html, body').animate({
          'scrollTop': $next.offset().top - $(window).height()/2
        }, 500);
      }
    },

    handleDone: function (evt) {
      this.hideTourGuide(evt, false, done);
    },

    handleCancel: function (evt) {
      this.hideTourGuide(evt, false, cancel);
    },

    renderCurrentStep: function () {
      const currentStep = this.options.steps[this.state.currentIndex];
      const maxStepIndex = this.options.steps.length - 1;
      const $target = currentStep && currentStep.selector ? $(currentStep.selector) : null;
      const cssPosition = $target ? $target.css('position') : null;
      const maskPadding = this.getStepOption(currentStep, 'maskPadding');
      let element;

      if ( this.state.show && $target && $target.length) {
        element = (
          <Tooltip
            cssPosition={ cssPosition }
            maskPadding={ maskPadding }
            placement={ this.getStepOption(currentStep, 'placement') }
            xPos={ this.state.xPos }
            yPos={ this.state.yPos }
            targetXPos={ this.state.targetXPos - maskPadding }
            targetYPos={ this.state.targetYPos - maskPadding }
            targetWidth={ this.state.targetWidth }
            targetHeight={ this.state.targetHeight }
            text={ currentStep.text }
            extraButtons = { currentStep.extraButtons }
            isFirst={ this.state.currentIndex === 0 }
            isLast={ this.state.currentIndex === maxStepIndex }
            hideTourGuide={ function(evt) { this.handleCancel(evt).bind(this); } }
            onPrevious={ this.previousTooltip }
            onNext={ this.nextTooltip }
            onDone={ function(evt) { this.handleDone(evt); }.bind(this) }
            onCancel={ function(evt) { this.handleCancel(evt); }.bind(this) }
            locale={ this.options.locale }
          />
        );
      } else {
        element = (
          <div className="rc-tour-guide-indicator"></div>
        );
      }

      return element;
    }

  };
};
