import React, { useState } from 'react';
import styles from './MultiStepForm.module.css'; 
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Explanation({addSteps}) {
  const stepss = 1;
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSteps(stepss);};


        return (
            <div  className={styles.background}>
            <CardContent>
              <Typography variant="h4" className={styles.title} gutterBottom>
              Welcome to Which Contraception! 
            </Typography>
              <Typography variant="subtitle1" >
              <br />
              <b>The tool that helps you find which method works best for you. Take this 2 step quiz to find what contraceptives are the most fitting for you.</b>
              </Typography>
              <Typography variant="subtitle1" component="p">

                <br />
                You will be able to see all the available methods on the right and these will reorder themselves based on your answers. However, you won’t be able to calculate your final results until you complete all the steps
              </Typography>
            </CardContent>
            <br />
            <Button variant="contained"  
            style={{backgroundColor: " #405196",
             color: "white", 
             textTransform: 'none', 
             fontSize: "20PX"}}
            onClick= {handleSubmit}
             >
                 Lets Start!
                 </Button>
          </div>
      





        )
    }


export default Explanation
