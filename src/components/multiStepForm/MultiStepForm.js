import React, {useState}from 'react'
import {  useStep } from "react-hooks-helper";

import Explanation from './Explanation';
import MultipleChoice from './MultipleChoice';
import WeightedPreferences from './WeightPreferences';




function MultiStepForm(addResponse,addResponseeffectiveness) {
    const [ step, setStep]= useState(2);
    function addStep(step) {
        setStep({step});
      };

   
        switch(step) {
            case 1: 
                return (
                    <Explanation
                    
                    step = {step}
                    />
                );
            case 2: 
                return (
                    <MultipleChoice
                    addResponse={addResponse} addResponseeffectiveness={addResponseeffectiveness}
                    step = {step}
                    />
                );
        }

    }


export default MultiStepForm
