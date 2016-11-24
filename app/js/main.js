var tabs = require('./modules/tabs.js');
var triggers = require('./modules/triggers.js');
var map = require('./modules/map.js');
var request = require('./modules/requests.js');
var questionManagerForm = require('./modules/questionManagerForm.js');
var consult = require('./modules/managerConsult.js');
var addition = require('./modules/additionForm.js');
var plan = require('./modules/planningForm.js');
var freeForm = require('./modules/freeForm.js');
var houseModule = require('./modules/houseModule.js');

require('./modules/select.js')();

$(window).resize(function(){
  var burger = $('.header__burg');
  if(burger.hasClass('menu-on')) {
    burger.toggleClass('menu-on');
    $('.mobile-navigation').fadeOut();
  }
});

$(document).ready(function(){

  var plans = {

    plan1_1_1 : {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/50-10-u.png",
      squareAll: "50,10 м2",
      squareLive: "21,66 м2"
    },

    plan1_1_2: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/oneroom/34-98.png",
      squareAll: "34,98 м2",
      squareLive: "11,55 м2"
    },

    plan1_1_3 : {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/oneroom/30-45.png",
      squareAll: "30,45 м2",
      squareLive: "11,48 м2"
    },

    plan1_1_4: {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/49-97-u.png",
      squareAll: "49,97 м2",
      squareLive: "25,44 м2"
    },

    plan1_1_5 : {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/tworoom/49-69.png",
      squareAll: "49,69 м2",
      squareLive: "21,96 м2"
    },

    plan1_1_6: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/oneroom/33-33.png",
      squareAll: "33,33 м2",
      squareLive: "9,44 м2"
    },

    plan1_1_7: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/33-40-u.png",
      squareAll: "33,40 м2",
      squareLive: "13,11 м2"
    },

    plan1_1_8 : {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/oneroom/34-94.png",
      squareAll: "34,94 м2",
      squareLive: "13,11 м2"
    },

    plan1_1_9: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/34-98-u.png",
      squareAll: "34,98 м2",
      squareLive: "12,31 м2"
    },

    plan1_1_10 : {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/oneroom/32-65.png",
      squareAll: "32,65 м2",
      squareLive: "13,11 м2"
    },

    plan1_1_11: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 1 этаж",
      category : "one",
      fot : "img/apartments/34-75-u.png",
      squareAll: "34,75 м2",
      squareLive: "10,10 м2"
    },

    plan1_t_1 : {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/50-10-u.png",
      squareAll: "50,10 м2",
      squareLive: "21,66 м2"
    },

    plan1_t_2: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/oneroom/34-98.png",
      squareAll: "34,98 м2",
      squareLive: "11,55 м2"
    },

    plan1_t_3 : {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/oneroom/30-45.png",
      squareAll: "30,45 м2",
      squareLive: "11,48 м2"
    },

    plan1_t_4: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/oneroom/31-27.png",
      squareAll: "31,27 м2",
      squareLive: "12,01 м2"
    },

    plan1_t_5 : {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/34-40-u.png",
      squareAll: "34,40 м2",
      squareLive: "11,85 м2"
    },

    plan1_t_6: {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/tworoom/49-69.png",
      squareAll: "49,69 м2",
      squareLive: "21,96 м2"
    },

    plan1_t_7 : {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/oneroom/33-33.png",
      squareAll: "33,33 м2",
      squareLive: "9,44 м2"
    },

    plan1_t_8: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/33-40-u.png",
      squareAll: "33,40 м2",
      squareLive: "13,11 м2"
    },

    plan1_t_9 : {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/oneroom/34-94.png",
      squareAll: "34,94 м2",
      squareLive: "13,11 м2"
    },

    plan1_t_10: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/34-98-u.png",
      squareAll: "34,98 м2",
      squareLive: "12,31 м2"
    },

    plan1_t_11 : {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/oneroom/32-65.png",
      squareAll: "32,65 м2",
      squareLive: "13,11 м2"
    },

    plan1_t_12: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 1, 2-8 этаж",
      category : "one",
      fot : "img/apartments/34-75-u.png",
      squareAll: "34,75 м2",
      squareLive: "10,10 м2"
    },

    plan1_9_1 : {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/86-24-u.png",
      squareAll: "86,24 м2",
      squareLive: "34,83 м2"
    },

    plan1_9_2: {
      tit: "Трёхкомнатная квартира",
      floor : "Подъезд 1, 9 этаж",
      category : "one",
      fot : "img/apartments/57-34-u.png",
      squareAll: "57,34 м2",
      squareLive: "29,21 м2"
    },

    plan1_9_3 : {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/74-12-u.png",
      squareAll: "74,12 м2",
      squareLive: "39,06 м2"
    },

    plan1_9_4: {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/threeroom/75-20.png",
      squareAll: "75,20 м2",
      squareLive: "39,77 м2"
    },

    plan1_9_5 : {
      tit: "Трёхкомнатная квартира",
      floor : "Подъезд 1, 9 этаж",
      category : "one",
      fot : "img/apartments/56-80-u.png",
      squareAll: "56,80 м2",
      squareLive: "29,18 м2"
    },

    plan1_9_6: {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/threeroom/87-12.png",
      squareAll: "87,12 м2",
      squareLive: "35,26 м2"
    },

    plan1_9_7 : {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/62-03-u.png",
      squareAll: "62,03 м2",
      squareLive: "27,49 м2"
    },

    plan1_9_8: {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/threeroom/61-61.png",
      squareAll: "61,61 м2",
      squareLive: "34,21 м2"
    },

    plan1_9_9 : {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/threeroom/64-77.png",
      squareAll: "64,77 м2",
      squareLive: "38,93 м2"
    },

    plan1_9_10: {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/64-98-u.png",
      squareAll: "64,98 м2",
      squareLive: "35,77 м2"
    },

    plan1_9_11 : {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/threeroom/60-74.png",
      squareAll: "60,74 м2",
      squareLive: "34,07 м2"
    },

    plan1_9_12: {
      tit: "Пентхаус",
      floor : "Подъезд 1, 9-10 этаж",
      category : "one",
      fot : "img/apartments/64-17-u.png",
      squareAll: "64,17 м2",
      squareLive: "26,54 м2"
    },

    plan2_t_1: {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/tworoom/55-73.png",
      squareAll: "55,73 м2",
      squareLive: "26,91 м2"
    },

    plan2_t_2: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/34-79-u.png",
      squareAll: "34,79 м2",
      squareLive: "13,28 м2"
    },

    plan2_t_3: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/oneroom/38-70.png",
      squareAll: "38,70 м2",
      squareLive: "14,28 м2"
    },

    plan2_t_4: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/oneroom/30-03.png",
      squareAll: "30,03 м2",
      squareLive: "10,31 м2"
    },

    plan2_t_5: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/oneroom/37-27.png",
      squareAll: "37,27 м2",
      squareLive: "15,29 м2"
    },

    plan2_t_6: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/oneroom/40-17.png",
      squareAll: "40,17 м2",
      squareLive: "12,20 м2"
    },

    plan2_t_7: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/34-84-u.png",
      squareAll: "34,84 м2",
      squareLive: "12,48 м2"
    },

    plan2_t_8: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/oneroom/30-98.png",
      squareAll: "30,98 м2",
      squareLive: "8,65 м2"
    },

    plan2_t_9: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/32-32-u.png",
      squareAll: "32,32 м2",
      squareLive: "8,24 м2"
    },

    plan2_t_10: {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 2, 1-8 этаж",
      category : "two",
      fot : "img/apartments/tworoom/52-00.png",
      squareAll: "52,00 м2",
      squareLive: "26,71 м2"
    },

    plan2_9_1: {
      tit: "Пентхаус",
      floor : "Подъезд 2, 9-10 этаж",
      category : "two",
      fot : "img/apartments/84-05-u.png",
      squareAll: "84,05 м2",
      squareLive: "40,14 м2"
    },

    plan2_9_2: {
      tit: "Пентхаус",
      floor : "Подъезд 2, 9-10 этаж",
      category : "two",
      fot : "img/apartments/76-21-u.png",
      squareAll: "76,21 м2",
      squareLive: "36,88 м2"
    },

    plan2_9_3: {
      tit: "Пентхаус",
      floor : "Подъезд 2, 9-10 этаж",
      category : "two",
      fot : "img/apartments/75-93-u.png",
      squareAll: "75,93 м2",
      squareLive: "37,82 м2"
    },

    plan2_9_4: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 2, 9 этаж",
      category : "two",
      fot : "img/apartments/oneroom/30-03.png",
      squareAll: "30,03 м2",
      squareLive: "10,31 м2"
    },

    plan2_9_5: {
      tit: "Пентхаус",
      floor : "Подъезд 2, 9-10 этаж",
      category : "two",
      fot : "img/apartments/92-88-u.png",
      squareAll: "92,88 м2",
      squareLive: "43,43 м2"
    },

    plan2_9_6: {
      tit: "Пентхаус",
      floor : "Подъезд 2, 9-10 этаж",
      category : "two",
      fot : "img/apartments/tworoom/65-32.png",
      squareAll: "65,32 м2",
      squareLive: "25,72 м2"
    },

    plan2_9_7: {
      tit: "Пентхаус",
      floor : "Подъезд 2, 9-10 этаж",
      category : "two",
      fot : "img/apartments/fourroom/77-10.png",
      squareAll: "77,10 м2",
      squareLive: "46,26 м2"
    },

    plan2_9_8: {
      tit: "Пентхаус",
      floor : "Подъезд 2, 9-10 этаж",
      category : "two",
      fot : "img/apartments/threeroom/56-50.png",
      squareAll: "56,50 м2",
      squareLive: "25,49 м2"
    },

    plan2_9_9: {
      tit: "Пентхаус",
      floor : "Подъезд 2, 9-10 этаж",
      category : "two",
      fot : "img/apartments/60-23-u.png",
      squareAll: "60,23 м2",
      squareLive: "28,72 м2"
    },

    plan2_9_10: {
      tit: "Пентхаус",
      floor : "Подъезд 2, 9-10 этаж",
      category : "two",
      fot : "img/apartments/100-68-u.png",
      squareAll: "100,68 м2",
      squareLive: "41,48 м2"
    },

    plan3_t_1: {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/52-00-u.png",
      squareAll: "52,00 м2",
      squareLive: "26,71 м2"
    },

    plan3_t_2: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/oneroom/32-32.png",
      squareAll: "32,32 м2",
      squareLive: "8,24 м2"
    },

    plan3_t_3: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/30-98-u.png",
      squareAll: "30,98 м2",
      squareLive: "8,65 м2"
    },

    plan3_t_4: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/38-84-u.png",
      squareAll: "38,84 м2",
      squareLive: "12,48 м2"
    },

    plan3_t_5: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/40-17-u.png",
      squareAll: "40,17 м2",
      squareLive: "12,20 м2"
    },

    plan3_t_6: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/37-27-u.png",
      squareAll: "37,27 м2",
      squareLive: "15,29 м2"
    },

    plan3_t_7: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/30-03-u.png",
      squareAll: "30,03 м2",
      squareLive: "10,31 м2"
    },

    plan3_t_8: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/38-70-u.png",
      squareAll: "38,70 м2",
      squareLive: "14,28 м2"
    },

    plan3_t_9: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/oneroom/34-79.png",
      squareAll: "34,79 м2",
      squareLive: "13,28 м2"
    },

    plan3_t_10: {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 3, 1-8 этаж",
      category : "three",
      fot : "img/apartments/tworoom/55-73-2.png",
      squareAll: "55,73 м2",
      squareLive: "26,91 м2"
    },

    plan3_9_1: {
      tit: "Пентхаус",
      floor : "Подъезд 3, 9-10 этаж",
      category : "three",
      fot : "img/apartments/threeroom/100-68.png",
      squareAll: "100,68 м2",
      squareLive: "41,48 м2"
    },

    plan3_9_2: {
      tit: "Пентхаус",
      floor : "Подъезд 3, 9-10 этаж",
      category : "three",
      fot : "img/apartments/threeroom/60-23.png",
      squareAll: "60,23 м2",
      squareLive: "28,72 м2"
    },

    plan3_9_3: {
      tit: "Пентхаус",
      floor : "Подъезд 3, 9-10 этаж",
      category : "three",
      fot : "img/apartments/56-50-u.png",
      squareAll: "56,50 м2",
      squareLive: "25,49 м2"
    },

    plan3_9_4: {
      tit: "Пентхаус",
      floor : "Подъезд 3, 9-10 этаж",
      category : "three",
      fot : "img/apartments/fourroom/77-10-2.png",
      squareAll: "77,10 м2",
      squareLive: "46,26 м2"
    },

    plan3_9_5: {
      tit: "Пентхаус",
      floor : "Подъезд 3, 9-10 этаж",
      category : "three",
      fot : "img/apartments/65-32-u.png",
      squareAll: "65,32 м2",
      squareLive: "25,72 м2"
    },

    plan3_9_6: {
      tit: "Пентхаус",
      floor : "Подъезд 3, 9-10 этаж",
      category : "three",
      fot : "img/apartments/fourroom/92-88.png",
      squareAll: "92,88 м2",
      squareLive: "43,43 м2"
    },

    plan3_9_7: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 3, 9 этаж",
      category : "three",
      fot : "img/apartments/30-03-u.png",
      squareAll: "30,03 м2",
      squareLive: "10,31 м2"
    },

    plan3_9_8: {
      tit: "Пентхаус",
      floor : "Подъезд 3, 9-10 этаж",
      category : "three",
      fot : "img/apartments/threeroom/75-93.png",
      squareAll: "75,93 м2",
      squareLive: "37,82 м2"
    },

    plan3_9_9: {
      tit: "Пентхаус",
      floor : "Подъезд 3, 9-10 этаж",
      category : "three",
      fot : "img/apartments/threeroom/76-21.png",
      squareAll: "76,21 м2",
      squareLive: "36,88 м2"
    },

    plan3_9_10: {
      tit: "Пентхаус",
      floor : "Подъезд 3, 9-10 этаж",
      category : "three",
      fot : "img/apartments/threeroom/84-05.png",
      squareAll: "84,05 м2",
      squareLive: "40,14 м2"
    },

    plan4_t_1: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/33-33-u.png",
      squareAll: "33,33 м2",
      squareLive: "9,44 м2"
    },

    plan4_t_2: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/oneroom/33-40.png",
      squareAll: "33,40 м2",
      squareLive: "13,11 м2"
    },

    plan4_t_3: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/34-94-u.png",
      squareAll: "34,94 м2",
      squareLive: "13,11 м2"
    },

    plan4_t_4: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/oneroom/34-98-2.png",
      squareAll: "34,98 м2",
      squareLive: "12,31 м2"
    },

    plan4_t_5: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/32-65-u.png",
      squareAll: "32,65 м2",
      squareLive: "13,11 м2"
    },

    plan4_t_6: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/oneroom/34-75.png",
      squareAll: "34,75 м2",
      squareLive: "10,10 м2"
    },

    plan4_t_7: {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/50-15-u.png",
      squareAll: "50,15 м2",
      squareLive: "21,96 м2"
    },

    plan4_t_8: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/oneroom/34-40.png",
      squareAll: "34,40 м2",
      squareLive: "11,85 м2"
    },

    plan4_t_9: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/31-27-u.png",
      squareAll: "31,27 м2",
      squareLive: "12,01 м2"
    },

    plan4_t_10: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/30-39-u.png",
      squareAll: "30,39 м2",
      squareLive: "11,48 м2"
    },

    plan4_t_11: {
      tit: "Однокомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/oneroom/34-98-3.png",
      squareAll: "34,98 м2",
      squareLive: "11,55 м2"
    },

    plan4_t_12: {
      tit: "Двухкомнатная квартира",
      floor : "Подъезд 4, 1-8 этаж",
      category : "four",
      fot : "img/apartments/tworoom/50-36.png",
      squareAll: "50,36 м2",
      squareLive: "21,66 м2"
    },

    plan4_9_1: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/threeroom/62-03.png",
      squareAll: "62,03 м2",
      squareLive: "27,49 м2"
    },

    plan4_9_2: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/61-61-u.png",
      squareAll: "61,61 м2",
      squareLive: "34,21 м2"
    },

    plan4_9_3: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/threeroom/64-77-2.png",
      squareAll: "64,77 м2",
      squareLive: "38,92 м2"
    },

    plan4_9_4: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/threeroom/64-98.png",
      squareAll: "64,98 м2",
      squareLive: "35,77 м2"
    },

    plan4_9_5: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/60-74-u.png",
      squareAll: "60,74 м2",
      squareLive: "34,07 м2"
    },

    plan4_9_6: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/threeroom/64-17.png",
      squareAll: "64,17 м2",
      squareLive: "26,54 м2"
    },

    plan4_9_7: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/87-12-u.png",
      squareAll: "87,12 м2",
      squareLive: "35,26 м2"
    },

    plan4_9_8: {
      tit: "Трёхкомнатная квартира",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/threeroom/56-80.png",
      squareAll: "56,80 м2",
      squareLive: "29,18 м2"
    },

    plan4_9_9: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/75-20-u.png",
      squareAll: "75,20 м2",
      squareLive: "39,77 м2"
    },

    plan4_9_10: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/threeroom/74-12.png",
      squareAll: "74,12 м2",
      squareLive: "39,06 м2"
    },

    plan4_9_11: {
      tit: "Трёхкомнатная квартира",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/threeroom/57-34.png",
      squareAll: "57,34 м2",
      squareLive: "29,21 м2"
    },

    plan4_9_12: {
      tit: "Пентхаус",
      floor : "Подъезд 4, 9-10 этаж",
      category : "four",
      fot : "img/apartments/threeroom/86-24.png",
      squareAll: "86,24 м2",
      squareLive: "34,83 м2"
    }
  };

  window.setTimeout(function () {
    var popupBlock = $('#offer-form');
    //$('.call__btn').on('click touchstart', function(e){
    //e.preventDefault();


    var form = popupBlock.find('.callform');

    popupBlock.bPopup({
      fadeSpeed: 'slow',
      followSpeed: 1000,
      modalColor: '#818e9b',
      transition: 'slideIn',
      transitionClose: 'slideBack',
      escClose: true,
      onClose: function () {
        form.find('.response-alert').hide();
        form.trigger('reset');
        form.find('.suc-alert').css('display', 'none');
        form.find('.error-alert').css('display', 'none');
      }
    });

    popupBlock.find('.popup-header__close').on('click touchstart', function(){
      popupBlock.close();
    });
  }, 3000);





