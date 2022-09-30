import React, {useState, useEffect} from 'react'
import api from '../Api';

import { Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import { Container } from './style';



interface  IData {

  number: number;
  caption: string;
  url: string;

}

interface IData {
  menssage: []
}


const Arquivo: React.FC= () => {
  const [data, setData] = useState<IData[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [url, setURl] = useState("");
  const [picture, setPicture] = useState('');
  const [menssagem, setMenssagem] = useState('');

 


  const onChangePicture = (e: any) => {
    console.log('picture: ', picture);
    setPicture(URL.createObjectURL(e.target.files[0]));
  };


   async function Submit() {

    setLoading(true)

  const response = await api.post('/send_message',  {number: '62994719784', message: text},{ headers: { "Content-Type": "application/json", "Authorization": '0uyw8haw86mzelmsug01yusrqb7raj'  } })

 
 


  let data2 = {}

   await api.post('/send_message_file_from_url',  {number: '62994719784', url: url, caption: text, },{ headers: { "Content-Type": "application/json", "Authorization": '0uyw8haw86mzelmsug01yusrqb7raj'  } })
  .then(response => data2 = response.data)
  .catch(err => console.error(err));
  setLoading(false);














  if(!response.data) {

  }
console.log(response.data)


if(!data2) {
     
  alert({setMenssagem})

}
console.log(response.data)

  }

  console.log(setData)

  return(
    
 <Container>
  <div className="img-foto">
<div className='titulo'>
  <h1 className='titulo-two'>Envio de <strong> arquivo</strong></h1>
  <p className='titulo-tree'></p>
</div>


<div >
<div className='form'>
<form className='form-one'>
  <label>
    <h2>Adicione seu arquivo</h2>
    
    <input type="text" className='text' placeholder='Menssagem' name="name" value={text} onChange={(e) => {setText(e.target.value)}} />
    <input type="text"   className='text-two' placeholder='Url do arquivo' name="image"  value={url}  onChange={(e) => {setURl(e.target.value)}} />
   
 
  </label>
  {loading ? <ColorRing  height={77} width={75} /> : <button onClick={Submit}  disabled={loading} className="buttom">Enviar</button>  
}

</form>
{
  data.map(item => (
<h1>{item.menssage}</h1>

  ))
}


<div className="img-foto1">
  <div className="img-foto2">
<img className="img-foto3" alt="" src="p1.png"/>
</div>
<div className="nome-whats1">
<p  className="nome-whats">
  <span  />{url}{text}</p>

</div>
<br/>
<br/>
<br/>
<div className="buttoms">
<Link className="link" to="/list"><button className="buttom">Texto</button></Link>
<Link className="link" to="/foto"><button className="buttom">Imagens</button></Link>
<button className="buttom">Localização</button>
<Link className="link" to="/Arquivo"><button className="buttom-text">Arquivo</button></Link>
</div>
</div>
</div>
</div>
</div>
</Container>    
  );
}



export default Arquivo;