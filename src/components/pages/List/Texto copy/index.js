import React, { Component } from 'react';

import { Container } from './style';


class SMSForm extends Component {


  


  render() {


  return(
    
 <Container>
  <div className='titulo'>
  <h1 className='titulo-two'>Envio de <strong>menssagens</strong></h1>
  <p className='titulo-tree'></p>
</div>
  <div className="img-foto">

  <form>
        <div>
          <label htmlFor="to">To:</label>
          <input
             type="tel"
             name="to"
             id="to"
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea name="body" id="body"/>
        </div>
        <button type="submit">
          Send message
        </button>
      </form>

<div >
<div className='form'>
<form >
  <label>
    <h2>Adicione sua menssagem</h2>
   
  </label>


</form>

<div className="img-foto1">
  <div className="img-foto2">
<img className="img-foto3" alt="" src="p1.png"/>
</div>
<div className="nome-whats1">

</div>
<br/>
<br/>
<br/>
<div className="buttoms">

<button className="buttom">Localização</button>

</div>
</div>
</div>
</div>
</div>
</Container>    
  );
}

}

export default SMSForm;
