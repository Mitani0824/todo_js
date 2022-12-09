import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const Inputtxt = document.getElementById("add-txt").value;
  document.getElementById("add-txt").value = "";

  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = Inputtxt;
  // console.log(li);

  //divタグの子要素に各要素を設定

  //console.log(div);

  //buttonの完了
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deletefromList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    //todoの内容を取得
    const txt = addTarget.firstElementChild.innerText;
    //divの初期化
    addTarget.textContent = null;
    // console.log(addTarget);

    const li = document.createElement("li");
    li.innerText = txt;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // console.log(addTarget);

    console.log(document.getElementById("complete_list"));
    //完了リストに追加

    //ここが問題。addTargetをHTMLに渡せてない
    document.getElementById("complete_list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deletefromList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete_list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deletefromList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
