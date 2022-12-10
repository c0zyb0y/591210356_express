const Company = require('../models/company')

exports.index = async (req, res, next) => {  //Show all

  const company = await Company.find()

    res.status(200).json({
      data: company
    })
  }

  exports.show = async (req, res, next) => { //show by id Func

    try {
        const { id } = req.params

        const company = await Company.findOne({
            _id: id
        })

        if (!company) {
            throw new Error('ไม่พบผู้ใช้งาน')
        } else {

            res.status(200).json({
                data: company
            })

        }

    } catch (error) {
        res.status(400).json({
            error: {
                message: 'เกิดข้อผิดผลาด: ' + error.message
            }
        })

    }
}

  exports.insert = async (req, res, next) => {  //Insert Func

    try{
         const {address, name} = req.body
         let company = new Company({address,name})
         await company.save()

         res.status(200).json({
          message:'Add successful'
        })

    } catch (error){
      res.status(400).json({
        message:'error :' + error.message
      })
    }
}

  

exports.destroy = async (req, res, next) => { //Delete by id Func

  try {
      const { id } = req.params

      const company = await Company.deleteOne({
          _id: id
      })

      if (company.deleteCount === 0) {
          throw new Error('ไม่สามารถลบข้อมูลได้ ไม่พบข้อมูลผู้ใช้งาน')
      } else {
          res.status(200).json({
              message: 'ลบข้อมูลเรียบร้อยแล้ว'
          })
      }
  } catch (error) {
      res.status(400).json({
          error: {
              message: 'เกิดข้อผิดผลาด: ' + error.message
          }
      })

  }
}

exports.update = async (req, res, next) => {  //Update Func

  try {

      const { id } = req.params
      const { name, address } = req.body

      //const staff = await Staff.findById(id) ;
      //staff.name = name
      //staff.salary = salary
      //await staff.save()

      // const staff = await Staff.findByIdAndUpdate(id, {
      //     name: name,
      //     salary: salary
      // })

      const company = await Company.updateOne({_id : id}, {
          name: name,
          address: address
      })

      console.log(company)

      res.status(200).json({
          message: "อัพเดทข้อมูลเรียบร้อยแล้ว"
      })

  } catch (error) {

  }
}
