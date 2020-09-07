import { MongoClient } from 'mongodb'


export class AlbumController {
    private url: string = 'mongodb://' + process.env.MONGODB_HOST + ':27017';
    private client = new MongoClient(this.url);

    async getAlbum(id: number | undefined): Promise<any[]> {

        try {
            await this.client.connect();
            const database = this.client.db("music");
            const collection = database.collection("album");
            return await collection.find().toArray();
        }
        finally {
            await this.client.close();
        }
    }
}