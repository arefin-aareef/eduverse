const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express()
const port =  process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://eduverse:eH3vNVPDsiPv3Gzu@cluster0.sypbrfe.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    const courseCollection = client.db('eduverseDB').collection('course')
    const favoriteCollection = client.db('eduverseDB').collection('favorite')

    app.get('/courses', async(req, res) => {
        const result = await courseCollection.find().toArray()
        res.send(result)
    })
    app.get('/courses/:id', async(req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id)}
        const result = await courseCollection.findOne(query);
        res.send(result)
    })

    app.get('/favorites', async(req, res) => {
      const email = req.query.email
      if(!email){
        res.send([])
      } 
      const query = { email: email}
      const result = await favoriteCollection.find(query).toArray()
      res.send(result)
    })
    app.post('/favorites', async (req, res) => {
      const item = req.body;
      const { courseId, email } = item;
      const existingItem = await favoriteCollection.findOne({ courseId, email });
      if (existingItem) {
        res.status(400).send({ message: 'Item already exists in favorites.' });
      } else {
        const result = await favoriteCollection.insertOne(item);
        res.status(201).send(result);
      }
    });
    app.delete('/favorites/:id', async(req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await favoriteCollection.deleteOne(query)
      res.send(result)
    })
    

    

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Eduverse is running')
})

app.listen(port, () => {
  console.log(`Eduverse app listening on port ${port}`)
})