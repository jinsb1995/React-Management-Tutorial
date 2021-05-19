import React from 'react';

const Customer = (props) => {

    
    return (
        <div>
            <CustomerProfile id={props.id} name={props.name} image={props.image} />
            <CustomerInfo birthday={props.birthday} gender={props.gender} job={props.job} />
        </div>
    )
}


const CustomerProfile = (props) => {

    console.log(props)

    return (
        <div>
            <img src={props.image} alt="profile" />
            <h2>{props.name}({props.id})</h2>
        </div>
    )
}

const CustomerInfo = (props) => {

    return (
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    )
}

export default Customer;