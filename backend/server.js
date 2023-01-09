const express = require('express');
const cors = require('cors');
const app = express();

const options = {
    origin: 'http://localhost:3000',
    useSuccessStatus: 200,
}
// let allowed = ['http://localhost:3000', 'some other link']
// function options(res, req) {
//     let tmp;
//     let origin = req.header('Origin');
//     if(allowed.indexOf(origin) > -1) {
//         tmp = {
//             origin: true,
//             optionSuccessStatus: 200,
//         }
//     } else {
//         tmp = {
//             origin: 'stupid'
//         }
//     }
//     res(null, tmp);
// }
app.use(cors(options));

app.get('/', (req, res) => {
    res.send('Welcome from home');
})
app.get('/books', (req, res) => {
    res.send('welcome from the new books homes');
})

app.listen(8000, () => {
    console.log("Server listening");
})