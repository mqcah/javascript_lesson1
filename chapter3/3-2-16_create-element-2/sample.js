window.onload = function() {
    // id名がboxの要素を取得
    var box = document.getElementById('box');

    // div要素を新規作成
    var newdiv = document.createElement('div');

    // 新規作成したdiv要素のid属性をnewに設定
    newdiv.id = 'new';

    // 新規作成したdiv要素の内容に'new div'というテキストを設定
    newdiv.innerHTML = 'new div';

    // box要素の中に新規作成したdiv要素を追加
    box.appendChild(newdiv);
};
