import React, { useState } from 'react'
import styles from './multiStepForm/MultiStepForm.module.css'; 
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';



function Weightings({addSteps, responses, addWeighting}) {
    const [weighteffectiveness, setWeightEffectiveness] = useState(0);
    const [weightSTI, setWeightSTI] = useState(0);
    const [weightremember, setWeightremember] = useState(0);
    const [weightconsistencyperiods, setWeightconsistencyperiods] = useState(0);
    const [weightmenstrualflow, setWeightmenstrualflow] = useState(0);
    const [weightitprivate, setWeightitprivate] = useState(0);
    const [weigthdiscontinue, setWeightdiscontinue] = useState(0);
    const [weightnoHormones, setWeightnoHormones] = useState(0);
    const stepss= 3;
    const [value, setValue] = useState();
    const handleChanges = (e, newValue) => {
        e.preventDefault();     
        setValue(newValue);
        addWeighting(weighteffectiveness, weightnoHormones, weightSTI, weightremember, weightconsistencyperiods, weightmenstrualflow, weightitprivate, weigthdiscontinue );
      };
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSteps(stepss);
        addWeighting(weighteffectiveness, weightnoHormones, weightSTI, weightremember, weightconsistencyperiods, weightmenstrualflow, weightitprivate, weigthdiscontinue );
    };
    const handleChange = (e) =>{
        let t = 1;
       };
    
    let hormone;
    let effective;
    let STD;
    let remember;
    let consistencyperiods;
    let menstrualflow;
    let itprivate;
    let discontinue;
   if (responses.effectiveness === 1) {
            effective =                 <div>
               <Typography id="discrete-slider" gutterBottom>
                    Effectiveness <br/><br/><br/>
                </Typography>
                <Slider
                    defaultValue={0}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={5}
                    valueLabelDisplay="on"
                    value={value}
                    onChange={handleChanges}
                    onClick={(e) =>  setWeightEffectiveness(value)}
                    onDrag={(e) =>  setWeightEffectiveness(value)}
 
                />
               <br/><br/><br/> <br/>
            </div>
            } else {  };

        if (responses.noHormones === 1) {
            hormone =                 <div>
               <Typography id="discrete-slider" gutterBottom>
                    Hormones <br/><br/><br/>
                </Typography>
                <Slider
                    defaultValue={3}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={5}
                    valueLabelDisplay="on"
                    value={value}
                    onChange={handleChanges}
                    onClick={(e) => setWeightnoHormones(value)}
                
                />
               <br/><br/><br/> <br/>
            </div>
            } else {  };
           

                if (responses.STI === 1) {
                    STD =                 <div>
                       <Typography id="discrete-slider" gutterBottom>
                       STI <br/><br/><br/>
                        </Typography>
                        <Slider
                            defaultValue={3}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            min={0}
                            max={5}
                            valueLabelDisplay="on"
                            value={value}
                            onChange={handleChanges}
                            onClick={(e) => setWeightSTI(value)}
                        />
                       <br/><br/><br/> <br/>
                    </div>
                    } else {  };
           
                    if (responses.remember === 1) {
                        remember =                 <div>
                           <Typography id="discrete-slider" gutterBottom>
                           remember <br/><br/><br/>
                            </Typography>
                            <Slider
                                defaultValue={3}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                min={0}
                                max={5}
                                valueLabelDisplay="on"
                                value={value}
                                onChange={handleChanges}
                                onClick={(e) => setWeightremember(value)}
                            />
                           <br/><br/><br/> <br/>
                        </div>
                        } else {  };

                        if (responses.consistencyperiods === 1) {
                            consistencyperiods =                 <div>
                               <Typography id="discrete-slider" gutterBottom>
                               consistencyperiods <br/><br/><br/>
                                </Typography>
                                <Slider
                                    defaultValue={3}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={0}
                                    max={5}
                                    valueLabelDisplay="on"
                                    value={value}
                                    onChange={handleChanges}
                                    onClick={(e) => setWeightconsistencyperiods(value)}
                                />
                               <br/><br/><br/> <br/>
                            </div>
                            } else {  };                       
                 
                        if (responses.menstrualflow === 1) {
                            menstrualflow =                 <div>
                               <Typography id="discrete-slider" gutterBottom>
                               menstrualflow <br/><br/><br/>
                                </Typography>
                                <Slider
                                    defaultValue={3}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={0}
                                    max={5}
                                    valueLabelDisplay="on"
                                    value={value}
                                    onChange={handleChanges}
                                    onClick={(e) => setWeightmenstrualflow(value)}
                                />
                               <br/><br/><br/> <br/>
                            </div>
                            } else {  };            

                            if (responses.itprivate === 1) {
                                itprivate =                 <div>
                                   <Typography id="discrete-slider" gutterBottom>
                                   itprivate <br/><br/><br/>
                                    </Typography>
                                    <Slider
                                        defaultValue={3}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={1}
                                        min={0}
                                        max={5}
                                        valueLabelDisplay="on"
                                        value={value}
                                        onChange={handleChanges}
                                        onClick={(e) => setWeightitprivate(value)}
                                    />
                                   <br/><br/><br/> <br/>
                                </div>
                                } else {  } ;     

                            if (responses.discontinue === 1) {
                                discontinue =                 <div>
                                       <Typography id="discrete-slider" gutterBottom>
                                       discontinue <br/><br/><br/>
                                        </Typography>
                                        <Slider
                                            defaultValue={3}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            min={0}
                                            max={5}
                                            valueLabelDisplay="on"
                                            value={value}
                                            onChange={handleChanges}
                                            onClick={(e) => setWeightdiscontinue(value)}
                                        />
                                       <br/><br/><br/> <br/>
                                    </div>
                                    } else {  } ;    


    return (
         
      
        
        <div className={styles.background}>
        <p>hellox</p>
        {effective}
        {hormone}
        {STD}
        {remember}
        {consistencyperiods}
        {menstrualflow}
        {itprivate}
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
export default Weightings