// hide all standard checkbox
  [].forEach.call( document.querySelectorAll('.checkbox'), function(element) {
    element.style.display = 'none';
  });
  freeForm.checkView();

  // range-slider

  var floors = ["2", "3", "4", "5",
    "6", "7", "8", "9", "10"];

  $("#pips-slider")

    .slider({
      min: 2,
      max: 10,
      step: 1
    })

    .slider("pips", {
      first: "label",
      last: "label",
      rest: "label",
      step: 1,
      labels: floors,
      prefix: "",
      suffix: ""
    })

    .slider("float", {
      handle: true,
      pips: false,
      labels: false,
      prefix: "",
      suffix: ""
    })
    .on("slidechange", function( e, ui ) {
      var picBlocks = [".block-plan-pic-typing", ".block-plan-pic-typing", ".block-plan-pic-typing",
        ".block-plan-pic-typing", ".block-plan-pic-typing", ".block-plan-pic-typing", ".block-plan-pic-typing", ".block-plan-pic-nine", ".block-plan-pic-ten"];
      var numberOfPic = ui.value;
      //console.log(numberOfPic);
      var blockPic = $('.com .block-plan-pic');
      var thisPicBlock = picBlocks[numberOfPic-2];
      $(thisPicBlock).show();
      $(thisPicBlock).siblings(blockPic).hide();
      houseModule.showTT(plans);
    });


  // end range-slider

  houseModule.showRangeSlider();

  // if(houseModule.showRangeSlider()) {
  //   houseModule.showTT();
  // }

  // houseModule.showTT();
  // if($('.range-slider').css('display') == 'block') {
  //   console.log('wow');
  //   houseModule.showTT();
  // }

