import React from 'react';
import PropTypes from 'prop-types';

function ButtonDelete({ id, onDelete }) {
  return ( <button className="btn_delete" onClick={() => onDelete(id)}> Hapus Catatan</button>
  );
}

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ButtonDelete;
