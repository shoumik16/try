
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
app.get('/user', (req, res) => {
    const data=[
        {
            id:1,
            name:'shoumik',
            age:16
        },
        {
            id:2,
            name:'fahim',
            age:18
        },
        {
            id:3,
            name:'fahim abid',
            age:19
        }
    ]
    res.send(data)
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
