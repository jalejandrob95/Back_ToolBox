import fetch from 'node-fetch';
import csv from 'csv-parser';

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
    const parsedData = [];
    csv({ separator: ';' })
      .on('data', (row) => parsedData.push(row))
      .on('end', () => {
        console.log(' CSV :', parsedData);
      })
      .write(data);

    return { status: resp.status, parsedData };
  } catch (error) {
    console.log(error);
  }
};
