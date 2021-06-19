import React , {useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";
import './AddDoctors.css'
const AddDoctors = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
const handleSubmit = () => {
    const formData = new FormData()
    console.log(info);
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);


    fetch('http://localhost:5000/addADoctor', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
}
    return (
        <div>
         <div className="row">
             <div className="col-md-2">
             <Sidebar></Sidebar>
             </div>
             <div className="col-md-10">
               
<h1> Add Doctors</h1>
             <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onBlur={handleBlur} type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Password"></input>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Upload image</label>
    <input onChange={handleFileChange} type="file" class="form-control"  placeholder="image"></input>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>


             </div>
         </div>
        
        </div>
    );
};

export default AddDoctors;