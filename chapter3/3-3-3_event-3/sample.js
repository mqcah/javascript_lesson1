window.onload = function() {
    // 要素を取得
    var btn = document.getElementById('btn');
    var box = document.getElementById('box');

    // 背景色を赤くするイベント
    btn.addEventListener('click', function() {
        box.style.backgroundColor = 'red';
    }, false);

    // アラートを表示するイベント
    btn.addEventListener('click', function() {
        alert('clicked');
    }, false);
};
