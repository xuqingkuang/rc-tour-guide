import React, { Component, PropTypes } from 'react';
import { CloseButton, PreviousButton, NextButton, DoneButton } from './Buttons';

export default class Tooltip extends Component {

  static propTypes = {
    placement: PropTypes.string.isRequired,
    xPos: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    yPos: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    targetXPos: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    targetYPos: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    targetWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    targetHeight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    text: PropTypes.string.isRequired,
    extraButtons: PropTypes.array,
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
    hideTourGuide: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    locale: PropTypes.object.isRequired,
    cssPosition: PropTypes.string.isRequired,
  }

  static defaultProps = {
    cssPosition: 'absolute',
    xPos: '-1000px',
    yPos: '-1000px',
    text: ''
  }

  renderButtons() {
    const {
      locale,
      extraButtons,
      isFirst,
      isLast,
      onPrevious,
      onNext,
      onDone,
      onClose,
      enableCloseButton,
    } = this.props;

    const closeButton = (
    <CloseButton
      key="close"
      locale={locale}
      onClick={onClose} />
    )

    const previousButton = (
      <PreviousButton
        key="previous"
        locale={locale}
        onClick={onPrevious} />
    );

    const nextButton = (
      <NextButton
        key="next"
        locale={locale}
        onClick={onNext} />
    );

    const doneButton = (
      <DoneButton
        key="done"
        locale={locale}
        onClick={onDone} />
    );

    let buttons = [];
    if (isFirst && isLast) {
      buttons = [
        doneButton,
      ];
    } else if (isFirst && !isLast) {
      buttons = [
        nextButton,
      ];
    } else if (!isFirst && !isLast) {
      buttons = [
        previousButton,
        nextButton,
      ];
    } else if (!isFirst && isLast) {
      buttons = [
        previousButton,
        doneButton,
      ];
    }
    if (enableCloseButton) {
      buttons.unshift(closeButton);
    }
    if (Array.isArray(extraButtons)) {
      buttons = buttons.concat(extraButtons);
    }
    console.log(buttons);
    return (
      <div className="rc-tour-buttons">
        {buttons}
      </div>
    );
  }

  render () {
    const {
      cssPosition,
      maskPadding,
      placement,
      xPos,
      yPos,
      targetXPos,
      targetYPos,
      targetWidth,
      targetHeight,
      text,
      onDone,
      onCancel,
    } = this.props;

    const maskStyles = {
      position: cssPosition === 'fixed' ? 'fixed' : 'absolute',
      left: targetXPos,
      top: targetYPos,
      width: targetWidth,
      height: targetHeight,
      padding: `${maskPadding}px`,
    };
    console.log(maskStyles)
    const toolTipStyles = {
      position: cssPosition === 'fixed' ? 'fixed' : 'absolute',
      left: xPos,
      top: yPos,
    };

    const arrowClassName = `rc-tour-arrow ${placement}`;

    return (
      <div className="rc-tour-guide">
        <div className="rc-tour-backdrop" onClick={onCancel} />
        <div className="rc-tour-mask" style={maskStyles}></div>
        <div className="rc-tour-tooltip" style={toolTipStyles}>
          <p>{text || ''}</p>
          <div className={arrowClassName}></div>
          {
            this.renderButtons()
          }
        </div>
      </div>
    );
  }

}
