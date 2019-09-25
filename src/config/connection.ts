import mongoose from 'mongoose';

let uri: any;

switch (process.env.NODE_ENV) {
    case "test":
        uri = process.env.MONGO_URI_UNIT_TEST
        break;
    case "production":
        uri = process.env.MONGO_URI
        break;

    default:
        uri = process.env.MONGO_URI
        break;
}


// module.exports = function (done: any) {
//     done = typeof done === 'function' ? done : function () { };

//     console.log('Initializer: Mongoose started');

//     // the mongoose models and the mongoose connection don't need to happen in order

//     require('../models')();

//     mongoose.Promise = global.Promise;

//     const connectWithRetry = function () {
//         mongoose.connect(uri, {
//             // useMongoClient: true,
//             useNewUrlParser: true,
//             reconnectTries: 9999999999,
//             connectTimeoutMS: 2000,
//         });
//     };

//     mongoose.connection.on('error', function (err) {
//         console.log('Error MONGOOSE: ' + err);
//         connectWithRetry();
//     });

//     mongoose.connection.on('connected', function (err) {
//         console.log('Successfully Connected to the database');
//         done();
//     });

//     connectWithRetry();
// };


class DBConnection {

    static connect() {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            reconnectTries: 9999999999,
            connectTimeoutMS: 2000
        });
        mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
        mongoose.connection.once('connected', () => console.info('Successfully connected to database'));
        mongoose.connection.on('error', err => {
            console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
        });
    }
}

export default DBConnection;
