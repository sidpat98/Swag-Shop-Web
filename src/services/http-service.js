import 'whatwg-fetch';
import { resolve, reject } from 'q';

class HttpService {
    getProduts = () => {
        fetch('http://localhost:3000/product').then(response => {
            var promise = new Promise((resolve, reject)=> {
                
            })
            console.log(response.json());
        })
    }
}

export default HttpService;