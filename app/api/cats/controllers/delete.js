'use strict';

module.exports = (Cat) => {
  return (req, res) => {
    Cat.remove({
      _id: req.params.catId,
    }, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          message: 'Task successfully deleted',
        });
      }
    });

    /*
    res.json({
      type: 'cat',
    });
    */
  };
};
