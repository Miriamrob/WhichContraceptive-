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
            
            <DialogTitle id="alert-dialog-title">{method.title}</DialogTitle>
            <div>
              <div className={styles.row}>
                  <div className={styles.media}>{method.icon}</div>
              
                  <div className={styles.column}>
                    <DialogContentText id="alert-dialog-description">
                      {method.effective}
                      <br/>
                      {method.STI}
                      <br/>
                      {method.remember}
                      <br/>
                      {method.hormones}
                      <br/>
                      {method.consistencyperiods}
                      <br/>
                      {method.menstrualflow}
                      <br/>
                      {method.itprivate}
                      <br/>
                      {method.discontinue}
                    </DialogContentText>
                  </div>
              </div>
              <div className={styles.row}>
              <div className={styles.column}>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
              </DialogContentText>
              </div>
              <div className={styles.column}>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
              </DialogContentText>
              </div>
              </div>
             
            </div>
    
          </Dialog>
        )
    }


export default InformationalCard
