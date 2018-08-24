import shortid from 'shortid';
import data from './data';

if(!data.albums) {
  data.albums = [
    {
      key: shortid.generate(),
      title: 'Football',
      description: 'Try and tackle this!',
      images: [],
    },
    {
      key: shortid.generate(),
      title: 'Monster Trucks',
      description: 'My truck crushes',
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
      description: 'Kill! Kill! Kill!',
      images: [],
    },
    {
      key: shortid.generate(),
      title: 'Energy Drinks',
      description: 'Push it to the liiiiiiiimit',
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


