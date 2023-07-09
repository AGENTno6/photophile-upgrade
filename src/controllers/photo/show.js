const showPhoto = async (req, res) =>{
    const { 
        db: {Photo},
        params: { id }
    } = req;

    const photo =await Photo.findPhoto(id);
    if (!photo) return res.sendStatus(404);

    res.send(photo);
};

module.exports = showPhoto;