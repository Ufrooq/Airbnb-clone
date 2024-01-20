export const upload = async (req, res) => {
  try {
    const { link } = req.body;
    console.log(link);
    res.status(201).json("Data uploaded successfully !!");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};
