import axios from 'axios';

const client = axios.create();

//API 주소를 다른 곳으로 사용함
client.defaults.baseURL = 'https://external-api-server.com/';

//헤더 설정

client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

axios.intercepter.response.use({
    response=>{
        //요청 성공 시 특정 작업 수행
        return response;
    },
    error=>{
        return Promise.reject(error);
    })}
    