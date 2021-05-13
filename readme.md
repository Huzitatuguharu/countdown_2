# Countdown 2

- [Countdown 2](#countdown-2)
  - [プロダクトの紹介](#プロダクトの紹介)
  - [<br>](#)
  - [こだわった](#こだわった)
  - [くるしい](#くるしい)
    - [Number.isNaN](#numberisnan)
    - [変数があるのか、定義されていないのか](#変数があるのか定義されていないのか)
    - [タイムスコープ](#タイムスコープ)
    - [変数の宣言](#変数の宣言)
  - [勉強になりました](#勉強になりました)
    - [アラートのアレンジ](#アラートのアレンジ)
    - [グラフ（Chart.js）](#グラフchartjs)
    - [モーダル](#モーダル)
  - [<br>](#-1)
  - [感想](#感想)

<br>

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
残りの人生を計算。
残りの時間をカウントダウンする

<br>
---

## こだわった
<br>
近未来っぽくした
数字を強調させた


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
おそらく´.format´するとイギリス時間になってしまう。

https://www.wakuwakubank.com/posts/743-javascript-dayjs/#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88br-format
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date

<br>
### 変数の宣言

変数の呼出しが難しかった。
- const
- let
- var
どれが上手くいくか試すようにする。


変数宣言を先にしたら動いた

小さい世界で作ったら
変数は小さい世界でのみ生きる。

まだイマイチわからない。
少しづつ的確にあたりを仕留められるようにしたい。


https://www.codegrid.net/articles/2017-js-scope-1/

https://codezine.jp/article/detail/11353
## 勉強になりました
<br>

### アラートのアレンジ
https://on-ze.com/archives/1757

<br>

### グラフ（Chart.js）
https://qiita.com/Haruka-Ogawa/items/59facd24f2a8bdb6d369#3-3-%E5%86%86%E3%82%B0%E3%83%A9%E3%83%95
<br>

### モーダル
https://tech-dig.jp/js-modal/
<br>
---

## 感想

変数宣言で長い時間苦しんだ。
let remain;
一行書くだけで動いたのが面白いと思った。

slackで質問したら解決した。
（ありがとうございました！）
とても助かった。

上手く質問するのは難しいと思った。。
質問力を向上させたい。
