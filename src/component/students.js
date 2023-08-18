import React, {useState} from "react";
function Student(){
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[course,setCourse]=useState();
    const[upStudent,setUpdatestudent]=useState(null);''
    const[student,setStudent]=useState([
        {"id":100,"name":"raju","course":"reactjs"},
           {"id":200,"name":"ravi","course":"java"},
              {"id":300,"name":"raja","course":"corejava"},
                 {"id":400,"name":"rajiv","course":"html"}

    ]);
    const createStudent=()=>{
        alert(id+" "+name+" "+course+" ");
        student.push({"id":id,"name":name,"course":course});
        console.log(student.length); 
        setStudent(student);

    }
    const deleteStudent=(sid)=>{
    alert("deleting Student Id:"+sid);
    const newStudent =student.filter(student=>student.id !==sid);
    setStudent(newStudent);
 }
 const updateStudent =(sid)=>{
     alert("updating Student Id : "+sid);

 }
 
    return<div className="Container">
        <div className="card">
            <div className="card-header">
                <h1>Create Students</h1>
              
            </div>
            <div className="card-body">
                <div className="mp-3">
                    <label className="form-label">Student Id</label>
                    <input type="text" name="id" className="form-control"
                    onChange={(e)=>{setId(e.target.value)}}/>

                </div>
                <div className="mp-3">
                    <label className="form-label">Student Name</label>
                    <input type="text" name="Name" className="form-control"
                    onChange={(e)=>{setName(e.target.value)}}/>

                </div>
                <div className="mp-3">
                    <label className="form-label">Student Course</label>
                    <input type="text" name="Course" className="form-control"
                    onChange={(e)=>{setCourse(e.target.value)}}/>

                </div>
                <button className="btn btn-primary" onClick={createStudent}>Create</button>
               
            </div><br/>{id} {name}{course}
        </div>
        <div className="card">
            <div className="card-header">
                <h1>Student List</h1>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Courser</th>
                        <th>Action</th>

                    </tr>

                </thead>
                <tbody>
                    {
                        student.map((student,index)=>{
                            return <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>updateStudent(student.id)}>update</button>
                                <button className="btn btn-danger" onClick={()=>deleteStudent(student.id)}>delete</button>
                            </td>
                            </tr>
                        }) 
                        
                    }
                </tbody>
                </table>
            </div>
           
            </div>
            <div className="card">
                <div className="card-holder">
                    <h1>Update Student</h1>
                </div>
                <din className="card-body">
                    <div className="mb-3">
                        <lable className="formlabel">Student Id</lable>
                        <input type="text" value={id} className="form-control" disabled/>
                    </div>
                    <div className="mb-3">
                        <lable className="formlabel">Student Name</lable>
                        <input type="text" value={name} className="form-control" 
                        onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <lable className="formlabel">Student Course</lable>
                        <input type="text" value={course} className="form-control" 
                        onChange={(e)=>{setCourse(e.target.value)}}/>
                    </div>
                    <button className="btn btn-primary">update </button>
                </din>
                
            </div>
        </div>
    
}


export default Student;

