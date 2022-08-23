import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import './Cita.css'


const api = "http://localhost:5000/api/";
const rutaImagenes = "http://localhost:5000/imagenes/"

function Cita() {

    const [citaCine, setCitaCine] = useState({cita: "", autor: "", img:""});

    useEffect(()=>{

      fetch(api+"citarandom")
      .then(resp => resp.json())
      .then(resp => setCitaCine(resp))
      .catch(error => console.error(error))

    }, [])

  
  return (
    <>
    <Card className="bg-dark text-white fondo componente">
      <Card.Img src={rutaImagenes+citaCine.img} alt="Card image" className='fondo'/>
      <Card.ImgOverlay>
        
        <Card.Text>
        {citaCine.cita}
          
        </Card.Text>
        <Card.Title>{citaCine.autor}</Card.Title>
      </Card.ImgOverlay>
    </Card>
    
   
    </>
  )
}

export default Cita