import React, { useState } from 'react';
import Subjects from './Subjects';
import Question from './Question'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = () => {

    const [questions, setQuestions] = useState(Subjects);

    return (
        <>
            <div className ='container'>
                <h3>About my 1st Semester Subjects</h3>
                <div className ='info'>
                    {
                        questions.map((question, index) => {
                            return (
                                <Question info = {index} {...question}/>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Accordion;