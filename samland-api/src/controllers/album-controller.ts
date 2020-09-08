import { MongoClient, Collection, Db } from "mongodb";

export class AlbumController {
  private url: string = "mongodb://" + process.env.MONGODB_HOST + ":27017";
  private client = new MongoClient(this.url);

  async getAlbum(id: number | undefined): Promise<any[]> {
    try {
      await this.client.connect();
      const database: Db = this.client.db("music");
      const collection: Collection = database.collection("album");
      return await collection.find().toArray();
    } finally {
      await this.client.close();
    }
  }
}
