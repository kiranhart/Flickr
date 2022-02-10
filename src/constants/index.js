const images = {
    landing: 'https://live.staticflickr.com/65535/50559585627_0c6f5fe560_h.jpg'
};

const api = {
    recent: `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&per_page=60&api_key=${process.env.REACT_APP_KEY}&nojsoncallback=?&safe_search=1&page=`
};

export {images, api};