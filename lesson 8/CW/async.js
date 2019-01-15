/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/


async function readDataFromUrl() {
  const dataFromServer = await fetch("http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2");
  const resp = await dataFromServer.json();
  createTable(
    ['#', 'Company', 'Balance', 'Показать дату регистрации', 'Показать адресс'],
    '|',
    resp
  );
  console.log(resp);
}

function createTable(arrFirstString, splitter, arrDataObj) {
  var table = document.createElement('table');
  var tr = document.createElement('tr'), td, dataArr;
  for(let i = 0; i < arrFirstString.length; i++) {
    td = document.createElement('td');
    td.innerText = arrFirstString[i] + ' ' + splitter;
    tr.appendChild(td);
  }
  table.appendChild(tr);

  // load data
  for(let i = 0; i < arrDataObj.length; i++) {
    tr = document.createElement('tr');
    dataArr = [];
    dataArr.push( (i+1)+'.' );
    dataArr.push( arrDataObj[i].company );
    dataArr.push( arrDataObj[i].balance );
    dataArr.push(
      createButton('date', arrDataObj[i].registered)
    );
    dataArr.push(
      createButton(
        'address',
        obj2str(arrDataObj[i].address)
      )
    );
    for(let j = 0; j < dataArr.length; j++) {
      td = document.createElement('td');
      if(typeof dataArr[j] === 'object') {
        td.appendChild(dataArr[j]);
        td.innerHTML += ' ' + splitter;
      } else {
        td.innerText = dataArr[j] + ' ' + splitter;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  table.onclick = function(e) {
    var clickElement = e.target;
    if(clickElement.tagName === 'BUTTON') {
      let dataFromButton = clickElement.getAttribute('data-text');
      clickElement.parentNode.innerHTML = dataFromButton + ' ' + splitter;
    }
  };

  document.body.appendChild(table);
}

function createButton(name, data) {
  var button = document.createElement('button');
  button.innerText = name;
  button.setAttribute('data-text', data);
  return button;
}

function obj2str(obj) {
  var str = '';
  for(let key in obj) {
    str += key + ' -> ' + obj[key] + '; ';
  }
  return str;
}

readDataFromUrl();