import PropTypes from 'prop-types';

import './Chip.css';

export function Chip({ text, color = 'purple' }) {
  return (
    <div className='chip' color={color}>
      {text}
    </div>
  );
}

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
