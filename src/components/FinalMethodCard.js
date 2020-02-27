import React from 'react'
import styles from './FinalMethodCard.module.css'; 
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function MethodCard({method, index, responses}) {
  let hormone;
  let consistencyperiods;
  let menstrualflow;
  let itprivate;
  let discontinue;
  if (responses.noHormones === 1) {
    hormone = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                
                {method.hormonecheck} &nbsp; {method.hormones}
      </Typography>} else {  }
  if (responses.consistencyperiods === 1) {
    consistencyperiods = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                {method.regularCheck} &nbsp; {method.consistencyperiods}
      </Typography>} else {  }    
  if (responses.consistencyperiods === 0.5) {
    consistencyperiods = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                 {method.stopCheck} &nbsp; {method.consistencyperiods}
      </Typography>} else {  }    
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




          return (
    
            <div  className={styles.card}>
            <CardActionArea>
              <CardMedia className={styles.media}>
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
                {method.remember}
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                {method.STI}
                </Typography>
                {hormone}
                {consistencyperiods}
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
