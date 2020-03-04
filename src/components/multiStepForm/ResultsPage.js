import React, {useState} from 'react';
import styles from '../Results.module.css'; 
import FinalMethodCard from '../FinalMethodCard';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
function ResultsPage({ methods, responses, }){
    
    const [diaphragm, setDiaphragm] = useState(false);
    const [IUD, setIUD] = useState(false);
    const [IUS, setIUS] = useState(false);
    const [Pill1, setPill1] = useState(false);
    const [Pill2, setPill2] = useState(false);
    const [vaginalring, setvaginalring] = useState(false);
    const [patch, setpatch] = useState(false);
    const [condom, setcondom] = useState(false);
    const [girlcondom, setgirlcondom] = useState(false);
    const [implant, setimplant] = useState(false);
    const [calendar, setcalendar] = useState(false);
    const [inejction, setinjection] = useState(false);
    const handleDelete = methodTitle => {
      const methods = methods.filter(method => method.title !== methodTitle);
      this.setState({ methods: methods });
    };
    function addclose (diaphragm, IUD, IUS, Pill1, Pill2, vaginalring, patch, condom, girlcondom, implant,calendar, inejction){
      setDiaphragm(diaphragm);
      setIUD(IUD);
      setIUS(IUS);
      setPill1(Pill1);
      setPill2(Pill2);
      setvaginalring(vaginalring);
      setpatch(patch);
      setcondom(condom);
      setgirlcondom(girlcondom);
      setimplant(implant);
      setcalendar(calendar);
      setinjection(inejction);
    };
    const [List, setList] = useState(methods);
      const addDiagpragm= (e)=>{
         setDiaphragm(true);
      }
      const addIUD= (e)=>{
        setIUD(true);
     }
     const addIUS= (e)=>{
      setIUS(true);
      }
      const addPill1= (e)=>{
        setPill1(true);
      }
      const addPill2= (e)=>{
        setPill2(true);
      }
      const addVaginalring= (e)=>{
        setvaginalring(true);
      }
      const addPatch= (e)=>{
        setpatch(true);
      }
      const addCondom= (e)=>{
        setcondom(true);
      }
      const addGirlcondom= (e)=>{
        setgirlcondom(true);
      }
      const addImplant= (e)=>{
        setimplant(true);
      }
      const addCalendar= (e)=>{
        setcalendar(true);
      }
      const addInjection= (e)=>{
        setinjection(true);
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
<br/><br/><br/><br/>

      <Grid container spacing={1} style={{paddingRight: "50px"}}>
     
         {List.slice(0,3).map((method, index) => (
              < Grid item xs={3} sm={2.5} key={index}>
              <FinalMethodCard key={index} index={index} method={method} responses={responses} addclose={handleDelete}/>
              </Grid>
            ))}
                  <Grid item xs={3} sm={2}> 
            {diaphragm ? <FinalMethodCard method={methods[3]} responses={responses} addclose={addclose}/> : "" }
            {IUD ? <FinalMethodCard method={methods[0]} responses={responses} addclose={addclose}/> : "" }
            {IUS ? <FinalMethodCard method={methods[1]} responses={responses} addclose={addclose}/> : "" }
            {Pill1 ? <FinalMethodCard method={methods[8]} responses={responses}  addclose={addclose}/> : "" }
            {Pill2 ? <FinalMethodCard method={methods[11]} responses={responses} addclose={addclose}/> : "" }
            {vaginalring ? <FinalMethodCard method={methods[9]} responses={responses} addclose={addclose}/> : "" }
            {patch ? <FinalMethodCard method={methods[10]} responses={responses} addclose={addclose}/> : "" }
            {condom ? <FinalMethodCard method={methods[4]} responses={responses} addclose={addclose}/> : "" }
            {implant ? <FinalMethodCard method={methods[5]} responses={responses} addclose={addclose}/> : "" }
            {calendar ? <FinalMethodCard method={methods[6]} responses={responses} addclose={addclose}/> : "" }
            {girlcondom ? <FinalMethodCard method={methods[7]} responses={responses} addclose={addclose}/> : "" }
            {inejction ? <FinalMethodCard method={methods[2]} responses={responses} addclose={addclose}/> : "" }

        
      {diaphragm || IUS || IUD || Pill1 || Pill2 || vaginalring || patch || condom || girlcondom || implant || calendar || inejction? "":
      <span>
        <Typography variant="h6">Had other contraceptives in mind? Click on any of these buttons to compare them against your results</Typography>
            <br/>
            <Button variant="contained"  
        style={{backgroundColor: "white",
        textTransform: 'none', 
        fontSize: "20PX",
        width: "250px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
        margin: "5px",
        }}
        onClick={addDiagpragm}
        >  
          Diaphragm
         </Button> 
          <Button variant="contained"  
          style={{backgroundColor: "white",
          textTransform: 'none', 
          fontSize: "20PX",
          width: "250px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          margin: "5px",
          }}
          onClick={addIUS}
          >  
            IUS
           </Button> 
           <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addIUD}
           >  
             IUD
            </Button> 
          <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addPill1}
           >  
             Mini Pill
            </Button> 
            <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addPill2}
           >  
             Combined Pill
            </Button> 
          <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addVaginalring}
           >  
             Vaginal Ring
            </Button> 
          <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addPatch}
           >  
             Patch
            </Button> 
          <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addImplant}
           >  
             Implant
            </Button> 
            <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addCondom}
           >  
             Condom
            </Button> 
            <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addGirlcondom}
           >  
             Female Condom
            </Button> 
            <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addInjection}
           >  
             Injection
            </Button> 
            <Button variant="contained"  
           style={{backgroundColor: "white",
           textTransform: 'none', 
           fontSize: "20PX",
           width: "250px",
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
           margin: "5px",
           }}
           onClick={addCalendar}
           >  
             Fertility Awareness
            </Button> 

          </span>
         }
            </Grid>
           
      </Grid> 
      <Grid container spacing={1} style={{padding: "40px"}}>
      <Typography variant="h4">Because you were interested in a method with <b>STI/STD protection</b>: </Typography>
      <Typography variant="h6">There are  only two available methods that protect from STIs, however if you don’t think these methods align with your necesities you can combine these with other contraceptives such as the ones suggested in <br/>  your results </Typography>
      < Grid item xs={3} sm={2.5} >
      <FinalMethodCard method={methods[4]} responses={responses} addclose={addclose}/> 

      </Grid>
      < Grid item xs={3} sm={2.5} >
      <FinalMethodCard method={methods[7]} responses={responses} addclose={addclose}/>
      </Grid>
        </Grid>
      
    </div>

 )
        


};

export default ResultsPage