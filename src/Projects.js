import React from 'react'
import weatherApp from './images/weather-app.png'
import facebookClone from './images/facebook-clone.png'
import whatsapp_screen from './images/whatsapp_screen.jpg'
import './Projects.css'

function Projects() {
    return (
        <section className="projects">
            <div class="content-wrap divider">
                <h2>Featured Projects</h2>
                <section class="project-item">
                    <img src={facebookClone} />
                    <h3>Facebook Clone</h3>
                    <p>
                    Responsive Facebook clone with most of the functionality of the original 
                    Facebook web app including private messaging. Developed using React, 
                    Redux and Firebase.
                    </p>
                    <a
                    class="btn"
                    href="https://facebook-clone-b2c57.web.app/"
                    target="_blank"
                    >Facebook Clone</a>
                    <a style={{marginLeft: "20px"}}
                    class="btn"
                    href="https://github.com/geeksnet22/facebook-clone"
                    target="_blank"
                    >Github Link</a
                    >
                </section>
                <section class="project-item">
                    <img src={weatherApp} />
                    <h3>Weather App</h3>
                    <p>
                    Tracks user's current location and shows current and forecasted
                    (hourly and daily) forecasted weather conditions. User is able to
                    search for a location to get live weather information. User is
                    also able to add/remove their favorite locations to quickly access
                    weather information. Also stores a collection of approximately
                    23000 worldwide locations, used to provide search suggestions.
                    </p>
                    <a
                    class="btn"
                    href="https://play.google.com/store/apps/details?id=com.weatherapp.android.whatstheweather"
                    target="_blank"
                    >Weather App</a>
                    <a style={{marginLeft: "20px"}}
                    class="btn"
                    href="https://github.com/geeksnet22/TheWeatherApp"
                    target="_blank"
                    >Github Link</a>
                </section>
                <section class="project-item">
                    <img src={whatsapp_screen} />
                    <h3>WhatsApp Clone</h3>
                    <p>
                    WhatsApp clone mimicking the functionality of original WhatsApp mobile app.
                    Developed using React Native, React Navigation, Redux and Firebase.
                    </p>
                    <a style={{marginLeft: "20px"}}
                    class="btn"
                    href="https://github.com/geeksnet22/WhatsAppClone"
                    target="_blank"
                    >Github Link</a>
                </section>
            </div>
        </section>
    )
}

export default Projects
