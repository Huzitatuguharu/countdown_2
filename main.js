dayjs.locale('ja');
let now = dayjs(); //よし
let selected = [];
let remain;
// 平均余命男
const boy = [81.41, 80.57, 79.59, 78.61, 77.62, 76.63, 75.63, 74.64, 73.65, 72.65, 71.66, 70.66, 69.67, 68.67, 67.68, 66.69, 65.70, 64.71, 63.73, 62.75, 61.77, 60.80, 59.83, 58.85, 57.88, 56.91, 55.93, 54.96, 53.98, 53.01, 52.03, 51.06, 50.09, 49.12, 48.15, 47.18, 46.21, 45.24, 44.28, 43.31, 42.35, 41.39, 40.43, 39.47, 38.52, 37.57, 36.62, 35.68, 34.74, 33.81, 32.89, 31.97, 31.05, 30.14, 29.24, 28.34, 27.45, 26.57, 25.70, 24.83, 23.97, 23.13, 22.29, 21.46, 20.64, 19.83, 19.03, 18.24, 17.47, 16.71, 15.96, 15.23, 14.51, 13.79, 13.09, 12.41, 11.73, 11.08, 10.43, 9.80, 9.18, 8.59, 8.02, 7.48, 6.95, 6.46, 5.99, 5.55, 5.14, 4.76, 4.41, 4.08, 3.76, 3.47, 3.19, 2.94, 2.70, 2.47, 2.26, 2.07, 1.89, 1.73, 1.58, 1.44, 1.31, 1.19];
// 平均余命女
const girl = [87.45, 86.60, 85.63, 84.64, 83.65, 82.66, 81.67, 80.68, 79.68, 78.69, 77.69, 76.69, 75.70, 74.70, 73.71, 72.72, 71.73, 70.73, 69.74, 68.76, 67.77, 66.78, 65.80, 64.81, 63.82, 62.84, 61.85, 60.86, 59.88, 58.89, 57.91, 56.92, 55.94, 54.96, 53.98, 53.00, 52.02, 51.04, 50.06, 49.08, 48.11, 47.14, 46.17, 45.20, 44.23, 43.26, 42.30, 41.34, 40.39, 39.44, 38.49, 37.54, 36.60, 35.66, 34.73, 33.79, 32.86, 31.93, 31.00, 30.08, 29.17, 28.25, 27.34, 26.43, 25.53, 24.63, 23.73, 22.84, 21.96, 21.08, 20.21, 19.35, 18.49, 17.64, 16.80, 15.97, 15.15, 14.34, 13.55, 12.77, 12.01, 11.26, 10.54, 9.84, 9.16, 8.51, 7.89, 7.30, 6.73, 6.21, 5.71, 5.24, 4.80, 4.39, 4.00, 3.64, 3.31, 3.02, 2.75, 2.51, 2.29, 2.09, 1.90, 1.74, 1.58, 1.45];

// 年齢選択肢作成
const age = [0, 106];
let ages = " ";

for (i = age[0]; i < age[(age.length) - 1]; i++) {
	ages += '<option  name="age" value=' + i + '>' + i + '</option>';
};

$('#age').html(ages);

// 性別選択肢作成
const gender_select = ["男性", "女性", "その他"]
let gender = " ";

for (j = 0; j < gender_select.length; j++) {
	gender += '<option  name="gender" value="gender_' + j + '">' + gender_select[j] + '</option>';
}
$('#gender').html(gender);



$('.selectitem').on('change', function () {
	// 性別取得
	let gender_selected = $('#gender').val();
	// 年齢取得
	let age_selected = $('#age').val();
	selected = [gender_selected, age_selected];
	// 男性
	if (selected[0] == "gender_0") {
		// 年齢から平均余命の判定
		for (i = 0; i < boy.length; i++) {
			if (selected[1] == i) {
				let life_year = boy[i];
				$('#answer').html("<p>あなたの余命は <br><span id='life_year'>" + life_year + "</span>年です</p>");
				console.log(life_year)
				// return (life_year);

				// 年数を秒数に変換
				let life_hour = Math.round(life_year * 24 * 365)
				let life_second = Math.round(life_hour * 60 * 60);
				console.log(life_second)

				// 2021/5/30取得して寿命の秒数を加算
				let thisyear = dayjs('2021-05-30T00:00:00Z').add(life_second, 's')
				console.log(thisyear);

				remain = thisyear.diff(now, 'second', false);
				$("#second").html("<p>残りは<br><span id='life_hour'>" + life_hour + "</span>時間です<p>");

				console.log(remain)


			}
		}
		// 女性
	} else if (selected[0] == "gender_1") {
		// 年齢から平均余命の判定
		for (i = 0; i < girl.length; i++) {
			if (selected[1] == i) {
				// 年齢から平均余命の判定

				let life_year = girl[i];
				$('#answer').html("<p>あなたの余命は <br><span id='life_year'>" + life_year + "</span>年です</p>");
				console.log(life_year)
				// return (life_year);

				// 年数を秒数に変換
				let life_hour = Math.round(life_year * 24 * 365);
				let life_second = Math.round(life_hour * 60 * 60);
				console.log(life_second)

				// 2021/5/30取得して寿命の秒数を加算
				let thisyear = dayjs('2021-05-30T00:00:00Z').add(life_second, 's')
				console.log(thisyear);
				$("#second").html("<p>残りは<br><span id='life_hour'>" + life_hour + "</span>時間です<p>");

				// let now = dayjs().format('YYYY-MM-DD HH:mm:ss') だめ
				remain = thisyear.diff(now, 'second', false);
				console.log(remain)
			}
		}

	} else if (selected[0] == "gender_2") {
		// その他の選択の場合

		swal({
			title: "ごめんさない",
			text: "計算できません",
			confirmButtonText: 'りょうかい',
			confirmButtonColor: '#DD6B55'
		});

	}
});

