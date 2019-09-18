var btnSvg = document.querySelectorAll('.btnSvg');
var closeDescBtn = document.querySelectorAll('.closeDesc');
var homeBtn = document.getElementById('homeBtn');
var bgImg = document.getElementById('backgroundImage');
var bg = document.getElementById('imgBg');
var viewFullScreen = document.getElementById("fsTrigger");
var exitFullScreen = document.getElementById("fsExitTrigger");
var pulseTop = document.getElementById('pulseTop');
var pulseMiddle = document.getElementById('pulseMiddle');
var pulseBottom = document.getElementById('pulseBottom');
var circleTop = document.getElementById('circleTop');
var circleMiddle = document.getElementById('circleMiddle');
var circleBottom = document.getElementById('circleBottom');

fsExitTrigger.style.display='none'
window.addEventListener('load', function(){
  setBgImg(screen.orientation.angle)
  for (var i = 0; i < btnSvg.length; i++) { setDivPos(btnSvg[i]); }
})

window.addEventListener("orientationchange", function() {
  window.setTimeout(function() {
    setBgImg(screen.orientation.angle)
    for (var i = 0; i < btnSvg.length; i++) { setDivPos(btnSvg[i]); }
  }, 100);
});
for (var i = 0; i < btnSvg.length; i++) {
  btnSvg[i].addEventListener('click', function() {
    showDesc(this.dataset.div);
  });
}

document.getElementsByName("closeCredit")[0].addEventListener('click',function(){
  document.getElementById('creditsWrap').style.display='none'
})
document.getElementById('creditsBtn').addEventListener('click', function(){
  document.getElementById('creditsWrap').style.display='flex'
})

function setBgImg(angle){
  if(angle==0 || angle==180){
    bg.src='./assets/img/pianta_villa.jpg';
    circleTop.setAttribute("cx","340")
    circleTop.setAttribute("cy","175")
    pulseTop.setAttribute("cx","340")
    pulseTop.setAttribute("cy","175")
    pulseTop.style.transformOrigin="340px 175px"
    circleMiddle.setAttribute("cx","345")
    circleMiddle.setAttribute("cy","520")
    pulseMiddle.setAttribute("cx","345")
    pulseMiddle.setAttribute("cy","520")
    pulseMiddle.style.transformOrigin="345px 520px"
    circleBottom.setAttribute("cx","250")
    circleBottom.setAttribute("cy","580")
    pulseBottom.setAttribute("cx","250")
    pulseBottom.setAttribute("cy","580")
    pulseBottom.style.transformOrigin="250px 580px"
  }else {
    bg.src='./assets/img/pianta_villa_hor.jpg';
    circleTop.setAttribute("cx","635")
    circleTop.setAttribute("cy","375")
    pulseTop.setAttribute("cx","635")
    pulseTop.setAttribute("cy","375")
    pulseTop.style.transformOrigin="635px 375px"

    circleMiddle.setAttribute("cx","275")
    circleMiddle.setAttribute("cy","380")
    pulseMiddle.setAttribute("cx","275")
    pulseMiddle.setAttribute("cy","380")
    pulseMiddle.style.transformOrigin="275px 380px"

    circleBottom.setAttribute("cx","220")
    circleBottom.setAttribute("cy","265")
    pulseBottom.setAttribute("cx","220")
    pulseBottom.setAttribute("cy","265")
    pulseBottom.style.transformOrigin="220px 265px"
  }
}

viewFullScreen.addEventListener("click", function() {
  lock('landscape')
})
exitFullScreen.addEventListener("click", function() {
  smolScreen()
})



for (var i = 0; i < closeDescBtn.length; i++) {
  closeDescBtn[i].addEventListener('click', function() {
    this.parentElement.style.display='none';
  })
}

function setDivPos(el){
  var l = getOffset(el).left
  var t = getOffset(el).top
  var divDesc = el.dataset.div;
  var div = document.getElementById(divDesc);
  var topCss = parseInt(t) - 180;
  var leftCss = parseInt(l) - 120;
  div.style.top = topCss+"px";
  div.style.left = leftCss+"px";
}

function showDesc(div){
  hideDesc();
  desc = document.getElementById(div);
  desc.style.display = 'block'
}

function hideDesc(){
  [].forEach.call(document.querySelectorAll('.description'), function (el) {
    el.style.display = 'none';
  });
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

function fullScreen() {
  // Kind of painful, but this is how it works for now
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
  fsTrigger.style.display='none'
  fsExitTrigger.style.display='block'
}

function smolScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  fsExitTrigger.style.display='none'
  fsTrigger.style.display='block'
}

function lock(orientation) {
  fullScreen();
  screen.orientation.lock(orientation);
}
