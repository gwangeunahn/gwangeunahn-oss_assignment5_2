import React from 'react'
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';

export default function Update() {
    const { id } = useParams();
    
    const [count, setCount] = useState(0);

    let defaultBook = {
        id : "",
        title : "",
        author : "",
        publisher : "",
        publicationdate : ""
    };

    const [bookDetail, setBookDetail] = useState(defaultBook);

    const getBookDetail = () => {
        axios.get("https://672c26ca1600dda5a9f76967.mockapi.io/api/v1/books/" + id) 
        .then((response) => {
            console.log(response.data);
            setBookDetail(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    const handleChange = async (e) => {
        const { name, value } = e.target;
        let result = await setBookDetail({ ...bookDetail, [name]: value });

        const updatedBookDetail = { ...bookDetail, [name]: value };

        let result2 = await axios.put("https://672c26ca1600dda5a9f76967.mockapi.io/api/v1/books/" + id, updatedBookDetail) 
        .then((response) => {
            console.log(response);
            setCount(count+1);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    useEffect(() => {
        getBookDetail();
        setCount(0);
    }, [id]);

  return (
    <div className='d-flex justify-content-between'>
        <div className='col-10'>
            <p>ID : {bookDetail.id}</p>
            <p>Title : <input type='text' name='title' value={bookDetail.title} onChange={handleChange} /></p>
            <p>Author : <input type='text' name='author' value={bookDetail.author} onChange={handleChange} /></p>
            <p>Publisher : <input type='text' name='publisher' value={bookDetail.publisher} onChange={handleChange} /></p>
            <p>Publicationdate : <input type='date' name='publicationdate' value={bookDetail.publicationdate?.substr(0, 10)} onChange={handleChange} /></p>
        </div>
        <div className='col-2'>
            <p>COUNT : {count}</p>
        </div>
    </div>
  )
}
