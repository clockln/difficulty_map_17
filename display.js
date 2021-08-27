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
    ["","","17.-1","00000-"],
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
  // name           ini diff  waku imglink

  ]
