// 「HTMLの読み込みが終わったら」というイベントを設定
window.onload = function() {
    // id名がboxの要素を取得
    var box = document.getElementById('box');

    // 要素が取得できていることが確認できる
    console.log(box); //=> <div id="box">This is box</div>
};
