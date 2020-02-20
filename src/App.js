import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Weightings from './components/Weightings';
import ResultsPage from './components/multiStepForm/ResultsPage';

import MethodCard from './components/MethodCard';
import IUD from'./components/MethodIcons/IUD.svg';
import IUS from'./components/MethodIcons/IUS.svg';
import Injection from'./components/MethodIcons/Injection.svg';
import Diaphragm from'./components/MethodIcons/diaphragm.svg';
import Girlcondom from'./components/MethodIcons/girlcondom.svg';
import Condom from'./components/MethodIcons/Condom.svg';
import Calendar from'./components/MethodIcons/calendar.svg';
import Contraceptivepatch from'./components/MethodIcons/contraceptivepatch.svg';
import Implant from'./components/MethodIcons/Implant.svg';
import Pill1 from'./components/MethodIcons/pill1.svg';
import Pill2 from'./components/MethodIcons/pill2.svg';
import Vaginalring from'./components/MethodIcons/vaginalring.svg';
import Check from'./components/MethodIcons/check.svg';
import Cross from'./components/MethodIcons/cross.png';

import styles from './components/MethodCard.module.css'; 
import MultipleChoice from './components/multiStepForm/MultipleChoice';
import Explanation from './components/multiStepForm/Explanation';
import WeightPreferences from './components/multiStepForm/WeightPreferences';
import { formatMs } from '@material-ui/core';

