'use strict';

module.exports = (Cat) => {
  return (req, res) => {
    Cat.findOneAndUpdate(
      {_id: req.params.taskId},
      req.body,
      {new: true},
      (err, cat) => {
        if (err) {
          res.send(err);
        } else {
          res.json(cat);
        }
      }
    );

    /*
    res.json({
      type: 'cat',
    });
    */
  };
};
