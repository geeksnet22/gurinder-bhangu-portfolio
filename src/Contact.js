import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <footer className="contacts">
            <div class="content-wrap">
                <h2>Let's Keep in Touch!</h2>
                <ul class="contact-list">
                    <li>
                    <a href="mailto:gurinderbhangu@hotmail.com"
                        >gurinderbhangu@hotmail.com</a
                    >
                    </li>
                    <li>
                    <a
                        href="https://www.linkedin.com/in/gurinder-bhangu-a9a4b5144"
                        target="_blank"
                        >LinkedIn</a
                    >
                    </li>
                    <li>
                    <a
                        href="https://www.facebook.com/profile.php?id=100015774182398"
                        target="_blank"
                        >Facebook</a
                    >
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Contact
