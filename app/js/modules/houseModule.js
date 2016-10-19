module.exports = {

  showRangeSlider: function() {
    $('.house-tooltip').on('click touchstart', function(e){
      e.preventDefault();
      var $this = $(this);
      var individBlock = $this.attr('class');
      // console.log(individBlock);
      var nwIndividBlock = individBlock.split(' ')[1];
      // console.log(nwIndividBlock);
      var popupBlock = $('.range-slider');

      popupBlock.bPopup({
        // fadeSpeed: 'slow',
        // followSpeed: 1000,
        modalColor: '#818e9b',
        // transition: 'slideIn',
        // transitionClose: 'slideBack',
        escClose: true,
        // positionStyle: 'fixed',
        // onOpen: function() {
        //   console.log('open Popup');
        //   console.log($(this));
        //   // $('.testlink').on('click touchstart', function(e){
        //   //   e.preventDefault();
        //   //   console.log('I am test');
        //   // });
        // },
        onClose: function () {
        }
      });
      popupBlock.reposition();

      $('.' + nwIndividBlock).siblings('.com').removeClass('active');
      $('.' + nwIndividBlock).addClass('active');

      $('.' + nwIndividBlock).show();
      $('.' + nwIndividBlock).siblings('.com').hide();

      $('.range-slider .popup-header__close').on('click touchstart', function(){
        popupBlock.close();
      });
    });


  },

  showTT: function() {
    var plans = {

      plan1_1_1 : {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/50-36-u.png",
        squareAll: "50,10 м2",
        squareLive: "21,66 м2"
      },

      plan1_1_2: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/34-98.png",
        squareAll: "34,90 м2",
        squareLive: "11,55 м2"
      },

      plan1_1_3 : {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/30-45.png",
        squareAll: "30,45 м2",
        squareLive: "11,48 м2"
      },

      plan1_1_4: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/49-97-u.png",
        squareAll: "49,97 м2",
        squareLive: "25,44 м2"
      },

      plan1_1_5 : {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/tworoom/49-89.png",
        squareAll: "49,89 м2",
        squareLive: "21,96 м2"
      },

      plan1_1_6: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/33-33.png",
        squareAll: "33,33 м2",
        squareLive: "9,44 м2"
      },

      plan1_1_7: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/33-40-u.png",
        squareAll: "33,40 м2",
        squareLive: "13,11 м2"
      },

      plan1_1_8 : {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/34-94.png",
        squareAll: "34,94 м2",
        squareLive: "13,11 м2"
      },

      plan1_1_9: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/34-98-u.png",
        squareAll: "34,98 м2",
        squareLive: "12,31 м2"
      },

      plan1_1_10 : {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/32-65.png",
        squareAll: "32,65 м2",
        squareLive: "13,11 м2"
      },

      plan1_1_11: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 1 этаж",
        category : "one",
        fot : "/img/apartments/34-75-u.png",
        squareAll: "34,75 м2",
        squareLive: "10,10 м2"
      },

      plan1_t_1 : {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/50-36-u.png",
        squareAll: "50,36 м2",
        squareLive: "21,66 м2"
      },

      plan1_t_2: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/34-98.png",
        squareAll: "34,98 м2",
        squareLive: "11,55 м2"
      },

      plan1_t_3 : {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/30-45.png",
        squareAll: "30,39 м2",
        squareLive: "11,48 м2"
      },

      plan1_t_4: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/31-27.png",
        squareAll: "31,27 м2",
        squareLive: "12,01 м2"
      },

      plan1_t_5 : {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/34-40-u.png",
        squareAll: "34,40 м2",
        squareLive: "11,85 м2"
      },

      plan1_t_6: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/tworoom/49-89.png",
        squareAll: "50,15 м2",
        squareLive: "21,96 м2"
      },

      plan1_t_7 : {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/33-33.png",
        squareAll: "33,33 м2",
        squareLive: "9,44 м2"
      },

      plan1_t_8: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/33-40-u.png",
        squareAll: "33,40 м2",
        squareLive: "13,11 м2"
      },

      plan1_t_9 : {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/34-94.png",
        squareAll: "34,94 м2",
        squareLive: "13,11 м2"
      },

      plan1_t_10: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/34-98-u.png",
        squareAll: "34,98 м2",
        squareLive: "12,31 м2"
      },

      plan1_t_11 : {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/32-65.png",
        squareAll: "32,65 м2",
        squareLive: "13,11 м2"
      },

      plan1_t_12: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/34-75-u.png",
        squareAll: "34,75 м2",
        squareLive: "10,10 м2"
      },

      plan1_9_1 : {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/86-24-u.png",
        squareAll: "86,24 м2",
        squareLive: "34,83 м2"
      },

      plan1_9_2: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9 этаж",
        category : "one",
        fot : "/img/apartments/57-34-u.png",
        squareAll: "57,34 м2",
        squareLive: "29,21 м2"
      },

      plan1_9_3 : {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/74-12-u.png",
        squareAll: "74,12 м2",
        squareLive: "39,06 м2"
      },

      plan1_9_4: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/threeroom/75-20.png",
        squareAll: "75,20 м2",
        squareLive: "39,77 м2"
      },

      plan1_9_5 : {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9 этаж",
        category : "one",
        fot : "/img/apartments/56-80-u.png",
        squareAll: "56,80 м2",
        squareLive: "29,18 м2"
      },

      plan1_9_6: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/threeroom/87-12.png",
        squareAll: "87,12 м2",
        squareLive: "35,26 м2"
      },

      plan1_9_7 : {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/62-03-u.png",
        squareAll: "62,03 м2",
        squareLive: "27,49 м2"
      },

      plan1_9_8: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/threeroom/61-61.png",
        squareAll: "61,61 м2",
        squareLive: "34,21 м2"
      },

      plan1_9_9 : {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/threeroom/64-77.png",
        squareAll: "64,77 м2",
        squareLive: "38,93 м2"
      },

      plan1_9_10: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/64-98-u.png",
        squareAll: "64,98 м2",
        squareLive: "35,77 м2"
      },

      plan1_9_11 : {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/threeroom/60-74.png",
        squareAll: "60,74 м2",
        squareLive: "34,07 м2"
      },

      plan1_9_12: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 1, 9-10 этаж (пентхаус)",
        category : "one",
        fot : "/img/apartments/64-17-u.png",
        squareAll: "64,17 м2",
        squareLive: "26,54 м2"
      },

      plan2_t_1: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/tworoom/55-73.png",
        squareAll: "55,73 м2",
        squareLive: "26,91 м2"
      },

      plan2_t_2: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/34-79-u.png",
        squareAll: "34,79 м2",
        squareLive: "13,28 м2"
      },

      plan2_t_3: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/oneroom/38-70.png",
        squareAll: "38,70 м2",
        squareLive: "14,28 м2"
      },

      plan2_t_4: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/oneroom/30-03.png",
        squareAll: "30,03 м2",
        squareLive: "10,31 м2"
      },

      plan2_t_5: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/oneroom/37-27.png",
        squareAll: "37,27 м2",
        squareLive: "15,29 м2"
      },

      plan2_t_6: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/oneroom/40-17.png",
        squareAll: "40,17 м2",
        squareLive: "12,20 м2"
      },

      plan2_t_7: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/34-84-u.png",
        squareAll: "34,84 м2",
        squareLive: "12,48 м2"
      },

      plan2_t_8: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/oneroom/30-98.png",
        squareAll: "30,98 м2",
        squareLive: "8,65 м2"
      },

      plan2_t_9: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/32-32-u.png",
        squareAll: "32,32 м2",
        squareLive: "8,24 м2"
      },

      plan2_t_10: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 2, 1-8 этаж",
        category : "two",
        fot : "/img/apartments/tworoom/52-00.png",
        squareAll: "52,00 м2",
        squareLive: "26,71 м2"
      },

      plan2_9_1: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 2, 9-10 этаж (пентхаус)",
        category : "two",
        fot : "/img/apartments/84-05-u.png",
        squareAll: "84,05 м2",
        squareLive: "40,14 м2"
      },

      plan2_9_2: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 2, 9-10 этаж (пентхаус)",
        category : "two",
        fot : "/img/apartments/76-21-u.png",
        squareAll: "76,21 м2",
        squareLive: "36,88 м2"
      },

      plan2_9_3: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 2, 9-10 этаж (пентхаус)",
        category : "two",
        fot : "/img/apartments/75-93-u.png",
        squareAll: "75,93 м2",
        squareLive: "37,82 м2"
      },

      plan2_9_4: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 2, 9 этаж",
        category : "two",
        fot : "/img/apartments/oneroom/30-03.png",
        squareAll: "30,03 м2",
        squareLive: "10,31 м2"
      },

      plan2_9_5: {
        tit: "Четырёхкомнатная квартира",
        floor : "Подъезд 2, 9-10 этаж (пентхаус)",
        category : "two",
        fot : "/img/apartments/92-88-u.png",
        squareAll: "92,88 м2",
        squareLive: "43,43 м2"
      },

      plan2_9_6: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 2, 9-10 этаж (пентхаус)",
        category : "two",
        fot : "/img/apartments/tworoom/65-32.png",
        squareAll: "65,32 м2",
        squareLive: "25,72 м2"
      },

      plan2_9_7: {
        tit: "Четырёхкомнатная квартира",
        floor : "Подъезд 2, 9-10 этаж (пентхаус)",
        category : "two",
        fot : "/img/apartments/fourroom/77-10.png",
        squareAll: "77,10 м2",
        squareLive: "46,26 м2"
      },

      plan2_9_8: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 2, 9-10 этаж (пентхаус)",
        category : "two",
        fot : "/img/apartments/threeroom/56-50.png",
        squareAll: "56,50 м2",
        squareLive: "25,49 м2"
      },

      plan2_9_9: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 2, 9-10 этаж (пентхаус)",
        category : "two",
        fot : "/img/apartments/60-23-u.png",
        squareAll: "60,23 м2",
        squareLive: "28,72 м2"
      },

      plan2_9_10: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 2, 9-10 этаж (пентхаус)",
        category : "two",
        fot : "/img/apartments/100-68-u.png",
        squareAll: "100,68 м2",
        squareLive: "41,48 м2"
      },

      plan3_t_1: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/52-00-u.png",
        squareAll: "52,00 м2",
        squareLive: "26,71 м2"
      },

      plan3_t_2: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/oneroom/32-32.png",
        squareAll: "32,32 м2",
        squareLive: "8,24 м2"
      },

      plan3_t_3: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/30-98-u.png",
        squareAll: "30,98 м2",
        squareLive: "8,65 м2"
      },

      plan3_t_4: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/38-84-u.png",
        squareAll: "38,84 м2",
        squareLive: "12,48 м2"
      },

      plan3_t_5: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/40-17-u.png",
        squareAll: "40,17 м2",
        squareLive: "12,20 м2"
      },

      plan3_t_6: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/37-27-u.png",
        squareAll: "37,27 м2",
        squareLive: "15,29 м2"
      },

      plan3_t_7: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/30-03-u.png",
        squareAll: "30,03 м2",
        squareLive: "10,31 м2"
      },

      plan3_t_8: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/38-70-u.png",
        squareAll: "38,70 м2",
        squareLive: "14,28 м2"
      },

      plan3_t_9: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/oneroom/34-79.png",
        squareAll: "34,79 м2",
        squareLive: "13,28 м2"
      },

      plan3_t_10: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 3, 1-8 этаж",
        category : "three",
        fot : "/img/apartments/tworoom/55-73-2.png",
        squareAll: "55,73 м2",
        squareLive: "26,91 м2"
      },

      plan3_9_1: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 3, 9-10 этаж (пентхаус)",
        category : "three",
        fot : "/img/apartments/threeroom/100-68.png",
        squareAll: "100,68 м2",
        squareLive: "41,48 м2"
      },

      plan3_9_2: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 3, 9-10 этаж (пентхаус)",
        category : "three",
        fot : "/img/apartments/threeroom/60-23.png",
        squareAll: "60,23 м2",
        squareLive: "28,72 м2"
      },

      plan3_9_3: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 3, 9-10 этаж (пентхаус)",
        category : "three",
        fot : "/img/apartments/56-50-u.png",
        squareAll: "56,50 м2",
        squareLive: "25,49 м2"
      },

      plan3_9_4: {
        tit: "Четырёхкомнатная квартира",
        floor : "Подъезд 3, 9-10 этаж (пентхаус)",
        category : "three",
        fot : "/img/apartments/fourroom/77-10-2.png",
        squareAll: "77,10 м2",
        squareLive: "46,26 м2"
      },

      plan3_9_5: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 3, 9-10 этаж (пентхаус)",
        category : "three",
        fot : "/img/apartments/65-32-u.png",
        squareAll: "65,32 м2",
        squareLive: "25,72 м2"
      },

      plan3_9_6: {
        tit: "Четырёхкомнатная квартира",
        floor : "Подъезд 3, 9-10 этаж (пентхаус)",
        category : "three",
        fot : "/img/apartments/fourroom/92-88.png",
        squareAll: "92,88 м2",
        squareLive: "43,43 м2"
      },

      plan3_9_7: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 3, 9 этаж",
        category : "three",
        fot : "/img/apartments/30-03-u.png",
        squareAll: "30,03 м2",
        squareLive: "10,31 м2"
      },

      plan3_9_8: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 3, 9-10 этаж (пентхаус)",
        category : "three",
        fot : "/img/apartments/threeroom/75-93.png",
        squareAll: "75,93 м2",
        squareLive: "37,82 м2"
      },

      plan3_9_9: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 3, 9-10 этаж (пентхаус)",
        category : "three",
        fot : "/img/apartments/threeroom/76-21.png",
        squareAll: "76,21 м2",
        squareLive: "36,88 м2"
      },

      plan3_9_10: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 3, 9-10 этаж (пентхаус)",
        category : "three",
        fot : "/img/apartments/threeroom/84-05.png",
        squareAll: "84,05 м2",
        squareLive: "40,14 м2"
      },

      plan4_t_1: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/33-33-u.png",
        squareAll: "33,33 м2",
        squareLive: "9,44 м2"
      },

      plan4_t_2: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/oneroom/33-40.png",
        squareAll: "33,40 м2",
        squareLive: "13,11 м2"
      },

      plan4_t_3: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/34-94-u.png",
        squareAll: "34,94 м2",
        squareLive: "13,11 м2"
      },

      plan4_t_4: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/oneroom/34-98-2.png",
        squareAll: "34,98 м2",
        squareLive: "12,31 м2"
      },

      plan4_t_5: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/32-65-u.png",
        squareAll: "32,65 м2",
        squareLive: "13,11 м2"
      },

      plan4_t_6: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/oneroom/34-75.png",
        squareAll: "34,75 м2",
        squareLive: "10,10 м2"
      },

      plan4_t_7: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/50-15-u.png",
        squareAll: "50,15 м2",
        squareLive: "21,96 м2"
      },

      plan4_t_8: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/oneroom/34-40.png",
        squareAll: "34,40 м2",
        squareLive: "11,85 м2"
      },

      plan4_t_9: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/31-27-u.png",
        squareAll: "31,27 м2",
        squareLive: "12,01 м2"
      },

      plan4_t_10: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/30-39-u.png",
        squareAll: "30,39 м2",
        squareLive: "11,48 м2"
      },

      plan4_t_11: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/oneroom/34-98-3.png",
        squareAll: "34,98 м2",
        squareLive: "11,55 м2"
      },

      plan4_t_12: {
        tit: "Двухкомнатная квартира",
        floor : "Подъезд 4, 1-8 этаж",
        category : "four",
        fot : "/img/apartments/tworoom/50-36.png",
        squareAll: "50,36 м2",
        squareLive: "21,66 м2"
      },

      plan4_9_1: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/threeroom/62-03.png",
        squareAll: "62,03 м2",
        squareLive: "27,49 м2"
      },

      plan4_9_2: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/61-61-u.png",
        squareAll: "61,61 м2",
        squareLive: "34,21 м2"
      },

      plan4_9_3: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/threeroom/64-77-2.png",
        squareAll: "64,77 м2",
        squareLive: "38,92 м2"
      },

      plan4_9_4: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/threeroom/64-98.png",
        squareAll: "64,98 м2",
        squareLive: "35,77 м2"
      },

      plan4_9_5: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/60-74-u.png",
        squareAll: "60,74 м2",
        squareLive: "34,07 м2"
      },

      plan4_9_6: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/threeroom/64-17.png",
        squareAll: "64,17 м2",
        squareLive: "26,54 м2"
      },

      plan4_9_7: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/87-12-u.png",
        squareAll: "87,12 м2",
        squareLive: "35,26 м2"
      },

      plan4_9_8: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/threeroom/56-80.png",
        squareAll: "56,80 м2",
        squareLive: "29,18 м2"
      },

      plan4_9_9: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/75-20-u.png",
        squareAll: "75,20 м2",
        squareLive: "39,77 м2"
      },

      plan4_9_10: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/threeroom/74-12.png",
        squareAll: "74,12 м2",
        squareLive: "39,06 м2"
      },

      plan4_9_11: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/threeroom/57-34.png",
        squareAll: "57,34 м2",
        squareLive: "29,21 м2"
      },

      plan4_9_12: {
        tit: "Трёхкомнатная квартира",
        floor : "Подъезд 4, 9-10 этаж (пентхаус)",
        category : "four",
        fot : "/img/apartments/threeroom/86-24.png",
        squareAll: "86,24 м2",
        squareLive: "34,83 м2"
      }
    };

    var myObjId = '';
    var indivBlockTwo = '';

    $('.com').each(function(indx){
      if($(this).css('display') == 'block') {
        console.log($(this));
        var individBlock = $(this).attr('class');
        console.log(individBlock);
        indivBlockTwo = individBlock.split(' ')[1];
        console.log(indivBlockTwo);
      }
    });


    $('.' + indivBlockTwo + ' .block-plan-pic').each(function(index){
      //console.log($(this));s
      if($(this).css('display') == 'block') {
        console.log($(this));
        myObjId = $(this).find('object').attr('id');
        console.log(myObjId);
      }
    });

    document.getElementById(myObjId).addEventListener('load',function(){
      var p = this.contentDocument.documentElement.querySelectorAll('path');



      for(var i = 0; i < p.length; i++){
        p[i].addEventListener('click', function(){
          var testClass = this.getAttribute('class');
          var popupBlock = $('#planing-form');
          //alert("Hello my name is "+this.getAttribute('class')+"…");
          $.each(plans, function(key, value){
            if(testClass.indexOf(key)+1) {
              console.log('good job');
              console.log(testClass);

              var form = popupBlock.find('#planing-choose-form');
              var formFoto = form.find('.plan__foto').find('img');
              var formTitle = $('#planing-form').find('.popup-header__title');
              var hiddenTitleContent = $('#planing-form').find('.planing-choose-form__title');
              var allsq = form.find('.allsq').find('span');
              var livesq = form.find('.livesq').find('span');

              formFoto.attr("src", value.fot);
              formTitle.text(value.tit);
              hiddenTitleContent.text(value.floor);
              allsq.text("Общая площадь: " + value.squareAll);
              livesq.text("Жилая площадь: " + value.squareLive);

              popupBlock.bPopup({
                // fadeSpeed: 'slow',
                // followSpeed: 1000,
                modalColor: '#818e9b',
                // transition: 'slideIn',
                // transitionClose: 'slideBack',
                escClose: true,
                onClose: function () {
                  // form.find('.response-alert').hide();
                  form.trigger('reset');
                  form.find('.suc-alert').css('display', 'none');
                  form.find('.error-alert').css('display', 'none');
                  $('input').removeClass('light-error');
                }
              });

              $('#planing-form .popup-header__close').on('click touchstart', function(){
                popupBlock.close();
              });
            }
          });
        });
      }
    });
  }
};
