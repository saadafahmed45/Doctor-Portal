import React, { useState } from "react";
import AppoinmentForm from "../AppoinmentForm/AppoinmentForm";

const BookingCard = ({ booking ,date }) => {
const [modalIsOpen, setIsOpen] =useState(false);

function openModal() {
  setIsOpen(true);
}

function closeModal() {
  setIsOpen(false);
}
  return (

      <div className="col-md-4">
        <div  className="  book-card">
         <h5>{booking.subject}</h5>
         <h6>{booking.visitingHour}</h6>
         <p>{booking.totalSpace} SPACES AVAILABLE</p>
         <button onClick={openModal} className='btn btn-primary bg-brand'>Book Appointment</button>
         <AppoinmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppoinmentForm>
        </div>
      </div>
 
  );
};

export default BookingCard;
