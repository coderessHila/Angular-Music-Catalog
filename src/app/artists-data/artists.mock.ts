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
  },
  {
    id: '4',
    name: 'Fleetwood Mac',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Fleetwood_Mac_Billboard_1977.jpg/640px-Fleetwood_Mac_Billboard_1977.jpg',
    genres: ['pop rock', 'folk rock', 'blues rock'],
    origin: {
      country: 'United Kingdom',
      city: 'London'
    }
  },{
    id: '5',
    name: 'The Supremes',
    imgUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Supremes-GettyImages-74001231.jpg',
    genres: ['Motown', 'Blues'],
    origin: {
      country: 'US',
      city: 'Detroit, Michigan'
    }
  },{
    id: '6',
    name: 'Lady Gaga',
    imgUrl: 'https://wallpaperaccess.com/full/301267.jpg',
    genres: ['pop', 'electronic', 'art pop'],
    origin: {
      country: 'US',
      city: 'New york'
    }
  }
];


