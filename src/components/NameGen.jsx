import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { ButtonRegular } from './buttons/ButtonRegular';

const generateRandomNum = () => {
  const min = Math.ceil(4);
  const max = Math.floor(12);
  return Math.floor(Math.random() * (max - min) + min);
};

const NameGen = (props) => {
  const [randomName, setRandomName] = useState("Random name");

  let rndmNmb = generateRandomNum();

  const randomNameGenerator = () => {
    let res = '';

    for (let i = 0; i < rndmNmb; i++) {
      const random = Math.floor(Math.random() * 26);
      res += String.fromCharCode(97 + random);
    };

    return setRandomName(res);
  };

  return (
    <div className={props.className}> 
      <p>
        It is time to choose your name:
        <br/>  
        <span className="oblique-text">
          {randomName.charAt(0).toUpperCase() + randomName.slice(1)}
        </span>
      </p>
      <ButtonRegular 
        onClick={randomNameGenerator} 
        color="#278cd4" 
        btnHover="#e0b700" 
        btnText="Generate name"
      >
        <FontAwesomeIcon 
          className="right" 
          icon={solid('user-tag')}
          size="1x" 
        />
      </ButtonRegular>
    </div>
  );
};

export default NameGen;