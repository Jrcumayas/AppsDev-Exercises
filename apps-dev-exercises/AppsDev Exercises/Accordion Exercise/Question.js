import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ subject, description }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className='question'>
      <header>
        <h4>{subject}</h4>
        <button className ='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{description}</p>}
    </div>
  );
};

export default Question;
