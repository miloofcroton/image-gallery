import shortid from 'shortid';
import data from './data';

if(!data.albums) {
  data.albums = [
    {
      key: shortid.generate(),
      title: 'Football',
      description: 'On any given Sunday you\'re gonna win or you\'re gonna lose. The point is - can you win or lose like a man?',
      images: [],
    },
    {
      key: shortid.generate(),
      title: 'Trucks',
      description: 'The right tool for the job',
      images: [],
    },
    {
      key: shortid.generate(),
      title: 'Great Generals',
      description: 'Far better it is to dare mighty things...',
      images: [],
    },
    {
      key: shortid.generate(),
      title: 'Predatory Cats',
      description: '*silence* \n this is *too* quiet',
      images: [],
    },
    {
      key: shortid.generate(),
      title: 'Cookies',
      description: 'Just like mama made...',
      images: [],
    },
  ];
}

export default {
  getAlbums() {
    return data.albums;
  },
  addAlbum(album) {
    album.key = shortid.generate();
    data.albums.push(album);
    return album;
  },
};


