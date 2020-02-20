import React, { useState } from 'react'
import styles from './MultiStepForm.module.css'; 
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

function valuetext(value) {
    return `${value}`;
  }

function WeightPreferences({addSteps, responses , addWeighting}) {

    const [weighteffectiveness, setWeightEffectiveness] = useState();
    const [weightSTI, setWeightSTI] = useState();
    const [weightremember, setWeightremember] = useState();
    const [weightconsistencyperiods, setWeightconsistencyperiods] = useState();
    const [weightmenstrualflow, setWeightmenstrualflow] = useState();
    const [weightitprivate, setWeightitprivate] = useState();
    const [weigthdiscontinue, setWeightdiscontinue] = useState();
    const step = 3;
    const [weightnoHormones, setWeightnoHormones] = useState(4);
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSteps(step);
    };
   

    

    let hormone;
    let effective;
    let STD;
    let remember;
    let consistencyperiods;
    let menstrualflow;
    let itprivate;
    let discontinue;

       /* if (responses.effectiveness === 1) {
            effective =                 <div>
               <Typography id="discrete-slider" gutterBottom>
                    Effectiveness <br/><br/><br/>
                </Typography>
                <Slider
                    defaultValue={3}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={5}
                    valueLabelDisplay="on"
            
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
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={5}
                    valueLabelDisplay="on"
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
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={5}
                            valueLabelDisplay="on"
                            onChange={(e) => setWeightnoHormones(3)}
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
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={0}
                                max={5}
                                valueLabelDisplay="on"
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
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={5}
                                    valueLabelDisplay="on"
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
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={5}
                                    valueLabelDisplay="on"
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
                                        getAriaValueText={valuetext}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={1}
                                        marks
                                        min={0}
                                        max={5}
                                        valueLabelDisplay="on"
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
                                            getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={0}
                                            max={5}
                                            valueLabelDisplay="on"
                                        />
                                       <br/><br/><br/> <br/>
                                    </div>
                                    } else {  } ;    */ 


        return (
            <div  className={styles.background} style= {{float: "left", textAlign: "left"}}>
                <Typography variant="h6"  gutterBottom>
                On a scale to 0 to 5 how important are this </Typography>
               
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
                    fontSize: "20PX"}}
                    onClick={handleSubmit}
                    >
                        Get my results
                        </Button>


            </div>
            
        )
    }


export default WeightPreferences
