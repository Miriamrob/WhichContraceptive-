import React from 'react'
import styles from './InformationalCard.module.css'; 
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


function InformationalCard({open, handleClose, method}) {

          return (
            <Dialog
            open={open}
            onClose={handleClose}
          >
            
                    <DialogActions >
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
            
            <DialogTitle className={styles.backgroundtitle}>{method.title}</DialogTitle>
            <div>
              <div className={styles.row}>
                  <div className={styles.media}>
                  <div className={styles.smth}>  
                    {method.icon}
                    </div>
                    </div>
              
                  <div className={styles.column}>
                    <Typography variant="h6" color="textPrimary" component="p">
                      <br/>
                      {method.effective}
                      <br/>
                      {method.remember}
                      
                      <br/>
                      {method.STIcheck} &nbsp;
                      {method.STI}
                      <br/>
                      {method.hormonecheck}  &nbsp;
                      {method.hormones}
                      
                      <br/>
                      {method.stopCheck} &nbsp;
                      {method.consistencyperiods}
                      <br/>
                      {method.regularCheck} &nbsp;
                      {method.menstrualflow}
                      <br/>
                      {method.privatecheck} &nbsp;
                      {method.itprivate}
                      <br/>
                      {method.regularDiscontinue} &nbsp;
                      {method.discontinue}
                    </Typography>
  
                  </div>
              </div>
              <div style={{padding: '20px'}}>
              <DialogContentText  id="alert-dialog-description">
              <div className={styles.row}>
              
              <hr/>
             
                <Typography variant="h7">
                  <b>How it works</b></Typography>
                 
                  <Typography variant="body1">
                  {method.explanation}
                </Typography>
                <hr/>
              </div>
              <Typography variant="h7">
                  <b>Where to get it</b></Typography>
              <div className={styles.row}>
              <Typography variant="body1">
              {method.where}
              </Typography>
              </div>
              </DialogContentText>
             
            </div>
            </div>
          </Dialog>
        )
    }


export default InformationalCard
