import { useState } from 'react'

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title)

  const handleChange = e => {
    setTitle(e.target.value);
  }

  const handleSubmit = e => {
    // console.log('New title is', title)
    e.preventDefault();
    onSubmit(book.id, title)
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
