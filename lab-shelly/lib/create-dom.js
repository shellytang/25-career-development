'use strict';

const readHTML = require('./fs-read.js');
const Tree = require('./tree');

const createDOM = module.exports = function() {

  readHTML(`${__dirname}/../assets/minimal.html`, function(err, data) {

    if(err) throw err;

    let legend = {
      html: data[0],
      head: data[1],
      title: data[2],
      body: data[4],
      header: data[5],
      h2: data[6],
      nav: data[7],
      ul: data[8],
      li1: data[9],
      li2: data[10],
      li3: data[11],
      li4: data[12],
      main: data[16],
      section: data[17],
      sectP1: data[18],
      sectP2: data[19],
      footer: data[22],
      footerP: data[23],
    };

    let htmlTree = new Tree();

    htmlTree.add(legend.html); //root

    //root
    htmlTree.add(legend.head, legend.html);
    htmlTree.add(legend.body, legend.html);

    //head
    htmlTree.add(legend.title, legend.head);

    //body
    htmlTree.add(legend.header, legend.body);
    htmlTree.add(legend.main, legend.body);
    htmlTree.add(legend.footer, legend.body);

    //header
    htmlTree.add(legend.h2, legend.header);
    htmlTree.add(legend.nav, legend.header);

    //nav
    htmlTree.add(legend.ul, legend.nav);

    //ul
    htmlTree.add(legend.li1, legend.ul);
    htmlTree.add(legend.li2, legend.ul);
    htmlTree.add(legend.li3, legend.ul);
    htmlTree.add(legend.li4, legend.ul);

    //main
    htmlTree.add(legend.section, legend.main);

    //section
    htmlTree.add(legend.sectP1, legend.section);
    htmlTree.add(legend.sectP2, legend.section);

    //footer
    htmlTree.add(legend.footerP, legend.footer);

    htmlTree.preOrder(function print(node) {
      console.log(node);
    });

    // //root
    // htmlTree.add(data[1], data[0]); //head - root
    // htmlTree.add(data[4], data[0]); //body - root
    //
    // //head
    // htmlTree.add(data[2], data[1]);// title - head
    //
    // //body
    // htmlTree.add(data[5], data[4]); //header - body
    // htmlTree.add(data[16], data[4]); //main - body
    // htmlTree.add(data[22], data[4]); //footer - body
    //
    // //header
    // htmlTree.add(data[6], data[5]); //h2 - header
    // htmlTree.add(data[7], data[5]); //nav - header
    //
    // //nav
    // htmlTree.add(data[8], data[7]); //ul - nav
    //
    // //ul
    // htmlTree.add(data[9], data[8]); //li - ul
    // htmlTree.add(data[10], data[8]); //li - ul
    // htmlTree.add(data[11], data[8]); //li - ul
    // htmlTree.add(data[12], data[8]); //li - ul
    //
    // //main
    // htmlTree.add(data[17], data[16]); //section - main
    //
    // //section
    // htmlTree.add(data[18], data[17]); //p - section
    // htmlTree.add(data[19], data[17]); //p - section
    //
    // //footer
    // htmlTree.add(data[23], data[22]); //p - footer

    // console.log(data);
    // console.log(htmlTree);
    // console.log('ROOT children', htmlTree.root.children);
    // console.log('Head children', htmlTree.root.children[0].children);
  });

};
