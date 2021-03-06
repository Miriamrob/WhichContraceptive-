import React, { useState } from 'react'
import styles from './MultiStepForm.module.css'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function MultipleChoice({addResponsenoHormones, addResponseSTI, addResponseremember, addResponseregular, addResponsestop, addResponsemenstrualflow, addResponseitprivate, addResponsediscontinue, addSortResponse, addSteps, addWeighting}) {
    const [effectiveness] = useState(1);
    const [noHormones] = useState(1);
    const [STI] = useState(1);
    const [remember] = useState(1);
    const [stopperiods] = useState(1);
    const [regularperiods] = useState(1);
    const [menstrualflow] = useState(1);
    const [itprivate] = useState(1);
    const [discontinue] = useState(1);
    let sortingWhat;

    const stepss = 2;
         
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
    const funregular = (e) =>{
        addResponseregular(regularperiods);
        sortingWhat = 'regularperiods';
        addSortResponse(sortingWhat);
    };
    const funstop = (e) =>{
        addResponsestop(stopperiods);
        sortingWhat = 'stopperiods';
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
    const HtmlTooltip = withStyles(theme => ({
        tooltip: {
          backgroundColor: '#91A3EB',
          maxWidth: 220,
          color: "black",
          fontSize: '16px',
          border: '1px solid #dadde9',
        },
      }))(Tooltip);
        return (
            <div  className={styles.background}>
                 <Typography variant="h5"  gutterBottom>
                Step 1: What are you looking for in a contraceptive method? </Typography>
        <FormControl component="fieldset" style= {{float: "left", textAlign: "left"}} >

    
                        <br/>
                        <HtmlTooltip  title="Hormones can sometimes have secondary effects such as acne, weight gain or mood changes">
                        <Typography variant="body1" > <b> Do you want a method without <u style= {{color:"#405196"}}>hormones  </u>?</b></Typography>
                        </HtmlTooltip>
                        
                        <RadioGroup aria-label="noHormones" name="noHormones" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funnohormones}  label="Without hormones" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} label="Not an issue" />
                        </RadioGroup>
                        <br/>
                        <HtmlTooltip  title="Sexual Transmited Infections/Diseases (STI/STD) are infections that are commonly spread by sexual activity, especially vaginal intercourse, anal sex and oral sex">
                        <Typography variant="subtitle1" > <b> Do you want a method that prevents <u style= {{color:"#405196"}}>STIs/STDs</u>? </b></Typography>
                        </HtmlTooltip>
                        <RadioGroup aria-label="STI" name="STI" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funSTI}label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>}  label="Not an issue" />
                        </RadioGroup> 
                        <br/>
                        <HtmlTooltip  title="Some methods might require to be used each time before sex while others might last for years">
                        <Typography variant="subtitle1" > <b> Do you want something that requires less effort to <u style= {{color:"#405196"}}>remember</u> ?</b></Typography>
                        </HtmlTooltip>
                        <RadioGroup aria-label="remember" name="remember" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funremember}  label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>}  label="Not an issue" />
                        </RadioGroup> 
                        <br/>
                        <HtmlTooltip  title="Some methods can completly stop your period from happening while others will make it lighter or less frequent">
                        <Typography variant="subtitle1" > <b> Do you want a method that <u style= {{color:"#405196"}}>reduces or stops</u> your period? </b></Typography>
                        </HtmlTooltip> 

                        <RadioGroup aria-label="consistencyperiods" name="consistencyperiods" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funstop} label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>}   label="Not an issue" />
                        </RadioGroup> 

                        <br/>
                        <br/>
                        <HtmlTooltip  title="Some methods can force your period to regulate while others will keep the natural cycle of your period">
                        <Typography variant="subtitle1" > <b> Do you want a method that keeps your periods <u style= {{color:"#405196"}}>regular and consistent?</u>  </b></Typography>
                        </HtmlTooltip>

                        <RadioGroup aria-label="consistencyperiods" name="consistencyperiods" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funregular} label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} label="Not an issue" />
                        </RadioGroup> 

                        <br/>
                        <HtmlTooltip  title="Some methods can make your periods heavier and more painful">
                        <Typography variant="subtitle1" > <b> Do you mind having <u style= {{color:"#405196"}}>heavier periods?</u> </b></Typography>
                        </HtmlTooltip>

                        <RadioGroup aria-label="menstrualflow" name="menstrualflow" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funmenstrualflow} label="I mind" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>}  label="Not an issue"/>
                        </RadioGroup> 

                        <br/>
                        <HtmlTooltip  title="If you don't want anyone to know you are taking contraceptives, some methods will be easier to keep private than others">
                        <Typography variant="subtitle1" > <b> Do you want a method that is easy to <u style= {{color:"#405196"}}>keep private</u>? </b></Typography>
                        </HtmlTooltip>

                        <RadioGroup aria-label="itprivate" name="itprivate" >
                        <FormControlLabel value="1" control={<Radio color="primary"/>} onChange={funitprivate}  label="Yes" />
                        <FormControlLabel value="0" control={<Radio color="primary"/>} label="Not an issue" />
                        </RadioGroup> 

                        <br/>
                        <HtmlTooltip  title="Some methods will be easier to stop inmediatly than others that might require a GP or some time to loose their effect. This can be important if you are discontempt with the method or want to get pregnant soon">
                        <Typography variant="subtitle1" > <b> Do you want a method that will be easy to remove or stop if you wish to <u style= {{color:"#405196"}}>discontinue</u> it? </b></Typography>
                        </HtmlTooltip>

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
