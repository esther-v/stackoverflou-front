import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import {getTopic} from '../../api/topic';
import {Link} from 'react-router-dom'
import { getMessageByTopic } from "../../api/message";

export default function Topic() {
    const [topic, setTopic] = useState(null)
    const [messages, setMessages] = useState(null)
    const params = useParams()
    const {id} = params
    console.log(params)

    useEffect(()=>{
        getTopic(id)
            .then((res)=>{
                setTopic(res.topic)
            })
        getMessageByTopic(id)
            .then((res)=>{
                setMessages(res.data.messages)
            })
    }, [id])

    return (
        <>
            {topic && <div>
                <h2>{topic.title}</h2>
                <p>{topic.description}</p>
                <Link to={`/addMessage/${topic._id}`} className="link-custom">Ajouter un message</Link>
                <ul className="list-items">
                    {messages.map((message) => {
                        return (<li className="block" key={message._id}>
                            <h3>{message.nickName}</h3>
                            <p>{message.content}</p>
                        </li>)
                    })}
                </ul>
            </div>}
        </>
    )
}