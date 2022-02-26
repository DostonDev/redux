import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
export const EditStudent = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');

    const {id} = useParams();

    const students = useSelector(state=>state)
    const dispach = useDispatch()
    const history = useHistory()
    const currentStudent = students.find(student=>student.id===parseInt(id))

    useEffect(()=>{
        if(currentStudent){
            setNumber(currentStudent.number)
            setEmail(currentStudent.email)
            setName(currentStudent.name)
        }
    }, [currentStudent])



    const handleSubmit = (e) => {

        const checkEmail = students.find(student => student.id !== parseInt(id) && student.email === email )
        const checkNumber = students.find(student => student.id !== parseInt(id) && student.number === parseInt(number))
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
            id: parseInt(id),
            name,
            email,
            number
        }
        console.log(data);
        dispach({type: "UPDATE_STUDENT", payload: data})
        toast.success("Update Studen succsess")
        history.push("/")
    }









    return (
        <div className="container">
            {currentStudent ? (
                <>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="dispaly-3 p-4 text-center"> 
                            Edit Student {id}
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
                                <div className="input-group d-flex align-items-center justify-content-between">
                                    <input type="submit"  value="Update Student" className="btn btn-dark btn-block mt-3" />
                                    <Link to="/" className="btn btn-danger mt-3">
                                    Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ):(
                <h1>Not found {id} Student</h1>
            )}
            
        </div>
    )
}
