import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#ADD8E6",
}

const ContactMsgList = () => {
    const [contactMessages, setContactMessages] = useState([])
    useEffect(() => {
        fetch('https://protected-inlet-55717.herokuapp.com/getContactMessage')
            .then(res => res.json())
            .then(data => setContactMessages(data))
    }, [])
    const deleteContactMessage = (id) => {
        fetch(`https://protected-inlet-55717.herokuapp.com/deleteContactMessage/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Message deleted Successfully!!!');
                }
            })
    }
    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-3 col-sm-12 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 col-sm-12 col-12">
                <h1 className="text-primary text-center pt-5 mb-4">Manage Services</h1>
                <table className="m-auto bg-light">
                    <thead>
                        <tr>
                            <th className="text-dark p-4">Sender Email Address</th>
                            <th className="text-dark p-4">Message</th>
                            <th className="text-dark p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactMessages.map(msg =>
                            <tr className="mt-3" key={msg._id}>
                                <td className="text-dark p-4">
                                    {msg.email}
                                </td>
                                <td className="text-dark p-4">
                                    <strong>Subject:</strong> {msg.subject} <br />
                                    <strong>Message:</strong> {msg.contactMessage}
                                </td>
                                <td className="p-4">
                                    <button className="btn btn-danger" onClick={() => deleteContactMessage(msg._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactMsgList;