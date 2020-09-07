import { Album } from './album';
export class Artist {
    id = 0;
    name = '';
    genre = '';
    imageUrl = '';
    members: string[] | undefined;
    albums: Album[] | undefined;
}