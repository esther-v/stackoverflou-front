import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../api/user';

export default function RequireAuth({children, withAuth}) {
  
    const user = useSelector(state=>state.user)
    const navigate = useNavigate()

    useEffect(()=> {
        if(!user.isLogged && withAuth){
            const token = window.localStorage.getItem('stackoverflou-token')
            if(token === null){
                return navigate("/login")
            } else {
                checkToken(token)
            }
            
        }
    })
  
    return (<>children</>)
  
}
