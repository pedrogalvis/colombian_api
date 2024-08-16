import PropTypes from 'prop-types';
import { v4 as UUID } from 'uuid';

import './Table.css';

export function Table({ columns, rows, title = undefined }) {
  return (
    <div className='table-container card'>
      {title && <h1 className='title'>{title}</h1>}
      <table className='table'>
        <thead className='table-head'>
          <tr className='table-row'>
            {columns.map((col) => (
              <th key={UUID()} className='table-head-item'>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='table-body'>
          {rows.map((row) => (
            <tr key={UUID()} className='table-row'>
              {row.map((col) => (
                <td key={UUID()} className='table-body-item'>
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  title: PropTypes.string,
};
