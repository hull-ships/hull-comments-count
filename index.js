!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports["Hull Comments Count"]=t():e["Hull Comments Count"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(e,t,n){"use strict";var o=function(e){return e&&e.__esModule?e["default"]:e},r=o(n(/*! ./bootstrap */1)),c=o(n(/*! ../locales/en.json */2));Hull.ready(function(e,t,n,o){var u=n.deployments[0];u.ship.translations.en=c,r(document.querySelector("#ship"),u)})},/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
function(e,t,n){"use strict";function o(e,t){var n=Hull.entity.encode(Hull.findUrl());Hull.api(n,function(n){var o,r=n.stats.comments||0;o=r>1?"more_comment":1===r?"one_comment":"zero_comment";var c=t.ship.translations.en[o].replace("{count}",r);e.innerHTML=c})}e.exports=o},/*!*************************!*\
  !*** ./locales/en.json ***!
  \*************************/
function(e,t,n){e.exports={zero_comment:"No comment",one_comment:"One comment",more_comment:"{count} comments"}}])});