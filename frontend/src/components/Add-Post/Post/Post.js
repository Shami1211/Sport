import React from 'react'

const Post = (props)=> {
    //const history = useNavigate();
    const { _id, date, title, caption, image } = props.post;
    
  
  return (
    <div>
        <h1>{date}</h1>
        <h2>{title}</h2>
        <h4>{caption}</h4>
        <h4>{image}</h4>
        
    </div>
  )
}

export default Post;