const Shop = require("../models/shop");
const config = require('dotenv')
const con = require('../config/index')

exports.Shop = async (req, res, next) => {
    const shops = await Shop.find().select('name photo location').sort({ _id: -1 });
    const shopwithPhotoDomain = shops.map((shop, index) => {
        return {
            id: shop._id,
            name: shop.name,
            photo: con.DOMAIN + shop.photo,
            location: shop.location

        }
    })

    res.status(200).json({ data: shopwithPhotoDomain });
};

exports.menu = async (req, res) => {
    // const shop = await Menu.find()
    //   .select('name price')
    //   .populate('shop', 'name')
    //   .sort({ _id: -1 });
    const menu = await menu.find()
        .populate('shop')
    res.send({
        data: menu,
    });
}

exports.show = async (req, res) => {
    try {
        const shop = await shop.findById(req.params.id).populate('menus')
        if (!shop) throw new Error('ไม่พบข้อมูล')
        res.send({ data: shop })
    } catch (err) {
        res.status(404).json({ message: 'error : ' + err.message })
    }
}