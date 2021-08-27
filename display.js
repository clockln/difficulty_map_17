////Datalist + displayDatas

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  for(let i=9;i>=-1;i--){
    const newDiv = document.createElement('div')
    const addId = 'imgcontainer' + String(i)
    newDiv.setAttribute('id',addId)
    const add_Div_temp = document.getElementById('maincontainer')
    add_Div_temp.appendChild(newDiv);
  }

  let imglist = {'17.-2': '','17.-1': '','17.0': '','17.1': '','17.2': '','17.3': '','17.4': '','17.5': '','17.6': '','17.7': '','17.8': '','17.9': '','17.10': ''};
  const folderName = 'jackets';
  data.forEach(element => {
    const imageleng = element[3].length;
    let Difficulty = 'other'
    if(element[3][imageleng-1] === 'e'){
      Difficulty = 'EXH'
    }else if(element[3][imageleng-1] === 'i'){
      Difficulty = 'INF'
    }else if(element[3][imageleng-1] === 'g'){
      Difficulty = 'GRV'
    }else if(element[3][imageleng-1] === 'h'){
      Difficulty = 'HVN'
    }else if(element[3][imageleng-1] === 'v'){
      Difficulty = 'VVD'
    }else if(element[3][imageleng-1] === 'm'){
      Difficulty = 'MXM'
    }
    const add_data = "<img src=\"" + folderName + "/" + element[3] + '.jpg\" class=\"' + Difficulty + '\" alt=\"' + element[1] + "/" + element[0] + '\"></img>'
    imglist[element[2]] += add_data;
  });

  for(let i=-1;i<=9;i++){
    const selectDiv = document.getElementById('imgcontainer' + String(i))
    const listKey = '17.' + String(i)
    selectDiv.innerHTML = '<p>' + imglist[listKey] + '</p>'
  }

});

