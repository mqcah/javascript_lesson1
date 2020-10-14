window.onload = function() {
    // 要素を取得
    var btn = document.getElementById('btn');
    var box = document.getElementById('box');

    // 背景色を赤くするイベント
    btn.onclick = function() {
        box.style.backgroundColor = 'red';
    };

    // アラートを表示するイベント
    btn.onclick = function() {
        alert('clicked');
    };
};
