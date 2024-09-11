import React, { useState } from "react";

const Reservation = ({ onSuccess, onError }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [activity, setActivity] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!date || !time || !activity) {
      setMessage("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("/api/reserve-gym", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, time, activity }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true); // Set success state to true
        onSuccess(result.message);
      } else {
        onError(result.message);
      }
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(ev) => setDate(ev.target.value)}
          required
        />
        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(ev) => setTime(ev.target.value)}
          required
        />
        <label htmlFor="activity">Actividad:</label>
        <select
          id="activity"
          value={activity}
          onChange={(ev) => setActivity(ev.target.value)}
          required
        >
          <option value="">--Selecciona una actividad--</option>
          <option value="yoga">Yoga</option>
          <option value="musculacion">musculacion</option>
          <option value="spinning">spinning</option>
          <option value="crosst fit">crosst fit</option>
          <option value="integral">integral</option>
        </select>
        <button type="submit">Reservar</button>
        {message && <p className="message">{message}</p>}
        {success && <p className="success">Reserva realizada con éxito!</p>}
        <button type="submit">Eliminar Reservar</button>
        {success && <p className="success">Eliminar con éxito!</p>}
      </form>
    </>
  );
};

export default Reservation;
