import React, {useState, } from 'react'
import api from '../Api';

import { Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import { Container } from './style';

interface  IData {

  number: number;
  caption: string;
  url: string;

}

const Foto: React.FC= () => {

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [url, setURl] = useState("");
 
  const [numbe, SetNumbe] = useState("");





  function Submit() {
  
  api.post('/send_message_file_from_url',  {number: numbe, url: url, caption: text, },{ headers: { "Content-Type": "application/json", "Authorization": '0uyw8haw86mzelmsug01yusrqb7raj'  } })
  .then(response => console.log(response.data))
  .catch(err => console.error(err));


  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  }



  return(
    
 <Container>
  <div className="img-foto">
<div className='titulo'>
  <h1 className='titulo-two'>Envio de <strong>fotos</strong></h1>
  <p className='titulo-tree'></p>
</div>


<div >
<div className='form'>
<form className='form-one'>
  <label>
    <h2>Adicione sua foto</h2>
    <input type="number" className='text-1' placeholder='Numero' name="number" value={numbe} onChange={(e) => {SetNumbe(e.target.value)}} />

    <input type="text" className='text' placeholder='Menssagem' name="name" value={text} onChange={(e) => {setText(e.target.value)}} />
    <input type="text"   className='text-two' placeholder='Url da imagem' name="image"  value={url}  onChange={(e) => {setURl(e.target.value)}} />
   
 
  </label>
  {loading ? <ColorRing  height={77} width={75} /> : <button onClick={Submit}  disabled={loading} className="buttom">Enviar</button>
}
</form>


<div className="img-foto1">
  <div className="img-foto2">
<img className="img-foto3"  alt="" src="p1.png"/>
</div>
<div className="nome-whats1">
<p  className="nome-whats">
  <img  src={url} alt=""  width="180px" />{text}</p>

</div>
<br/>
<br/>
<br/>
<div className="buttoms">
<Link className="link" to="/list"><button className="buttom">Texto</button></Link>
<Link className="link" to="/foto"><button className="buttom-text">Imagens</button></Link>
<button className="buttom">Localização</button>
<Link className="link" to="/Arquivo"><button className="buttom">Arquivo</button></Link>
</div>
</div>
</div>
</div>
</div>
</Container>    
  );
}



export default Foto;