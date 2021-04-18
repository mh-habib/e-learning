import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css';
const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        fetch('https://protected-inlet-55717.herokuapp.com/contactMessage', {
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
                    alert('Message Send Successfully!!!');
                }
            })
    }
    return (
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h3 className="text-warning">Contact</h3>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form onSubmit={handleSubmit(onSubmit)}>
                       <div className="form-group">
                       <input className="form-control py-3 pr-3" placeholder="Email Address *" {...register("email")} />
                       </div>
                       <div className="form-group">
                       <input className="form-control py-3 pr-3 mt-2" placeholder="Subject *" {...register("subject")} />
                       </div>
                       <div className="form-group">
                       <textarea className="form-control py-3 pr-3 mt-2" cols="30" rows="10" placeholder="Write Your Message *" {...register("contactMessage")} />
                       </div>
                       <div className="form-group text-center">
                       <input className="btn btn-primary mt-2" type="submit" />
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;