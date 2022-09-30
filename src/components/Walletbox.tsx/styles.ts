import styled from "styled-components";


interface IContainerProps {
    color:string;
}



export const Container = styled.div<IContainerProps>`


.wallat{
    
    

 
}

background-color: ${props => props.color};
width: 33rem;
padding: 10px;
height: 170px;
color: #d3d3d3;

margin-bottom: 60px;
position: relative;
overflow: hidden;
font-family: 40px;

text-align: center;

>img {
opacity: .2;
height: 100%;
position: absolute;
top:0px;
right: 0px;


}
>span{
font-size: 27px;
font-weight: 12px;
font-weight: bold;
text-align: center;
align-items: center;
justify-content: center;
margin-top: 30px;
}
>small{
    font-size: 14px;
    position: absolute;
    bottom: 10px;
    margin-top: 30px;
}


>span h1{
    font-size: 38px;
    margin-top: 30px;
}
`;
