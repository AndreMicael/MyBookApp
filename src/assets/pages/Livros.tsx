import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

//Ícones
import { MdDeleteForever } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";

function Livros() {
  const Api = "http://localhost:8080/api/books";

  const [bookList, setBookList] = useState([]);
  const [config,setConfig] = useState(false);
  const [edit,setEdit] = useState(false);
  const handleFetch = async () => {
    try {
      console.log(`Fetching data from ${Api}`);
      const res = await axios.get(`${Api}/all`);
      setBookList(res.data);
      console.log('Data fetched:', res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(`Deletando Livro com Id ${id}`);
      const res = await axios.delete(`${Api}/delete/${id}`);
      console.log('Livro Deletado:', res.data);
      handleFetch();
      toast("Livro deletado com sucesso");
    } catch (error) {
      console.error('Erro ao deletar livro:', error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
    <button onClick={() => {setConfig(!config)} }
     className='focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 
     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 
      dark:hover:bg-blue-700 dark:focus:ring-red-900'><IoSettingsSharp /></button>
      <h1 className='text-3xl'>Livros</h1>
      <div className='grid grid-cols-4 gap-4'>
        {bookList.map((book) => (
          <div key={book.id}>
            {!edit && <div> 
            <h2>Livro: {book.title}</h2>            
            <p>Autor: {book.author}</p>
            <p>Gênero: {book.genre}</p>
            </div>}
            
            {edit &&
            <div>
            <input type="text" placeholder={book.title} />
            <input type="text" placeholder={book.author} />
            <input type="text" placeholder={book.genre} />
            </div>}
           
            {config && <button 
              onClick={() => handleDelete(book.id)} 
              className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
            ><MdDeleteForever /></button>            
              }
               {config && <button 
               onClick={() => {setEdit(!edit)} }
              className='focus:outline-none text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 
              dark:hover:bg-blue-700 dark:focus:ring-blue-900'
            ><FaEdit /></button>            
              }
              {config && <button 
              
              className='focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-4 
              focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 
              dark:hover:bg-green-700 dark:focus:ring-green-900'
            ><ImCheckboxChecked /></button>            
              }
            
           
            <img className='w-auto h-64 object-cover' src={book.coverUrl} alt={book.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Livros;
