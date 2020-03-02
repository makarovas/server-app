import express from "express";
import { listings } from './listings';
import bodyParser from 'body-parser';

const app = express();
const port = 9000;


app.use(bodyParser.json());


//// routes
// get
app.get("/", (_req, res, ) => res.send("ping pong"));
app.get('/listings', (_req, res) => {
  return res.send(listings);
});

//post
app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id;
  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }
  }
  return res.send('failed to deleted listings');
});

app.listen(port);


