import React, { useState } from 'react';
import Validation from './Validation.js';
import { useDispatch } from 'react-redux';
import { addActivity } from '../../redux/actions/actions.activities.js';
import style from './CreateActivityForm.module.css';

const DIFFICULTIES = ['1', '2', '3', '4', '5'];
const SEASONS = ['Summer', 'Autumn', 'Winter', 'Spring'];

const Form = ({ countries }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [form, setForm] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: [],
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setErrors({ ...errors, [property]: '' });
    setForm({ ...form, [property]: value });
  };

  const handleCountryChange = (event) => {
    const countries = Array.from(event.target.selectedOptions, (option) => option.value);
    setForm({ ...form, countries });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(form);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(addActivity(form));
      setForm({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
      });
      setModalMessage('Activity created successfully!');
    } else {
      setErrors(validationErrors);
      setModalMessage('Failed to create activity. Please check your inputs.');
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit}>
        <div className={style.form}>
          <label className={style.label} htmlFor="name">
            Name:
          </label>
          <input
            className={style.input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <p className={style.errors}>{errors.name}</p>

          <label className={style.label}>Difficulty:</label>
          <div className={style.radioContainer}>
            {DIFFICULTIES.map((difficulty) => (
              <label key={difficulty} className={style.radioLabel}>
                <input
                  type="radio"
                  name="difficulty"
                  value={difficulty}
                  checked={form.difficulty === difficulty}
                  onChange={handleChange}
                />
                {difficulty}
              </label>
            ))}
          </div>
          <p className={style.errors}>{errors.difficulty}</p>

          <label className={style.label}>Duration:</label>
          <div className={style.durationInput}>
            <input
              min="1"
              className={style.input}
              type="number"
              name="duration"
              value={form.duration}
              onChange={handleChange}
            />
            <span className={style.durationText}>{form.duration === '1' ? 'Hour' : 'Hours'}</span>
          </div>
          <p className={style.errors}>{errors.duration}</p>

          <label className={style.label}>Season:</label>
          <select className={style.input} name="season" value={form.season} onChange={handleChange}>
            <option value="" disabled>Select a season</option>
            {SEASONS.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
          <p className={style.errors}>{errors.season}</p>

          <label htmlFor="countries" className={style.label}>Countries:</label>
          <select multiple id="countries" name="countries" onChange={handleCountryChange} className={style.input}>
            {countries.map((country) => (
              <option key={country.id} value={country.countryCode}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.countries && <span className={style.errors}>{errors.countries}</span>}
        </div>
        <button className={style.submitButton} type="submit">
          CREATE
        </button>
      </form>
      {showModal && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <span className={style.close} onClick={closeModal}>&times;</span>
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
