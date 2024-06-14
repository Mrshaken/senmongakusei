/**☆１☆参考サイト：タブ切り替え時にslickが起動しない問題と対策
 * https://www.a-in-hello.world/tab_slick.html
 */
/*☆２☆CSSとhtmlだけのシンプルなタブ切り替え
 *https://copypet.jp/1027/
*/
    var slider=$('.gallery').slick({
        infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        fade: false, //フェードの有効化true:フェード変化。false:スライド変化
        arrows: false,//左右の矢印あり
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更

      });
    
    
      //選択画像の設定
      var slider2= $('.choice-btn').slick({
        infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 3, //表示させるスライドの数(ここ合わせないと画像サイズがおかしくなる)
        focusOnSelect: true, //フォーカスの有効化
        asNavFor: '.gallery', //連動させるスライドショーのクラス名
        centerMode: true,
      });


/*☆１☆タブが切り替わったタイミングで発火、指定した変数のslickを初期化(initialize)する*/
       $('input[name="cp_in_tab"]').change(function() {
       slider.slick('setPosition');
       slider2.slick('setPosition');
    });
