import React from 'react';
import { useParams , Link , useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();

    let defaultDetail = {
        id : "",
        title : "",
        author : "",
        publisher : "",
        publicationdate : ""
    };

    const [bookDetail, setBookDetail] = useState(defaultDetail);

    const getBookDetail = () => {
        axios.get("https://672c26ca1600dda5a9f76967.mockapi.io/api/v1/books/" + id) 
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setBookDetail(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const bookDelete = () => {
        if(window.confirm("Are you sure you want to delete this book?")){
          axios.delete("https://672c26ca1600dda5a9f76967.mockapi.io/api/v1/books/" + id)
          .then((response) => {
            console.log(response);
            alert("Deleted");
            navigate("/list");
          })
          .catch((error) => {
            console.log(error);
          })
        }
    }

    useEffect(() => {
        getBookDetail();
    }, [id]);

  return (
    <div className='d-flex justify-content-between'>
        <div className='col-10'>
            <p>ID : {bookDetail.id}</p>
            <p>Title : {bookDetail.title}</p>
            <p>Author : {bookDetail.author}</p>
            <p>Publisher : {bookDetail.publisher}</p>
            <p>Publicationdate : {bookDetail.publicationdate?.substr(0, 10)}</p>  
        </div>
        <div className='col-1'>
            <p><Link className="nav-link" to={"/update/" + id} >UPDATE</Link></p> 
        </div>
        <div className='col-1'>
            <p><button className='nav-link' onClick={bookDelete}>DELETE</button></p> 
        </div>
    </div>
  )
}
