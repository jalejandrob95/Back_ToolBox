import { getListFiles, downloadFilesCalls } from '../api/apiCalls.js';
import csv from 'csv-parser';

export class FileManager {
  async getFiles() {
    const getList = await getListFiles();
    return getList;
  }

  async processData(filesArr) {
    console.log;
    const dataApi = [];
    for (const nameFile of filesArr) {
      const dataFiles = await this.downloadFile(nameFile);
      const formatResponse = this.processResponse(dataFiles.dataArr);
      dataApi.push(formatResponse);
    }
    return dataApi;
  }
  async downloadFile(fileName) {
    const downloadFiles = await downloadFilesCalls(fileName);
    return downloadFiles;
  }

  processResponse(response) {
    const formattedResponse = response.map((item) => {
      const hexPattern = /^[0-9a-fA-F]{32}$/;
      const values = item.split(',');
      const name = values[0];
      const text = values[1] || null;
      const numberValue = isNaN(values[2]) ? null : values[2];
      const hexValue = hexPattern.test(values[3]) ? values[3] : null;
      if (!text || !numberValue || !hexValue) return null;

      return {
        name,
        text,
        number: parseInt(numberValue, 10),
        hex: hexValue,
      };
    });
    return formattedResponse;
  }
}
