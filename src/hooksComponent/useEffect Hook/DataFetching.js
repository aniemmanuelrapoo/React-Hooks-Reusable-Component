import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idBtn, setIdBtn] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idBtn}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idBtn])
    const handleClick = () => {
        setIdBtn(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
            <p>{post.title}</p>
        </div>
    )
}

export default DataFetching
