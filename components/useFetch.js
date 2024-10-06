import {useState,useEffect} from  'react'
import axios from 'axios';

const useFetch=(endpoint)=>{

    const [data,setData]=useState([]);
    const [isLoading,setLoading]=useState(false);
    const[error,setError]=useState(null);

    const http = require('https');

const options = {
	method: 'GET',
	hostname: 'jsearch.p.rapidapi.com',
    
	port: null,
    headers: {
		'x-rapidapi-key': 'b2787068b8mshc50e0100b304c44p1b9225jsnc53d4cd7a394',
		'x-rapidapi-host': 'jsearch.p.rapidapi.com'
	},
	path: `/${endpoint}?query=Node.js%20developer%20in%20New-York%2C%20USA&page=1&num_pages=1&date_posted=all`,
	
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();

const faetchData=async()=>{
    setLoading(true);
    try{
        const respomse=await axios.request
        (options);
        setData(respomse.data.data)
        setLoading(false);
    }catch(error){
        alert('There is an error');
    }finally{

        setLoading(false)

    }

    useEffect(()=>{
        faetchData();

    },[]);
    const refresh=()=>{
        setLoading(true)
        faetchData();
    }

}

return {data,isLoading,error,refresh};

}
export default useFetch;
