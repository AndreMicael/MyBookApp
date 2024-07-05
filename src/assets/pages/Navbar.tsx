import { Link } from "react-router-dom"

const Navbar
 = () => {
  return (
    <div>
  
        <ul>
            <li>
            <Link to="/">Inicio</Link>
            <Link to="/livros">Livros</Link>
            <Link to="/cadastrar">Cadastrar Livro</Link>
            </li>
        </ul>

    </div>
  )
}

export default Navbar
