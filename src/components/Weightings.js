import React, { useState } from 'react'
import styles from './multiStepForm/MultiStepForm.module.css'; 
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';



function Weightings({addSteps, responses, addWeighting, table, normalize, weighting, checkingScores, methods}) {
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
   
    const handleChanges = (e) => {
        e.preventDefault();     
        addWeighting(weighteffectiveness, weightnoHormones, weightSTI, weightremember, weightconsistencyperiods, weightmenstrualflow, weightitprivate, weigthdiscontinue );
      };
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSteps(stepss);
        addWeighting(weighteffectiveness, weightnoHormones, weightSTI, weightremember, weightconsistencyperiods, weightmenstrualflow, weightitprivate, weigthdiscontinue );
        normalize(weighting);
        
    };
 
    
    let hormone;
    let effective;
    let STD;
    let remember;
    let consistencyperiods;
    let menstrualflow;
    let itprivate;
    let discontinue;
    const marks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 5,
          label: '5',
        },
      ];
   
            effective = <div>
               <Typography  variant="subtitle1" style= {{float: "left", textAlign: "left"}}>
                   <b>Being good at preventing pregnancy</b>  <br/><br/><br/>
                </Typography>
                <Slider
                defaultValue={0}
                onChange={(event, newValue) => setWeightEffectiveness(newValue)}
                onChangeCommitted={handleChanges}
                step={1}
                min={0}
                max={5}
                valueLabelDisplay="on"
                value={value} 
                marks={marks}  
                />
               <br/><br/><br/> <br/>
            </div>;
            

        
        if (responses.noHormones === 1) {
            hormone =                 <div>
               <Typography  variant="subtitle1" style= {{float: "left", textAlign: "left"}}>
                    <b>Have no Hormones</b> <br/><br/><br/>
                </Typography>
                <Slider
                    defaultValue={0}
                    onChange={(event, newValue) => setWeightnoHormones(newValue)}
                    onChangeCommitted={handleChanges}
                    step={1}
                    min={0}
                    max={5}
                    valueLabelDisplay="on"
                    value={value}  
                    marks={marks}  
              
                />
               <br/><br/><br/> <br/>
            </div>
            } else {  };
           

                if (responses.STI === 1) {
                    STD =                 <div>
                       <Typography variant="subtitle1" style= {{float: "left", textAlign: "left"}}>
                       <b>Prevent from STIs/STDs</b> <br/><br/><br/>
                        </Typography>
                        <Slider
                                        defaultValue={0}
                                        onChange={(event, newValue) => setWeightSTI(newValue)}
                                        onChangeCommitted={handleChanges}
                                        step={1}
                                        min={0}
                                        max={5}
                                        valueLabelDisplay="on"
                                        value={value}   
                                        marks={marks}  

                        />
                       <br/><br/><br/> <br/>
                    </div>
                    } else {  };
           
                    if (responses.remember === 1) {
                        remember =                 <div>
                           <Typography variant="subtitle1" style= {{float: "left", textAlign: "left"}}>
                           <b>Is easy to remember</b> <br/><br/><br/>
                            </Typography>
                            <Slider
                                defaultValue={0}
                                onChange={(event, newValue) => setWeightremember(newValue)}
                                onChangeCommitted={handleChanges}
                                step={1}
                                min={0}
                                max={5}
                                valueLabelDisplay="on"
                                value={value}       
                                marks={marks}  

                            />
                           <br/><br/><br/> <br/>
                        </div>
                        } else {  };

                        if (responses.consistencyperiods === 1) {
                            consistencyperiods =                 <div>
                               <Typography variant="subtitle1" style= {{float: "left", textAlign: "left"}}>
                               <b>Makes/keeps periods regular</b> <br/><br/><br/>
                                </Typography>
                                <Slider
                                    defaultValue={0}
                                    onChange={(event, newValue) => setWeightconsistencyperiods(newValue)}
                                    onChangeCommitted={handleChanges}
                                    step={1}
                                    min={0}
                                    max={5}
                                    valueLabelDisplay="on"
                                    value={value}   
                                    marks={marks}  

                                />
                               <br/><br/><br/> <br/>
                            </div>
                            } else {  };                       
                 
                        if (responses.menstrualflow === 1) {
                            menstrualflow =                 <div>
                               <Typography variant="subtitle1" style= {{float: "left", textAlign: "left"}}>
                               <b>Doesn't increase periods</b> <br/><br/><br/>
                                </Typography>
                                <Slider
                                                 defaultValue={0}
                                                 onChange={(event, newValue) => setWeightmenstrualflow(newValue)}
                                                 onChangeCommitted={handleChanges}
                                                 step={1}
                                                 min={0}
                                                 max={5}
                                                 valueLabelDisplay="on"
                                                 value={value}   
                                                 marks={marks}  

                                />
                               <br/><br/><br/> <br/>
                            </div>
                            } else {  };            

                            if (responses.itprivate === 1) {
                                itprivate =                 <div>
                                   <Typography variant="subtitle1" style= {{float: "left", textAlign: "left"}}>
                                  <b>Is easy to keep private</b>  <br/><br/><br/>
                                    </Typography>
                                    <Slider
                                        defaultValue={0}
                                        onChange={(event, newValue) => setWeightitprivate(newValue)}
                                        onChangeCommitted={handleChanges}
                                        step={1}
                                        min={0}
                                        max={5}
                                        valueLabelDisplay="on"
                                        value={value}   
                                        marks={marks}  

                                    />
                                   <br/><br/><br/> <br/>
                                </div>
                                } else {  } ;     

                            if (responses.discontinue === 1) {
                                discontinue =                 <div>
                                       <Typography variant="subtitle1" style= {{float: "left", textAlign: "left"}}>
                                       <b>Is easy to stop at any time</b> <br/><br/><br/>
                                        </Typography>
                                        <Slider
                                                defaultValue={0}
                                                onChange={(event, newValue) => setWeightdiscontinue(newValue)}
                                                onChangeCommitted={handleChanges}
                                                step={1}
                                                min={0}
                                                max={5}
                                                valueLabelDisplay="on"
                                                value={value}   
                                                marks={marks}  

                                        />
                                       <br/><br/><br/> <br/>
                                    </div>
                                    } else {  } ;    


    return (
         
      
        
        <div className={styles.background}>
        <Typography variant="h5"  >
                Step 2: On a scale to 0 to 5 how important are these? </Typography>
            <Typography variant="h6"  style= {{float: "left", textAlign: "left", paddingBottom: "30px"}}>
                0 being the lowest (not important) and 5 the highest (extremly important) </Typography>
                <br/>
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