// kost
  $('.house-tooltip').on('click touchstart', function(e){
    //houseModule.showTT(plans);
    $("#pips-slider").slider('value', 1);
  });


  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade',
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazyLoading: true
  });

  var mySwiperManager = new Swiper ('.swiper-container-manager', {
    slidesPerView: 4,
    loop: true,
    width: 1200,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10
  });


  // slick slider


  $('.slick-container-manager').slick({
    dots: false,
    infinite: true,
    arrows: true,
    nextArrow: '<button id="slick-n" type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;">Next</button>',
    prevArrow: '<button id="slick-p" type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;">Previous</button>',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // yandex map

  ymaps.ready(init);
   var myMap;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [45.068512, 39.033317],
      zoom: 15,
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    });
      myMap.behaviors.disable(['scrollZoom']);
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        // hintContent: 'Anderson mark',
        // balloonContent: 'Это красивая метка'
      }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [102, 80],
        iconImageOffset: [-34, -80]
      });
    myMap.geoObjects.add(myPlacemark);
  }


  // triggers.callForm();
  triggers.showCallForm();
  triggers.burgerMenu();
  tabs.init();

  triggers.showMorePlan();



  // isotope - test
  $('.grid').isotope({
    itemSelector: '.wp-project',
    layoutMode: 'fitRows',
    hiddenStyle: {
      opacity: 0
      /* , transform: 'scale(0.001)' -- disabled scaling */
    },
    visibleStyle: {
      opacity: 1
      /* , transform: 'scale(1)' -- disabled scaling */
    },
    transitionDuration: '0s'
  });


  $('#all').click(function(){
    // $( ".planing-view__item.disp.one:nth-child(n+4)" ).css("display", "none");
    $('.grid').isotope({ filter: '*' });
    $('.wp-project-wrapper').css('height', 1202);
    $('.moreBtn').show();

  });

  $('#one').click(function(){
    $('.grid').isotope({ filter: '.one' });
    $('.wp-project-wrapper').css('height', 1202);
    $('.moreBtn').show();

    // $('.planing-view__item').each(function(indx, elem) {
    //   if($(this).css('display') !== 'none') {
    //     $(this).addClass('disp');
    //   } else {
    //     $(this).css('display','none');
    //     $(this).removeClass('disp');
    //   }
    // });
  });

  $('#two').click(function(){
    $('.grid').isotope({ filter: '.two' });
    if(window.screen.width < 701) {
      $('.wp-project-wrapper').css('height', 2802);
    } else {
      $('.wp-project-wrapper').css('height', 1202);
    }
    $('.moreBtn').hide();
  });

  $('#three').click(function(){

    $('.grid').isotope({ filter: '.three' });
    $('.wp-project-wrapper').css('height', 1202);
    $('.moreBtn').show();

  });

  $('#four').click(function(){
    $('.grid').isotope({ filter: '.four' });
    if(window.screen.width < 701) {
      $('.wp-project-wrapper').css('height', 1202);
    } else {
      $('.wp-project-wrapper').css('height', 402);
    }
    $('.moreBtn').hide();
  });

  $('#penthaus').click(function(){
    $('.grid').isotope({ filter: '.penthaus' });
    $('.wp-project-wrapper').css('height', 1202);
    $('.moreBtn').show();
  });


    // var $grid = $('.planing-view__list').isotope({
    // itemSelector: '.planing-view__item',
    // layoutMode: 'fitRows',


    // layoutMode: 'masonry',
      // masonry: {
      //   // columnWidth: 16,
      //   gutter: 8
      // },


  //     fitRows: {
  //       gutter: 10
  //     },
  //   getSortData: {
  //     name: '.name',
  //     symbol: '.symbol',
  //     number: '.number parseInt',
  //     category: '[data-category]',
  //     weight: function( itemElem ) {
  //       var weight = $( itemElem ).find('.weight').text();
  //       return parseFloat( weight.replace( /[\(\)]/g, '') );
  //     }
  //   }
  // });


  // var $container = $('.planing-view__list');
  // // filter buttons
  // $('.planing-block__btn').click(function(e){
  //   e.preventDefault();
  //   var $this = $(this);
  //   // don't proceed if already selected
  //   if ( !$this.hasClass('is-checked') ) {
  //     $this.parents('#options').find('.is-checked').removeClass('is-checked');
  //     $this.addClass('is-checked');
  //   }
  //   var selector = $this.attr('data-filter');
  //   $container.isotope({  itemSelector: '.planing-view__item', filter: selector });
  //   return false;
  // });

  // end isotope


  // delete error border of validation

  $('form').on('keydown', '.light-error', function(){
    $(this).removeClass('light-error');
    $(this).next('span').text(' ');
  });

  // requests
  
  request.callForm();
  request.tabSend();
  request.additionSend();
  request.consultCall();
  request.questionSend();
  request.planSend();
  request.freeformSend();

  // questions form

  questionManagerForm.showForm();

  // consult form
  consult.showConsultForm();

  // addition form

  addition.showForm();

  //planning form
  plan.showPlanningForm();



  // functions is mobile
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  if (isMobile.any()) {
    // document.addEventListener('touchstart', handler, true);
  }
  plan.activeBtn();




});