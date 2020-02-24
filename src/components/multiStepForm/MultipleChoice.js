import React, { useState } from 'react'
import styles from './MultiStepForm.module.css'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function MultipleChoice({addResponseeffectiveness,addResponsenoHormones, addResponseSTI, addResponseremember, addResponseconsistencyperiods, addResponsemenstrualflow, addResponseitprivate, addResponsediscontinue, addSortResponse, addSteps, addWeighting}) {
    const [effectiveness] = useState(1);
    const [noHormones] = useState(1);
    const [STI] = useState(1);
    const [remember] = useState(1);
    const [consistencyperiods] = useState(1);
    const [menstrualflow] = useState(1);
    const [itprivate] = useState(1);
    const [discontinue] = useState(1);
    let sortingWhat;

    const stepss = 2;
         
    const funeffectiveness = (e) =>{
        addResponseeffectiveness(effectiveness);
        sortingWhat = 'effective';
        addSortResponse(sortingWhat);
    };
    const funnohormones = (e) =>{
        addResponsenoHormones(noHormones);
        sortingWhat = 'hormone';
        addSortResponse(sortingWhat);
    };
    const funSTI = (e) =>{
        addResponseSTI(STI);
        sortingWhat = 'STI';
        addSortResponse(sortingWhat);
    };
    const funremember = (e) =>{
        addResponseremember(remember);
        sortingWhat = 'remember';
        addSortResponse(sortingWhat);
    };
    const funconsistency = (e) =>{
        addResponseconsistencyperiods(consistencyperiods);
        sortingWhat = 'regularperiods';
        addSortResponse(sortingWhat);
    };
    const funmenstrualflow = (e) =>{
        addResponsemenstrualflow(menstrualflow);
        sortingWhat = 'lightperiods';
        addSortResponse(sortingWhat);
    };
    const funitprivate = (e) =>{
        addResponseitprivate(itprivate);
        sortingWhat = 'itprivate';
        addSortResponse(sortingWhat);
    };
    const fundiscontinue = (e) =>{
        addResponsediscontinue(discontinue);
        sortingWhat = 'discontinue';
        addSortResponse(sortingWhat);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSteps(stepss);
    };
        return (
            <div  className={styles.background}>
        <FormControl component="fieldset" style= {{float: "left", textAlign: "left"}} >

                        <Typography variant="subtitle1" > <b> How important is the efficacy of the method? </b></Typography>
                        <RadioGroup aria-label="effectiveness" name="effectiveness"  >
                        <FormControlLabel value = "1" control={<Radio  color="primary"  />}  onChange={funeffectiveness}  label="I want the method to be the best at preventing pregnancy" />
                        <FormControlLabel value="0.5" control={<Radio color="primary"/>}   label="I want it to be good at preventing pregnancy but I’m willing to compromise depending on other factors" />
                        </RadioGroup>

                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method without hormones? </b></Typography>
                        <RadioGroup aria-label="noHormones" name="noHormones" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funnohormones}  label="Without hormones" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} label="Not an issue" />
                        </RadioGroup>
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method that prevents STIs? </b></Typography>
                        <RadioGroup aria-label="STI" name="STI" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funSTI}label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>}  label="Not an issue" />
                        </RadioGroup> 
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want something that requires less effort to remember? </b></Typography>
                        <RadioGroup aria-label="remember" name="remember" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funremember}  label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>}  label="Not an issue" />
                        </RadioGroup>  
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method that alters your period? </b></Typography>
                        <RadioGroup aria-label="consistencyperiods" name="consistencyperiods" >
                        <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={funconsistency} label="I don’t want any periods" />
                        <FormControlLabel value="1" control={<Radio color="primary"/>}   label="I want regular periods" />
                        <FormControlLabel value="0.5" control={<Radio color="primary"/>} label="Not an issue" />
                        </RadioGroup> 
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you mind having heavier periods? </b></Typography>
                        <RadioGroup aria-label="menstrualflow" name="menstrualflow" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funmenstrualflow} label="I don’t mind" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>}  label="I mind, I want lighter periods" />
                        </RadioGroup> 
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method that is easy to keep private? </b></Typography>
                        <RadioGroup aria-label="itprivate" name="itprivate" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funitprivate}  label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} label="Not an issue" />
                        </RadioGroup> 
                        <br/>
                        <Typography variant="subtitle1" > <b> Do you want a method that will be easy to remove if you wish to discontinue it? </b></Typography>
                        <RadioGroup aria-label="discontinue" name="discontinue" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={fundiscontinue} label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>}  label="Not an issue" />
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
