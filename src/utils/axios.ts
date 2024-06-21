import axios from "axios";

const instance = axios.create({
    baseURL: "https://gestiondocumental.pucesi.edu.ec/index.php",
});

export default instance;