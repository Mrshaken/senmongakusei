/*
//上部画像の設定
$('.gallery').slick({
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    fade: true, //フェードの有効化
    arrows: false,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  });
*/
/*
  //選択画像の設定
  $('.choice-btn').slick({
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3, //表示させるスライドの数(ここ合わせないと画像サイズがおかしくなる)
    focusOnSelect: true, //フォーカスの有効化
    asNavFor: '.gallery', //連動させるスライドショーのクラス名
    centerMode: true,
  });
    */
   /*
  //下の選択画像をスライドさせずに連動して変更させる設定。
  $('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var index = nextSlide; //次のスライド番号
    //サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
    $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
  });
*/


$(document).ready(function(){
  $('.gallery').on('init', function(event, slick){
    $('.gallery-text').text('init : 初期化しました。');
  });

});

  $('.gallery').each(function(){
    //data-slickの値を取得
    let attr = $(this).attr('data-slick');
    var slider =  $(this).slick({
      /*autoplay: true,*/
      fade: true, //フェードの有効化
      infinite: true, //スライドをループさせるかどうか。初期値はtrue。
      slidesToShow: 1,
    /*  focusOnSelect: true, //フォーカスの有効化*/
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.choice-btn[data-slick="'+attr+'"]',
      prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
      nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    });
    var slider2 =  $('.choice-btn[data-slick="'+attr+'"]').slick({
      slidesToShow: 3,//表示させるスライドの数(ここ合わせないと画像サイズがおかしくなる)
      slidesToScroll: 1,
      infinite: true, //スライドをループさせるかどうか。初期値はtrue。
      /*fade: true, //フェードの有効化*/
      /*arrows: false,//左右の矢印あり*/
      asNavFor: '.gallery[data-slick="'+attr+'"]',
    /*  dots: true,*/
      centerMode: true,
      focusOnSelect: true
    });

    //ADD START
    $('input[name="cp_tab"]').change(function() {
      slider.slick('setPosition');
      slider2.slick('setPosition');
   });
   //ADD END
   /* $('.choice-btn[data-slick="'+attr+'"]').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var index = nextSlide; //次のスライド番号
      //サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
      $('".choice-btn .slick-slide"').removeClass("slick-current").eq(index).addClass("slick-current");
    });
  */
   //下の選択画像をスライドさせずに連動して変更させる設定。
   $('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var index = nextSlide; //次のスライド番号
    //サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
    $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
  });
  });