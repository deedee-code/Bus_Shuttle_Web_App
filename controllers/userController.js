const getUser = async (req, res) => {
    res.status(200).json({message: "Get all users"});
};


exports.getUser = getUser;