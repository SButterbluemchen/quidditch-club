import React, { useState} from 'react';

const InscriptionForm = () => {

  const [catcherChecked, setCatcherChecked] = useState(false);
  const [batterChecked, setBatterChecked] = useState(false);

  const handleCatcherChange = () => {
    setCatcherChecked(!catcherChecked);
  };

  const handleBatterChange = () => {
    setBatterChecked(!batterChecked);
  };

  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '', 
      email: '',
      player: '',
      clubName: '',
      positions: [],
      message: ''
    }
  );

  function handleChange(event) {
    const {value, name, checked, type} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData); //to be created submitToApi(formData) 
  }

  // console.log(formData);

  return (
    <section className='container'>
      <h2>Envie de nous rejoindre ?</h2>
      <form onSubmit={handleSubmit} className="inscription-form">
        <fieldset>
          <legend>Avez-vous déjà pratiqué du Quidditch ?</legend>
          <input 
            type="radio"
            id="quidditchPlayer"
            value="true"
            name="player"
            checked={formData.player === 'true'}
            onChange={handleChange}
          />
          <label htmlFor='quidditchPlayer'>Oui</label>
          <br />
          <input 
            type="radio"
            id="noQuidditchPlayer"
            value="false"
            name="player"
            checked={formData.player === 'false'}
            onChange={handleChange}
          />
          <label htmlFor="noQuidditchPlayer">Non</label>
          <br />
          {formData.player === 'true' &&
          <div>
            <input
              type="text"
              name="clubName"
              placeholder="Nom du Club"
              onChange={handleChange}
              value={formData.clubName}
            />
            <ul className='position-list'>
              <li>
                <input 
                  type="checkbox"
                  id="catcher"
                  value={catcherChecked}
                  name="positions"
                  checked={formData.positions.push('catcher')}
                  onChange={handleCatcherChange}
                />
                <label htmlFor="position">Attrapeur</label>
              </li>
              <li>
                <input 
                  type="checkbox"
                  id="batter"
                  value={batterChecked}
                  name="positions"
                  checked={formData.positions.push('batter')}
                  onChange={handleBatterChange}
                />
                <label htmlFor="position">Batteur</label>
              </li>
              {/* <li>
                <input 
                  type="checkbox"
                  id="poursuiveur"
                  checked={formData.position === 'poursuiveur'}
                  name="position"
                  onChange={handleChange}
                />
                <label htmlFor="position">Poursuiveur</label>
              </li>
              <li>
                <input 
                  type="checkbox"
                  id="gardien"
                  checked={formData.position === 'gardien'}
                  name="position"
                  onChange={handleChange}
                />
                <label htmlFor="position">Gardien</label>
              </li> */}
            </ul>
          </div>
          }
        </fieldset>
        <fieldset className="main-inscription-infos">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              onChange={handleChange}
              value={formData.firstName}
              required={true}
            />
            <input
              type="text"
              placeholder="Nom"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              required={true}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required={true}
            />
          </div>
          <textarea
            value={formData.message}
            placeholder="Votre message"
            name="message"
            onChange={handleChange}
          />
        </fieldset>
        <button>Envoyer</button> 
      </form>
    </section> //button is in form so no type needed, automatically submit button
  );
};

export default InscriptionForm;