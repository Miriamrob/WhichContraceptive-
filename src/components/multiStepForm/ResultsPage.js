import React, {useState} from 'react';
import styles from '../Results.module.css'; 
import FinalMethodCard from '../FinalMethodCard';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function ResultsPage({ methods, responses, }){
    
    const [diaphragm, setDiaphragm] = useState(false);
    const [List, setList] = useState(methods);
      const addDiagpragm= (e)=>{
         setDiaphragm(true);
      }
     const sortBy = () => {
        console.log(List)
        const sorted = [...List].sort((a, b) => {
          return b.finalScore - a.finalScore;
        });
        setList(sorted);
      };    
 return(
    <div onMouseOver={sortBy} className={styles.background}>
<Typography variant="h4" style= {{float: "left", textAlign: "left"}} >Your most fitting results are </Typography>
      <div className={styles.row} >
      <div className={styles.column2}> 
            <Button variant="contained"  
        style={{backgroundColor: "white",
        textTransform: 'none', 
        fontSize: "20PX",
        float:"right"}}
        onClick={addDiagpragm}
        >  
          Diaphragm
                 </Button> 
            </div>
            <div className={styles.column}> 
            {diaphragm ? <FinalMethodCard method={methods[1]} responses={responses}/> : "" }
            </div>
         {List.slice(0,3).map((method, index) => (
              <div className={styles.column} key={index}>
              <FinalMethodCard key={index} index={index} method={method} responses={responses}/>
              </div>
            ))}
            
           
      </div> 
      
    </div>

 )
        


};

export default ResultsPage