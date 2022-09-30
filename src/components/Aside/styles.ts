
import { hover } from "@testing-library/user-event/dist/hover";
import { text } from "stream/consumers";
import styled, { keyframes} from "styled-components";


const animate = keyframes`
 0% {
transform: translate(100px);
opacity: 0;
 }
 50%{
    opacity: 3;
 }
 100%{
    transform: translate(0px);
    opacity: 1;
 }

`;
export const Container = styled.div`

background-color: ${props => props.theme.colors.primary};

.menuu{
    z-index: 1;
    margin-left: 30px;
    font-size: 20px;
    justify-content: center;
    text-align: center;
    align-items: center;
}
.menu-one{
    flex-direction: row;
  z-index:1;
    display: flex;
    
}
.menu{
    z-index:1;
    margin-left: 6px;
    margin-top: 5.8px;
    width: 300px;
    cursor: pointer;

}
.menu a{
font-size: 1rem;



}
.menuu2{
 margin-top: 5px;




}
.menu-one:hover{
    opacity: .7s;
    transform: translateX(4px);
    background-color: #179788;
    transition: .9s;
    width: 7px;

    }
    grid-area: AS;
    .menu-geral{
      margin-left: 0px;

    }
    color: ${props => props.theme.colors.white};
    .DASHBOARD{
    font-weight: bold;
   
   
}




   

    a { 
text-decoration: none;
color: #B3B5C6;

display: flex;

padding: 6px;

font-size: 13px;
font-weight: bold;
transition: opacity .3s;

transition: all 0.2s;
.segundo{
    margin-left: 5px;
    padding-left: 5px;
}
.segundoo{
    margin-left: 7px; 
    padding-left: 5px;
}
    .icon{
        font-size: 25px;
        margin: 10px;
      
    }

&:hover{
    opacity: .9;
    
    color: #179788;
    
}
>svg{
    font-size: 18px;
    margin-right: 5px;
    
}





}

`;
export const Header = styled.header`
display: flex;
align-items: center;
height: 70px;
justify-content: center;
text-align: center;
align-items: center;

.nome-logo{
    margin-left: 10px;
  color: ${props => props.theme.colors.white};
    font-family: 'Edu QLD Beginner', cursive;
    font-size: 24px;
}


`;


export const LogImg = styled.img`
height: 40px;
width: 40px;

`;


export const Title = styled.h3`
    color: ${props => props.theme.colors.success}
    

`; 


export const MenuContainer = styled.nav`
display: flex;
flex-direction: column;
animation: ${animate} .5s;


padding: 10px;
font-size: 35px;
margin-top: -40px;

`;
export const MenuItemLink = styled.a`


margin: auto;
justify-content: center;
text-align: center;


`;

