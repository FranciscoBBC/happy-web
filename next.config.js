const withImages = require('next-images')

module.exports = withImages({
    esModule: true,
    env: {
        REACT_APP_MAPBOX_TOKEN: "pk.eyJ1IjoiYXJuYWxkb25lZ28iLCJhIjoiY2tnc3BsYThhMDBkdjJybmp4czZrdjYzbSJ9.DL5R8JuAX6JWcTt3aluQ8w"
    }
});