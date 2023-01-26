import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export function User(){
    const [detail, setDetail] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/view')
        .then(function(res){
            setDetail(res.data)
        })
    })


    const updat = (id)=>{
        localStorage.setItem('usid',id);
        window.location.href='/edit'
    }

    return(
        <>
        <div className="container">
            <div className="row col-lg-12">
                <h1 className="col-lg-12 text-center m-2 p-3">User Registration</h1>
                <Link to = '/reg'><button className=" col-lg-12 m-3 btn bg-primary">New User</button></Link>
            </div>
            <div className="table-bordered table-responsive ">
                <table className="container text-center col-lg-12">
                    <thead>
                        <tr>
                            <th className="p-3">ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {detail.map((value,index)=>(
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.fname}</td>
                                <td>{value.lname}</td>
                                <td>{value.mob}</td>
                                <td>{value.email}</td>
                                <td>{value.password}</td>
                                <td><button onClick={()=>{updat(value.id)}}>Update</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                    
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        </>

    );
}