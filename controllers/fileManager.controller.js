import { FileManager } from '../services/filesManager.service.js';

//init service files
const fileService = new FileManager();

export const listFiles = async (req, res) => {
  try {
    const getFilesList = await fileService.getFiles();
    if (!getFilesList) {
      return res.status(404).json({
        request: false,
        message: 'File Api Failed',
      });
    }
    const data = await fileService.processData(getFilesList?.files);
    if (!data) {
      return res.status(404).json({
        request: false,
        message: 'File Api Failed',
      });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
