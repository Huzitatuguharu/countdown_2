# Countdown 2

- [Countdown 2](#countdown-2)
  - [<br>](#)
  - [プロダクトの紹介](#プロダクトの紹介)
  - [こだわった](#こだわった)
  - [くるしい](#くるしい)
    - [Number.isNaN](#numberisnan)
    - [変数があるのか、定義されていないのか](#変数があるのか定義されていないのか)
    - [タイムスコープ](#タイムスコープ)
    - [変数の宣言](#変数の宣言)
  - [勉強になりました](#勉強になりました)
    - [アラートのアレンジ](#アラートのアレンジ)
  - [<br>](#-1)
  - [感想](#感想)

<br>
---


## プロダクトの紹介

残りの人生のカウントダウン

年齢と性別を入力する
<br>
👇
<br>
厚生労働省のデータから
平均余命を特定
<br>
👇
<br>
ボタンを押す
<br>
👇
<br>
残りの時間をカウントダウンする

<br>

---

## こだわった
<br>
黒白でシンプルにした。<br>
真に迫る、すこし怖い感じにした


---

## くるしい

### Number.isNaN
数値と文字列の判定に使う。
NaNの時だけtrueが返ってくる。

参考サイト
https://qiita.com/atlansien/items/b61b4fa789e64695f13c

### 変数があるのか、定義されていないのか

定義していない
→ReferenceError: hoge is not defined


https://qiita.com/DecoratedKnight/items/b368bc774d7d7ec0c888

### タイムスコープ


最初に日本で設定したら、日本時間で計算する。
途中で<br>
.format´すると違うタイムスコープになってしまう。

https://www.wakuwakubank.com/posts/743-javascript-dayjs/#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88br-format
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date

<br>

### 変数の宣言

変数の呼出しが難しかった。
- const
- let
- var
どれが上手くいくか試すようにする。


変数宣言を先にしたら動いた<br>

小さい世界で作ったら
変数は小さい世界でのみ使える。<br>

まだイマイチわからない。
少しづつ的確にあたりを仕留められるようにしたい。<br>


https://www.codegrid.net/articles/2017-js-scope-1/

https://codezine.jp/article/detail/11353

## 勉強になりました
<br>

### アラートのアレンジ
https://on-ze.com/archives/1757

<br>
---

## 感想

変数宣言で長い時間苦しんだ。<br>
<br>
let remain;<br>
一行書くだけで重い道理に動いたのがおもしろい、粘ってよかった。<br>
<br>
slackで質問したら解決した。<br>
（ありがとうございました！）<br>
とても助かった。<br>

上手く質問するのは難しいと思った。<br>
質問力を向上させたい。
