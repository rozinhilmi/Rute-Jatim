import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './store'

import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import * as Material from '@mui/material'
import * as MaterialLab from '@mui/lab'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PlaceIcon from '@mui/icons-material/Place';
import RouteIcon from '@mui/icons-material/Route';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import djikstra from './Methods/djikstra'
import "./assets/style.css"
import Peta_Jatim from "./assets/graf jawatimur.png"
import Graf_Jatim from "./assets/graf buta jatim.png"
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(255, 192, 203)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#fff',
    }
  },
});


function App() {
  const dispatch = useDispatch()
  const graf = useSelector((state)=>state.graf )
  const [firstNodeInput,setFirstNodeInput] = useState('')
  const [targetNodeInput,setTargetNodeInput] = useState('')
  const [loadingButtonText,setLoadingButtonText] = useState('Get Shortest Route')
  const [resultStep,setResultStep] = useState([]);
  
  const firstNodeOnClick = (event) => {
    setFirstNodeInput(event.target.value);
  };
  const targetNodeOnClick = (event) => {
    setTargetNodeInput(event.target.value);
  };
  const [boxHeight,setBoxHeight] = useState('250px')

  
  const getMapResult = (url)=>{
    if(url != ''){
      window.open(url,'_blank')
    }
    
  }
  const getSortestRoute = ()=>{
    setLoadingButtonText("Loading...")
    

    setTimeout(()=>{
      if(firstNodeInput !== '' && targetNodeInput !== ''){
        setBoxHeight('auto')
        let steperResult = [];
        let djikstra_result = djikstra(graf,firstNodeInput,targetNodeInput)
        for (const step of djikstra_result) {
          steperResult.push({
            "route" : step.route.split("-"),
            "distance" : step.distance,
            "url" : `https://www.google.co.id/maps/dir/${step.route.replaceAll('-','/')}/data=!4m3!4m2!2m1!2b1`
          })
          
        }
        setResultStep(steperResult); 
      }

      setLoadingButtonText('Get Shortest Route')
    },1500)
  }

  useEffect(()=>{
    for (let index = 0; index < document.getElementsByTagName('circle').length; index++) {
      document.getElementsByTagName('circle')[index].classList.add('color-primary') 
    }
  },[resultStep])
  
  

  return (
    <div className="App">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
      </svg>
      <div className='navbar'>
        <h3>Find the Fastest Route for Road Driving in East Java area</h3>
      </div>
      <div className='box-form' style={{ height:boxHeight }}>
        <div className='input-form'>
          <h5>From</h5>
          <div>
            <Material.FormControl size='small' sx={{ minWidth:'200px',margin:'5px',padding:'0px' }} autoWidth >

              <Material.InputLabel style={{ display:'flex',alignItems:'center' }} >
                <MedicalInformationIcon fontSize='small' />
                <p>Your Location</p>
              </Material.InputLabel>

              <Material.Select
                labelId="demo-simple-select-label"
                className="demo-simple-select"
                value={firstNodeInput}
                label="la Your Location"
                onChange={firstNodeOnClick}
              >
                {graf.map((node)=>
                    <Material.MenuItem value={node.city_name}>{node.city_name}</Material.MenuItem>
                 )}
              </Material.Select>
            </Material.FormControl>
          </div>

          <h5>To</h5>

          <div>
            <Material.FormControl size='small' sx={{ minWidth:'200px',margin:'5px',padding:'0px' }}  autoWidth>

              <Material.InputLabel style={{ display:'flex',alignItems:'center' }}>
                <HomeWorkIcon fontSize='small' />
                <p>Destination</p>
              </Material.InputLabel>

              <Material.Select
                labelId="demo-simple-select-label"
                className="demo-simple-select"
                value={targetNodeInput}
                label="la Destination"
                onChange={targetNodeOnClick}
              >
                {graf.map((node)=>
                    <Material.MenuItem value={node.city_name}>{node.city_name}</Material.MenuItem>
                 )}
              </Material.Select>

            </Material.FormControl>
          </div>
        </div>

        <Material.Button theme={theme} onClick={()=>{getSortestRoute()}} autoWidth sx={{ marginLeft:'auto',marginRight:'auto' }} variant="contained" color='primary' ><p> {loadingButtonText === 'Loading...' ? <Material.CircularProgress theme={theme} color='secondary' size="20px" /> : null}   {loadingButtonText}</p></Material.Button>
        
        {resultStep.length != 0 ? 
          <>
            {
              // resultStep[0].rou
              resultStep.map((result,index)=>
                <>
                  
                  <MaterialLab.Timeline position="alternate" sx={{ marginTop:'30px' }}>
                  <center><h4>Route {index+1}</h4></center>
                  {
                    
                    result.route.map((step)=>
                      <MaterialLab.TimelineItem>
                        <MaterialLab.TimelineSeparator>
                          <MaterialLab.TimelineDot theme={theme} color='primary' />
                          <MaterialLab.TimelineConnector />
                        </MaterialLab.TimelineSeparator>
                        <MaterialLab.TimelineContent>{step}</MaterialLab.TimelineContent>
                      </MaterialLab.TimelineItem>
                      )
                  }   
                  </MaterialLab.Timeline>
                  <center>
                    <p>{result.distance} Km</p>
                  </center>
                  <Material.Button  onClick={()=>{getMapResult(result.url)}} autoWidth color='primary' theme={theme} sx={{ marginLeft:'auto',marginRight:'auto',marginTop:'30px'}} variant="contained"><PlaceIcon fontSize='small'/> Detail Route</Material.Button>
                </>
              )
            }
          </>
        :null}  
      </div>

      <div className='footer'>
        <span>
          <RouteIcon fontSize='large' className='color-primary' />
          <p>Sistem Penunjang Keputusan Dalam Menentukan Rute terpendek perjalanan antar kota di Jawa Timur</p>
        </span>
        <span>
          <CheckCircleOutlineIcon fontSize='large' className='color-primary' />
          <p>Menghasilkan Rute terpendek secara Tepat dan Akurat</p>
        </span>
        <span>
          <GraphicEqIcon fontSize='large' className='color-primary' />
          <p>Sistem ini dibuat dengan menjadikan Peta Jawa Timur kedalam Bentuk Graf dengan menjadikan Pusat Kota sebagai titik dan jalan raya antar kota sebagai sisi</p>
        </span>
        <img style={{ width:'100%',marginTop:10,boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} src={Peta_Jatim} />
        <ArrowDownwardIcon style={{ margin:'auto',marginBottom:10,marginTop:10 }} fontSize='large' />
        <img style={{ width:'100%',boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} src={Graf_Jatim} />
        <center><p style={{ marginTop:10 }}>Algoritma Djikstra berperan sebagai menentu rute terpendek antar titik pada Graf Jawa TImur</p></center>
        
      </div>
    </div>
  )
}

export default App
