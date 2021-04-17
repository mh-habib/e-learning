import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import BookingSidebar from '../BookingSidebar/BookingSidebar';

const containerStyle = {
    backgroundColor: "#ADD8E6",
}

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const handlePaymentData= (paymentId) => {
        const orderDetail = {...loggedInUser, paymentId, status: 'Pending', orderTime: new Date()};
        // console.log('Order', orderDetail);

        fetch('http://localhost:5000/submitOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetail),
        })
            // .then(response => console.log('Success Report:', response))
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Order placed Successfully!!!');
                }
            })

    }

    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-3 col-sm-12 col-12">
                <BookingSidebar></BookingSidebar>
            </div>
            <div className="col-md-8 col-sm-12 col-12">
                <h1 className="text-info text-center pt-5 mb-3">Booking Information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table className="mt-5 mx-auto">
                        <tbody>
                            <tr>
                                <td className="w-100">
                                    <input className="form-control py-3 pr-3" name="name" value={loggedInUser.name} {...register("name")} />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-100">
                                    <input className="form-control py-3 pr-3 mt-2" name="email" value={loggedInUser.email} {...register("email")} />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-100">
                                    <input className="form-control py-3 pr-3 mt-2 mb-2" placeholder="" name="course-name" value={loggedInUser.cName} {...register("course-name")} />
                                </td>
                            </tr>

                            <tr>
                                <td><h6 className="mb-4">Pay With Card: Your Service Charge Will Be $ {loggedInUser.cPrice}</h6></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <ProcessPayment handlePayment={handlePaymentData}></ProcessPayment>
            </div>
        </div>

    );
};

export default Book;