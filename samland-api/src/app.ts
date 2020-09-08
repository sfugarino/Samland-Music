import express from "express";
import { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { AlbumController } from "./controllers/album-controller";
import { ArtistController } from "./controllers/artist-controller";

const app: Application = express();
const router: any = express.Router();

app.use(morgan("dev"));

app.use(express.json());

const port: any = process.env.PORT || 8080;

// middleware to use for all requests
router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Something is happening.");
  next();
});

router.route("/artist").get((req: Request, res: Response) => {
  const controller: ArtistController = new ArtistController();
  controller
    .getArtists()
    .then((artists) => {
      req.headers["if-none-match"] = "";
      req.headers["if-modified-since"] = "";
      res.status(200).send(artists);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.route("/artist/:id").get((req: Request, res: Response) => {
  const id: number = +req.params.id;
  const controller: ArtistController = new ArtistController();
  controller
    .getArtist(id)
    .then((artist) => {
      res.status(200).send(artist);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.route("/album").get((req: Request, res: Response) => {
  res.send("An Album");
});

app.use("/api", router);
app.set("etag", false);

app.listen(port, () => {
  console.log("Magic happens on port " + port);
});
