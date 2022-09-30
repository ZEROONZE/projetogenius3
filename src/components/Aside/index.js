import React, {useState} from 'react';
import { Container,
            LogImg,
            Header,
            Title,
            
            MenuContainer,
                       
            } from './styles';

            import styled, {keyframes} from 'styled-components';

            import {
              FcPositiveDynamic,
              FcExport,
              FcAreaChart,
              FcNext,
              FcComboChart,
              FcOrgUnit,
              FcDownRight
              

} from 'react-icons/fc';
import { BiUser, BiComment, BiBarChartSquare, BiGridAlt            } from "react-icons/bi";
import { FiUsers, FiSend, FiLogIn } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import Layout from '../Layout';
import logoImg from '../../assets/logo192.png'
import Dashboard from '../pages/Dashboard';




export const SidebarNav = styled.nav`
  position: fixed;
margin-top: 20px;

width: 150px;
grid-template-columns: ${({ sidebar }) => (sidebar ? '0px' : '100px')};


`;

const Aside = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
<Container>

<SidebarNav  sidebar={sidebar}>

    <Header>
    
   

        <Title className="nome-logo"></Title>
        </Header>
     
        <MenuContainer>
      
            <div className='menu-geral'> 

            <div className="menu-one">
            <Link to="/dashboard" className='icon'>

                    <BiGridAlt className='icon' />
               
                   
            </Link>
                    <ul className="menu">
                     <a className="menu">Dashboard</a>
                     </ul>
                     </div>




            <div className="menu-one">
            <Link to="/list" >   
            <BiComment className='icon' />
                    
            </Link>

            <ul className="menu">
                     <a className="menu"  href="/list" >  Disparo único</a>
                     </ul>
                     </div>


            <div className="menu-one">
            <Link to="/Disparos">
                
                     <GoCommentDiscussion className='icon'/>
                   
            </Link>

                      <ul className="menu">
                     <a className="menu" href="/Disparos" >Disparo múltiplos</a>
                     </ul>
                     </div>


   <div className="menu-one">
            <Link to="">

                     <FiSend className='icon'/>
                   
            </Link>

            <ul className="menu">
                     <a className="menu">Menssagens</a>
                     </ul>
                     </div>

            <div className="menu-one">
            <Link to="#" className='exit'>

                    <FiLogIn className='icon'/>
                    
            </Link>
                <ul className="menu">
                     <a className="menu">Sair</a>
                     </ul>
                     </div>
                     </div>

                    
        </MenuContainer>
        </SidebarNav>
    </Container>

  );
}

export default Aside;