import React, { useState } from 'react';
import List from './List';

const Searchbar = () => {

  const [inputText, setInputText] = useState('');
  let inputHandler = (e) => {
    // convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <input placeholder="Entrez le nom du joueur" onChange={inputHandler}/>
      <List />
    </div>
  );
};

export default Searchbar;