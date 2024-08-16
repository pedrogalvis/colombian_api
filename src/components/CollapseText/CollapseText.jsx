import { useState } from 'react';
import PropTypes from 'prop-types';

import './CollapseText.css';

const MAX_CHARACTERS = 150;

export function CollapseText({ text }) {
  const [clicked, setClicked] = useState(false);

  return (
    <p className='collapse-text' onClick={() => setClicked(!clicked)}>
      {text.length <= MAX_CHARACTERS
        ? text
        : clicked
        ? text
        : text.substr(0, MAX_CHARACTERS) + '...'}
    </p>
  );
}

CollapseText.propTypes = {
  text: PropTypes.string.isRequired,
};
