import download from "image-downloader";
import fs from "fs";
import path from "path";

export const upload = async (req, res) => {
  try {
    const { link } = req.body;
    const uploadFolder_dir = "/My_Programmes/Airbnb-clone/server-side/Uploads/";
    const newName = "photo_" + Date.now() + ".jpg";
    download.image({
      url: link,
      dest: uploadFolder_dir + newName,
    });

    res.status(201).json(newName);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

export const uploadPhotos = async (req, res) => {
  try {
    const folderPath = "./Uploads";
    const files = req.files;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    files.forEach((file) => {
      const sourcePath = file.path;
      const destinationPath = path.join(folderPath, file.originalname);
      fs.copyFileSync(sourcePath, destinationPath);

    });

    res.status(201).json("ok");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};
