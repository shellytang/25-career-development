'use strict';

const fs = require('fs');
// const Node = require('./tree-node');

const readHTML = module.exports = function(file, callback) {

  fs.readFile(file, function(err, data) {

    if(err) throw (err);
    let newData = data.toString().split('\n');
    newData.shift();

    newData = newData.map(function(i) {
      return i.trim();
    });
    // return newData;
    // console.log(newData);
    callback(null, newData);
  });
};
