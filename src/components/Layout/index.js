
import React, {useState} from 'react';

import { Grid } from './styles';
import * as FaIcons from 'react-icons/fa';
import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';
import Dashboard from '../pages/Dashboard';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';


export const SidebarNav = styled.nav`
  position: fixed;
  grid-area: AS;
  background-color: ${props => props.theme.colors.primary};
  padding: 10px;
width: 50px;
#btnMenu{
font-size: 30px;
margin-top: 10px;
margin-left: 30px;
cursor: pointer;
color: ${props => props.theme.colors.white};

}


`;

const Layout = ({children}) => {
    const showSidebar = () => setSidebar(!sidebar);
    const [sidebar, setSidebar] = useState(true);
return ( 


    <Grid  sidebar={sidebar}>
        <MainHeader />
      
        <SidebarNav>
        
        <Aside
        
        
        /> 
         
    <input type="checkbox" class="check" id="checked" />
    <label class="menu-btn" for="checked"  onClick={showSidebar}>
        <span class="bar top"></span>
        <span class="bar middle"></span>
        <span class="bar bottom"></span>
      
    </label>
    <label class="close-menu" for="checked"></label>
        </SidebarNav>
        <Content>
            { children }
            
        </Content>
    </Grid>
);
}

export default Layout;
