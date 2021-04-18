import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const containerStyle = {
    backgroundColor: "#ADD8E6",
}

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://protected-inlet-55717.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            // .then(response => console.log('Success Report:', response))
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Admin Added Successfully!!!');
                }
            })
    };

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3 col-sm-12 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-sm-12 col-12">
                    <h1 className="text-primary text-center pt-5">Add a New Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <table className="mt-5 mx-auto">
                            <tbody>
                                <tr>
                                    <td className="w-100"><input className="form-control py-3 pr-3" name="name" placeholder="Name" {...register("name")} /></td>
                                </tr>
                                <tr>
                                    <td className="w-100"><input className="form-control py-3 pr-3 mt-2" name="email" placeholder="Email Address" {...register("email")} /></td>
                                </tr>
                                
                                <tr>
                                    <td><input className="btn btn-primary mt-2" type="submit" /></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;