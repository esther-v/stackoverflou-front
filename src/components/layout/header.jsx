import {Link} from 'react-router-dom';
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserReducer } from "../../lib/redux/user/userReducer";

export default function Header(){
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <nav className="header">
            <h1 className='logo'>Stackoverflou</h1>
            {user.isLogged ? 
            <>
                <Link to="/">Accueil</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/profil">Mon profil</Link>
                <a  href="/"
                    onClick={(e) => {
                        e.preventDefault()
                        window.localStorage.removeItem("stackoverflou-token")
                        dispatch(logoutUserReducer())
                    }}>
                    Déconnexion
                </a>
            </>
            :
            <>
                <Link to="/register">S'enregistrer</Link>
                <Link to="/login">Se connecter</Link>
            </>
            }
        </nav>
    )
}