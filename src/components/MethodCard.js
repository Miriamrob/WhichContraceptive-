import React, {useState} from 'react'
import styles from './MethodCard.module.css'; 
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function MethodCard({method, index, responses, openCard, themethodtitle}) {
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
  if (responses.regularperiods || responses.stopperiods=== 1) {
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

      const [open] = useState(true);
      const [methodtitle] = useState(method.title);
      const handleOpen = (e) =>{
        openCard(open);
        themethodtitle(methodtitle)
      };
 
          return (
    
            <div  className={styles.card}>
            <CardActionArea onClick={handleOpen}>
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
                <div className={styles.slideFade}>
                  <div className={styles.show}> {hormone}</div>
                
                {consistencyperiods}
                {menstrualflow}
                {itprivate}
                {discontinue}
                </div>
                
                
                

               





              </CardContent>
            </CardActionArea>
          </div>
        
        )
    }


export default MethodCard
