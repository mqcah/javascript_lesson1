window.onload = function() {
    // btn要素を取得
    var btn = document.getElementById('btn');

    // btnにクリックイベントを設定
    btn.onclick = function() {
        // クリックされたらアラートを出す
        alert('clicked');
    };
};
