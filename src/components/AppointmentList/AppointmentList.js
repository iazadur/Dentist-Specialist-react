import React from 'react';

const AppointmentList = ({ appointment }) => {
    const { name, department } = appointment
    return (
        <div>
            
                <a href="/" className=" mt-1 list-group-item list-group-item-action active" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <p className="mb-1 fw-bold">{name}</p>
                        <small>Just Now</small>
                    </div>
                    <small className="mb-1">{department}</small>
                </a>
            
        </div>
    );
};

export default AppointmentList;