import $ from 'jquery';
import objectAssign from 'object-assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';
import Locale from './locale/zh_CN';

require('./TourGuide.less');

export const mixin = (options, done) => {
  return {

    options: objectAssign({
      startIndex: 0,
      scrollToSteps: true,
      steps: [],
      locale: Locale,
    }, options),

    completionCallback: done || function () {},

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
        this.completionCallback();
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
      const placement = step.placement;
      const $target = $(step.element);
      const targetOffset = $target.offset();
      const targetWidth = $target.outerWidth();
      const targetHeight = $target.outerHeight();
      const $element = $('.rc-tour-tooltip');
      const elWidth = $element.outerWidth();
      const elHeight = $element.outerHeight();
      const position = { x: -1000, y: -1000, };

      // Calculate x position
      switch (step.placement) {
        case 'top-left':
          position.x = targetOffset.left;
          position.y = targetOffset.top - elHeight;
          break;
        case 'top-center':
          position.x = (targetOffset.left + targetWidth / 2) - (elWidth / 2);
          position.y = targetOffset.top - elHeight;
          break;
        case 'top-right':
          position.x = targetOffset.left + targetWidth - elWidth;
          position.y = targetOffset.top - elHeight;
          break;
        case 'right-top':
          position.x = targetOffset.left + targetWidth;
          position.y = targetOffset.top;
          break;
        case 'right-middle':
          position.x = targetOffset.left + targetWidth;
          position.y = (targetOffset.top + targetHeight / 2) - (elHeight / 2);
          break;
        case 'right-bottom':
          position.x = targetOffset.left + targetWidth;
          position.y = targetOffset.top + targetHeight - elHeight;
          break;
        case 'bottom-right':
          position.x = targetOffset.left + targetWidth - elWidth;
          position.y = targetOffset.top + targetHeight;
          break;
        case 'bottom-center':
          position.x = (targetOffset.left + targetWidth / 2) - (elWidth / 2);
          position.y = targetOffset.top + targetHeight;
          break;
        case 'bottom-left':
          position.x = targetOffset.left;
          position.y = targetOffset.top + targetHeight;
          break;
        case 'left-bottom':
          position.x = targetOffset.left - elWidth;
          position.y = targetOffset.top + targetHeight - elHeight;
          break;
        case 'left-middle':
          position.x = targetOffset.left - elWidth;
          position.y = (targetOffset.top + targetHeight / 2) - (elHeight / 2);
          break;
        case 'left-top':
          position.x = targetOffset.left - elWidth;
          position.y = targetOffset.top
          break;
        default:
          // Default as same as bottom-left
          position.x = targetOffset.left;
          position.y = targetOffset.top + targetHeight;
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
      this.setState({
        show: true,
        currentIndex: currentIndex,
      });
    },

    hideTourGuide: function (evt, reset = false) {
      let currentIndex = this.state.currentIndex;
      if (reset) {
        currentIndex = this.options.startIndex
      }
      this.setState({
        show: false,
        currentIndex: currentIndex,
      }, this._renderLayer);
    },

    previousTooltip: function (evt) {
      this.setState({
        show: true,
        currentIndex: this.state.currentIndex - 1
      }, this.scrollToNextStep);
    },

    nextTooltip: function (evt) {
      this.setState({
        show: true,
        currentIndex: this.state.currentIndex + 1
      }, this.scrollToNextStep);
    },

    scrollToNextStep: function () {
      const $next = $('.rc-tour-guide-indicator');

      if ( $next && $next.length && this.options.scrollToSteps ) {
        $('html, body').animate({
          'scrollTop': $next.offset().top - $(window).height()/2
        }, 500);
      }
    },

    renderCurrentStep: function () {
      const currentStep = this.options.steps[this.state.currentIndex];
      if (!currentStep.placement) {
        currentStep.placement = 'bottom-left';
      }
      const maxStepIndex = this.options.steps.length - 1;
      const $target = currentStep && currentStep.element ? $(currentStep.element) : null;
      const cssPosition = $target ? $target.css('position') : null;
      let element;

      if ( this.state.show && $target && $target.length) {
        element = (
          <Tooltip cssPosition={ cssPosition }
            placement={currentStep.placement.toLowerCase()}
            xPos={ this.state.xPos }
            yPos={ this.state.yPos }
            targetXPos={ this.state.targetXPos }
            targetYPos={ this.state.targetYPos }
            targetWidth={ this.state.targetWidth }
            targetHeight={ this.state.targetHeight }
            text={ currentStep.text }
            extraButtons = { currentStep.extraButtons }
            isFirst={ this.state.currentIndex === 0 }
            isLast={ this.state.currentIndex === maxStepIndex }
            hideTourGuide= { this.hideTourGuide }
            onPrevious={ this.previousTooltip }
            onNext={ this.nextTooltip }
            onDone={ this.hideTourGuide }
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
