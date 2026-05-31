//ボタン要素取得
const button = document.getElementById("myButton");

// ボタンクリック時のイベント設定
button.addEventListener("click", () => {
    // ヘッディング要素ゲット
    const heading = document.getElementById("myHeading");

    //テキスト変更
    heading.textContent = "テキスト変わったぞい";

});