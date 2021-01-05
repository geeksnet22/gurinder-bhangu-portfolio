import React from 'react'
import './WorkExperience.css'

function WorkExperience() {
    return (
        <section className="workExperience">
            <div class="content-wrap item-details divider">
                <h2>Work Experience</h2>
                <section class="job-item">
                    <div class="job-details">
                        <h3>Software Research Assisstant</h3>
                        <p>University of Saskatchewan</p>
                        <p>Sept 2020 - December 2020</p>
                    </div>
                    <div class="job-summary">
                        <p>
                            I worked as an assistant to a faculty member in the Computer Science department 
                            where I was responsible for writing scripts in Python and Java to extract 
                            and organize data according to research needs.
                        </p>
                        <ul>
                            <li>Research topics: software quality, code smells, technical debt</li>
                            <li>Technologies: Python, Java, Gradle, Maven</li>
                        </ul>
                    </div>
                </section>
                <section class="job-item">
                    <div class="job-details">
                        <h3>Student Software Developer</h3>
                        <p>SED Systems</p>
                        <p>May 2019 - August 2020</p>
                    </div>
                    <div class="job-summary">
                        <p>
                            I was part of a team of approximately 20 developers and quality
                            assurance personnels. The team was responsible for creating and
                            maintaining user-interfaces and backend services for a client in
                            telecommunications industry. My duties included implementing new features 
                            as suggested by the software architecture team and tracking and 
                            fixing software bugs in both front-end and back-end services.
                        </p>
                        <ul>
                            <li>Front-end technologies used: Flask, Jquery, Jinja, SASS</li>
                            <li>Back-end technologies used: Java, C++</li>
                            <li>Database technologies used: Couchbase, PostgreSQL</li>
                            <li>Build tools: Gradle</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default WorkExperience
