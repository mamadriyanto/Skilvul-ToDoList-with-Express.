import React from 'react';
import NoteItemBody from './NoteItemBody';
import ButtonDelete from './ButtonDelete';
import PropTypes from 'prop-types';

function NoteItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="note_item">
      <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
      <div className="btn_group">
        <ButtonDelete id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
