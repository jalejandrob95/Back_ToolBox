import { FileManager } from '../services/filesManager.service.js';

//init service files
const fileService = new FileManager();

export const listFiles = async (req, res) => {
  try {
    const getFilesList = await fileService.getFiles();
    res.status(200).json(getFilesList);
  } catch (error) {
    console.log(error);
  }
};
