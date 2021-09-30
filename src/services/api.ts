import axios from 'axios';

export default axios.create({
  baseURL:
    'https://randomuser.me/api/?inc=id,picture,name,email,gender,dob,cell,nat,location&results=50',
});
