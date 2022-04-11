import {Link} from 'react-router-dom'

export default function Header(){
    return (
        <nav className="header">
            <h1 className='logo'>Stackoverflou</h1>
            <Link to="/">Accueil</Link>
            <Link to="/register">S'enregistrer</Link>
            <Link to="/login">Se connecter</Link>
        </nav>
    )
}