
import React, { useState } from 'react'
import styles from './MultiStepForm.module.css'; 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import tick from'./tick.png';
import cancel from './cancel.png'

function Reviewanswers({responses, weighting, addSteps,checkingScores, table, methods}){

const stepss= 4;
 let effectiveness;
    let noHormones;
    let STI  ;
    let remember;
    let consistencyperiods;
    let menstrualflow;
    let itprivate;
    let discontinue;
 const handleSubmit = (e) =>{
    e.preventDefault();
    addSteps(stepss); 
    checkingScores({methods, table});   
};
    const check = <img  src={tick}/>

    switch (weighting.weighteffectiveness) {
        case 1:
        effectiveness = <Typography variant="h6">It is <b style= {{color:"#405196"}}>not that important</b>  for my method to be good at <b>preventing pregnancy</b></Typography>    
            break;
        case 2:
        effectiveness = <Typography variant="h6">It is <b style= {{color:"#405196"}}>somewhat important</b> for my method to be good at <b>preventing pregnancy</b></Typography>   
            break;
        case 3:
        effectiveness = <Typography variant="h6">It is <b style= {{color:"#405196"}}>important</b> for my method to be good at <b>preventing pregnancy</b></Typography>   
                break; 
        case 4:
        effectiveness = <Typography variant="h6">It is <b style= {{color:"#405196"}}>very important</b> for my method to be good at <b>preventing pregnancy</b></Typography>   
                break; 
        case 5:
        effectiveness = <Typography variant="h6">It is <b style= {{color:"#405196"}}>extremly important</b> for my method to be good at <b>preventing pregnancy</b></Typography>   
                break; 
        default:
            break;
    };

    switch (weighting.weightnoHormones) {
        case 1:
            noHormones = <Typography variant="h6">It is <b style= {{color:"#405196"}}>not that important</b>  for my method to <b>not have hormones</b></Typography>    
            break;
        case 2:
            noHormones = <Typography variant="h6">It is <b style= {{color:"#405196"}}>somewhat important</b> for my method to <b>not have hormones</b></Typography>   
            break;
        case 3:
            noHormones = <Typography variant="h6">It is <b style= {{color:"#405196"}}>important</b> for my method to <b>not have hormones</b></Typography>   
                break; 
        case 4:
            noHormones = <Typography variant="h6">It is <b style= {{color:"#405196"}}>very important</b> for my method to <b>not have hormones</b></Typography>   
                break; 
        case 5:
            noHormones = <Typography variant="h6">It is <b style= {{color:"#405196"}}>extremly important</b> for my method to <b>not have hormones</b></Typography>   
                break; 
        default:
            break;
    }
    switch (weighting.weightSTI) {
        case 1:
            STI = <Typography variant="h6">It is <b style= {{color:"#405196"}}>not that important</b>  for my method to <b>have STI/STD protection</b></Typography>    
            break;
        case 2:
            STI = <Typography variant="h6">It is <b style= {{color:"#405196"}}>somewhat important</b> for my method to <b>have STI/STD protection</b></Typography>   
            break;
        case 3:
            STI = <Typography variant="h6">It is <b style= {{color:"#405196"}}>important</b> for my method to <b>have STI/STD protection</b></Typography>   
                break; 
        case 4:
            STI = <Typography variant="h6">It is <b style= {{color:"#405196"}}>very important</b> for my method to <b>have STI/STD protection</b></Typography>   
                break; 
        case 5:
            STI = <Typography variant="h6">It is <b style= {{color:"#405196"}}>extremly important</b> for my method to <b>have STI/STD protection</b></Typography>   
                break; 
        default:
            break;
    };
    switch (weighting.weightremember) {
        case 1:
            remember = <Typography variant="h6">It is <b style= {{color:"#405196"}}>not that important</b>  for my method to <b>be easy to remember</b></Typography>    
            break;
        case 2:
            remember = <Typography variant="h6">It is <b style= {{color:"#405196"}}>somewhat important</b> for my method to <b>be easy to remember</b></Typography>   
            break;
        case 3:
            remember = <Typography variant="h6">It is <b style= {{color:"#405196"}}>important</b> for my method to <b>be easy to remember</b></Typography>   
                break; 
        case 4:
            remember = <Typography variant="h6">It is <b style= {{color:"#405196"}}>very important</b> for my method to <b>be easy to remember</b></Typography>   
                break; 
        case 5:
            remember = <Typography variant="h6">It is <b style= {{color:"#405196"}}>extremly important</b> for my method to <b>be easy to remember</b></Typography>   
                break; 
        default:
            break;
    };
    switch (weighting.weightregularperiods) {
        case 1:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>not that important</b>  for my method to <b>make/keep my periods regular</b></Typography>    
            break;
        case 2:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>somewhat important</b> for my method to <b>make/keep my periods regular</b></Typography>   
            break;
        case 3:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>important</b> for my method to <b>make/keep my periods regular</b></Typography>   
                break; 
        case 4:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>very important</b> for my method to <b>make/keep my periods regular</b></Typography>   
                break; 
        case 5:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>extremly important</b> for my method to <b>make/keep my periods regular</b></Typography>   
                break; 
        default:
            break;
    };
    switch (weighting.weightstopperiods) {
        case 1:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>not that important</b>  for my method to <b>stop/lighten my periods </b></Typography>    
            break;
        case 2:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>somewhat important</b> for my method to <b>stop/lighten my periods</b></Typography>   
            break;
        case 3:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>important</b> for my method to <b>stop/lighten my periods</b></Typography>   
                break; 
        case 4:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>very important</b> for my method to <b>stop/lighten my periods</b></Typography>   
                break; 
        case 5:
            consistencyperiods = <Typography variant="h6">It is <b style= {{color:"#405196"}}>extremly important</b> for my method to <b>stop/lighten my periods</b></Typography>   
                break; 
        default:
            break;
    };
    switch (weighting.weightmenstrualflow) {
        case 1:
            menstrualflow = <Typography variant="h6">It is <b style= {{color:"#405196"}}>not that important</b>  for my method to <b>make my periods lighter</b></Typography>    
            break;
        case 2:
            menstrualflow = <Typography variant="h6">It is <b style= {{color:"#405196"}}>somewhat important</b> for my method to <b>make my periods lighter</b></Typography>   
            break;
        case 3:
            menstrualflow = <Typography variant="h6">It is <b style= {{color:"#405196"}}>important</b> for my method to <b>make my periods lighter</b></Typography>   
                break; 
        case 4:
            menstrualflow = <Typography variant="h6">It is <b style= {{color:"#405196"}}>very important</b> for my method to <b>make my periods lighter</b></Typography>   
                break; 
        case 5:
            menstrualflow = <Typography variant="h6">It is <b style= {{color:"#405196"}}>extremly important</b> for my method to <b>make my periods lighter</b></Typography>   
                break; 
        default:
            break;
    };
    switch (weighting.weightitprivate) {
        case 1:
            itprivate = <span>  <Typography variant="h6"> It is<b style= {{color:"#405196"}}> not that important</b> be easy to keep private</Typography>  </span>    
            break;
        case 2:
            itprivate = <span>  <Typography variant="h6">It is <b style= {{color:"#405196"}}> somewhat important</b>be easy to keep private</Typography>  </span>   
            break;
        case 3:
            itprivate = <Typography variant="h6">It is <b style= {{color:"#405196"}}>important</b> for my method to <b>be easy to keep private</b></Typography>   
                break; 
        case 4:
            itprivate = <Typography variant="h6">It is <b style= {{color:"#405196"}}>very important</b> for my method to <b>be easy to keep private</b></Typography>   
                break; 
        case 5:
            itprivate = <Typography variant="h6">It is <b style= {{color:"#405196"}}>extremly important</b> for my method to <b>be easy to keep private</b></Typography>   
                break; 
        default:
            break;
    };
    switch (weighting.weigthdiscontinue) {
        case 1:
            discontinue =   <span>  <Typography variant="h6">It is <b style= {{color:"#405196"}}> not that important</b>for my method to <b>be easy to stop</b></Typography>  </span> 
            break;
        case 2:
            discontinue =   <span> <Typography variant="h6">It is <b style= {{color:"#405196"}}> somewhat important </b>for my method to <b>be easy to stop</b></Typography>  </span>
            break;
        case 3:
            discontinue = <span><Typography variant="h6">It is<b style= {{color:"#405196"}}> important </b>for my method to <b>be easy to stop</b></Typography>  </span>
                break; 
        case 4:
            discontinue =  <span>  <Typography variant="h6">It is<b style= {{color:"#405196"}}> very important </b>for my method to <b>be easy to stop</b></Typography>  </span>
                break; 
        case 5:
            discontinue = <span>  <Typography variant="h6">It is <b style= {{color:"#405196"}}> extremly important </b>for my method to <b>be easy to stop</b></Typography>  </span>  
                break; 
        default:
            break;
    };


    return (
       <div  className={styles.background} style= {{float: "left", textAlign: "left"}}>
            <Typography variant="h5"  >
                Step 3: Review your answers </Typography>
            <Typography variant="h6"  style= {{float: "left", textAlign: "left", paddingBottom: "30px"}}>
                Read these statements and make sure you agree with them. If not go back to change your answers </Typography>
                <br/>
        {effectiveness}
        <br/>
        {noHormones}
        <br/>
        {STI}
        <br/>
        {remember}
        <br/>
        {consistencyperiods}
        <br/>
        {menstrualflow}
        <br/>
        {itprivate}
        <br/>
        {discontinue}     

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