$('#btn1').on('click', function () {
	$("#btn1").remove();
	$("#label").html("<p id='title'>残りの秒数</p>");

	console.log(remain);

	var remain2 = remain;
	console.log(remain2);

	$(function () {
		setInterval(function () {
			document.getElementById("nokori").textContent = String(remain2)
			remain2 = remain2 - 1;
		}, 1000);
	});
	return false;

});


// // 年数を秒数に変換
// let life_hour = life_year * 24 * 365;
// let life_second = Math.round(life_hour * 60 * 60);
// console.log(life_second)

// // 2021/5/30取得して寿命の秒数を加算
// let thisyear = dayjs('2021-05-30T00:00:00Z').add(life_second, 's')
// console.log(thisyear);

// // let now = dayjs().format('YYYY-MM-DD HH:mm:ss') だめ
// let remain = thisyear.diff(now, 'second', false);

// $("#second").append("<p>" + remain + "<p>");

// console.log(Number.isNaN(remain));
// console.log(remain)



// $(document).ready(function () {

// 	$("#btn2").on("click", function (){
// 		function aaa()
// 	})
// });


// function remain_second() {
//   const start = dayjs('2021-04-22T00:00:00Z')
//   const now = dayjs()
//   const end = dayjs('2021-09-30T23:59:59Z')
//   const remain = Math.floor((end.diff(now)) / 1000)
//   document.getElementById("second").textContent = String(remain)
//   return remain;
// };


// $(document).ready(function () {
//   setInterval("remain_second()", 1000);
//   setInterval("remain_hour()", 1000);
// });




// たばこ+10年


// ここまで

// HTMLをつくる



// // A：入学日
// // B：卒業日
// // C:現在の時間
// dayjs.locale('ja');

// $(document).ready(function () {
//   setInterval("remain_second()", 1000);
//   setInterval("remain_hour()", 1000);
// });

// $('#submit').on('click', function () {
//   A = remain_hour();
//   B = Passed_hour();
//   let ctx = document.getElementById("myPieChart");
//   let myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//       labels: ["過", "これから"],
//       datasets: [{
//         backgroundColor: [
//           "#dedede",
//           "#00A7EA"
//         ],
//         data: [B, A]
//       }]
//     },
//     options: {
//       legend: {
//         position: "bottom", // タイトルでの position と同じ
//         labels: {
//           fontSize: 14,
//           boxWidth:14,
//           fontColor: "#595959",
//            fontfamily: "'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif",

//         }
//       }
//     }
//   });
// })

// function remain_second() {
//   const start = dayjs('2021-04-22T00:00:00Z')
//   const now = dayjs()
//   const end = dayjs('2021-09-30T23:59:59Z')
//   const remain = Math.floor((end.diff(now)) / 1000)
//   document.getElementById("second").textContent = String(remain)
//   return remain;
// };

// function remain_hour() {
//   const start = dayjs('2021-04-22T00:00:00Z')
//   const now = dayjs()
//   const end = dayjs('2021-09-30T23:59:59Z')
//   const remain_hour = end.diff(now, 'hour')
//   console.log(remain_hour)
//   document.getElementById("hour").textContent = String(remain_hour)
//   return remain_hour;
// };

// function Passed_second() {
//   const start = dayjs('2021-04-22T00:00:00Z')
//   const now = dayjs()
//   const end = dayjs('2021-09-30T23:59:59Z')
//   // 全期間
//   const Passed_second = Math.floor((now.diff(start)) / 1000);
//   return Passed_second;
// };

// function Passed_hour() {
//   const start = dayjs('2021-04-22T00:00:00Z')
//   const now = dayjs()
//   const end = dayjs('2021-09-30T23:59:59Z')
//   // 全期間
//   const Passed_hour = now.diff(start, 'hour');
//   return Passed_hour;
// };

// // モーダル

// function popupImage() {
//   let popup = document.getElementById('js-popup');
//   if (!popup) return;

//   let blackBg = document.getElementById('js-black-bg');
//   let closeBtn = document.getElementById('js-close-btn');
//   let showBtn = document.getElementById('info');

//   closePopUp(blackBg);
//   closePopUp(closeBtn);
//   closePopUp(showBtn);

//   function closePopUp(elem) {
//     if (!elem) return;
//     elem.addEventListener('click', function () {
//       popup.classList.toggle('is-show');
//     });
//   }
// }
// popupImage();


// // カウントダウンの関数
// let i = 0;
// let j = 0;


// function count1() {
//   const number1 = ['9', '8', '7', '6', '5', '4', '3', '2', '1', ''];
//   if (i === number1.length) {
//     i = 0;
//   }
// 	$(".one").html('<i>' + number1[i] + '</i>');
// 	$(".two").html('<i>' + number1[i] + '</i>');


// 	//JQuery
// 	console.log(i++);
// };

// function count2() {
//   const number2 = ['9', '8', '7', '6', '5', '4', '3', '2', '1', ''];
//   if (j === number2.length) {
//     j = 0;
// 	}
//   $(".one").html('<p>' + number2[j] + '</p>'); //JQuery
//   $(".two").html('<p>' + number2[j] + '</p>'); //JQuery
// 	console.log(j++);
// };

// 	setInterval(count1, 1000);
// 	setInterval(count2, 4000);
