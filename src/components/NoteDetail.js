import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import ButtonDelete from './ButtonDelete';

function NoteDetail({ title, createdAt, body, id, onDelete}) {
  return (
    <div className="note_detail">
      <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
      <div className="btn_group">
        <ButtonDelete id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
