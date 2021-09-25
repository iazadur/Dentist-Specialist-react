import React from 'react';
import"./Doctors.css"

const Doctors = ({ doctor, handleAppointment }) => {
    const { name, gender, department, desc, fee, picture } = doctor
    return (
        <div>

            <div className="col">
                <div className="card">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-tex fs-7">{department}</p>
                        <p className="card-text fs-7">{desc}</p>
                        <div className="d-flex justify-content-between">
                            <p className="card-text  fs-7"><b>Gender:</b> {gender}</p>
                            <p className="card-text fs-7"><b>Fee:</b> {fee}</p>

                        </div>
                        <button onClick={() => {
                            handleAppointment(doctor)
                        }} className="btn btn-success float-end fs-8">
                            <i className="far fa-calendar-check"></i> Get Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;