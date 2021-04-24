import axios from 'axios';

export default axios.create({
    baseURL: 'http://ec2-35-154-218-25.ap-south-1.compute.amazonaws.com:8080',
    headers: {
            headers: {
              "Content-Type": "application/json",
              accept: "*/*",
        },
    }
});

