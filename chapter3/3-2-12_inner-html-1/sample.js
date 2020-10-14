window.onload = function() {
    // id名がboxの要素を取得
    var box = document.getElementById('box');

    // 取得した要素の内容を取得
    var html = box.innerHTML;

    // 内容を確認
    console.log(html); //=> This is <b>box</b>
};
