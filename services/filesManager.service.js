import { getListFiles } from '../api/apiCalls.js';

export class FileManager {
  async getFiles() {
    const getList = await getListFiles();
    return getList;
  }
}
