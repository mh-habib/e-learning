import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import BookingSidebar from '../BookingSidebar/BookingSidebar';

const containerStyle = {
    backgroundColor: "#ADD8E6",
}
const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const reviewData = {
            reviewerName: (data.name),
            reviewerDesignation: (data.designation),
            reviewerMessage: (data.message),
            image: (loggedInUser.photo)
        }
        fetch('https://protected-inlet-55717.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            // .then(response => console.log('Success Report:', response))
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Review Send Successfully!!!');
                }
            })
    }

    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-3 col-sm-12 col-12">
                <BookingSidebar></BookingSidebar>
            </div>
            <div className="col-md-8 col-sm-12 col-12">
                <h1 className="text-info text-center pt-5 mb-3">Give a Review About Our Service </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table className="mt-5 mx-auto">
                        <tbody>
                            <tr>
                                <td className="w-100"><input className="form-control py-3 pr-3" name="name" value={loggedInUser.name} {...register("name")} /></td>
                            </tr>
                            <tr>
                                <td className="w-100"><input className="form-control py-3 pr-3 mt-2" name="designation" placeholder="Designation" {...register("designation")} /></td>
                            </tr>
                            <tr>
                                <td className="w-100"><textarea className="form-control py-3 pr-3 mt-2" name="message" placeholder="Write a Review" {...register("message")} /></td>
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

    );
};

export default Review;