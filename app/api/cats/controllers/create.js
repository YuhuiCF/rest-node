'use strict';

module.exports = (Cat) => {
  return (req, res) => {
    const newCat = new Cat(req.body);
    newCat.save((err, cat) => {
      if (err) {
        res.send(err);
      } else {
        res.json(cat);
      }
    });

    /*
    res.json({
      type: 'cat',
    });
    */
  };
};