function App() {
  const [responses, setResponses] = useState([
   { effectiveness: '',
    noHormones:'',
    STI:'',
    remember: '',
    consistencyperiods:'',
    menstrualflow: '',
    itprivate:'',
    discontinue: '',
  },
]);

function addResponse(effectiveness, noHormones, STI, remember, consistencyperiods, menstrualflow, itprivate, discontinue) {
  setResponses( {effectiveness, noHormones, STI, remember, consistencyperiods, menstrualflow, itprivate, discontinue,});
};
const [weighting, setWeighting] = useState([
  {weighteffectiveness: 0,
  weightnoHormones: 0,
  weightSTI: 0,
  weightremember: 0,
  weightconsistencyperiods: 0,
  weightmenstrualflow: 0,
  weightitprivate: 0,
  weigthdiscontinue: 0,
  }
]);
function addWeighting(weighteffectiveness, weightnoHormones, weightSTI, weightremember, weightconsistencyperiods, weightmenstrualflow, weightitprivate, weigthdiscontinue ) {
  setWeighting({weighteffectiveness, weightnoHormones, weightSTI, weightremember, weightconsistencyperiods, weightmenstrualflow, weightitprivate, weigthdiscontinue});
  };

  const [methods, setMethods] = useState([
      {
          title: "IUD",
          icon: <img  src={IUD}/>,
          effective: "99% Effective",
          STI: "No STI/STD Prevention",
          remember: "Lasts up to 3-12 years",
          hormones: "No hormones",
          hormonecheck: <img  src={Check}/>,
          consistencyperiods:"Natural Regular Periods",
          stopCheck: <img  src={Cross}/>,
          regularCheck: <img  src={Check}/>, 
          menstrualflow:"Heavy menstrual Flow",
          menstrualcheck: <img  src={Cross}/>,
          itprivate:"Easy to Keep Private",
          privatecheck: <img  src={Check}/>,
          discontinue: "Not Easy to Stop",
          regularDiscontinue: <img  src={Cross}/>, 
          sortEffective: 0.99,
          sortHormones: 1,
          sortSTI: 0,
          sortRemember: 1,
          sortConsistencyperiods: 1,
          sortMenstrualflow: 0,
          sortItprivate: 1,
          sortDiscontinue: 0,
          finalScore: '',
      },
      {
          title: "IUS",
          icon: <img  src={IUS}/>,
          effective: "99% Effective",
          STI: "No STI/STD Prevention",
          remember: "Lasts up to 3-12 years",
          hormones: "Low Hormone Levels",
          hormonecheck: <img  src={Cross}/>,
          consistencyperiods:"Stops / Reduces Periods",
          stopCheck: <img  src={Check}/>,
          regularCheck: <img  src={Cross}/>, 
          menstrualflow:"Lighter Periods",
          menstrualcheck: <img  src={Check}/>,
          itprivate:"Easy to Keep Private",
          privatecheck: <img  src={Check}/>,
          discontinue: "Not Easy to Stop",
          regularDiscontinue: <img  src={Cross}/>, 
          sortEffective: 0.99,
          sortHormones: 0.5,
          sortSTI: 0,
          sortRemember: 1,
          sortConsistencyperiods: 0.5,
          sortMenstrualflow: 1,
          sortItprivate: 1,
          sortDiscontinue: 0,
          finalScore: '',
      },
      
      {
          title: "INJECTION",
          icon: <img  src={Injection}/>,
          effective: "94% Effective",
          STI: "No STI/STD Prevention",
          remember: "Get every 3 months",
          hormones: "Low Hormone Levels",
          hormonecheck: <img  src={Cross}/>,
          consistencyperiods:"Stops / Reduces Periods",
          stopCheck: <img  src={Check}/>,
          regularCheck: <img  src={Cross}/>, 
          menstrualflow:"Regular Menstrual Flow",
          itprivate:"Easy to Keep Private",
          privatecheck: <img  src={Check}/>,
          discontinue: "Not Easy to Stop",
          regularDiscontinue: <img  src={Cross}/>, 
          sortEffective: 0.94,
          sortHormones: 0.5,
          sortSTI: 0,
          sortRemember: 1,
          sortConsistencyperiods: 0.5,
          sortMenstrualflow: 0.5,
          sortItprivate: 1,
          sortDiscontinue: 0,
          finalScore: '',
      },
     
      {
        title: "DIAPHRAGM",
        icon: <img  src={Diaphragm}/>,
        effective: "88% Effective",
        STI: "No STI/STD Prevention",
        remember: "Use Everytime",
        hormones: "No Hormones",
        hormonecheck: <img  src={Check}/>,
        consistencyperiods:"Natural Regular Periods",
        stopCheck: <img  src={Cross}/>,
        regularCheck: <img  src={Check}/>, 
        menstrualflow:"Regular Menstrual Flow",
        itprivate:"Not Easy to Keep Private",
        privatecheck: <img  src={Cross}/>,
        discontinue: "Easy to Stop",
        regularDiscontinue: <img  src={Check}/>, 
        sortEffective: 0.88,
        sortHormones: 1,
        sortSTI: 0,
        sortRemember: 0,
        sortConsistencyperiods: 1,
        sortMenstrualflow: 0.5,
        sortItprivate: 0,
        sortDiscontinue: 1,
        finalScore: '',
    },
   
    {
      title: "CONDOM",
      icon: <img  src={Condom}/>,
      effective: "85% Effective",
      STI: "STI/STD Prevention",
      remember: "Use Everytime",
      hormones: "No Hormones",
      hormonecheck: <img  src={Check}/>,
      consistencyperiods:"Natural Regular Periods",
      stopCheck: <img  src={Cross}/>,
      regularCheck: <img  src={Check}/>, 
      menstrualflow:"Regular Menstrual Flow",
      itprivate:"Not Easy to Keep Private",
      privatecheck: <img  src={Cross}/>,
      discontinue: "Easy to Stop",
      regularDiscontinue: <img  src={Check}/>, 
      sortEffective: 0.85,
      sortHormones: 1,
      sortSTI: 1,
      sortRemember: 0,
      sortConsistencyperiods: 1,
      sortMenstrualflow: 0.5,
      sortItprivate: 0,
      sortDiscontinue: 1,
      finalScore: '',
  },    

    {
      title: "IMPLANT",
      icon: <img  src={Implant}/>,
      effective: "99% Effective",
      STI: "No STI/STD Prevention",
      remember: "Lasts up to 5 years",
      hormones: "Low Hormone Levels",
      hormonecheck: <img  src={Cross}/>,
      consistencyperiods: "Stops / Reduces Periods",
      stopCheck: <img  src={Check}/>,
      regularCheck: <img  src={Cross}/>, 
      menstrualflow:"Regular Menstrual Flow",
      itprivate:"Easy to Keep Private",
      privatecheck: <img  src={Check}/>,
      discontinue: "Not Easy to Stop",
      regularDiscontinue: <img  src={Cross}/>, 
      sortEffective: 0.99,
      sortHormones: 0.5,
      sortSTI: 0,
      sortRemember: 1,
      sortConsistencyperiods: 1,
      sortMenstrualflow: 0.5,
      sortItprivate: 1,
      sortDiscontinue: 0,
      finalScore: '',
  },    

  {
    title: "FERTILITY AWARENESS",
    icon: <img  src={Calendar}/>,
    effective: "75% Effective",
    STI: "No STI/STD Prevention",
    remember: "Use daily",
    hormones: "No Hormones",
    hormonecheck: <img  src={Check}/>,
    consistencyperiods: "Natural Regular Periods",
    stopCheck: <img  src={Cross}/>,
    regularCheck: <img  src={Check}/>, 
    menstrualflow:"Regular Menstrual Flow",
    itprivate:"Easy to Keep Private",
    privatecheck: <img  src={Check}/>,
    discontinue: "Easy to Stop",
    regularDiscontinue: <img  src={Check}/>, 
    sortEffective: 0.75,
    sortHormones: 1,
    sortSTI: 0,
    sortRemember: 0,
    sortConsistencyperiods: 1,
    sortMenstrualflow: 0.5,
    sortItprivate: 1,
    sortDiscontinue: 1,
    finalScore: '',
},    

  {
    title: "FEMALE CONDOM",
    icon: <img  src={Girlcondom}/>,
    effective: "79% Effective",
    STI: "STI/STD Prevention",
    remember: "Use every time",
    hormones: "No Hormones",
    hormonecheck: <img  src={Check}/>,
    consistencyperiods: "Natural Regular Periods",
    stopCheck: <img  src={Cross}/>,
    regularCheck: <img  src={Check}/>, 
    menstrualflow:"Regular Menstrual Flow",
    itprivate:"Not Easy to Keep Private",
    privatecheck: <img  src={Cross}/>,
    discontinue: "Easy to Stop",
    regularDiscontinue: <img  src={Check}/>, 
    sortEffective: 0.79,
    sortHormones: 1,
    sortSTI: 1,
    sortRemember: 0,
    sortConsistencyperiods: 1,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
  },  

  {
    title: "MINI PILL",
    icon: <img  src={Pill1}/>,
    effective: "92% Effective",
    STI: "No STI/STD Prevention",
    remember: "Use daily",
    hormones: "Low Hormone Levels",
    hormonecheck: <img  src={Cross}/>,
    consistencyperiods: "Stops / Reduces Periods",
    stopCheck: <img  src={Check}/>,
    regularCheck: <img  src={Cross}/>, 
    menstrualflow:"Regular Menstrual Flow",
    itprivate:"Not Easy to Keep Private",
    privatecheck: <img  src={Cross}/>,
    discontinue: "Easy to Stop",
    regularDiscontinue: <img  src={Check}/>, 
    sortEffective: 0.92,
    sortHormones: 0.5,
    sortSTI: 0,
    sortRemember: 0,
    sortConsistencyperiods: 1,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
  },   

  {
    title: "VAGINAL RING",
    icon: <img  src={Vaginalring}/>,
    effective: "91% Effective",
    STI: "No STI/STD Prevention",
    remember: "Replace Monthly",
    hormones: "Hormones",
    hormonecheck: <img  src={Cross}/>,
    consistencyperiods: "Regular Periods",
    stopCheck: <img  src={Cross}/>,
    regularCheck: <img  src={Check}/>, 
    menstrualflow:"Regular Menstrual Flow",
    itprivate:"Not Easy to Keep Private",
    privatecheck: <img  src={Cross}/>,
    discontinue: "Easy to Stop",
    regularDiscontinue: <img  src={Check}/>, 
    sortEffective: 0.91,
    sortHormones: 0,
    sortSTI: 0,
    sortRemember: 0.5,
    sortConsistencyperiods: 1,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
  }, 

  {
    title: "PATCH",
    icon: <img  src={Contraceptivepatch}/>,
    effective: "92% Effective",
    STI: "No STI/STD Prevention",
    remember: "Replace Monthly",
    hormones: "Hormones",
    hormonecheck: <img  src={Cross}/>,
    consistencyperiods: "Regulates Periods",
    stopCheck: <img  src={Cross}/>,
    regularCheck: <img  src={Check}/>, 
    menstrualflow:"Regular Menstrual Flow",
    itprivate:"Not Easy to Keep Private",
    privatecheck: <img  src={Cross}/>,
    discontinue: "Easy to Stop",
    regularDiscontinue: <img  src={Check}/>, 
    sortEffective: 0.92,
    sortHormones: 0,
    sortSTI: 0,
    sortRemember: 0.5,
    sortConsistencyperiods: 1,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
  }, 

  {
    title: "COMBINED PILL",
    icon: <img  src={Pill2}/>,
    effective: "92% Effective",
    STI: "No STI/STD Prevention",
    remember: "Take daily",
    hormones: "Hormones",
    hormonecheck: <img  src={Cross}/>,
    consistencyperiods: "Regulates Periods",
    stopCheck: <img  src={Cross}/>,
    regularCheck: <img  src={Check}/>, 
    menstrualflow:"Regular Menstrual Flow",
    itprivate:"Not Easy to Keep Private",
    privatecheck: <img  src={Cross}/>,
    discontinue: "Easy to Stop",
    regularDiscontinue: <img  src={Check}/>, 
    sortEffective: 0.92,
    sortHormones: 0,
    sortSTI: 0,
    sortRemember: 0.5,
    sortConsistencyperiods: 1,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
  }, 
    ]
  );
 
  const [sortResponses, setSortResponses] = useState([ { sortingWhat: '', }, ]);
  let sortBySTI;
  function addSortResponse(sortingWhat) {
    setSortResponses( {sortingWhat});
  };

    const [methodsList, setMethodsList] = useState(methods);
    switch (sortResponses.sortingWhat) {
      case 'hormone':
          sortBySTI = () => {
          const sorted = [...methodsList].sort((a, b) => {
            return b.sortHormones - a.sortHormones;
          });
           setMethodsList(sorted);
        };    
        break;
      case 'STI':
         sortBySTI = () => {
          const sorted = [...methodsList].sort((a, b) => {
            return b.sortSTI - a.sortSTI;
          });
           setMethodsList(sorted);
        };
        break;
        case 'effective':
         sortBySTI = () => {
          const sorted = [...methodsList].sort((a, b) => {
            return b.sortEffective - a.sortEffective;
          });
           setMethodsList(sorted);
        };
        break;
        case 'remember':
         sortBySTI = () => {
          const sorted = [...methodsList].sort((a, b) => {
            return b.sortRemember - a.sortRemember;
          });
           setMethodsList(sorted);
        };
        break;
        case 'regularperiods':
         sortBySTI = () => {
          const sorted = [...methodsList].sort((a, b) => {
            return b.sortConsistencyperiods - a.sortConsistencyperiods;
          });
           setMethodsList(sorted);
        };
        break;
        case 'lightperiods':
          sortBySTI = () => {
           const sorted = [...methodsList].sort((a, b) => {
             return b.sortMenstrualflow - a.sortMenstrualflow;
           });
            setMethodsList(sorted);
         };
         break;
         case 'itprivate':
          sortBySTI = () => {
           const sorted = [...methodsList].sort((a, b) => {
             return b.sortItprivate - a.sortItprivate;
           });
            setMethodsList(sorted);
         };
         break;
         case 'discontinue':
          sortBySTI = () => {
           const sorted = [...methodsList].sort((a, b) => {
             return b.sortDiscontinue - a.sortDiscontinue;
           });
            setMethodsList(sorted);
         };
         break;
      default:
        break;
    }
    const [table, setTable] = useState([{
    normalizedweighteffectiveness: '',
    normalizedweightnoHormones:'',
    normalizedweightSTI:'',
    normalizedweightremember: '',
    normalizedweightconsistencyperiods:'',
    normalizedweightmenstrualflow: '',
    normalizedweightitprivate:'',
    normalizedweigthdiscontinue: '',}]);

    function normalize(weighting){
      setTable({ normalizedweighteffectiveness : (weighting.weighteffectiveness / (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightconsistencyperiods+ weighting.weightitprivate)),
      normalizedweightnoHormones : (weighting.weightnoHormones/ (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightconsistencyperiods+ weighting.weightitprivate )) ,
      normalizedweightSTI : (weighting.weightSTI/ (weighting.weighteffectiveness + weighting.weightSTI + weighting.weightnoHormones + weighting.weightconsistencyperiods+ weighting.weightitprivate )),
      normalizedweightremember : (weighting.weightremember/ (weighting.weighteffectiveness + weighting.weightSTI + weighting.weightnoHormones + weighting.weightconsistencyperiods+ weighting.weightitprivate )),
      normalizedweightconsistencyperiods : (weighting.weightconsistencyperiods/ (weighting.weighteffectiveness + weighting.weightnoHormones +weighting.weightSTI + weighting.weightconsistencyperiods+ weighting.weightitprivate ) ),
      normalizedweightmenstrualflow : (weighting.weightmenstrualflow/ (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightconsistencyperiods+ weighting.weightitprivate ) ),
      normalizedweightitprivate : (weighting.weightitprivate/ (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightconsistencyperiods+ weighting.weightitprivate ) ),
      normalizedweigthdiscontinue : (weighting.weigthdiscontinue/ (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightconsistencyperiods+ weighting.weightitprivate ) ),
      
    })};
      
    
    const [finalscores, setFinalscores] = useState(
      {
        finalIUS: '',
      }
    );

    function checkingScores({methods, table}){

      var i = 0;
      for (i=0; i<methods.length; i++){
        var this_test = methods[i].sortEffective * table.normalizedweighteffectiveness
        + methods[i].sortHormones * table.normalizedweightnoHormones;
  
        methods[i].finalScore = this_test
      };
    };

    const [steps, setSteps] = useState([ { stepss: 0, }, ]);
    function addSteps(stepss) {
      setSteps( {stepss});
    };
    let leftside;
    switch (steps.stepss) {
      case 0:
        leftside = <Explanation addSteps={addSteps}/>;
        break;
      case 1:
          leftside =  <MultipleChoice addResponse={addResponse} addSortResponse = {addSortResponse} addSteps={addSteps} addWeighting ={addWeighting}/>;
          break;
      case 2:
          leftside = <Weightings addSteps={addSteps} responses={responses} addWeighting ={addWeighting}  />;
          break;
      case 3:
    leftside = <ResultsPage table={table} finalscores={finalscores} normalize={normalize} weighting={weighting} checkingScores={checkingScores} table={table} methods ={methods}/>
          break;   
      default:
        leftside = <Explanation addSteps={addSteps} addWeighting ={addWeighting}/>;
        break;
    }


    
    return(
    <div className="App">
      
        <NavBar />
     
        { console.log(table) }

        
        <div className={styles.container} >
        
       
          <div className={styles.row} >
            {methodsList.map((method, index) => (
              <div className={styles.column}>
              <MethodCard key={index} index={index} method={method} responses={responses}/>
              </div>
            ))}
          </div> 
        </div>
       <div onMouseOver={sortBySTI}>
       {leftside}
     </div>
     </div>
     
  );

}

export default App;