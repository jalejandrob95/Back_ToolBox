import axios from 'axios';

const urlBase = axios.create({
  baseURL: 'https://echo-serv.tbxnet.com/v1/secret/files',
});

urlBase.interceptors.request.use(async (config) => {
  config.params = {
    authorization: 'Bearer aSuperSecretKe',
  };
  return config;
});

export const getListFiles = async () => {
  try {
    const data = await getListFiles.get();
    if (data.error) return null;
    return data;
  } catch (error) {
    console.log(error);
  }
};
