const deletePicture = async (req, res) => {
    const {
        db: { Photo },
        params: { id }
    } = req;

    const deletedPic = Photo.deletePhoto(id);
    if (!deletedPic) return res.status(404).send("Photo not found.");

    res.status(204).send('Your photo has been deleted');
};

module.exports = deletePicture;