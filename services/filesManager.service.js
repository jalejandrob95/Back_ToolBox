import { getListFiles } from '../api/apiCalls';

export class FileManager {
  async getFiles() {
    const getList = await getListFiles();
    return getList;
  }
}
