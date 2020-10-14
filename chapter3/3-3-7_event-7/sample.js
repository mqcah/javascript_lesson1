// 「HTMLの読み込みが終わったら」というイベントを設定
document.addEventListener('DOMContentLoaded', function() {
    // id名がboxの要素を取得
    var box = document.getElementById('box');

    // 要素が取得できていることが確認できる
    console.log(box); //=> HTMLDivElement
}, false);
