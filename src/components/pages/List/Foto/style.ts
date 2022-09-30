import styled from 'styled-components';










export const Container = styled.div`
.buttoms{
    display: flex;
    padding: 10px;
    flex-direction: column;
    right: 10px;
    float: right;
    justify-content: right;
    margin-left: 100px;
    margin-right: -20rem;

    
}
.titulo{
    margin-bottom: 22px;
}
.buttom-text{
    
    width: 10rem;
    height: 2.75rem;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    outline: none;
    border-radius: 0.4rem;
    padding: 0.7rem 2.5rem;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    background:rgb(255, 255, 255);
    border: 3px solid rgb(4, 170, 109);
    margin-bottom: 15px;
    justify-content: center;
   align-items: center;
   text-align: center;
  margin-top: 1rem;
}
.link{
    list-style: none;
    text-decoration: none;
    color: #fff;
}

.img-foto{
flex-direction: row;
height: 50px;
justify-content: space-around;
margin: auto;


}
.nome-whats1{



}
.nome-whats1 p{
   font-weight: 500;

    font-size: 13px;
    overflow-wrap: break-word;
   word-break: break-word;
    word-wrap:break-word;
    width: 200px;
   
}
.img-foto2, .img-foto3 {
    border-radius:5px;
}
.nome-whats{
    position: absolute;
    top:3.8rem;
   overflow-wrap: break-word;
   word-break: break-word;
    word-wrap:break-word;
    width: 200px;
    color:black;
    left: -68px;

    padding: 10px 5px;
background: #d3ffc4;
border-radius: 6px 0px 6px 6px;
box-shadow: 1px 1px 1px 1px #d3d3d3;

}
.img-foto1{
flex-direction: row;
justify-content: space-around;
display: flex;
position: relative;
margin-left: 39em;
top:-17rem;
}

.form{
    width: 400px;
    height: 200px;
    padding: 10px;
    justify-content: center;
   align-items: center;
   text-align: center;
    border-radius: 0.4rem;
    font-family: Poppins, sans-serif;

}
.titulo-two strong{
 color: #197781 ;




}

.form-one{
    width: 400px;
    background-color: ${props => props.theme.colors.secondary};
    padding: 10px;
    justify-content: center;
   align-items: center;
   text-align: center;
    border-radius: 0.4rem;
    font-family: Poppins, sans-serif;
  margin-top: 40px;

}


.form, h2 {
 

.buttom{


     list-style: none; 
    width: 10rem;
    height: 2.75rem;
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    outline: none;
    border-radius: 0.4rem;
    padding: 0.7rem 2.5rem;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    background: rgb(23, 151, 136);
    border: 1px solid rgb(1, 199, 111);
    margin-bottom: 15px;
    justify-content: center;
   align-items: center;
   text-align: center;
  margin-top: 1rem;
}
.buttom:hover{
 
	transform: (1.05);
    background: rgb(23, 111, 111);
transition: .3s;
color: #d3ffc4;
padding: 0.7rem 2.5rem;
 border: 1px solid #197781;

}
.titulo-two{
   
   margin-bottom: 20px;
   font-size: 0.5rem;
   border-radius: 10px;
}
.titulo-tree{

   border-top: 4px solid #197781;
 width: 3%;
 margin-top: -20px;
 margin-bottom: 30px;

}


.text{
    height: 3.75rem;
    width: 350px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 0.4rem;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin-top: 1rem;
   font-family: Poppins, sans-serif;

}
.text-two{
    height: 2.75rem;
     width: 350px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 0.4rem;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin-top: 1rem;
   font-family: Poppins, sans-serif;
}


.text-1{
    height: 3.05rem;
    width: 300px;
    color: ${props => props.theme.colors.font};
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 0.4rem;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin-top: 1rem;
   font-family: Poppins, sans-serif;

}




}

`;

export const Content = styled.div``;
export const HistoryFinanceCard = styled.div``;

export const Filters = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 30px;







.tag-filter{
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${props => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity .3s;
    border-radius: 6px;
    opacity: 0.3;
    &:hover{
        opacity: .7;
    }
   
>SelecInput{
 background-color: #000;

}

    

}

    .tag-filter-red::after{
        content: '';
        display: flex;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid red;
        border-radius: 5px;
    }
    .tag-filter-black::after{
        content: '';
        display: flex;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid black;
        border-radius: 5px;

    }
     .tag-filter-white::after{
        content: '';
        display: flex;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid white;
        border-radius: 5px;

    }
    .tag-actived{
            opacity: 1;
    }


`;
