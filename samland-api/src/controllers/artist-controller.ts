import { MongoClient, MongoClientOptions, Db } from 'mongodb'


export class ArtistController {
    private url: string = 'mongodb://' + process.env.MONGODB_HOST + ':27017';
    async getArtists(): Promise<any[]> {
        console.log('Connecting to mongodb...');
        let options: MongoClientOptions;
        let client: MongoClient | undefined;
        try {
            console.log(this.url);
            client = await MongoClient.connect(this.url,
                {
                    connectTimeoutMS: 5000,
                    socketTimeoutMS: 5000,
                    serverSelectionTimeoutMS: 5000,
                    useUnifiedTopology: true
                });
            const db = client.db('music');
            const collection = db.collection('artists');
            const results = await collection.find().toArray();
            return results;
        }
        finally {
            if (client) {
                client.close();
            }
        }
    }

    async getArtist(id: number): Promise<any> {
        let pipeline: any[] = [];
        console.log('Connecting to mongodb...');
        let options: MongoClientOptions;
        let client: MongoClient | undefined;
        try {
            client = await MongoClient.connect(this.url,
                {
                    connectTimeoutMS: 5000,
                    socketTimeoutMS: 5000,
                    serverSelectionTimeoutMS: 5000,
                    useUnifiedTopology: true
                });
            console.log('Connected to mongodb');
            const db = client.db('music');
            const collection = db.collection('artists');
            const result = await collection.aggregate([
                {
                    $lookup: {
                        from: "albums",
                        localField: "_id",
                        foreignField: "artist_id",
                        as: "albums"
                    }
                }
            ]).next();
            console.log(result);
            return result;
        }
        finally {
            if (client) {
                console.log('Disconnecting from mongodb...');
                client.close();
                console.log('Disconnected from mongodb');
            }
        }
    }
}

