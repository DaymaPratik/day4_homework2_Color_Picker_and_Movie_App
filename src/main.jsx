import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/Header'
import MainSection from './Components/MainSection/MainSection'
import SecondMainSection from './Components/SecondMainSection/SecondMainSection'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header tittle="Color Picker"/>
   <MainSection/>
   <Header tittle="Movie Picker"/>
   <SecondMainSection/>
  </React.StrictMode>,
)
