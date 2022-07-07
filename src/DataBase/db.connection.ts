import { config } from 'dotenv';
import { MongoClient, Db } from 'mongodb';

config();

export class MongoDb {
  db: Db;
  client: MongoClient;
  static readonly instance: MongoDb = new MongoDb(process.env.MONGO_URI);
  private constructor(uri: string) {
    this.client = new MongoClient(uri);
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db(process.env.MONGO_DBNAME as string);
    console.log('Connecté à ', process.env.MONGO_DBNAME);
  }
}
