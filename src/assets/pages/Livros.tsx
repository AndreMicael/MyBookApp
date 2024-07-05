import axios from 'axios';
import { useState, useEffect } from 'react';


function Livros() {
  const Api = "http://localhost:8080/api/books/all";
  const [bookList, setBookList] = useState([]);

  const handleFetch = async () => {
    try {
      console.log(`Fetching data from ${Api}`);
      const res = await axios.get(Api);
      setBookList(res.data);
      console.log('Data fetched:', res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
    <h1 className='text-3xl'>Livros</h1>
    <div className='grid grid-cols-4 gap-4'>

          {bookList.map((book: any) => (
        <div key={book.id}>
          <h2>Livro: {book.title}</h2>
          <p>Autor: {book.author}</p>
          <p>Gênero {book.genre}</p>
          <img className='w-auto h-64 object-cover' src={book.coverUrl} alt={book.title} />
        </div>
      ))}
    </div>
    </>
  );
}

export default Livros;
