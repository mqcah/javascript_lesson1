window.onload = function() {
    // ここで取得するboxは文字列でなくオブジェクト
    var box = document.getElementById('box');

    // 要素の中身を文字列で取得
    console.log(box.innerHTML); // This is box

    // CSSを変更する
    box.style.backgroundColor = 'red';
};
