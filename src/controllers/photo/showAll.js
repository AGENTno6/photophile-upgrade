const DisplayAllPhotos = async (req, res) => {
    const {
        session,
        db: { Photo },
    } = req; 

    console.log(session.userId)
    const album = await Photo.showAllPhotos(session.userId);
    console.log(album);
    res.send(album);
}

module.exports = DisplayAllPhotos;