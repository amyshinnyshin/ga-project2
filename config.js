


const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tnd5cmm.mongodb.net/mongoburgers?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 2023;

module.exports = {DATABASE_URL, PORT}
