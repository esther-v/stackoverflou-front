import axios from "axios"

export const saveMessage = (data) => {
    const token = window.localStorage.getItem('stacker')

    if(token) {
        return axios.post(`${process.env}`)
        .then((response) = {
            response.data
        })
    } else {
        return {status: 404, data: {msg: "token not found"}}
    }
}

export const getMessageByTopic = (topic_id) => {

}