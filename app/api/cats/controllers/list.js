'use strict';

module.exports = (Cat) => {
  return (req, res) => {
    /*
    Cat.find({}, (err, cats) => {
      if (err) {
        res.send(err);
      } else {
        res.json(cats);
      }
    });
    */
    res.json([
      {
        type: 'cat',
      },
    ]);
  };
};
