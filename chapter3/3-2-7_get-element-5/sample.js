window.onload = function() {
    // class名がboxのdiv要素をすべて取得
    var elems = document.querySelectorAll('div.box');

    // class名がboxである1番目のdiv要素
    console.log(elems[0]); //=> <div class="box">div element 1</div>

    // class名がboxである2番目のdiv要素
    console.log(elems[1]); //=> <div class="box">div element 2</div>
};
