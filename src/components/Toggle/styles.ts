import styled from 'styled-components';
import Switch, {ReactSwitchProps}  from 'react-switch';




export const Container = styled.div`
display: flex;
right: 10px;
left: 80px;
text-align: justify;
width: 100%;
margin-right: 40px;
float:right;
justify-content: end;
text-align: right;
align-items: flex-end;

.dark-light{
        font-family: 'Edu QLD Beginner', cursive;
    }
`;


export const ToggleLabel = styled.span`
color: ${props => props.theme.colors.white};
width: 30px;
    
    `;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({   
     onColor: theme.colors.primary,
     offColor: theme.colors.primary

    }))<ReactSwitchProps>`
    margin: 0 7px;
   
    .dark-light{
        font-family: 'Edu QLD Beginner', cursive;
    }

`;
