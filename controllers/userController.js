exports.index = (req, res, next) => {
    // res.send('respond with a resource');
    res.status(200).json({
      Fullname:'Phupha Noppakun'
    })
  }
  exports.bio = (req, res, next) => {
    res.status(200).json({
      Fullname:'Phupha Noppakun',
      nickname:'PooH',
      hobby:'Sleep',
      gitusername:'c0zyb0y'
    })
  }