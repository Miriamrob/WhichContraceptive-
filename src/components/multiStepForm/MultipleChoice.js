import React, { useState } from 'react'
import styles from './MultiStepForm.module.css'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function MultipleChoice({addResponse, addSortResponse, addSteps, addWeighting}) {
    const [effectiveness, setEffectiveness] = useState();
    const [noHormones, setNoHormones] = useState();
    const [STI, setSTI] = useState();
    const [remember, setRemember] = useState();
    const [consistencyperiods, setConsistencyperiods] = useState();
    const [menstrualflow, setMenstrualflow] = useState();
    const [itprivate, setItprivate] = useState();
    const [discontinue, setDiscontinue] = useState();
    const [sortingWhat, setSortingWhat] = useState();
    const [weighteffectiveness, setWeightEffectiveness] = useState(3);

    const stepss = 2;
    
    const handleChange = (e) =>{
        e.preventDefault();
        addResponse(effectiveness, noHormones, STI, remember, consistencyperiods, menstrualflow, itprivate, discontinue );
        addSortResponse(sortingWhat);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSteps(stepss);
        addWeighting(weighteffectiveness);
    };
        return (
            <div  className={styles.background}>
        <FormControl component="fieldset" style= {{float: "left", textAlign: "left"}} onSubmit={handleChange}>

                        <Typography variant="subtitle1" > <b> How important is the efficacy of the method? </b></Typography>
                        <RadioGroup aria-label="effectiveness" name="effectiveness" onClick= {handleChange} >
                        <FormControlLabel value = "1" control={<Radio  color="primary"  />}  onChange={(e) => setEffectiveness(1)} onClick={(e) => setSortingWhat('effective')} label="I want the method to be the best at preventing pregnancy" />
                        <FormControlLabel value="0.5" control={<Radio color="primary"/>} onChange={(e) => setEffectiveness(0.5)}  onClick={(e) => setSortingWhat('effective')} label="I want it to be good at preventing pregnancy but I’m willing to compromise depending on other factors" />
                        </RadioGroup>

                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method without hormones? </b></Typography>
                        <RadioGroup aria-label="noHormones" name="noHormones" onClick= {handleChange}>
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setNoHormones(1)} onClick={(e) => setSortingWhat('hormone')} label="Without hormones" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setNoHormones(0)} label="Not an issue" />
                        </RadioGroup>
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method that prevents STIs? </b></Typography>
                        <RadioGroup aria-label="STI" name="STI" onClick= {handleChange}>
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setSTI(1)} onClick={(e) => setSortingWhat('STI')} label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setSTI(0)} label="Not an issue" />
                        </RadioGroup> 
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want something that requires less effort to remember? </b></Typography>
                        <RadioGroup aria-label="remember" name="remember" onClick= {handleChange}>
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setRemember(1)} onClick={(e) => setSortingWhat('remember')} label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setRemember(0)} label="Not an issue" />
                        </RadioGroup>  
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method that alters your period? </b></Typography>
                        <RadioGroup aria-label="consistencyperiods" name="consistencyperiods" onClick= {handleChange}>
                        <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setConsistencyperiods(0.5)} label="I don’t want any periods" />
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setConsistencyperiods(1)} onClick={(e) => setSortingWhat('regularperiods')} label="I want regular periods" />
                        <FormControlLabel value="0.5" control={<Radio color="primary"/>} onChange={(e) => setConsistencyperiods(0)} label="Not an issue" />
                        </RadioGroup> 
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you mind having heavier periods? </b></Typography>
                        <RadioGroup aria-label="menstrualflow" name="menstrualflow" onClick= {handleChange}>
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setMenstrualflow(1)} label="I don’t mind" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setMenstrualflow(0)} onClick={(e) => setSortingWhat('lightperiods')} label="I mind, I want lighter periods" />
                        </RadioGroup> 
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method that is easy to keep private? </b></Typography>
                        <RadioGroup aria-label="itprivate" name="itprivate" onClick= {handleChange}>
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setItprivate(1)} onClick={(e) => setSortingWhat('itprivate')} label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setItprivate(0)} label="Not an issue" />
                        </RadioGroup> 
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method that will be easy to remove if you wish to discontinue it? </b></Typography>
                        <RadioGroup aria-label="discontinue" name="discontinue" onClick= {handleChange}>
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setDiscontinue(1)} label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setDiscontinue(0)} onClick={(e) => setSortingWhat('discontinue')} label="Not an issue" />
                        </RadioGroup>
            </FormControl >
               
               <br/><br/>
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

export default MultipleChoice
