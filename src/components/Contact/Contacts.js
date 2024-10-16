import React, { useState } from "react";
import SplineViewer from "../SplineViewer/SplineViewer";
import './Contacts.css';
import emailjs from 'emailjs-com';

function Contacts() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: email,
            subject: subject,
            message: message
        }, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <div className={"contacts"}>
            <div className={"business-card"}>
                <SplineViewer/>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact Me</h2>
                <input className={"form-input"} type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className={"form-input"} type="text" placeholder="Subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                <textarea className={"form-input-textarea"} placeholder="Your Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className={"form-submit"} type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contacts;