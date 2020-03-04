import {
  MongoClient
} from 'mongodb';


const userPassword = 'JjXf5fx16HPYYPbQ';
const cluster = 'clusterzer0-n2iab';
const user = 'user_001';

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  // client.connect(err => {
  //   const collection = client.db("test").collection("devices");
  //   client.close();
  // });
};
