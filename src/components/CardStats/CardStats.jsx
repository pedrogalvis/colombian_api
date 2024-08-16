import PropTypes from 'prop-types';

import './CardStats.css';

export function CardStats({ title, stats }) {
  return (
    <div className='card stats'>
      <div className='stat'>
        <div className='stat-title'>{title}</div>
        <div className='stat-value'>{stats}</div>
      </div>
    </div>
  );
}

CardStats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.any.isRequired,
};
