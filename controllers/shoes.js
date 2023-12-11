const Shoe = require("../models/Shoe");

//@desc       Get all shoes
//@route      GET /api/vi/shoes
//@access     Public
exports.getAllShoes = async (req, res, next) => {
  try {
    const shoes = await Shoe.find();

    res.status(200).json({ success: true, count: shoes.length, data: shoes });
  } catch (err) {
    next(err);
  }
};
//@desc       Get shoe
//@route      GET /api/vi/shoes/id
//@access     Public
exports.getShoe = async (req, res, next) => {
  try {
    const shoe = await Shoe.findById(req.params.id);

    if (!shoe) {
      return next(`Shoe not found with id of ${req.params.id}`, 404);
    }

    res.status(200).json({ success: true, data: shoe });
  } catch (err) {
    // res.status(400).json({ success: false });
    next(err);
  }
};

//@desc       create shoe
//@route      POST /api/vi/shoes
//@access     Public
exports.createShoe = async (req, res, next) => {
  try {
    const shoe = await Shoe.create(req.body);

    res.status(201).json({
      success: true,
      data: shoe,
    });
  } catch (err) {
    next(err);
  }
};

//@desc       Update shoe
//@route      PUT /api/vi/shoes/id
//@access     Public
exports.updateShoe = async (req, res, next) => {
  try {
    const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: shoe,
    });

    if (!shoe) {
      return res.status(400).json({ success: false });
    }
  } catch (err) {
    next(err);
  }
};

// @desc      Delete a shoe
// @route     Delete /api/v1/shoes/:id
// @access    Private
exports.deleteShoe = async (req, res, next) => {
  try {
    const shoe = await Shoe.findByIdAndDelete(req.params.id);

    if (!shoe) {
      return next(`Shoe not found with id of ${req.params.id}`, 404);
    }
    await shoe.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    next(err);
  }
};
