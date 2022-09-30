

import styled from 'styled-components';

export const Container = styled.div`
   grid-area: MH;
   color: ${props => props.theme.colors.success};
   background-color: ${props => props.theme.colors.primary};
   display: flex;
   
    align-items: center;
    float: right;
    right: 10px;
    text-align: right;

    padding: 0 10px;

    box-shadow: 60px -16px teal;
    .logoApi{
    
        color: #fff;
      font-size: 24px;
  font-weight: bold;

    }

    .logopai{
        width: 100px;
        font-weight: bold;
        margin-right: 67px;
        color: ${props => props.theme.colors.white};
    }
    .logopai strong{
        color: rgb(23, 151, 136);
    }

    .logopai h1{
        font-family: 'Roboto', sans-serif;
        font-size: 29px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};

    }

`;



export const Profile = styled.div`


color: ${props => props.theme.colors.white};


`;
export const Welcome = styled.h3``;
export const UserName  = styled.span``;