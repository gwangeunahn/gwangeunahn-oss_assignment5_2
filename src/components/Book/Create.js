import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Create() {
  const navigate = useNavigate();

  let defaultCreate = {
    titel : "",
    author : "",
    publisher : "",
    publicationdate : ""
  };

  const [bookAdd, setBookAdd] = useState(defaultCreate);

  const postBookAdd = () => {
    axios.post("https://672c26ca1600dda5a9f76967.mockapi.io/api/v1/books/", bookAdd) 
    .then((response) => {
        console.log(response);
        alert("Added");
        navigate("/list");
    })
    .catch((error) => {
        console.log(error);
    })
}

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setBookAdd({ ...bookAdd, [name] : value})
  }

  return (
    <div className='d-flex justify-content-between'>
        <div className='col-10'>
            <p>Title : <input type='text' name='title' value={bookAdd.title} onChange={onChangeInput} /></p>
            <p>Author : <input type='text' name='author' value={bookAdd.author} onChange={onChangeInput} /></p>
            <p>Publisher : <input type='text' name='publisher' value={bookAdd.publisher} onChange={onChangeInput} /></p>
            <p>Publicationdate : <input type='date' name='publicationdate' value={bookAdd.publicationdate} onChange={onChangeInput} /></p>  
        </div>
        <div className='col-1'>
            <p><button className='nav-link' onClick={postBookAdd}>Add</button></p> 
        </div>
    </div>
  )
}
