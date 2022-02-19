import { MongoClient } from 'mongodb'

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://max:${process.env.MONGOSECRET}@cluster0.ntrwp.mongodb.net/auth-demo?retryWrites=true&w=majority`
  )

  return client
}
