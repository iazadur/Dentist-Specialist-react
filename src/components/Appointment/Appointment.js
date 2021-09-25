import React from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';
import './Appointment.css'

const Appointment = (props) => {
    const appointments = props.appointments || {}
    return (
        <div>
            <div className="row row-cols-1 g-4">
                <div className="col">
                    <div className="card pt-3">

                        <h6 className="mx-2">Total Appointment: {appointments.length}</h6>

                        <div className="list-group">
                            {
                                appointments.map(appointment => <AppointmentList
                                    key={appointment.key}
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