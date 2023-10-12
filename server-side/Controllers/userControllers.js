export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    res.status(200).json("okokkokokok");
  } catch (error) {
    res.status(500).json(error);
  }
};
