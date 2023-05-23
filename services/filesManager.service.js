import { getListFiles, downloadFilesCalls } from '../api/apiCalls.js';
import csv from 'csv-parser';

export class FileManager {
  async getFiles() {
    const getList = await getListFiles();
    return getList;
  }

  async processData(filesArr) {
    console.log(filesArr);
    const dataApi = [];
    for (const nameFile of filesArr) {
      const dataFiles = await this.downloadFile(nameFile);
      dataApi.push(dataFiles);
    }
    return dataApi;
  }
  async downloadFile(fileName) {
    console.log(fileName);
    const downloadFiles = await downloadFilesCalls(fileName);
    return downloadFiles;
  }
}
