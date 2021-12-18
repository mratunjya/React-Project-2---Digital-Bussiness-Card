import React from 'react'
import './Person.css'

function Person(props) {
    let name = props.name;
    let title = props.title;
    let website = props.website;
    let email = "mailto: " + props.email;
    let linkedin = props.linkedin;
    let about = props.about;
    let interests = props.interests;
    let Dp = "https://thispersondoesnotexist.com/image";
    return (
        <div className="person">
            <img className="person-img" src={Dp} alt="Person"></img>
            <div className="w-77-92-cent center-block other-info">
                <h1 className="Name">{name}</h1>
                <p className="title">{title}</p>
                <p className="website">{website}</p>

                <div className="flex flex-space-between flex-wrap">
                    <a className="email center-block" href={email} target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i>Email</a>
                    <a className="linked-in center-block" href={linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i>LinkedIn</a>
                </div>
                <h2 className="about">About</h2>
                <p className="sub-txt">{about}</p>
                <h2 className="interest">Interests</h2>
                <p className="sub-txt">{interests}</p>
            </div>
            <footer className="person-footer flex flex-justify-content-center">
                <div className="flex flex-space-between">
                    <div className="flex flex-align-center flex-justify-content-center">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="flex flex-align-center flex-justify-content-center">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="flex flex-align-center flex-justify-content-center">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="flex flex-align-center flex-justify-content-center">
                        <i className="fab fa-github"></i>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Person;