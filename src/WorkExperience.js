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
                        <ul>
                            <li>Worked as an assistant to a faculty member in the Computer Science department at the University of Saskatchewan</li>
                            <li>Successfully achieved the goals ahead of time set out at the beginning of the work term</li>
                            <li>Wrote programs and modified existing code analysis tools to extract and organize data as required by the research</li>
                            <li>Attended weekly meetings with the research supervisor to discuss any hurdles and report work progress</li>
                            <li>Technologies used were Python, Java, Gradle and Ant</li>
                            <li>Research topics included Code Smells and Technical Depth</li>
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
                        <ul>
                            <li>Worked in a team oriented and an agile environment to design and implement new features and troubleshoot bugs</li>
                            <li>Wrote unit and integration tests as required in Java and C++</li>
                            <li>Conducted software feature testing and wrote bug reports </li>
                            <li>Designed and wrote automated test scripts using Python and Selenium Web Automation framework</li>
                            <li>Successfully overhauled core files supporting front-end to accommodate new functionalities</li>
                            <li>Successfully overhauled build system consisting of Gradle to avoid unnecessary build processes and reduce build times</li>
                            <li>Front-end consisted of Python, jQuery, Flask, CSS and HTML</li>
                            <li>Back-end consisted of Java and C++</li>
                            <li>Database System consisted of SQL and Couchbase</li>
                            <li>Other DevOps tools included JIRA, Confluence, Jenkins and Ansible</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default WorkExperience
