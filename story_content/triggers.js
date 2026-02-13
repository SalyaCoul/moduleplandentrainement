function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LvdLwhk5T8":
        Script1();
        break;
      case "5eQ8Dsd9uqf":
        Script2();
        break;
      case "68gXsLJqk6g":
        Script3();
        break;
      case "6RR8kuwFxIg":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('66DCTc98qUS');
const duration = 750;
const easing = 'ease-out';
const id = '5v5okU4Oi8u';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5z2bAFEHXax');
const duration = 750;
const easing = 'ease-out';
const id = '6ATQ7PofS6a';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6gvZJXxYxr4');
const duration = 750;
const easing = 'ease-out';
const id = '66CYl3SBAhZ';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5yJfoQQSdiK');
const duration = 750;
const easing = 'ease-out';
const id = '6ATQ7PofS6a';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
