import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';
import {deleteNote, getNotes} from '../utils/data';

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() =>{
        return searchParams.get('keyword') || ''
    });

    React.useEffect(() =>{
        getNotes().then(({data}) =>{
            setNotes(data);
        });
    }, []);

 async function onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler (keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  return (
    <section>
      <SearchNote keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
    </section>
  )
}

export default HomePage;