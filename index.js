const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send( 'hellow there')
})

const users =  [
    {
      "id": 0,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
       
    },
    {
      "id": 1,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
       
    },
    {
      "id": 2,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
       
    },
    {
      "id": 3,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
       
    },
    {
      "id": 4,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    }
  
   ]


app.get('/users', (req, res) => {
 const search = req.query.search;
  if(search){
        const searchResult = users.filter (user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
  }else {
    res.send(users)
  }
    
})

/* app Method */

app.post ('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.json(newUser);
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

const fruits = ['Mango', 'Lichi', 'Bana', 'Jackfruit']

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/mangoes/legra', (req, res) => {
    res.send('Mangoes')
} )



app.listen(port, () => {
    console.log('hellow there', port)
})