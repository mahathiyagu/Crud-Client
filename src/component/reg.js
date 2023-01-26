import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Reg(){

    const dataSubmit = async(event)=>{
        event.preventDefault();
        const datastring = new FormData(event.target);
        const config = {headers:{'enctype':'multipart/form-data'}};

        await axios.post('http://localhost:5000/details',datastring,config)
        .then(function(res){
            if(res.data.status ==='insert'){
                alert("Your Data has been saved")
                window.location.href='/'
        
            }else{
                alert("Something went Wrong")
            }
        })
        .catch(function(err){
            alert(err);
        })
    }

return(
    <div className="container col-lg-12">
        <h1 className="col-lg-12 text-center m-2 p-3">New User Registration</h1>

        <form onSubmit={dataSubmit}>
            <div className="row col-lg-12">
                <div className="col-lg-4">&nbsp;</div>
                <div className=" d-flex flex-column col-lg-4">
                   <label>FirstName</label> 
                   <input type="text" name="fname" id="fname" className="form-control" required/>
                   <label>LastName</label> 
                   <input type="text" name="lname" id="fname" className="form-control" required/>
                   <label>Mobile No</label> 
                   <input type="text" name="mob" id="fname" className="form-control" required/>
                   <label>Email</label> 
                   <input type="text" name="email" id="fname" className="form-control" required/>
                   <label>Password</label> 
                   <input type="password" name="password" id="fname" className="form-control" required/>

                   <button type="submit" name="submit" className="btn btn-dark">Submit</button>
                </div>

            </div>
        
        
        </form>

    </div>
);

}