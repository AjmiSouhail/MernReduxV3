import axios from 'axios';

const api = async () => {
  const response = await axios.get('/getapi');
  console.log(response.data)
  return response.data;
};

const get = async () => {
  const response = await axios.get('/employe');
  return response.data;
};
const getid = async (id) => {
  const response = await axios.get(`/getemploye/${id}`);
  return response.data;
};
const add = async (emp) => {
  const response = await axios.post('/ajouter', emp);
  return response.data;
};
const dell = async (id) => {
  const response = await axios.delete(`/delete/${id}`);
  return response.data;
};
const update = async (id, employe) => {
  console.log(id)
  console.log(employe)

  const response = await axios.put(`/modifier/${id}`, employe);
  return response.data;
};


export default {get,add,dell,update,getid,api}