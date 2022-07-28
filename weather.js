let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう/////////

console.log(data.name);
console.log(data.main.temp_max);
console.log(data.main.temp_min);


let b = document.querySelector('#answer');
b.addEventListener('click', Answer);



// 通信を開始する処理
function Answer() {

  let rs = document.querySelectorAll('input[name="year"]');
    for (let r of rs) {
        if (r.checked) {        // r が選択されていたら
          num=r.id;
        }
    }
  


  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+num+'.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  console.log(data.weather.main);

  let kuni = document.querySelector('span#kuni'); 
  kuni.textContent=data.name;

  let te = document.querySelector('span#te'); 
  te.textContent=data.weather[0].main;

  let sa = document.querySelector('span#sa'); 
  sa.textContent=data.main.temp_max;

  let si = document.querySelector('span#si'); 
  si.textContent=data.main.humidity;
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}





  //const language = document.form1.language;

  //const num = language.selectedIndex;

  //const str = language.options[num].value;

  //let kuni = document.querySelector('span#kuni'); 
  //kuni.textContent=str;


