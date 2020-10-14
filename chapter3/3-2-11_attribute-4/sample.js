window.onload = function() {
    // id名がimageである要素を取得
    var image = document.getElementById('image');

    // 属性の値の取得
    var src = image.getAttribute('src');

    // 属性の値の変更
    image.setAttribute('src', 'sample2.jpg');
};
