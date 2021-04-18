import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

import Select from "react-select";

const containerStyle = {
    backgroundColor: "#ADD8E6",
}

const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Ongoing', label: 'Ongoing' },
    { value: 'Done', label: 'Done' },
];

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ordersList, setOrdersList] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = id => {
        const selectedValue = selectedOption.value;
        
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({selectedValue})
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Status Updated Successfully!!!');
                }
            })

    };


    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email])



    useEffect(() => {
        fetch('http://localhost:5000/allOrders',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: loggedInUser.email}),
        }) 
            .then(res => res.json())
            .then(data => setOrdersList(data))
    }, [loggedInUser.email])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3 col-sm-12 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 col-sm-12 col-12">
                    <h1 className="text-primary text-center mt-5 mb-4">All Orders List with status!</h1>
                    <table className="m-auto bg-light">
                        <thead>
                            <tr className="text-center">
                                <th className="text-dark py-2 px-3">Name</th>
                                <th className="text-dark py-2 px-3">Email Address</th>
                                <th className="text-dark py-2 px-3">Course Name</th>
                                <th className="text-dark py-2 px-3">Order Time</th>
                                <th className="text-dark py-2 px-3">Status</th>
                                {isAdmin && <th className="text-dark py-2 px-3">Change Status</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {ordersList.map(list =>
                                <tr className="mt-3" key={list._id}>
                                    <td className="text-dark py-2 px-3">{list.name}</td>
                                    <td className="text-dark py-2 px-3">{list.email}</td>
                                    <td className="text-dark py-2 px-3">{list.cName}</td>
                                    <td className="text-dark py-2 px-3">{(new Date(list.orderTime).toDateString('dd/MM/yyyy'))}</td>
                                    <td className="text-dark py-2 px-3">{list.status}</td>
                                    {isAdmin && <td className="text-dark py-2 px-3">
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                        />
                                        <button className="btn btn-sm btn-block btn-outline-primary float-left"onClick={ ()=>handleChange(list._id)}>Change</button>
                                    </td>}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;