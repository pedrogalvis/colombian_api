import PropTypes from 'prop-types';

import './Tab.css';

export function Tab({ icon, title, checked, change }) {
  return (
    <label>
      <input
        className='tab'
        type='radio'
        name='tab'
        checked={checked}
        onChange={(e) => {
          if (e.target.checked) {
            change();
          }
        }}
      />
      <span className='tab-tile'>
        <span className='tab-icon'>{icon}</span>
        <span className='tab-label'>{title}</span>
      </span>
    </label>
  );
}

Tab.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
};
