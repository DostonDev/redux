import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Home = () => {

    const students = useSelector(state=>state)

    const dispach = useDispatch();

    const deleteStudent = (id) => {
        dispach({type: 'DELETE_STUDENT', payload: id})
        toast.success("Delete Student")
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 d-flex justify-content-end ">
                    <Link to="/add" className="btn btn-outline-danger">
                        Add Student
                    </Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <h1 className = "text-center m-3">Students List</h1>
                    <table className="table table-hover mt-5">
                        <thead className="bg-dark text-white text-center">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {students.map((student,id)=>(
                                <tr key={id}>
                                    <td>{id+1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.number}</td>
                                    <td>
                                        <Link to={`/edit/${student.id}`} className="btn btn-dark">
                                            Edit
                                        </Link>
                                        <button onClick={()=> deleteStudent(student.id) } type="button" className="btn btn-danger mx-3">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
