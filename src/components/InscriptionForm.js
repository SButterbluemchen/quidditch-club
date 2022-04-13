import React, { useState} from 'react';

const InscriptionForm = () => {

  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '', 
      email: '',
      quidditchPlayer: '',
      message: ''
    }
  );

  function handleChange(event) {
    const {value} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData, value
      };
    });
    console.log(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <section>
      <h2>Envie de nous rejoindre ?</h2>
      <form onSubmit={handleSubmit} className="inscription-form">
        <fieldset>
          <legend>Avez-vous déjà pratiqué du Quidditch ?</legend>
          <input 
            type="radio"
            id="quidditchPlayer"
            value="quidditchPlayer"
            checked={formData.player === 'quidditchPlayer'}
            onChange={handleChange}
          />
          <label htmlFor='quidditchPlayer'>Oui</label>
          <br />
          <input 
            type="radio"
            id="noQuidditchPlayer"
            value="noQuidditchPlayer"
            checked={formData.player === 'noQuidditchPlayer'}
            onChange={handleChange}
          />
          <label htmlFor="noQuidditchPlayer">Non</label>
          <br />
        </fieldset>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea 
          value={formData.message}
          placeholder="Votre message"
          onChange={handleChange}
        />
      </form>
      <button>Submit</button> 
    </section> //button is in form so no type needed, automatically submit button
  );
};

export default InscriptionForm;