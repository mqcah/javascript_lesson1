window.onload = function() {
    // id名がboxの要素を取得
    var box = document.getElementById('box');

    // 取得した要素の内容を変更
    box.innerHTML = '<em>new</em> HTML!';

    // 内容が変更されていることを確認
    console.log(box.innerHTML); //=> <em>new</em> HTML!
};
