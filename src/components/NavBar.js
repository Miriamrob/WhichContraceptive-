import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static" style={{backgroundColor: "#405196"}}>
                <Toolbar>
                    <Typography style={{fontSize: "30px"}} >
                        Which Contraceptive?
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;