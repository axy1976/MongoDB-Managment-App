const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
router.use(express.json());

const company = require("../modules/company");

router.post("/add",(req,res) => {
    const { newCompany } = req.body;
    company.create(newCompany);
    return res.json( { data :"Company added Successfully !" });
});

router.post("/fetch",async (req,res) => {
    const companys = await company.find();
    if (companys.length == 0) {
        return res.json({data : "No User Found"});
    }
    return res.json({data : companys});
});

router.post("/update",async (req,res) => {
    const companysid = req.body.companyid;
    const productid = req.body.productids;

    const updateCompany = await company.findOneAndUpdate(
        {companyid:companysid},
        {productids:productid},
        {new:true}
    );

    if (updateCompany) {
        return res.json({ data:"Company Updated"});
    }
    return res.json({ data:"Company Can't be Updated"});
});

router.put("/delete/:companysid",async (req,res) => {
    const deleteCompany = await user.findOneAndDelete(
        {companyid:companysid}
    );
    return res.json({ data:"company deleted successfully !"});
});

module.exports = router;