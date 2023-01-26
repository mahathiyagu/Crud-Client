import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';

export function Edit(){
    var usid = localStorage.getItem('usid');

    const datasubmit = async(event)=>{
        event.preventDefault();
        const datastring = new FormData(event.target);
        const config ={ headers:{'enctype':'multipart/form-data'}};

        await axios.put('http://localhost:5000/updat',datastring,config)
        .then(function(res){
            if(res.data.status === 'updated'){
                alert("Your data has been updated")
                window.location.href='/'
        
            }else{
                alert("Something went Wrong")
                window.location.reload();
            }
            
        })
    }

        const [detail,setDetail] = useState([]);
        const Param=()=>usid
        useEffect(()=>{
            axios.get(`http://localhost:5000/editview/${Param()}`)
            .then(function(res){
                setDetail(res.data);
            })
        })
    return(
        <div>
         {detail.map((value,index)=>(       
            <div className="container ml-auto mr-auto mt-5 p-5" key={index}>
            <h3>Edit User Details</h3>
            <form onSubmit={datasubmit}>
            <div className="row mt-5 col-lg-12">
                <div className="col-lg-6">
                <table>
                  <tbody>
                        <tr className="font-weight-bold">

                            <td>First Name<input type="hidden" name="usid" id="usid" value={usid}/></td>
                            <td className="p-3">:</td>
                            <td className="p-3"><input type="text" name="fname" id="fname" className="form-control" defaultValue={value.fname} required/></td>   
                        </tr>
                        <tr className="font-weight-bold">
                            <td>Email</td>
                            <td className="p-3">:</td>
                            <td className="p-3"><input type="email" name="email" id="email" className="form-control" defaultValue={value.email} required/></td>
                        </tr>
                        

                  </tbody>
                </table>

                </div>
                <div className="col-lg-6">
                <table>
                    <tbody>
                        <tr className="font-weight-bold">
                            <td>Last Name</td>
                            <td className="p-3">:</td>
                            <td className="p-3"><input type="text" name="lname" id="lname" className="form-control" defaultValue={value.lname} required/></td>
                        </tr>
                        <tr className="font-weight-bold">
                            <td >Mobile Number</td>
                            <td className="p-3">:</td>
                            <td className="p-3">  <input type="text" name="mob" id="mob" className="form-control" defaultValue={value.dob} required/></td>
                        </tr>
                        
                    </tbody>
                </table>

                </div>
                <div className="col-lg-12">
                        
                           <div className="p-5 update_btn"><button type="submit" name="submit" className="btn btn-dark">Update</button></div>

                </div>

            </div>
            </form> 

                </div>
                ))}
            </div>




    );
    }