import React, {useState} from 'react'
import styles from './FinalMethodCard.module.css'; 
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Cross from './multiStepForm/cross.png'
import CardActions from '@material-ui/core/CardActions';

function MethodCard({method, index, responses, addclose}) {
  let hormone;
  let regularperiods;
  let stopperiods;
  let menstrualflow;
  let itprivate;
  let discontinue;
  if (responses.noHormones === 1) {
    hormone = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                
                {method.hormonecheck} &nbsp; {method.hormones}
      </Typography>} else {  }
  if (responses.regularperiods === 1) {
    regularperiods = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                {method.regularCheck} &nbsp; {method.consistencyperiods}
      </Typography>} else { 
                regularperiods = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                {method.stopCheck} &nbsp; {method.consistencyperiods}
        </Typography>
       }       
  if (responses.menstrualflow === 0) {
    menstrualflow = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                 {method.menstrualcheck} &nbsp; {method.menstrualflow}
      </Typography>} else {  }
  if (responses.itprivate === 1) {
    itprivate = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
              {method.privatecheck}  &nbsp; {method.itprivate}
      </Typography>} else {  }
  if (responses.discontinue === 1) {
    discontinue = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
               {method.regularDiscontinue} &nbsp; {method.discontinue}
      </Typography>} else {  }      
 const [diaphragm, setDiaphragm] = useState(false);
 const [IUD, setIUD] = useState(false);
 const [IUS, setIUS] = useState(false);
 const [Pill1, setPill1] = useState(false);
 const [Pill2, setPill2] = useState(false);
 const [vaginalring, setvaginalring] = useState(false);
 const [patch, setpatch] = useState(false);
 const [condom, setcondom] = useState(false);
 const [girlcondom, setgirlcondom] = useState(false);
 const [implant, setimplant] = useState(false);
 const [calendar, setcalendar] = useState(false);
 const [inejction, setinjection] = useState(false);
    const closeCard =(event)=>{
      addclose(diaphragm, IUD, IUS, Pill1, Pill2, vaginalring, patch, condom, girlcondom, implant,calendar, inejction);
    };


          return (
           
    
            <div  className={styles.card} >
            <CardActionArea > 
         
            <img src={Cross} style={{ position: "absolute", top:"-15px", right:"-15px"}} onClick={() => closeCard(method.title)}/>
              
              <CardMedia className={styles.media} >
                {method.icon}
              </CardMedia>
              
                <div className = {styles.backgroundtitle} >
                {method.title}
                </div>
              <CardContent >
                
                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                <b>How it Works</b>
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                {method.explanation}
                </Typography>
                <hr/>
                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                <b>Pros and Cons</b>
                </Typography>
                
              
                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                <b style= {{color:"#405196"}}>{method.effective} </b>
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                {method.remember}
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                {method.STIcheck} &nbsp; {method.STI}
                </Typography>
                
                
               {hormone}
                {regularperiods}
                {stopperiods}
                {menstrualflow}
                {itprivate}
                {discontinue}
                <hr/>
                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                <b>Where to Get a {method.title}</b>
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                {method.where}
                </Typography>
                

               





              </CardContent>
            </CardActionArea>
          </div>
        
        )
    }


export default MethodCard
