import React from 'react';
import AppoinmentTable from '../AppoinmentTable/AppoinmentTable';
import AppointmentPassant from '../AppointmentPassant/AppointmentPassant';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments);


    const tableStyle ={
        padding:" 5px",
        marginRight: "9%",
        boxShadow: "0px 0px 7px -5px",
        marginTop: "7%"
    }


    

var today = new Date();
console.log(today);
    return (
        <div style={tableStyle}>
             <h2 className="text-brand text-center">Appointments</h2>
             
            {
                appointments.length ?
                 <AppoinmentTable appointments={appointments} ></AppoinmentTable>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentByDate;