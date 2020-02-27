import React, {useState} from 'react';
import styles from '../Results.module.css'; 
import MethodCard from '../MethodCard';

function ResultsPage({table, normalize, weighting, checkingScores, methods, methodsList, responses, setMethodsList}){
    const handleSubmit = (e) =>{
         checkingScores({methods, table});
     };
     const calculating = (e) =>{
        checkingScores({methods, table});
    };

     console.log('methodsList[1].finalScore')

     console.log(methodsList[1].finalScore)
     const sortBy = () => {
        const sorted = [...methodsList].sort((a, b) => {
          return b.methodsList.finalScore - a.methodsList.finalScore;
        });
         setMethodsList(sorted);
      };    
 return(
    <div  onLoad={handleSubmit} className={styles.background}>
<p onClick={calculating}>helloo</p>
<p onClick={sortBy}>onclick</p>
{methodsList.map((method, index) => (
              <div className={styles.column } key={index}>
              <MethodCard key={index} index={index} method={method} responses={responses}/>
              </div>
            ))}
    </div>

 )
        


};

export default ResultsPage