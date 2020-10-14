window.onload = function() {
    // id名がimageである要素を取得
    var image = document.getElementById('image');

    // 取得した要素のsrc属性値を取得
    var src = image.src;

    // src属性値が取得できていることを確認
    console.log(src); //=> sample.jpg
};
