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

export const downloadFilesCalls = async (fileName) => {
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
      `https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`,
      config
    );

    const data = await resp.text();
    const dataArr = data.split('\n').slice(1);
    if (resp.status != 200) return { status: resp.status, dataArr: [] };
    return { status: resp.status, dataArr };
  } catch (error) {
    console.log(error);
  }
};
