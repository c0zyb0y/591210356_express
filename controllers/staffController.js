const Staff = require('../models/staff')


exports.index = async (req, res, next) => {  //Show all data Func

    const staff = await Staff.find().sort({ _id: -1 })

    res.status(200).json({
        data: staff
    })
}


exports.show = async (req, res, next) => { //show by id Func

    try {
        const { id } = req.params

        const staff = await Staff.findOne({
            _id: id
        })

        if (!staff) {
            throw new Error('ไม่พบผู้ใช้งาน')
        } else {

            res.status(200).json({
                data: staff
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

    const { name, salary } = req.body

    let staff = new Staff({
        name: name,
        salary: salary,
    });
    await staff.save()

    res.status(200).json({
        message: "เพิ่มข้อมูลเรียบร้อยแล้ว"
    })
}



exports.destroy = async (req, res, next) => { //Delete by id Func

    try {
        const { id } = req.params

        const staff = await Staff.deleteOne({
            _id: id
        })

        if (staff.deleteCount === 0) {
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
        const { name, salary } = req.body

        //const staff = await Staff.findById(id) ;
        //staff.name = name
        //staff.salary = salary
        //await staff.save()

        // const staff = await Staff.findByIdAndUpdate(id, {
        //     name: name,
        //     salary: salary
        // })

        const staff = await Staff.updateOne({_id : id}, {
            name: name,
            salary: salary
        })

        console.log(staff)

        res.status(200).json({
            message: "อัพเดทข้อมูลเรียบร้อยแล้ว"
        })

    } catch (error) {

    }
}