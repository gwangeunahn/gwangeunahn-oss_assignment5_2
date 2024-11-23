import React from 'react';
import { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function List() {

    let defaultList = [{
        id : "",
        title : "",
        author : "",
        publisher : "",
        publicationdate : ""
    }];

    const [bookList, setBookList] = useState(defaultList);

    const getBookList = () => {
        axios.get("https://672c26ca1600dda5a9f76967.mockapi.io/api/v1/books")
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setBookList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getBookList();
    }, []);

    return (
        <div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Publication Date</th>
                    </tr>
                </thead>
                <tbody id="tb_list">
                    {bookList.map((each) => (
                        <tr key={each.id}>
                            <td><Link className="nav-link" to={'/detail/' + each.id} >{each.id}</Link></td>
                            <td><Link className="nav-link" to={'/detail/' + each.id} >{each.title}</Link></td>
                            <td><Link className="nav-link" to={'/detail/' + each.id} >{each.author}</Link></td>
                            <td><Link className="nav-link" to={'/detail/' + each.id} >{each.publisher}</Link></td>
                            <td><Link className="nav-link" to={'/detail/' + each.id} >{each.publicationdate.substr(0, 10)}</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
