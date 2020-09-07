conn = new Mongo();
db = conn.getDB("music");

db.artists.drop();

db.createCollection("artists", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "genre", "ImageUrl"],
            properties: {
                _id: {
                    bsonType: "int",
                    description: "must be a int and is required"
                },
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                genre: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                imageUrl: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                members: {
                    bsonType: ["array"],
                    uniqueItems: true,
                    additionalProperties: false,
                    items: {
                        bsonType: "string",
                        required: [],
                        description: "must be a string"
                    }
                }
            }
        }
    }
});


db.artists.insertMany(
    [
        {
            "_id": 1,
            "name": "Beatles",
            "genre": "Rock",
            "imageUrl": "assets/images/beatles.jpg",
            "members": [
                "Paul McCartney",
                "John Lennon",
                "George Harrison",
                "Ringo Star"
            ],
        },
        {
            "_id": 2,
            "name": "Led Zeppelin",
            "genre": "Rock",
            "imageUrl": "assets/images/Zeppelin.jpg",
            "members": [
                "Robert Plant",
                "Jimmy Page",
                "John Bonham",
                "John Paul Jones"
            ],
        },
        {
            "_id": 3,
            "name": "Yes",
            "genre": "Rock",
            "imageUrl": "assets/images/yes.png",
            "members": [
                "Jon Anderson",
                "Steve Howe",
                "Chris Squire",
                "Bill Buford",
                "Rick Wakeman"
            ],
        },
        {
            "_id": 4,
            "name": "Pink Floyd",
            "genre": "Rock",
            "imageUrl": "assets/images/floyd.jpg",
            "members": [
                "Roger Waters",
                "Rick Wright",
                "David Gilmore",
                "Nick Mason"
            ]
        },
        {
            "_id": 5,
            "name": "King Crimson",
            "genre": "Rock",
            "imageUrl": "assets/images/crimson.png",
            "members": [
                "Robert Fripp",
                "Michael Giles",
                "Greg Lake",
                "Ian McDonald",
                "Peter Sinfield"
            ]
        },
        {
            "_id": 6,
            "name": "The Rolling Stones",
            "genre": "Rock",
            "imageUrl": "assets/images/rollingstones.jpg",
            "members": [
                "Mick Jagger",
                "Keith Richards",
                "Charlie Watts",
                "Ronnie Wood",
                "Bill Wyman"
            ]
        },
        {
            "_id": 7,
            "name": "Jethro Tull",
            "genre": "Rock",
            "imageUrl": "assets/images/tull.jpg",
            "members": [
                "Ian Anderson",
                "Martin Barre",
                "Jeffery Hammonds",
                "John Evan",
                "Clive Bunker"
            ]
        },
        {
            "_id": 8,
            "name": "Cheap Trick",
            "genre": "Rock",
            "imageUrl": "assets/images/trick.jpg",
            "members": [
                "Robin Zander",
                "Rick Nielsen",
                "Tom Petersson",
                "Bun E. Carlos"
            ]
        }
    ]);


