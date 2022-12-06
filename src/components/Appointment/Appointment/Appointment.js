import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentSection from '../AppointmentSection/AppointmentSection';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selected={selected}
                setSelected={setSelected}
            ></AppointmentBanner>
            <AppointmentSection
                selected={selected}
            ></AppointmentSection>
        </div>
    );
};

export default Appointment;