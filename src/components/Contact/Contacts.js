import React, { useState } from "react";
import SplineViewer from "../SplineViewer/SplineViewer";
import './Contacts.css';
import emailjs from 'emailjs-com';

function Contacts({contactsRef}) {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [notification, setNotification] = useState("");
    {/*}
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: email,
            subject: subject,
            message: message
        }, 'YOUR_USER_ID')
            .then((response) => {
                alert('Email sent successfully!');
                setEmail("");
                setSubject("");
                setMessage("");
            }, (err) => {
                alert('Failed to send email. Please try again.');
            });


    };
    */}

    return (
        <section id={"contact"} ref={contactsRef}>
        <div className={"contacts"}>
            <p className={"section__text__p1"}>Get In Touch</p>
            <h1 className={"title"}>Contact Me</h1>
            <div className={"business-card"}>
                <SplineViewer/>
            </div>
            <div className={"contact-mail"}>
                <a href={"mailto:ziga@weingerl.net"} className={"contact-mail-title"}>ziga@weingerl.net</a>
            </div>
            {/*}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input className={"form-input"} type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className={"form-input"} type="text" placeholder="Subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                <textarea className={"form-input-textarea"} placeholder="Your Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className={"form-submit"} type="submit">Send</button>
            </form>
            */}
        </div>
        </section>
    );
}

export default Contacts;