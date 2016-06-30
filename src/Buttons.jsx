import React from 'react';

export const CloseButton = ({ locale, onClick }) => {
  return (
    <button
      className="tour-close-btn"
      onClick={onClick}
    >
      {locale.close}
    </button>
  );
};

export const PreviousButton = ({ locale, onClick }) => {
  return (
    <button
      className="tour-previous-btn"
      onClick={onClick}
    >
      {locale.previous}
    </button>
  );
};

export const NextButton = ({ locale, onClick }) => {
  return (
    <button
      className="tour-next-btn"
      onClick={onClick}
    >
      {locale.next}
    </button>
  );
};

export const DoneButton = ({ locale, onClick }) => {
  return (
    <button
      className="tour-done-btn"
      onClick={onClick}
    >
      {locale.done}
    </button>
  );
};
