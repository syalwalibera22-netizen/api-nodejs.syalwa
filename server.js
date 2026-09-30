const express=require('express');
const app = express();
app.use (express.json());

let users =[
     {id:1,name:'chery', email:'LHk70@example.com'} ,
     {id:2,name:'joe', email:'LHk70@example.com'} ,
     {id:3,name:'daniel', email:'LHk70@example.com'} ,
];

//Endpoint get mengambil data
app.get("/api/users/:id",(req,res) => {
    res.json(users);
} );

app.post("/api/users",(req,res) => {
    const {name,email} = req.body;
    const newUser ={
        id:users.length +1,
        name,
        email
    };
    users.push(newUser);
});

app.delete("/api/users/:id", (req,res) => {
    const userId = parseInt (req.params.id);
    user = users.filter(u => u.id !== userId);
 
    res.sendStatus(204).send("User berhasil dihapus");
});

app.put("/api/users/:id", (req,res) => {
    const userId = parseInt (req.params.id);
    const {name,email} = req.body;
    const userIndex = users.findIndex(u=> u.id === userId);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

app.put("/api/users/:id", (req,res) => {
    res.json(user);
});

//jalankan server di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server berjalan di https://localhost:${PORT} ') ;
});  
