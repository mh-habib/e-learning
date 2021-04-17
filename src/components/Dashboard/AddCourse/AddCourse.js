import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { useForm } from "react-hook-form";

const containerStyle = {
    backgroundColor: "#ADD8E6",
}

const AddCourse = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imgURL, setImgURL] = useState(null)
    const onSubmit = data => {
        // console.log(data)
        const courseData = {
            courseName: (data.name),
            courseTeacher: (data.teacher),
            courseDuration: (data.duration),
            coursePrice: (data.price),
            courseImg: imgURL
        }

        fetch('http://localhost:5000/addCourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courseData),
        })
            // .then(response => console.log('Success Report:', response))
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Course Added Successfully!!!');
                }
            })


    };
    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'ac97e82d9a2e32790606aeeadba36de7');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3 col-sm-12 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-sm-12 col-12">
                    <h1 className="text-primary text-center pt-5">Add A New Course Here</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <table className="mt-5 mx-auto">
                            <tbody>
                                <tr>
                                    <td className="w-100">
                                        <input className="form-control py-3 pr-3" name="name" placeholder="Course Name" {...register("name")} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-100">
                                        <input className="form-control py-3 pr-3 mt-2" name="teacher" placeholder="Teacher's Name" {...register("teacher")} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-100">
                                        <input className="form-control py-3 pr-3 mt-2" name="duration" placeholder="Course Duration" {...register("duration")} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-100">
                                        <input className="form-control py-3 pr-3 mt-2" name="price" placeholder="Course Price" {...register("price")} />
                                    </td>
                                </tr>
                                <tr>
                                    <td><input className="mt-2" name="image" type='file' onChange={handleImageUpload} /></td>
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
export default AddCourse;