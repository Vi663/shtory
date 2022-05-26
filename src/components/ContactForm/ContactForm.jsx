import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import s from './ContactForm.module.css';

export function ContactForm({ closeModal, closeBackDrop }) {
  
  const initialState = {
    name: "",
    number: "",
    email: "",
    message: "",
  };

  const [state, setState] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState, [name]: value
    }))
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_tw0o46l', 'template_y45obrd', e.target, 'z-OSJ7xGQ9q_GjqFX'
    ).then(response => {
      console.log(response);
    }).catch(err => console.log(err));
    resetContact();
    onCloseModal();
    console.log('Form submited');
  }

  const resetContact = () => {
    setState({ ...initialState });
  }

  const onCloseModal = () => {
    closeModal(false);
    closeBackDrop(false);
  }

  const { name, number, email, message} = state;
  return (
    <div className={s.ContactForm_container}>
      <button className={s.closeModalBtn} onClick={onCloseModal}>X</button>
      <h1 className={s.heading}>Залиште деталі замовлення, ми вам перетелефонуємо</h1>
      <form className={s.ContactForm} autoComplete="on" onSubmit={handleSubmit}>
        <label className={s.ContactLabel}>Ім'я</label>
        <input
          className={s.ContactInput}
          type="text"
          name="name"
          value={name}
          id='ID1'
          onChange={handleChange}
          title="Ім'я може складатися лише з букв, апострофа, тире і пробілів."
          required
        />

        <label className={s.ContactLabel}>Номер телефону</label>
        <input
          className={s.ContactInput}
          type="tel"
          name="number"
          value={number}
          id='ID2'
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефону має складатися з цифр і може мати пробіли, тире, круглі скобки і починатися з +"
          required
        />
        <label className={s.ContactLabel}>Email</label>
        <input
          className={s.ContactInput}
          type="text"
          name="email"
          value={email}
          id='ID3'
          onChange={handleChange}
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Не коректний формат електронної пошти"
        />

        <label className={s.ContactLabel}>Опишіть замовлення максимально детально</label>
        <textarea
          className={s.ContactInput}
          type="text"
          name="message"
          value={message}
          id='ID4'
          onChange={handleChange}
          rows='6'
          required
        />

        <button className={s.ContactBtn}
          type="submit"
          name="submit">Відправити</button>
      </form>
    </div>
  )
}

