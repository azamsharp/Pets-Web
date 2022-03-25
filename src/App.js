
import './App.css';
import React, { useEffect, useState } from 'react'
import FeaturedImageComponent from './components/FeaturedImageComponent';
import CarouselComponent from './components/CarouselComponent';

function App() {

  const [screenModel, setScreenModel] = useState({
    components: [] 
  })

  useEffect(() => {

    fetch('http://localhost:8080/pet-listing')
    .then(response => response.json())
    .then(screenModel => {
      console.log(screenModel)
      setScreenModel(screenModel)
    })

  }, [])

  let uiComponents = [] 

  screenModel.components.forEach(component => {
    switch(component.type) {
      case 'featuredImage': 
        console.log('featuredImage')
        uiComponents.push(<FeaturedImageComponent payload = {component.data} />)
        break 
      case 'carousel': 
        console.log('carousel')
        uiComponents.push(<CarouselComponent payload = {component.data} />)
        break 
      default: 
        uiComponents.push(null)
    }
  })

  return (
   <div>
     {uiComponents.map((component, index) => {
       return <React.Fragment key = {index}>
         {component}
       </React.Fragment>
      
     })}
   </div>
  );
}

export default App;
