const mongoose = require('mongoose')
mongoose.connect(process.env.URL, (req, res) => {
    console.log('MongoDB database connection established successfully')
})





// mongoose are two argumnet in one is url(server run) and second one is connection message
// mongoose.connect(process.env.URL, { useNewUrlParser: true });
//   mongoose.connect(`mongodb://127.0.0.1:27017/Review`, { useNewUrlParser: true });
// const connection = mongoose.connection
// connection.once('open', (req, res) => {
//     console.log('MongoDB database connection established successfully')
// })