import React, { useEffect, useState } from 'react';
import Appointment from '../Appointment/Appointment';
import Doctors from '../Doctors/Doctors';

const Specialist = () => {

    const [doctors, setDoctors] = useState([])
    const [appointments,setAppointment] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const handleAppointment = (doctor) => {
        const getAllAppointment = [...appointments,doctor]
        setAppointment(getAllAppointment)
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <Appointment appointments={appointments}></Appointment>
                </div>
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-2">
                        {
                            doctors.map(doctor => <Doctors
                                key={doctor.id}
                                doctor={doctor}
                                handleAppointment={handleAppointment}
                            />)
                        }</div>

                </div>
            </div>
        </div>
    );
};

export default Specialist;