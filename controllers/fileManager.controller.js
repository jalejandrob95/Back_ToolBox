import { FileManager } from '../services/filesManager.service.js';

//init service files
const fileService = new FileManager();

export const listFiles = async (req, res) => {
  try {
    const getFilesList = await fileService.getFiles();
    const data = await fileService.processData(getFilesList?.files);
    //clean resp
    const cleanedResponse = data.filter((item) => {
      return Array.isArray(item) && item.length > 0;
    });
    res.status(200).json(cleanedResponse);
  } catch (error) {
    console.log(error);
  }
};
