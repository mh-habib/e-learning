import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#ADD8E6",
}

const ManageServices = () => {
    const [productList, setCourseList] = useState([])
    useEffect(() => {
        fetch('https://protected-inlet-55717.herokuapp.com/getCourses')
            .then(res => res.json())
            .then(data => setCourseList(data))
    }, [])
    const deleteCourse = (id) => {
        fetch(`https://protected-inlet-55717.herokuapp.com/deleteCourse/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    alert('Product deleted Successfully!!!');
                }                    
            })
    }
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3 col-sm-12 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-sm-12 col-12">
                    <h1 className="text-primary text-center pt-5 mb-4">Manage Services</h1>
                    <table className="m-auto bg-light">
                        <thead>
                            <tr>
                                <th className="text-dark p-4">Course Name</th>
                                <th className="text-dark p-4">Course Teacher</th>
                                <th className="text-dark p-4">Duration</th>
                                <th className="text-dark p-4">Price</th>
                                <th className="text-dark p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {productList.map(list =>
                            <tr className="mt-3" key={list._id}>
                                <td className="text-dark p-4">{list.courseName}</td>
                                <td className="text-dark p-4">{list.courseTeacher}</td>
                                <td className="text-dark p-4">{list.courseDuration}</td>
                                <td className="text-dark p-4"><strong>$</strong>{list.coursePrice}</td>
                                <td className="p-4"><button className="btn btn-danger" onClick={() => deleteCourse(list._id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
export default ManageServices;