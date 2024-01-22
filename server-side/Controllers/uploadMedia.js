import download from "image-downloader";

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
