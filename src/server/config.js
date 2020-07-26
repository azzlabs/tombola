module.exports = class Config {
    constructor () {
        this.config = {
            port: 3000
        }

        // const dotenv = require('dotenv');
        // dotenv.config();
        if (process.env.PORT) this.config.port = process.env.PORT;

        /* if (process.env.SALT) this.config.salt = process.env.SALT;
        if (process.env.MONGO_URL) this.config.database.url = process.env.MONGO_URL;
        if (process.env.MONGO_DBNAME) this.config.database.name = process.env.MONGO_DBNAME; */
    }
}