import axios from "axios";


const api = axios.create({
    baseURL:'https://v5.chatpro.com.br/chatpro-u153aqehq5/api/v1'
});



export  default api;