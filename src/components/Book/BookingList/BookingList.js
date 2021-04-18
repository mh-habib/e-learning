import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingSidebar from '../BookingSidebar/BookingSidebar';

const containerStyle = {
    backgroundColor: "#ADD8E6",
}

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userOrders, setUserOrders] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/userOrders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setUserOrders(data))
    },[loggedInUser.email])
    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-3 col-sm-12 col-12">
                <BookingSidebar></BookingSidebar>
            </div>
            <div className="col-md-8 col-sm-12 col-12">
                <h1 className="text-info text-center pt-5 mb-3">Hello {loggedInUser.name}</h1>
                <h5 className="text-secondary text-center mb-5">You Have Submitted {userOrders.length} Orders</h5>
                <table className="m-auto bg-light">
                    <thead>
                        <tr>
                            <th className="text-secondary p-4">Course Name</th>
                            <th className="text-secondary p-4">Course Price</th>
                            <th className="text-secondary p-4">Order Time</th>
                            <th className="text-secondary p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userOrders.map(or =>
                            <tr className="mt-3" key={or._id}>
                                <td className="text-dark p-4">{or.cName}</td>
                                <td className="text-dark p-4 text-center"><strong>$</strong>{or.cPrice}</td>
                                <td className="text-dark p-4 text-center">{(new Date(or.orderTime).toDateString('dd/MM/yyyy'))}</td>
                                <td className="text-dark p-4 text-center"><button className="btn btn-outline-info btn-sm btn-block">{or.status}</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default BookingList;