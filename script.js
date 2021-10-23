const numOfPlayers = +prompt("몇 명이 참가하나요?");
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word; // 제시어
let newWord; // 현재 단어

const onClickButton = () => {
  // 제시어가 비어 있는가?
  if (!word || word[word.length - 1] === newWord[0]) {
    // 비어 있다
    word = newWord;
    $word.textContent = word;
    const order = +$order.textContent;
    if (order + 1 > numOfPlayers) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    // 올바르지 않다.
    alert("올바르지 않은 단어입니다!");
  }
  $input.value = "";
  $input.focus();
};
const onInput = (event) => {
  newWord = event.target.value; // 입력하는 단어를 현재 단어로
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);
