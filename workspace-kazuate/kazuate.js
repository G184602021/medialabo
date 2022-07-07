// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
// hantei();
//hantei();
//hantei();
//hantei();
let a =  document.querySelector('#kazu');
a.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[name="1kara10"]');
    let v =i.value-0;
    let yoso = v;
    kaisu=kaisu+1;
           // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

    //console.log(kaisu+"回目の予想:"+yoso);


    
    let y = document.querySelector('span#yosou'); 
    y.textContent=yoso;
    
    
    let k = document.querySelector('span#kaisu');
    k.textContent=kaisu+'回目の予想: ';
    
    

    let r = document.querySelector('p#result');
    if(kaisu>=4){
        r.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";  
    }else if (kotae===yoso){
        r.textContent="正解です．おめでとう!";
    }else if (kotae!==yoso){
        if(kaisu===3){
            r.textContent="まちがい．残念でした答えは "+kotae+" です．"
        }else if(kotae>yoso){
            r.textContent="まちがい．答えはもっと大きいですよ";
        }else if(kotae<yoso){
            r.textContent="まちがい．答えはもっと小さいですよ";
        }
    }

}