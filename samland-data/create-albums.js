conn = new Mongo();
db = conn.getDB("music");
db.albums.drop();

db.createCollection("albums", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "artist_id", "imageUrl"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                artist_id: {
                    bsonType: "int",
                    description: "must be a int and is required"
                },
                releaseDate: {
                    bsonType: "string",
                    description: "must be a date"
                },
                imageUrl: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }
            }
        }
    }
});

db.albums.insertMany(
    [
        {
            "name": "Rubber Soul",
            "artist_id": NumberInt(1),
            "releaseDate": "1965-12-01T00:00:00.000Z",
            "imageUrl": "assets/images/Rubber_Soul.jpg"
        },
        {
            "name": "Revolver",
            "artist_id": NumberInt(1),
            "releaseDate": "1966-08-05T00:00:00.000Z",
            "imageUrl": "assets/images/revolver.jpg"
        },
        {
            "name": "Sgt. Pepper's Lonely Hearts Club Band",
            "artist_id": NumberInt(1),
            "releaseDate": "1967-05-26T00:00:00.000Z",
            "imageUrl": "assets/images/sgtpepper.jpg"
        },
        {
            "name": "The Beatles",
            "artist_id": NumberInt(1),
            "releaseDate": "1968-11-22T00:00:00.000Z",
            "imageUrl": "assets/images/thebeatles.jpg"
        },
        {
            "name": "Abbey Road",
            "artist_id": NumberInt(1),
            "releaseDate": "1969-09-26T00:00:00.000Z",
            "imageUrl": "assets/images/abbey_road.jpg"
        },
        {
            "name": "Physical Graffiti",
            "artist_id": NumberInt(2),
            "releaseDate": "1975-01-24T00:00:00.000Z",
            "imageUrl": "assets/images/Physical_Graffiti.jpg"
        },
        {
            "name": "Fragile",
            "artist_id": NumberInt(3),
            "releaseDate": "1972-01-04T00:00:00.000Z",
            "imageUrl": "assets/images/fragile.jpg"
        }
    ]);
