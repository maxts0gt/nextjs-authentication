import { MongoClient } from 'mongodb'

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://max:${process.env.MONGOSECRET}@sickcluster.tv5h4.mongodb.net/sick-bits?retryWrites=true&w=majority`
  )

  return client
}

// mongodb+srv://max:M_Sfpqd4UsdUbD9@sickcluster.tv5h4.mongodb.net/sick-bits?retryWrites=true&w=majority
