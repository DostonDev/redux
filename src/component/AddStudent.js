import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
// import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
// import nextId from 'react-id-generator';

export const AddStudent = () => {

    // let htmlId = nextId()

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');

    const students = useSelector((state)=>state)
    const dispach = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        const checkEmail = students.find(student=> student.email === email && student )
        const checkNumber = students.find(student=> student.number === parseInt(number) && student )
        e.preventDefault();
        if(!email || !number || !name){
            return toast.warning("Please fill in all filed!")
        }
        if(checkEmail){
            return toast.error("This email already Exsist!!!")
        }
        if(checkNumber){
            return toast.error("This number already Exsist!!!")
        }

        const data = {
            id: students[students.length - 1].id + 1,
            name,
            email,
            number
        }
        console.log(data);
        dispach({type: "ADD_STUDENT", payload: data})
        toast.success("Add Studen succsess")
        history.push("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="dispaly-3 p-4 text-center"> 
                    Add Student
                    </h2>
                </div>
                <div className="col-md-6 shadow p-5 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Name" className="form-control" value={name} onChange={e=>setName(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input type="email" placeholder="Email" className="form-control my-3" value={email} onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input type="number" placeholder="Number" className="form-control" value={number} onChange={e=>setNumber(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input type="submit"  value="Add Student" className="btn btn-dark btn-block mt-3" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
