'use strict';

module.exports = (Cat) => {
  return (req, res) => {
    Cat.findById(req.params.catId, (err, cat) => {
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
