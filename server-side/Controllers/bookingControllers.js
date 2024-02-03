export const bookPlace = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json("Place booked !!");

    } catch (error) {
        res.status(500).json(error);
    }
};