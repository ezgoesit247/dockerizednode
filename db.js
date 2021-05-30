const mongoose = require('mongoose');
const MONGO_USERNAME = encodeURIComponent("mongoid");
const MONGO_PASSWORD = encodeURIComponent('P@ssw0rd!');
const MONGO_HOSTNAME = '127.0.0.1'; // host.docker.internal // 172.17.0.2 // 127.0.0.1
const MONGO_PORT = '27017';
const MONGO_DB = encodeURIComponent('sharkinfo');
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, {useNewUrlParser: true});
