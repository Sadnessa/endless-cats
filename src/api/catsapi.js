import axios from "axios";

export function getCat() {
    return axios.get("https://cataas.com/cat", { responseType: "blob" }).then(response => (response.data)).then(blob => window.URL.createObjectURL(blob))
} 
