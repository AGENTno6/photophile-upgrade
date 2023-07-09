const deleteAllPictures = async (req, res) => {
    const {
        db: { Photo }
    } = req;

    const emptyAlbum = Photo.deleteAllPhotos()

    if (!emptyAlbum) return res.status(404).send("Album not found.");

    res.status(204).send('Your photo has been deleted');
};

module.exports = deleteAllPictures;