import React from 'react';

interface NoteItemProps {
  note: {
    _id: string;
    title: string;
    content: string;
    date: string;
  };
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <div className="note-item">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <small>{new Date(note.date).toLocaleDateString()}</small>
    </div>
  );
};

export default NoteItem;