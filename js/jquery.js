let key = 0;
function remo() {
  if (key !== 1) {
    $(".icon_1").css("color", "#ddd");
  }
  if (key !== 2) {
    $(".icon_2").css("color", "#ddd");
  }
  if (key !== 3) {
    $(".icon_3").css("color", "#ddd");
  }
  if (key !== 4) {
    $(".icon_4").css("color", "#ddd");
  }
}




$(document).ready(function () {

  // "grid-template-columns", "78,6% 21.3%"
  $('.fa-minus').click(() => {
    $('.func').show();
    $('.App__content-box3').hide();
    $('.App__content').css("grid-template-columns", "1fr 370px");
    $('.panel_2').show();

    $('.select').css('width', '370px');
    $('.func_full').show();
  })




  // ------------click hide

  // $('.sp_show_1').click(() => {
  //   $('.App__content').css("grid-template-columns", " 50.1% 23.9% 26%");
  //   $('.panel_2').hide();
  //   $('.App__content-box3').show();
  //   $('.sp_1').trigger('click');
  // })

  // $('.sp_show_2').click(() => {
  //   $('.App__content').css("grid-template-columns", " 50.1% 23.9% 26%");
  //   $('.panel_2').hide();
  //   $('.App__content-box3').show();
  //   $('.sp_2').trigger('click');
  // })
  // $('.sp_show_3').click(() => {
  //   $('.App__content').css("grid-template-columns", " 50.1% 23.9% 26%");
  //   $('.panel_2').hide();
  //   $('.App__content-box3').show();
  //   $('.sp_3').trigger('click');
  // })


  // --------------

  $(".icon_4").click(() => {
    if (key !== 4) {
      key = 4;
      $('[title="Chart"]').remove();
      $(".charts").append('<iframe src="https://mkw.vndirect.com.vn/market_cap?color=gray&amp;height=280" title="Chart" width="100%" height="100%"></iframe>');
      $(".icon_4").css("color", "yellow");
      remo();
    }
  })
  $(".icon_1").click(() => {
    if (key !== 1) {
      key = 1;
      $('[title="Chart"]').remove();
      $(".charts").append('<iframe src="https://mkw.vndirect.com.vn/market_cap?color=gray&amp;height=280" title="Chart" width="100%" height="100%"></iframe>');
      $(".icon_1").css("color", "yellow");
      remo();
    }
  })

  $(".icon_2").click(() => {
    if (key !== 2) {
      key = 2;
      $('[title="Chart"]').remove();
      $(".charts").append('<iframe src="./chart.html" title="Chart" width="100%" height="100%"></iframe>');
      $(".icon_2").css("color", "yellow");
      remo();
    }
  })

  $(".icon_3").click(() => {
    if (key !== 3) {
      key = 3;
      $('[title="Chart"]').remove();
      $(".charts").append(' <iframe class="ifNone" src="https://mkw.vndirect.com.vn/leader_lagger?color=gray&amp;height=280"title = "Chart" width = "100%" height = "100%" ></iframe >');
      $(".icon_3").css("color", "yellow");
      remo();
    }
  })


  // -------------buoc gia

  $('.buocgia').click(function () {
    $('.history').hide();
    $('.table_count').show();
    $(this).css('color', '#EA942F');
    $('.lichsu').css('color', '#D1F0E5')

  })
  $('.lichsu').click(function () {
    $('.table_count').hide();
    $('.history').show();
    $(this).css('color', '#EA942F');
    $('.buocgia').css('color', '#D1F0E5')
  })


  function shows() {

    $('.App__content').css("grid-template-columns", "1fr 370px 400px");
    $('.select').css('width', '400px');
    $('.App__content-box3').show();
    if ($(window).width() < 1024) {

      $('.func_full').hide();
    }
    hide = false;
  }

  $('.sp_1').click(function () {

    $(this).css('background-color', '#2F3240');
    $('.sp_2').css('background-color', '#1B1C21');
    $('.sp_3').css('background-color', '#1B1C21');
    $(this).css('color', '#F78834');
    $('.sp_2').css('color', '#f1ffff');
    $('.sp_3').css('color', '#f1ffff');
    // -------------

    shows()


  })
  $('.sp_2').click(function () {

    $(this).css('background-color', '#2F3240');
    $('.sp_1').css('background-color', '#1B1C21');
    $('.sp_3').css('background-color', '#1B1C21');
    $(this).css('color', '#F78834');
    $('.sp_1').css('color', '#f1ffff');
    $('.sp_3').css('color', '#f1ffff');

    // -------------


    shows()


  })
  $('.sp_3').click(function () {

    $(this).css('background-color', '#2F3240');
    $('.sp_2').css('background-color', '#1B1C21');
    $('.sp_1').css('background-color', '#1B1C21');
    $(this).css('color', '#F78834');
    $('.sp_2').css('color', '#f1ffff');
    $('.sp_1').css('color', '#f1ffff');
    // -------------

    shows()


  })


  // ---------------------

  $('.day_lenh').click(function () {
    $(this).css('color', '#EA6A3D');
    $('.control_lenh').css('color', '#DEFFF3')
    $('.box_book').show();
    $('.control').hide();
  })
  $('.control_lenh').click(function () {
    $(this).css('color', '#EA6A3D');
    $('.day_lenh').css('color', '#DEFFF3')
    $('.box_book').hide();
    $('.control').show();
  })
});