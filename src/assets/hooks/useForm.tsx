import { useState } from 'react';
import { toast } from 'react-toastify';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(values);
    toast("cadastro realizado com sucesso");
  };

  return {
    values,
    handleChange,
    handleForm,
    setValues, // Expondo a função setValues
  };
}

export default useForm;
