import React from 'react';
import axios from 'axios';
import useForm from '../hooks/useForm';

const Cadastrar = () => {
  const initialValues = {
    title: '',
    author: '',
    pages: '',
    year: '',
    genre: '',
    editor: '',
    coverUrl: ''
  };

  const { values, handleChange, handleForm, setValues } = useForm(initialValues);

  const ApiPost = 'http://localhost:8080/api/books/add';

  const handleFetch = async () => {
    const data = {
      title: values.title,
      author: values.author,
      pages: parseInt(values.pages, 10),
      year: parseInt(values.year, 10),
      coverUrl: values.coverUrl,
      genre: values.genre,
      editor: values.editor
    };

    try {
      await axios.post(ApiPost, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Book added successfully');
      setValues(initialValues); // Reseta os valores do formulário
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    handleForm(e);
    handleFetch();
  };

  return (
    <div>
      <div className="w-1/2">
        <form className="grid grid-cols-2 gap-1 justify-center align-center" onSubmit={handleSubmit}>
          <label>Título do Livro:</label>
          <input 
          className=''
            type="text"
            name="title"
            onChange={handleChange}
            value={values.title}
          />

          <label>Autor:</label>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={values.author}
          />

          <label>Nº de Páginas:</label>
          <input
            type="number"
            name="pages"
            onChange={handleChange}
            value={values.pages}
          />

          <label>Ano de Lançamento:</label>
          <input
            type="text"
            name="year"
            onChange={handleChange}
            value={values.year}
          />

          <label>Gênero:</label>
          <input
            type="text"
            name="genre"
            onChange={handleChange}
            value={values.genre}
          />

          <label>Editora:</label>
          <input
            type="text"
            name="editor"
            onChange={handleChange}
            value={values.editor}
          />

          <label>Capa:</label>
          <input
            type="url"
            name="coverUrl"
            onChange={handleChange}
            value={values.coverUrl}
          />

          <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastrar;
