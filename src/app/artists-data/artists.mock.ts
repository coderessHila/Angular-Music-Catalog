import {IArtist} from "./artist.interface";

export const ARTISTS: IArtist[] = [
  {
    id: '1',
    name: 'Madonna',
    imgUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-25025-rectangle.jpg?resize=1800,1200&w=450',
    genres: ['pop', 'electronic'],
    origin: {
      country: 'USA',
      city: 'Bay City, Michigan'
    }
  },
  {
    id: '2',
    name: 'Paramore',
    imgUrl: 'https://www.justpushstart.com/wp-content/uploads/2012/05/paramoreMEN-850x606.jpg',
    genres: ['rock', 'pop', 'punk-pop'],
    origin: {
      country: 'USA',
      city: 'Franklin, Tennessee'
    }
  },
  {
    id: '3',
    name: 'Ozzy Osbourne',
    imgUrl: 'https://wallsdesk.com/wp-content/uploads/2017/01/Ozzy-Osbourne-Images.jpg',
    genres: ['rock', 'metal'],
    origin: {
      country: 'United Kingdom',
      city: 'Aston, Birmingham'
    }
  }
];


