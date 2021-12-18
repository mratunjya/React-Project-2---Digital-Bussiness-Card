import React from 'react'
import './BussinessCard.css'
import Person from'./Person/Person'

function BussinessCard(props) {
    let name = props.name;
    let title = props.title;
    let website = props.website;
    let email = props.email;
    let linkedin = props.linkedin;
    let about = props.about;
    let interests = props.interests;
    return (
        <div className="flex flex-justify-content-center bussiness-card">
            <Person name={name} title={title} website={website} email={email} linkedin={linkedin} about={about} interests={interests}></Person>
        </div>
    )
}

export default BussinessCard;