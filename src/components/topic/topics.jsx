import React, {useEffect, useState} from "react";
import { getTopics } from '../../api/topic';
import { Link } from 'react-router-dom';

export default function Topics() {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        getTopics()
            .then((res) => {
                setTopics(res.topics)
            })
    }, [])

    return (
        <>
            <h2>Tous les Topics</h2>
            <Link to="/addTopic">Ajouter un Topic</Link>
            <ul>
                {topics.map(topic => (
                    <li key={topic._id}>
                        <Link to={`/topic/${topic._id}`}>{topic.title}</Link>
                        <p>{topic.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}