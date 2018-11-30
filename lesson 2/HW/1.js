// HAVE 2 SOLUTIONS: ////////////////////////////////////


// SOLUTION 1 ///////////////////////////////////////////


var  btnsList = document.getElementById('buttonContainer'),
     tabsList = document.getElementsByClassName('tab');

btnsList.onclick = function(event) {
  var btn = event.target;
  console.log(btn);

  hideActiveTab();
  addClass(btn);
}

function addClass(btn) {
  var btnAttr = btn.getAttribute('data-tab');

  for(i = 0; i < tabsList.length; i++) {
    var tagAttr = tabsList[i].getAttribute('data-tab');

    if(tagAttr === btnAttr) {
      tabsList[i].classList.add('active');
    }
  }
}

function hideActiveTab() {
  var tabActive = document.getElementsByClassName('active');

  if(tabActive[0]) {
    tabActive[0].classList.remove('active');
  }
}


//SOLUTION 2 ///////////////////////////////////////////////


// var  btnsList = document.getElementById('buttonContainer');
// btnsList.onclick = function(event) {
//   var currBtn = event.target;

//   if(currBtn.classList.contains("showButton")) {
//     var dataTab = currBtn.getAttribute('data-tab');
//     var tabs = document.getElementsByClassName('tab');

//     for (var i = 0; i < tabs.length; i++) {

//       if (tabs[i].getAttribute('data-tab') === dataTab) { 
//       hideAllTabs();
//       tabs[i].classList.add('active');
//       break;
//       }
//     }
//   }
// }
// function hideAllTabs() {
//   var tabs = document.getElementsByClassName('active');
//   for (var i = 0; i < tabs.length; i++) {
//     tabs[i].className = 'tab';
//   }
// }