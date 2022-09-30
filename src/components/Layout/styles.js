import Aside from '../Aside';
import styled from "styled-components";

/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content    
*/



export const Grid = styled.div`
    display: grid;
    background-color: ${props => props.theme.colors.primary};
   
    grid-template-rows: 70px auto;
    grid-template-columns:  ${({ sidebar }) => (sidebar ? '90px' : '250px')};
    grid-template-areas:
     'AS MH'
     'AS CT';
     height: 100vh;
     
     #checkbox{
z-index: 30;
color: transparent;
background-color: transparent;
width: 31px;
font-size: 70px;
background: transparent;
padding: 10px;
}

.hamburger {
    position: relative;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    margin-bottom: 40px;
    margin-left: 10px;
    
}



.line{
    position: absolute;
    width: 31px;
    height: 4px;
     margin: 4px;
    background-color: #de3;
    border-radius: 3px;
    transition: 
    transform .25s, opacity .35s;
    left: 10px;
   
}

.line--top{
    transform: translateY(-7px);

}
.line--bottom{
    transform: translateY(7px);
}


#checkbox:checked~.line--top{
    transform: rotate(45deg);
}
#checkbox:checked ~ .line--middle{
    transform: translate(16px);
    opacity: 0;
}#checkbox:checked~.line--bottom{
    transform: rotate(-45deg);
}










/* common */


.drawer-menu li {
    text-align: center;
}

.drawer-menu li a {
    display: block;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #fff;
    -webkit-transition: all .8s;
    transition: all .8s;
}



/* checkbox */
.check {
    display: none;
}

/* menu button - label tag */
.menu-btn {
    position: fixed;
    display: block;
    top: 20px;
    left: 34px;
    display: block;
    width: 40px;
    height: 10px;
    font-size: 10px;
    text-align: center;
    cursor: pointer;
    z-index: 3;
    width: 20px;
}

.bar {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 30px;
    height: 4px;
    padding: -4px;
    background-color: ${props => props.theme.colors.font};
    transition: .5s;
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
}

.bar.middle {
    top: 10px;
    opacity: 1;
}

.bar.bottom {
    top: 20px;
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
}







/* checked */
.check:checked ~ .drawer-menu {
   

    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
    z-index: 2;
}

.check:checked ~ .contents {
 
 
    -webkit-transform: translateX(-300px);
    -ms-transform: translateX(-300px);
    transform: translateX(-300px);
}
#checked{
    margin: 30px;
}

.check:checked ~ .menu-btn .menu-btn__text {
    visibility: hidden;
    opacity: 0;
}

.check:checked ~ .menu-btn .bar.top {
    width: 36px;
    left: 10px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.check:checked ~ .menu-btn .bar.middle {
    opacity: 0;
}

.check:checked ~ .menu-btn .bar.bottom {
    width: 36px;
    top: 25px;
    left: 10px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.check:checked ~ .close-menu {
  

      visibility: visible;
    opacity: 1;
    z-index: 3;
}





    `;