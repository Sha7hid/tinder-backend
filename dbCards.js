import mongoose from "mongoose";
/* database structure for the tinder cards */
const cardSchema = mongoose.Schema({
    name: String,
    url: String
})
// table creating or collection called cards
export default mongoose.model('cards', cardSchema);