import React from "react";
import { Routes, Route} from 'react-router-dom'
import Layout from "../components/Layout";
import Dashboard from "../components/pages/Dashboard";

import Disparos from "../components/pages/DisparosM";
import List from "../components/pages/List/Texto/index";
import Foto from "../components/pages/List/Foto/index";
import Arquivo from "../components/pages/List/Arquivo";
import SMSForm from "../components/pages/List/Texto copy";


const AppRoutes: React.FC = () => {  

return ( 
    <Layout>
      <Routes>
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/list" element={<List />} />
        <Route path="/list" element={<List />} />
        <Route path="/Disparos" element={<Disparos />} />
        <Route path="/foto" element={<Foto />} />
        <Route path="/Arquivo" element={<Arquivo />} />
        <Route path="/api/messages" element={<SMSForm />}/>
      </Routes>
    </Layout>
);

}
export default AppRoutes;