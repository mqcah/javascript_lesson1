window.onload = function() {
    // div要素を新規作成
    var newdiv = document.createElement('div');

    // 新規作成したdiv要素のid属性をnewに設定
    newdiv.id = 'new';

    // 新規作成したdiv要素の内容に'new div'というテキストを設定
    newdiv.innerHTML = 'new div';

    // 新規作成した要素を確認
    console.log(newdiv); //=> <div id="new">new div</div>
};
