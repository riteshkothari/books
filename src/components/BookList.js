import useBooksContext from '../hooks/use-book-context';
import BookShow from './BookShow'

function BookList() {
  const { books } = useBooksContext();

  const renderBooks = books.map(book => {
    return <BookShow key={book.id} book={book} />
  });

  return (
    <div className='book-list'>
      {renderBooks}
    </div>
  );
}

export default BookList;
