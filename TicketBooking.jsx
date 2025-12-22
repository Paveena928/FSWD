import React from "react";

function TicketBooking() {
  const bookTicket = () => {
    // Prompt dialog – user input
    const passengerName = prompt("Enter Passenger Name:");
    if (!passengerName) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const destination = prompt("Enter Destination:");
    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    // Confirm dialog – confirmation
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nPassenger: ${passengerName}\nDestination: ${destination}`
    );

    if (confirmBooking) {
      // Alert dialog – success message
      alert(
        `🎉 Ticket Booked Successfully!\n\nPassenger: ${passengerName}\nDestination: ${destination}`
      );
    } else {
      alert("❌ Booking Cancelled by User.");
    }
  };

  return (
    <div>
      <button onClick={bookTicket} style={{ padding: "10px 20px" }}>
        Book Flight Ticket
      </button>
    </div>
  );
}

export default TicketBooking;
