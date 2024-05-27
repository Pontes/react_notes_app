import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteItem from './NoteItem';

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('/api/notes').then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;