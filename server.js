const express = require('express'); 
const app = express(); 

app.use(express.static(__dirname + '/Web-Info', { 
extensions: ['html', 'htm'] 
}));

app.use("/Resources", express.static(__dirname + '/Resources')); 

app.get("/", function(req, res)
{
res.sendFile("index.html", {"root": __dirname + '/Web-Info'}); 
});

const port = process.env.PORT || 3000; 

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});