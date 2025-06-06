const User = require('../model/userModel')
const Product = require('../model/productModel')

const viewuser = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err)
    }
}


const deleteUser = async (req, res) => {
    try {
        const id = req.headers.userid
        console.log(id)
        await User.findByIdAndDelete({ _id: id })
        res.json("User Deleted Successfully")
    } catch (err) {
        console.log(err)
    }
}


const addProducts = async (req, res) => {
    try {
        const { productName, productDescription, productPrice, productQuantity } = req.body
        console.log(req.file)
        const image = req.file.filename
        const products = await Product({
            productName,
            productDescription,
            productPrice,
            productQuantity,
            Image: image
        })
        await products.save()
        res.json({ message: "Product Added Successfully", status: 200 })
    } catch (err) {
        console.log(err)
    }
}


const viewproduct = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        console.log(err)
    }
}


const viewproductbyid = async (req, res) => {
    try {
        const id = req.headers.id
        const products = await Product.findById({ _id: id })
        res.json(products)
    } catch (err) {
        console.log(err)
    }
}


const updateProductbyId = async (req, res) => {
    try {
        const id = req.params.id
        const { productName, productDescription, productPrice, productQuantity } = req.body
        const image = req.file.filename
        const product = await Product.findByIdAndUpdate(id, {
            productName,
            productDescription,
            productPrice,
            productQuantity,
            Image: image
        })
        await product.save()
        res.json({ message: "Product updated successfully", status: 200 })
    } catch (err) {
        console.log(err)
    }
}



module.exports = { viewuser, deleteUser, viewproductbyid, viewproduct, addProducts, updateProductbyId }