const data = [
  ["","","17.-1","00000toku"],
  ["","","17.0","000000"],
  ["","","17.1","000001"],
  ["","","17.2","000002"],
  ["","","17.3","000003"],
  ["","","17.4","000004"],
  ["","","17.5","000005"],
  ["","","17.6","000006"],
  ["","","17.7","000007"],
  ["","","17.8","000008"],
  ["","","17.9","000009"],
  ["","","17.10","0000010"],
// name   ini diff imglink
// booth
  ["十面相","","17.3","01103v"],
  ["人生リセットボタン","","17.4","01105v"],
  [".59 -BOOTH BOOST REMIX-","","17.4","01064h"],
  ["cloud","","17.5","01042h"],
  ["Fire Strike","","17.4","01066h"],
  ["Space Diver Tama","","17.4","01060h"],
  ["Wheel","","17.3","01162h"],
  ["イカサマライフゲイム","","17.3","01077h"],
  ["ケロ⑨destiny","","17.7","01126h"],
  ["サヨナラ・ヘヴン (かめりあ's NEKOMATAelectroRMX)","","17.7","01063h"],
  ["セツナトリップ","","17.5","01076h"],
  ["éclair au chocolat","","17.4","01119g"],
  ["EGG","","17.5","01113g"],
  ["freaky freak","","17.7","01069g"],
  ["カミサマネジマキ","","17.7","01108g"],
  ["香港功夫大旋風","","17.9","01058g"],
  ["AA BlackY mix","","17.9","01100i"],
  ["ALBIDA Powerless Mix","","17.5","01001i"],
  ["Distorted Floor","","17.3","01068i"],
  ["Dynasty","","17.7","01121i"],
  ["good high school","","17.-1","01004i"],
  ["Gott","","17.7","01123i"],
  ["TYCOON","","17.4","01044i"],
  ["ナイト・オブ・ナイツ","","17.6","01135i"],
  ["天ノ弱","","17.2","01054i"],
  ["過食性:アイドル症候群","","17.2","01150i"],
  ["Ganymede kamome mix","","17.10","01071e"],
  ["Max Burning!!","","17.5","01124e"],
  ["The world of sound","","17.6","01156e"],
  ["V.I.P.","","17.5","01107e"],
  ["金縛りの逢を","","17.7","01146e"],
  ["大宇宙ステージ","","17.2","01114e"],
// infinite 
  ["Hoshizora Illumination","","17.5","02213h"],
  ["take a step forward","","17.7","02161h"],
  ["幻想系世界修復少女","","17.1","02255h"],
  ["竹取飛翔","","17.3","02237h"],
  ["放課後ストライド","","17.4","02135h"],
  ["Appliqué","","17.5","02292g"],
  ["choux à la crème","","17.3","02160g"],
  ["Double Universe","","17.8","02123g"],
  ["Erlung","","17.5","02159g"],
  ["INFINITY OVERDRIVE","","17.2","02126g"],
  ["Last Battalion","","17.2","02163g"],
  ["LittleGameStar","","17.3","02185g"],
  ["odds and ends","","17.3","02212g"],
  ["ウバワレ","","17.5","02182g"],
  ["少年は空を辿る Prog Piano Remix","","17.8","02083g"],
  ["雪女","","17.5","02181g"],
  ["御千手メディテーション","","17.3","02275i"],
  ["患部で止まってすぐ溶ける ～ 狂気の優曇華院","","17.5","02241i"],
  ["打打打打打打打打打打","","17.6","02296i"],
  ["BabeL ～Next Story～","","17.10","02081e"],
  ["Booths of Fighters","","17.4","02112e"],
  ["CODE -CRiMSON-","","17.7","02294e"],
  ["DEADLOCK XXX","","17.7","02120e"],
  ["Decretum","","17.7","02156e"],
  ["#FairyJoke #SDVX_Edit","","17.-1","02252e"],
  ["Fiat Lux","","17.10","02205e"],
  ["FIRE FIRE -DARK BLAZE REMIX-","","17.5","02283e"],
  ["FLYING OUT TO THE SKY","","17.8","02209e"],
  ["gigadelic -stance xxxx-","","17.6","02281e"],
  ["HAELEQUIN","","17.9","02077e"],
  ["Harpuia","","17.7","02214e"],
  ["Hellfire","","17.5","02171e"],
  ["HYENA","","17.-1","02167e"],
  ["Idola","","17.4","02257e"],
  ["Innocent Tempest","","17.5","02221e"],
  ["IX","","17.7","02197e"],
  ["Joyeuse","","17.9","02076e"],
  ["KiLLeR MeRMaiD","","17.3","02225e"],
  ["Last Concerto","","17.8","02172e"],
  ["Little princess has no identity.","","17.4","02305e"],
  ["Mist In Hell","","17.1","02228e"],
  ["Our Faith (Faithful MTL Remix)","","17.7","02313e"],
  ["Pure Evil","","17.4","02217e"],
  ["Pure Evil-Aya2g Drm'n Tech Rmx-","","17.6","02316e"],
  ["Quietus Ray","","17.8","02113e"],
  ["Sakura Mirage","","17.7","02248e"],
  ["snow storm -euphoria-","","17.8","02119e"],
  ["True Blue","","17.4","02149e"],
  ["U.N.オーエンは彼女なのか？haru_naba Remix","","17.6","02176e"],
  ["Verse IV","","17.10","02184e"],
  ["Wish upon Twin Stars","","17.5","02293e"],
  ["XROSS INFECTION","","17.8","02125e"],
  ["イゴモヨス＝オムルのテーマによるブヨブヨ・スケッチの試み","","17.3","02178e"],
  ["バンブーソード・ガール","","17.5","02256e"],
  ["ボルテ体操第一","","17.2","02223e"],
  ["ムーニャポヨポヨスッポコニャーゴ","","17.5","02158e"],
  ["朱と碧のランページ","","17.4","02286e"],
  ["悪性ロリィタマキャヴェリズム","","17.5","02265e"],
  ["音楽 -resolve-","","17.6","02082e"],
  ["音楽 -壊音楽 mix-","","17.4","02049e"],
  ["少女暴動","","17.3","02231e"],
  ["信仰は儚き人間の為に ～ Arr.Demetori","","17.7","02236e"],
  ["超越してしまった彼女と其を生み落した理由","","17.7","02170e"],
  ["轟け！恋のビーンボール！！","","17.2","02189e"],
  ["柳の下のデュラハン hard chaos mix","","17.5","02272e"],
// gravity
// heavenly
// vivid
// exceed
]
