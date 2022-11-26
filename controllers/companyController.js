exports.index = (req, res, next) => {
    res.status(200).json({
      data:[{
        id:1,
        name:'get in tech',
        address:{
            province:'Bangkok',
            postcode: 10210
        }
      },
      {
        id:2,
        name:'CCI International',
        address:{
            province:'Bangkok',
            postcode: 10210
        }
      },
      {
        id:3,
        name:'Amazon',
        address:{
            province:'Seattle',
            postcode: 98109
      }
    }
    ]
    })
  }