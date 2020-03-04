import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Weightings from './components/Weightings';
import ResultsPage from './components/multiStepForm/ResultsPage';
import Reviewanswers from './components/multiStepForm/Reviewanswers';
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
import InformationalCard from './components/InformationalCard';
import styles from './components/MethodCard.module.css'; 
import MultipleChoice from './components/multiStepForm/MultipleChoice';
import Explanation from './components/multiStepForm/Explanation';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

function App() {
  const [responses, setResponses] = useState([]);

function addResponsenoHormones(noHormones) {
  setResponses( {...responses, noHormones,});};
function addResponseSTI( STI) {
  setResponses( {...responses, STI,});};
function addResponseremember(remember) {
  setResponses( {...responses, remember,});};
function addResponseregular(regularperiods) {
  setResponses( {...responses, regularperiods,});};
function addResponsemenstrualflow( menstrualflow) {
  setResponses( {...responses, menstrualflow,});};
function addResponseitprivate( itprivate) {
  setResponses( {...responses,  itprivate,});};
function addResponsediscontinue( discontinue) {
  setResponses( {...responses, discontinue,});};
function addResponsestop( stopperiods){
  setResponses({...responses, stopperiods})
}

  const [weighting, setWeighting] = useState([
  {weighteffectiveness: 0,
  weightnoHormones: 0,
  weightSTI: 0,
  weightremember: 0,
  weightregularperiods: 0,
  weightstopperiods: 0,
  weightmenstrualflow: 0,
  weightitprivate: 0,
  weigthdiscontinue: 0,
  }
]);
function addWeighting(weighteffectiveness, weightnoHormones, weightSTI, weightremember, weightregularperiods, weightstopperiods, weightmenstrualflow, weightitprivate, weigthdiscontinue ) {
  setWeighting({weighteffectiveness, weightnoHormones, weightSTI, weightremember, weightregularperiods, weightstopperiods, weightmenstrualflow, weightitprivate, weigthdiscontinue});
  };

  const [methods] = useState([
      {
          id:'IUD',
          title: "IUD",
          icon: <img  src={IUD}/>,
          effective: "99% Effective",
          STI: "No STI/STD Prevention",
          STIcheck: <img  src={Cross}/>,
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
          sortregularperiods: 1,
          sortstopperiods: 0,
          sortMenstrualflow: 0,
          sortItprivate: 1,
          sortDiscontinue: 0,
          finalScore: '',
          explanation: "The IUD is a small plastic device that is placed in the Uterus. The copper in the device is toxic to sperm and also prevents a fertilised egg implanting in the womb.",
          where:'The IUD needs to be fitted by a specially trained doctor or nurse. It is available free of charge from contraceptive clinics, your GP'

      },
      {
          title: "IUS",
          icon: <img  src={IUS}/>,
          effective: "99% Effective",
          STI: "No STI/STD Prevention",
          STIcheck: <img  src={Cross}/>,
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
          sortregularperiods: 0,
          sortstopperiods: 1,
          sortMenstrualflow: 1,
          sortItprivate: 1,
          sortDiscontinue: 0,
          finalScore: '',
          explanation: " The IUS works in three ways to prevent the egg being fertilised by sperm. The IUS interrupts this process by: Thickening the mucus around the cervix, which makes it harder for sperm to get through and reach an egg. Makes the lining of the womb thinner so that a fertilised egg cannot implant. In some women it can also stop ovulation (when ovaries release an egg), although most women continue to ovulate.",
          where:'The IUS needs to be fitted by a specially trained doctor or nurse. It is available free of charge from contraceptive clinics, your GP'

      },
      
      {
          title: "INJECTION",
          icon: <img  src={Injection}/>,
          effective: "94% Effective",
          STI: "No STI/STD Prevention",
          STIcheck: <img  src={Cross}/>,
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
          sortEffective: 0.7916666667,
          sortHormones: 0.5,
          sortSTI: 0,
          sortRemember: 1,
          sortregularperiods: 0,
          sortstopperiods: 1,
          sortMenstrualflow: 0.5,
          sortItprivate: 1,
          sortDiscontinue: 0,
          finalScore: '',
          explanation: "The injection works in three ways to interrupt pregnancy: It stops ovulation. It thickens the mucus around the cervix, which makes it harder for sperm to get through. It makes the lining of the womb thinner so that a fertilised egg cannot implant",
          where:'The injection is available free of charge from contraceptive clinics, your GP'


      },
     
      {
        title: "DIAPHRAGM",
        icon: <img  src={Diaphragm}/>,
        effective: "88% Effective",
        STI: "No STI/STD Prevention",
        STIcheck: <img  src={Cross}/>,
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
        sortEffective: 0.5416666667,
        sortHormones: 1,
        sortSTI: 0,
        sortRemember: 0,
        sortregularperiods: 1,
        sortstopperiods: 0,
        sortMenstrualflow: 0.5,
        sortItprivate: 0,
        sortDiscontinue: 1,
        finalScore: '',
        explanation: " Diaphragms are dome-shaped devices (of either latex or silicone) that fit into the vagina and over the cervix. They work by stopping sperm from entering the womb by covering the cervix.",
        where:'Diaphragms and caps must be fitted by a trained doctor or nurse on the first occasion. You can get diaphragms and caps from Brook services, contraception clinics, GUM clinics and some GP surgeries.'
    },
   
    {
      title: "CONDOM",
      icon: <img  src={Condom}/>,
      effective: "85% Effective",
      STI: "STI/STD Prevention",
      STIcheck: <img  src={Check}/>,
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
      sortEffective: 0.4166666667,
      sortHormones: 1,
      sortSTI: 1,
      sortRemember: 0,
      sortregularperiods: 1,
      sortstopperiods: 0,
      sortMenstrualflow: 0.5,
      sortItprivate: 0,
      sortDiscontinue: 1,
      finalScore: '',
      explanation: "Condoms protect against unwanted pregnancy by stopping the sperm contained in semen coming into contact with the vagina.",
      where:'You can get free condoms from Brook services, young people’s services, contraception clinics, GUM clinics and some GP surgeries.'
  },    

    {
      title: "IMPLANT",
      icon: <img  src={Implant}/>,
      effective: "99% Effective",
      STI: "No STI/STD Prevention",
      STIcheck: <img  src={Cross}/>,
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
      sortregularperiods: 0,
      sortstopperiods: 1,
      sortMenstrualflow: 0.5,
      sortItprivate: 1,
      sortDiscontinue: 0,
      finalScore: '',
      explanation: "The implant releases the hormone progestogen (similar to the hormone progesterone that women produce naturally in their ovaries) into your bloodstream to prevent the egg being fertilised by the sperm.",
      where:'The implant needs to be fitted by a specially trained doctor or nurse. It is available free of charge from contraceptive clinics, your GP'

  },    

  {
    title: "FERTILITY AWARENESS",
    icon: <img  src={Calendar}/>,
    effective: "75% Effective",
    STI: "No STI/STD Prevention",
    STIcheck: <img  src={Cross}/>,
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
    sortEffective: 0.1666666667,
    sortHormones: 1,
    sortSTI: 0,
    sortRemember: 0,
    sortregularperiods: 1,
    sortstopperiods: 0,
    sortMenstrualflow: 0.5,
    sortItprivate: 1,
    sortDiscontinue: 1,
    finalScore: '',
    explanation: "The implant releases the hormone progestogen (similar to the hormone progesterone that women produce naturally in their ovaries) into your bloodstream to prevent the egg being fertilised by the sperm.",
    where:'The implant needs to be fitted by a specially trained doctor or nurse. It is available free of charge from contraceptive clinics, your GP'

},    

  {
    title: "FEMALE CONDOM",
    icon: <img  src={Girlcondom}/>,
    effective: "79% Effective",
    STI: "STI/STD Prevention",
    STIcheck: <img  src={Check}/>,
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
    sortEffective: 0.1666666667,
    sortHormones: 1,
    sortSTI: 1,
    sortRemember: 0,
    sortregularperiods: 1,
    sortstopperiods: 0,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
    explanation: "Internal (or female condoms) are like other condoms except they fit inside the vagina instead of covering the penis. They are made of polyurethane and line the vagina.  ",
    where:'Internal condoms are not always available at every contraception and sexual health clinic and can be more expensive to buy than other condoms'

  },  

  {
    title: "MINI PILL",
    icon: <img  src={Pill1}/>,
    effective: "92% Effective",
    STI: "No STI/STD Prevention",
    STIcheck: <img  src={Cross}/>,
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
    sortEffective: 0.7083333333,
    sortHormones: 0.5,
    sortSTI: 0,
    sortRemember: 0,
    sortregularperiods: 0,
    sortstopperiods: 1,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
    explanation: "The mini pill works by preventing the sperm reaching an egg and fertilising it. It interrupts the process in two ways..",
    where:'The mini pill is available free of charge from a range or services including contraceptive clinics, your GP and Brook'

  },   

  {
    title: "VAGINAL RING",
    icon: <img  src={Vaginalring}/>,
    effective: "91% Effective",
    STI: "No STI/STD Prevention",
    STIcheck: <img  src={Cross}/>,
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
    sortEffective: 0.6666666667,
    sortHormones: 0,
    sortSTI: 0,
    sortRemember: 0.5,
    sortregularperiods: 1,
    sortstopperiods: 0,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
    explanation: "The contraceptive vaginal ring is a soft, flexible, plastic ring that goes into the vagina. It releases the hormones oestrogen and progestogen through the vaginal wall into the bloodstream, which works in three ways to interrupt pregnancy from occurring.",
    where:'The vaginal ring is available free of charge from a range of services including contraceptive clinics, GUM clinics, your GP and Brook'

  }, 

  {
    title: "PATCH",
    icon: <img  src={Contraceptivepatch}/>,
    effective: "92% Effective",
    STI: "No STI/STD Prevention",
    STIcheck: <img  src={Cross}/>,
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
    sortEffective: 0.7083333333,
    sortHormones: 0,
    sortSTI: 0,
    sortRemember: 0.5,
    sortregularperiods: 1,
    sortstopperiods: 0,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
    explanation: "The patch, is a small beige 5cm by 5cm patch that is applied to the skin like a plaster and prevents pregnancy by releasing oestrogen and progestogen through the skin.",
    where:'The contraceptive patch is available free of charge from a range of services including contraceptive clinics, your GP and Brook.'
    

  }, 

  {
    title: "COMBINED PILL",
    icon: <img  src={Pill2}/>,
    effective: "92% Effective",
    STI: "No STI/STD Prevention",
    STIcheck: <img  src={Cross}/>,
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
    sortEffective: 0.7083333333,
    sortHormones: 0,
    sortSTI: 0,
    sortRemember: 0.5,
    sortregularperiods: 1,
    sortstopperiods: 0,
    sortMenstrualflow: 0.5,
    sortItprivate: 0,
    sortDiscontinue: 1,
    finalScore: '',
    explanation: "The combined pill works to prevent the sperm reaching the egg and fertilising. It prevents pregnancy by interrupting this process in three ways.",
    where:'The combined pill is available free of charge from a range of services including contraceptive clinics, your GP and Brook.'
  }, 
    ]
  );
 let sortBySTI;
  const [sortResponses, setSortResponses] = useState([ { sortingWhat: 'effective', }, ]);
  
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
            return b.sortregularperiods - a.sortregularperiods;
          });
           setMethodsList(sorted);
        };
        break;
        case 'stopperiods':
         sortBySTI = () => {
          const sorted = [...methodsList].sort((a, b) => {
            return b.sortstopperiods - a.sortstopperiods;
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
    normalizedweightregularperiods:'',
    normalizedweightstopperiods:'',
    normalizedweightmenstrualflow: '',
    normalizedweightitprivate:'',
    normalizedweigthdiscontinue: '',}]);

    function normalize(weighting){
      setTable({ normalizedweighteffectiveness : (weighting.weighteffectiveness / (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightregularperiods+ weighting.weightstopperiods+ weighting.weightitprivate)),
      normalizedweightnoHormones : (weighting.weightnoHormones/ (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightregularperiods+ weighting.weightstopperiods+ weighting.weightitprivate )) ,
      normalizedweightSTI : (weighting.weightSTI/ (weighting.weighteffectiveness + weighting.weightSTI + weighting.weightnoHormones + weighting.weightregularperiods+ weighting.weightstopperiods+ weighting.weightitprivate )),
      normalizedweightremember : (weighting.weightremember/ (weighting.weighteffectiveness + weighting.weightSTI + weighting.weightnoHormones + weighting.weightregularperiods+ weighting.weightstopperiods+ weighting.weightitprivate )),
      normalizedweightregularperiods : (weighting.weightregularperiods/ (weighting.weighteffectiveness + weighting.weightnoHormones +weighting.weightSTI + weighting.weightregularperiods+ weighting.weightstopperiods+  weighting.weightitprivate ) ),
      normalizedweightstopperiods : (weighting.weightstopperiods/ (weighting.weighteffectiveness + weighting.weightnoHormones +weighting.weightSTI + weighting.weightregularperiods+ weighting.weightstopperiods+  weighting.weightitprivate ) ),
      normalizedweightmenstrualflow : (weighting.weightmenstrualflow/ (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightregularperiods+ weighting.weightstopperiods+ weighting.weightitprivate ) ),
      normalizedweightitprivate : (weighting.weightitprivate/ (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightregularperiods+ weighting.weightstopperiods+ weighting.weightitprivate ) ),
      normalizedweigthdiscontinue : (weighting.weigthdiscontinue/ (weighting.weighteffectiveness + weighting.weightnoHormones + weighting.weightSTI + weighting.weightregularperiods+ weighting.weightstopperiods+ weighting.weightitprivate ) ),
      
    })};
      
    
   

    function checkingScores({methods, table}){

      var i = 0;
      for (i=0; i<methods.length; i++){
        var this_test = (methods[i].sortEffective * table.normalizedweighteffectiveness 
          + (methods[i].sortHormones * table.normalizedweightnoHormones)
          + (methods[i].sortSTI * table.normalizedweightSTI)
          + (methods[i].sortregularperiods * table.normalizedweightregularperiods)
          + (methods[i].sortstopperiods * table.normalizedweightstopperiods)
          + (methods[i].sortDiscontinue * table.normalizedweigthdiscontinue)
          + (methods[i].sortItprivate * table.normalizedweightitprivate)
          + (methods[1].sortRemember * table.normalizedweightremember)
          + (methods[1].sortMenstrualflow * table.normalizedweightmenstrualflow )
          );
    
        console.log('thistest')   
        console.log(this_test) 
        methods[i].finalScore = this_test;
      };
    };
    console.log('jetooo')

    console.log(methods[1].finalScore)
    console.log(methods.title)


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
          leftside =  <MultipleChoice 
          addResponsenoHormones={addResponsenoHormones} 
          addResponseSTI={addResponseSTI} 
          addResponseremember={addResponseremember} 
          addResponseregular={addResponseregular} 
          addResponsestop ={addResponsestop}
          addResponsemenstrualflow={addResponsemenstrualflow} 
          addResponseitprivate={addResponseitprivate} 
          addResponsediscontinue={addResponsediscontinue} 
          addSortResponse = {addSortResponse}
           addSteps={addSteps} 
           addWeighting ={addWeighting}
           sortBySTI={sortBySTI}/>;
          
          break;
      case 2:
          leftside = <Weightings addSteps={addSteps} 
                                responses={responses} 
                                addWeighting ={addWeighting} 
                                table={table} 
                                normalize={normalize} 
                                weighting={weighting} 
                                checkingScores={checkingScores}
                                methods={methods} />;
          break;
      case 3:
          leftside = <Reviewanswers responses={responses} 
                                    weighting={weighting} 
                                    addSteps={addSteps} 
                                    checkingScores={checkingScores}
                                    table={table}
                                    methods={methods}/>;
          break;
      case 4:
          leftside = <ResultsPage table={table} 
                                  normalize={normalize} 
                                  weighting={weighting} 
                                  checkingScores={checkingScores} 
                                  responses = {responses}
                                  methods={methods}/>
          break;   
      default:
        leftside = <Explanation addSteps={addSteps} addWeighting ={addWeighting}/>;
        break;
    }

    const [open, setOpen] = useState(false);
    
     
      const handleClose = (e) => {
        setOpen(false);
      };
 
      function openCard(open) {
        setOpen({open});
        };
      const [methodtitle, setMethodtitle] = useState( 'IUS');

      function themethodtitle(methodtitle){
        setMethodtitle(methodtitle)
      };

      console.log('methodtitle')
      console.log(methodtitle.methodtitle)
      const methodis = methods.find(methodis => methodis.title === methodtitle);

    return(
    <div className="App">
      
        <NavBar />
      

        
        <InformationalCard open={open} handleClose={handleClose} method={methodis} />

        
        <div className={styles.container}  >
        
      
        
          <div className={styles.row} >
            {methodsList.map((method, index) => (
              <div className={styles.column } key={index}>
              <MethodCard style={{  transition: 'transform 0.4s'}} key={index} index={index} method={method} responses={responses} openCard={openCard} themethodtitle={themethodtitle} />
              </div>
            ))}
          </div> 
        </div>
       <div onMouseMove={sortBySTI}>
       {leftside}
     </div>
     </div>
     
  );

}

export default App;
