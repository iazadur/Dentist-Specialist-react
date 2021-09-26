import React from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';
import './Appointment.css'

const Appointment = (props) => {
    const {appointments} = props || {}
    const total = appointments.reduce((prevValue, currentValue) => prevValue + currentValue.fee, 0)
    return (
        <div>
            <div className="row row-cols-1 g-4">
                <div className="col">
                    <div className="card pt-3">

                        <h6 className="mx-2">Total Appointment: {appointments.length}</h6>
                        <h6 className="mx-2">Total Fee: {total}</h6>

                        <div className="list-group">
                            {
                                appointments.map(appointment => <AppointmentList
                                    key={appointment.id}
                                    appointment={appointment}
                                />)
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;