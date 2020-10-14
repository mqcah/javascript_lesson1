window.onload = function() {
    // class名がboxの要素をすべて取得
    var elems = document.getElementsByClassName('box');

    // class名がboxである1番目のdiv要素
    console.log(elems[0]); //=> <div class="box">div element 1</div>

    // class名がboxである2番目のdiv要素
    console.log(elems[1]); //=> <div class="box">div element 2</div>

    // class名がboxである1番目のp要素
    console.log(elems[2]); //=> <p class="box">p element 1</p>
};
