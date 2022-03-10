import React, {useState} from 'react';
import {loginUser} from '../../api/user';
import { useNavigate } from 'react-router-dom';

export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onSubmitForm = () => {
        const data = {
            
            email,
            password
        }
        console.log(data)
        loginUser(data)
            .then((res) => {
                console.log(res)
                if(res.status === 200) {
                    window.localStorage.setItem("stackoverflou-token", res.data.token)
                }
            })
    }

    return(
        <>
            <form 
            className="block custom-form"
            onSubmit={(e) => {
                e.preventDefault()
                onSubmitForm()
            }}
            >
                <div>
                    <label>S'enregistrer</label>
                </div>
                
                <div>
                    <input 
                        type="email" 
                        placeholder="Nom"
                        value={email}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Pseudo"
                        value={nickName}
                        onChange={(e)=>{
                            setNickName(e.target.value)
                        }}
                    />
                </div>
                <button type="submit">
                    Envoyer
                </button>
            </form>
        </>
    )
}