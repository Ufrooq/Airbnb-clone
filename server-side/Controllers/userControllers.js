export const registerUser = async (req, res) => {
  try {
    console.log("user registered !!");
    res.status(200).json("okok");
  } catch (error) {
    res.status(500).json(error);
  }
};
