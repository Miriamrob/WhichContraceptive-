import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Delete= ({addResponse, addResponseeffectiveness}) => {
   
    const [effectiveness, setEffectiveness] = useState();
    const [noHormones, setNoHormones] = useState();
    const [STI, setSTI] = useState();
    const [remember, setRemember] = useState();
    const [consistencyperiods, setConsistencyperiods] = useState();
    const [menstrualflow, setMenstrualflow] = useState();
    const [itprivate, setItprivate] = useState();
    const [discontinue, setDiscontinue] = useState();
    const handleSubmit = (e) =>{
        e.preventDefault();
        addResponse(effectiveness, noHormones, STI, remember, consistencyperiods, menstrualflow, itprivate, discontinue )
    };
    const handleSubmiteffectiveness = (e) =>{
        e.persist();
        addResponseeffectiveness(effectiveness)};
        
        return(
        <Container onSubmit={handleSubmit}>
        <Typography variant="subtitle1" > <b> How important is the efficacy of the method? </b></Typography>
        <RadioGroup aria-label="efficient" name="efficient" onClick= {handleSubmiteffectiveness} >
        <FormControlLabel value = "1" control={<Radio  color="primary"  />}  onClick={(e) => setEffectiveness(1)}  label="I want the method to be the best at preventing pregnancy" />
        <FormControlLabel value="0.5" control={<Radio color="primary"/>} onClick={(e) => setEffectiveness(0.5)}  label="I want it to be good at preventing pregnancy but I’m willing to compromise depending on other factors" />
        </RadioGroup>
        <br/>
                    <Typography variant="subtitle1" > <b> Do you want a method without hormones? </b></Typography>
                    <RadioGroup aria-label="noHormones" name="noHormones">
                    <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setNoHormones(1)} label="Without hormones" />
                    <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setNoHormones(0)} label="Not an issue" />
                    </RadioGroup>
                    <br/>
                    <Typography variant="subtitle1" > <b> Do you want a method that prevents STIs? </b></Typography>
                    <RadioGroup aria-label="STI" name="STI">
                    <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setSTI(1)} label="Yes" />
                    <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setSTI(0)} label="Not an issue" />
                    </RadioGroup> 
                    <br/>
                    <Typography variant="subtitle1" > <b> Do you want something that requires less effort to remember? </b></Typography>
                    <RadioGroup aria-label="remember" name="remember">
                    <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setRemember(1)} label="Yes" />
                    <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setRemember(0)} label="Not an issue" />
                    </RadioGroup>  
                    <br/>
                    <Typography variant="subtitle1" > <b> Do you want a method that alters your period? </b></Typography>
                    <RadioGroup aria-label="consistencyperiods" name="consistencyperiods" >
                    <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setConsistencyperiods(0)} label="I don’t want any periods" />
                    <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setConsistencyperiods(1)} label="I want regular periods" />
                    <FormControlLabel value="0.5" control={<Radio color="primary"/>} onChange={(e) => setConsistencyperiods(0.5)} label="Not an issue" />
                    </RadioGroup> 
                    <br/>
                    <Typography variant="subtitle1" > <b> Do you mind having heavier periods? </b></Typography>
                    <RadioGroup aria-label="menstrualflow" name="menstrualflow">
                    <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setMenstrualflow(1)} label="I don’t mind" />
                    <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setMenstrualflow(0)} label="I mind, I want lighter periods" />
                    </RadioGroup> 
                    <br/>
                    <Typography variant="subtitle1" > <b> Do you want a method that is easy to keep private? </b></Typography>
                    <RadioGroup aria-label="itprivate" name="itprivate">
                    <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setItprivate(1)} label="Yes" />
                    <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setItprivate(0)} label="Not an issue" />
                    </RadioGroup> 
                    <br/>
                    <Typography variant="subtitle1" > <b> Do you want a method that will be easy to remove if you wish to discontinue it? </b></Typography>
                    <RadioGroup aria-label="discontinue" name="discontinue">
                    <FormControlLabel value="0.5" control={<Radio color="primary"/>} onChange={(e) => setDiscontinue(0.5)} label="No" />
                    <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={(e) => setDiscontinue(1)} label="Yes" />
                    <FormControlLabel value="0" control={<Radio color="primary"/>} onChange={(e) => setDiscontinue(0)} label="Not an issue" />
                    </RadioGroup>
        
        <br/><br/>
                <Button variant="contained"  
            style={{backgroundColor: " #405196",
             color: "white", 
             textTransform: 'none', 
             fontSize: "20PX",
             float:"right"}}
             onClick= {handleSubmit} 
             >
                 Next Step
                 </Button>
        </Container>
        
    );
}
export default Delete;