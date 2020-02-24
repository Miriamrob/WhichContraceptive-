import React from 'react'
import styles from './MethodCard.module.css'; 
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
                <hr/> 
                {method.hormonecheck} &nbsp; {method.hormones}
      </Typography>} else {  }
  if (responses.consistencyperiods === 1) {
    consistencyperiods = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                <hr/> {method.regularCheck} &nbsp; {method.consistencyperiods}
      </Typography>} else {  }    
  if (responses.consistencyperiods === 0.5) {
    consistencyperiods = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                <hr/> {method.stopCheck} &nbsp; {method.consistencyperiods}
      </Typography>} else {  }    
  if (responses.menstrualflow === 0) {
    menstrualflow = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                <hr/> {method.menstrualcheck} &nbsp; {method.menstrualflow}
      </Typography>} else {  }
  if (responses.itprivate === 1) {
    itprivate = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
              <hr/> {method.privatecheck}  &nbsp; {method.itprivate}
      </Typography>} else {  }
  if (responses.discontinue === 1) {
    discontinue = <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                <hr/> {method.regularDiscontinue} &nbsp; {method.discontinue}
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
                {method.effective}
                </Typography>
                {method.sortSTI === 0 ? 
                <Typography variant="h6" component="p"className={styles.NoSTI} style={{marginBottom: "10px"}}>
                {method.STI}
              </Typography>                
                 : 
                 <Typography variant="h6" component="p"className={styles.STI} style={{marginBottom: "10px"}}>
                 {method.STI}
               </Typography>
                 }

                <Typography variant="h6" color="textPrimary" component="p" style={{paddingBottom: "10px"}}>
                {method.remember}
                </Typography>
                {hormone}
                {consistencyperiods}
                {menstrualflow}
                {itprivate}
                {discontinue}
                
                

               





              </CardContent>
            </CardActionArea>
          </div>
        
        )
    }


export default MethodCard
