import React from "react";
import { useState } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import s from "./Modal.module.css";

export function Modal() {
  const [modal, setModal] = useState(false)
  const [backDrop, setBackDrop] = useState(false)
  return (
    <div>
      <button
        className={s.openModalBtn}
        onClick={() => {
          setModal(true);
          setBackDrop(true)
        }}
      >Залишити замовлення
      </button>
      {modal && <ContactForm closeModal={setModal} closeBackDrop={setBackDrop}/>}
    </div>
  )
}
