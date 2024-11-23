import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Create() {
  const navigate = useNavigate();

  const titleRef = useRef();
  const authorRef = useRef();
  const publisherRef = useRef();
  const publicationdateRef = useRef();

  let defaultCreate = {
    title : "",
    author : "",
    publisher : "",
    publicationdate : ""
  };

  const [bookAdd, setBookAdd] = useState(defaultCreate);

  const postBookAdd = () => {

    if (bookAdd.title.trim() === '') {
      titleRef.current.style.border = '1px solid red';
      alert("Valid title is required.")
      return;
    } else {
      titleRef.current.style.border = '';
    }
    if (bookAdd.author.trim() === '') {
      authorRef.current.style.border = '1px solid red';
      alert("Valid author is required.")
      return;
    } else {
      authorRef.current.style.border = '';
    }
    if (bookAdd.publisher.trim() === '') {
      publisherRef.current.style.border = '1px solid red';
      alert("Valid publisher is required.")
      return;
    } else {
      publisherRef.current.style.border = '';
    }
    if (bookAdd.publicationdate.trim() === '') {
      publicationdateRef.current.style.border = '1px solid red';
      alert("Valid publicationdate is required.")
      return;
    } else {
      publicationdateRef.current.style.border = '';
    }

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
            <p>Title : <input type='text' name='title' value={bookAdd.title} onChange={onChangeInput} ref={titleRef} /></p>
            <p>Author : <input type='text' name='author' value={bookAdd.author} onChange={onChangeInput} ref={authorRef} /></p>
            <p>Publisher : <input type='text' name='publisher' value={bookAdd.publisher} onChange={onChangeInput} ref={publisherRef} /></p>
            <p>Publicationdate : <input type='date' name='publicationdate' value={bookAdd.publicationdate} onChange={onChangeInput} ref={publicationdateRef} /></p>  
        </div>
        <div className='col-1'>
            <p><button className='nav-link' onClick={postBookAdd}>Add</button></p> 
        </div>
    </div>
  )
}
