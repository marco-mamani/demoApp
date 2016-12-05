var fs = require('fs');

module.exports.get = function (req, res) {
    var user = fs.readFileSync('app/data/user/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(user);
};

module.exports.save = function (req, res) {
    var user = req.body;
    fs.writeFileSync('app/data/user/' + req.params.id + '.json', JSON.stringify(user));
    res.send(user);
}
