const express = require('express'); 
const app = express(); 

const port = process.env.PORT || 3000; 


app.use(express.static(__dirname + '/Resources/dist', { 
extensions: ['html', 'htm'] 
}));

app.use("/Resources", express.static(__dirname + '/Resources')); 

app.get("/", function(req, res)
{
res.sendFile("index.html", {"root": __dirname + '/Resources/dist'}); 
});


app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
