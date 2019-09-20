var btnSvg = document.querySelectorAll('.btnSvg');
var closeDescBtn = document.querySelectorAll('.closeDesc');
var homeBtn = document.getElementById('homeBtn');
var bg = document.getElementById('imgBg');
var pulseTop = document.getElementById('pulseTop');
var pulseMiddle = document.getElementById('pulseMiddle');
var pulseBottom = document.getElementById('pulseBottom');
var circleTop = document.getElementById('circleTop');
var circleMiddle = document.getElementById('circleMiddle');
var circleBottom = document.getElementById('circleBottom');
var creditsWrap = document.getElementById('creditsWrap');

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

document.getElementsByName("closeCredit")[0].addEventListener('click',function(){ creditsWrap.style.display='none'; })
document.getElementById('creditsBtn').addEventListener('click', function(){ creditsWrap.style.display='flex'; })

function setBgImg(angle){
  if(angle==0 || angle==180){
    bg.src='./assets/img/pianta_villa.jpg';

    circleTop.setAttribute("cx","340")
    circleTop.setAttribute("cy","120")
    pulseTop.setAttribute("cx","340")
    pulseTop.setAttribute("cy","120")
    pulseTop.style.transformOrigin="340px 120px"

    circleMiddle.setAttribute("cx","250")
    circleMiddle.setAttribute("cy","530")
    pulseMiddle.setAttribute("cx", "250")
    pulseMiddle.setAttribute("cy", "530")
    pulseMiddle.style.transformOrigin="250px 530px"

    circleBottom.setAttribute("cx","315")
    circleBottom.setAttribute("cy","600")
    pulseBottom.setAttribute("cx", "315")
    pulseBottom.setAttribute("cy", "600")
    pulseBottom.style.transformOrigin="315px 600px"
  }else {
    bg.src='./assets/img/pianta_villa_hor.jpg';

    circleTop.setAttribute("cx","770")
    circleTop.setAttribute("cy","360")
    pulseTop.setAttribute("cx","770")
    pulseTop.setAttribute("cy","360")
    pulseTop.style.transformOrigin="770px 360px"

    circleMiddle.setAttribute("cx","265")
    circleMiddle.setAttribute("cy","250")
    pulseMiddle.setAttribute("cx","265")
    pulseMiddle.setAttribute("cy","250")
    pulseMiddle.style.transformOrigin="265px 250px"

    circleBottom.setAttribute("cx","180")
    circleBottom.setAttribute("cy","330")
    pulseBottom.setAttribute("cx","180")
    pulseBottom.setAttribute("cy","330")
    pulseBottom.style.transformOrigin="180px 330px"
  }
}

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
