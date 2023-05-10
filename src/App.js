import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const BookingForm = () => {
  const [tower, setTower] = useState('');
  const [floor, setFloor] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');

  const handleTowerChange = (e) => {
    setTower(e.target.value);
  };

  const handleFloorChange = (e) => {
    setFloor(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      tower,
      floor,
      room,
      date,
      time,
      comment,
    };

    console.log(JSON.stringify(formData));
  };

  const handleClear = () => {
    setTower('');
    setFloor('');
    setRoom('');
    setDate('');
    setTime('');
    setComment('');
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          Выберите башню:
          <select value={tower} onChange={handleTowerChange}>
            <option value="">Выберите...</option>
            <option value="А">Башня А</option>
            <option value="Б">Башня Б</option>
          </select>
        </label>
        <br />
        <label>
          Выберите этаж:
          <select value={floor} onChange={handleFloorChange}>
            <option value="">Выберите...</option>
            {Array.from({ length: 25 }, (_, index) => (
              <option key={index} value={index + 3}>{index + 3}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Выберите переговорку:
          <select value={room} onChange={handleRoomChange}>
            <option value="">Выберите...</option>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Выберите дату:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <br />
        <label>
          Выберите время:
          <input type="time" value={time} onChange={handleTimeChange} />
        </label>
        <br />
        <label>
          Комментарий:
          <textarea value={comment} onChange={handleCommentChange} />
        </label>
        <br />
        <button type="submit">Отправить</button>
        <button type="button" onClick={handleClear}>Очистить</button>
      </form>
    </div>
  );
};

export default BookingForm;

