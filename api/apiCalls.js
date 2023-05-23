import fetch from 'node-fetch';

export const getListFiles = async () => {
  try {
    const headers = {
      Authorization: `Bearer aSuperSecretKey`,
    };

    const config = {
      method: 'GET',
      headers,
      compress: true,
    };
    const resp = await fetch(
      `https://echo-serv.tbxnet.com/v1/secret/files`,
      config
    );

    const data = await resp.json();

    return { status: resp.status, ...data };
  } catch (error) {
    console.log(error);
  }
};
