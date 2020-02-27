
import React, { useState } from 'react'
import styles from './MultiStepForm.module.css'; 
import Button from '@material-ui/core/Button';



function Reviewanswers({responses, weighting, addSteps,checkingScores, table, methods}){

const stepss= 4;
 let effectiveness;
 const handleSubmit = (e) =>{
    e.preventDefault();
    addSteps(stepss);    
};
const calculatingscores = (e) =>{
    checkingScores({methods, table});
};
    switch (weighting.weighteffectiveness) {
        case 0:
        effectiveness = <p>It is not important for my method to be good at preventing pregnancy</p>    
            break;
        case 1:
        effectiveness = <p>It is not that important for my method to be good at preventing pregnancy</p>    
            break;
        case 2:
        effectiveness = <p>It is somewhat important for my method to be good at preventing pregnancy</p>   
            break;
        case 3:
        effectiveness = <p>It is important for my method to be good at preventing pregnancy</p>   
                break; 
        case 4:
        effectiveness = <p>It is very important for my method to be good at preventing pregnancy</p>   
                break; 
        case 5:
        effectiveness = <p>It is extremly important for my method to be good at preventing pregnancy</p>   
                break; 
        default:
            break;
    }

   
   
   
    return (
       <div onMouseOver={calculatingscores}className={styles.background}>
        {effectiveness}
       

        <Button variant="contained"  
        style={{backgroundColor: " #405196",
        color: "white", 
        textTransform: 'none', 
        fontSize: "20PX",
        float:"right"}}
        onClick={handleSubmit}
        >  
         Next Step
                 </Button>      
                 </div> 
    )
}


export default Reviewanswers;