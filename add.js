const functions = require('@google-cloud/functions-framework');

functions.http('add', (req, res) => {
  const {X, Y} = req.body

  res.json({
    X,
    Y,
    Result: X + Y
  })
});
