import React, {useState} from "react";
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

    return (
        <>
            <h2>Detail: {id}</h2>
        </>
    )
}
