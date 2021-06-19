import React, { useState } from 'react';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';

const Appoinment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>

            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppoinment date={selectedDate}></BookAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;