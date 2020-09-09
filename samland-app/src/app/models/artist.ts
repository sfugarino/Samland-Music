import { Album } from './album';
export class Artist {
  // tslint:disable-next-line:variable-name
  _id = 0;
  id = 0;
  name = '';
  genre = '';
  imageUrl = '';
  members: string[] | undefined;
  albums: Album[] | undefined;
}
