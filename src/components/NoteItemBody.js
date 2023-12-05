import React from 'react';
import { showFormattedDate } from '../utils/local-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItemBody({ id, title, createdAt, body }) {
  return (
    <div className="note_item_body">
      <Link to={`/notes/detail/${id}`} className="note_item_title">
        {title}
      </Link>
      <p className="note_item_date">{showFormattedDate(createdAt)}</p>
      <p className="note_item_text">{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
