import PropTypes from 'prop-types';

import './Avatar.css';

export function Avatar({ image, name, desc = '' }) {
  return (
    <div className='avatar-container'>
      <img
        className='avatar'
        src={image}
        alt={name}
        width={40}
        height={40}
      ></img>
      <div className='avatar-info'>
        <span className='avatar-info-name'>{name}</span>
        <span className='avatar-info-desc'>{desc}</span>
      </div>
    </div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
};
