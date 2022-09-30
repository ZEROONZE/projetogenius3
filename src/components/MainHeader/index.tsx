import React, {useMemo, useState} from 'react';

import { Container, Profile, Welcome, UserName  } from './styles';
import emojis from '../../Utils/emojis';
import Toggle from '../Toggle';
import { useTheme } from '../../components/hooks/theme';
const MainHeader:React.FC = () => {
 const {toggleTheme, theme} = useTheme();
 const [darkTheme, setDarkTheme] = useState (() => theme.title === 'dark' ? true : false);
 
const handleChangeTheme = () => {
  setDarkTheme(!darkTheme);
  toggleTheme();
}

  const emoji  = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

   return emojis[indice];



  }, []);

  return (
<Container>
  
  
  
  <Toggle 
   labelLeft="Light"
   labelRight="Dark" 
  checked={darkTheme}
  onChange={handleChangeTheme}
  />
    <div className='logopai'>
    <h1 className='logoApi'><strong>chat.</strong>api</h1>
  </div>
    </Container>
    
  );
}

export default MainHeader;