import React, {useState} from 'react';


function ResultsPage({table, normalize, weighting, checkingScores, methods}){
    const handleSubmit = (e) =>{
         normalize(weighting);
         checkingScores({methods, table});
     };
 return(
    <div>
<p onClick={handleSubmit}> helgggglo</p>
<div>{JSON.stringify(table)}</div>
    </div>

 )


};

export default ResultsPage