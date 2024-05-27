import React from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default Home;