import mongoose from "mongoose";
const perksSchema = new mongoose.Schema({
    placeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Place",
    },
    wifi: Boolean,
    park: Boolean,
    tv: Boolean,
    radio: Boolean,
    pet: Boolean,
    entrance: Boolean,
});

const perksModel = mongoose.model("Perks", perksSchema);

export default perksModel;
