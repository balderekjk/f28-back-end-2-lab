let realEstates = require('./db.json');
let globalId = 4;

module.exports = {
  getHouses: (req, res) => {
    // console.log(req.body);
    res.status(200).send(realEstates);
  },
  deleteHouse: (req, res) => {
    // console.log(req.body);
    let index = realEstates.findIndex((elem) => elem.id === +req.params.id);
    realEstates.splice(index, 1);
    res.status(200).send(realEstates);
  },
  createHouse: (req, res) => {
    // console.log(req.body);
    const { address, price, imageURL } = req.body;
    let newHouse = {
      id: +globalId,
      address,
      price: +price,
      imageURL,
    };
    realEstates.push(newHouse);
    globalId++;
    res.status(200).send(realEstates);
  },
  updateHouse: (req, res) => {
    console.log(req.body);
    const { type } = req.body;
    let index = realEstates.findIndex((elem) => elem.id === +req.params.id);
    if (type === 'plus') {
      realEstates[index].price += 10000;
    } else if (type === 'minus' && realEstates[index].price > 20000) {
      realEstates[index].price -= 10000;
    } else {
      res.status(400).send('Too cheap!');
    }
    res.status(200).send(realEstates);
  },
};
