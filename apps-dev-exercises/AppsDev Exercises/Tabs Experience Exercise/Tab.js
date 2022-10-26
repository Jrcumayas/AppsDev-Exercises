import React,{useState} from 'react'
import data from './Experiences'
import { AiFillPushpin } from 'react-icons/ai';

const MenuExercise = () => {

    const [value, setValue] = useState(0);
    const chosenWork = data.filter(job => job.index === value)

    return(
        <>
            <div className="header">
                <h1 id="header-title">Experience</h1>
                <div className="underline"></div>
            </div>
            <div className="details">
                <div className="button-box">
                    {
                        data.map((item, index) => {
                            return (
                                <button 
                                key = {item.index}
                                onClick = {() => setValue(index)}
                                className={`job-button ${index === value && 'active-button'}`}
                                >{item.name}</button> 
                            )
                        })    
                    }
                </div>
                <div className="divider"></div>
                <div className="box">
                    {
                        chosenWork.map((item, index) => {
                            return (
                                <div className="info-box">
                                    <h4 id="work-title">{item.work}</h4>
                                    <label id="user-name">{item.name}</label>
                                    <label id="work-duration">{item.workBegin} to {item.workEnd}</label>
                                    {
                                        item.description.map((i) => {
                                            return (
                                                <p id="description"> <AiFillPushpin id = "icon"/>     {i}</p>
                                            )
                                        })
                                    }
                                </div> 
                            )
                        })
                    }
                </div>
            </div>
            <div className="button-div">
              <button className="more-info-button">More Info</button>
            </div>
        </>
    );
}

export default MenuExercise;