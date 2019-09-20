function helpSwitch() {
  if($('#cover').css("display")=='none') {
    $('#cover').css("display", "table");
    $('#info_pane_vertical').css("display", "none");
    $('#info_pane_horizontal').css("display", "none");
    $('#info_pane_horizontal3').css("display", "none");
    $('#info_pane_horizontal4').css("display", "none");
    $('#info_pane_horizontal5').css("display", "none");
    $('#info_pane_horizontal6').css("display", "none");
    $('#info_pane_horizontal7').css("display", "none");
    $('#info_pane_horizontal8').css("display", "none");
    $('#info_pane_horizontal9').css("display", "none");
    $('#info_pane_horizontal10').css("display", "none");
    $('#info_pane_horizontal11').css("display", "none");
    $('#info_pane_horizontal12').css("display", "none");
    $('#info_pane_horizontal13').css("display", "none");
    $('#help_pane').css("display", "table");
    $('#help').css("visibility", "hidden");
    $('#help_on').css("visibility", "visible");
  }
  else{
    $('#cover').css("display", "none");
    $('#help_on').css("visibility", "hidden");
    $('#help').css("visibility", "visible");
  }
}

function infoSwitch(type) {
  if($('#cover').css("display")=='none') {
    $('#cover').css("display", "table");
    $('#help_pane').css("display", "none");
    $('#info_pane_vertical').css("display", "none");
    $('#info_pane_horizontal').css("display", "none");
    $('#info_pane_horizontal3').css("display", "none");
    $('#info_pane_horizontal4').css("display", "none");
    $('#info_pane_horizontal5').css("display", "none");
    $('#info_pane_horizontal6').css("display", "none");
    $('#info_pane_horizontal7').css("display", "none");
    $('#info_pane_horizontal8').css("display", "none");
    $('#info_pane_horizontal9').css("display", "none");
    $('#info_pane_horizontal10').css("display", "none");
    $('#info_pane_horizontal11').css("display", "none");
    $('#info_pane_horizontal12').css("display", "none");
    $('#info_pane_horizontal13').css("display", "none");
    $('#info_pane_' + type).css("display", "table");
  }
  else{
    $('#cover').css("display", "none");
  }
}

function setInfo(hotspot){
  var txt;

  $('#hs1_img').css("display", "none");
  $('#hs2_img').css("display", "none");
  $('#hs3_img').css("display", "none");
  $('#hs4_img').css("display", "none");
  $('#hs5_img').css("display", "none");
  $('#hs6_img').css("display", "none");
  $('#hs7_img').css("display", "none");
  $('#hs8_img').css("display", "none");
  $('#hs9_img').css("display", "none");
  $('#hs10_img').css("display", "none");
  $('#hs11_img').css("display", "none");
  $('#hs12_img').css("display", "none");
  $('#hs13_img').css("display", "none");

  switch (hotspot){
    case "spot1":
      $('.hs_sub').text("Maschera teatrale femminile / Female theatre mask");
      $('#hs1_img').css("display", "table");
    break;
    case "spot2":
      $('.hs_sub').text("Gallo / Rooster");
      $('#hs2_img').css("display", "table");
    break;
    case "spot3":
      $('.hs_sub').text("Testa maschile, forse di divinita' (Giove?) / Male head (Jupiter?)");
      $('#hs3_img').css("display", "table");
    break;
    case "spot4":
      $('.hs_sub').text("Merlo o tordo / Blackbird or throstle");
      $('#hs4_img').css("display", "table");
    break;
    case "spot5":
      $('.hs_sub').text("Struzzo ? / Ostrich ?");
      $('#hs5_img').css("display", "table");
    break;
    case "spot6":
      $('.hs_sub').text("Cinciallegra ? / Titmouse ?");
      $('#hs6_img').css("display", "table");
    break;
    case "spot7":
      $('.hs_sub').text("Anatra / Duck");
      $('#hs7_img').css("display", "table");
    break;
    case "spot8":
      $('.hs_sub').text("?");
      $('#hs8_img').css("display", "table");
    break;
    case "spot9":
      $('.hs_sub').text("Gazza ghiandaia ? / Jay ?");
      $('#hs9_img').css("display", "table");
    break;
    case "spot10":
      $('.hs_sub').text("Figura stante, forse Minerva / Standing figure (Minerva?)");
      $('#hs10_img').css("display", "table");
    break;
    case "spot11":
      $('.hs_sub').text("Civetta / Owl");
      $('#hs11_img').css("display", "table");
    break;
    case "spot12":
      $('.hs_sub').text("Grifoni / Griffins");
      $('#hs12_img').css("display", "table");
    break;
    case "spot13":
      $('.hs_sub').text("Ippocampi / Hippocamps");
      $('#hs13_img').css("display", "table");
    break;
    default:
      $('.hs_sub').text("Hotspot Subtitle");
      $('.hs_text').html("Hotspot Text");
    break;
  }
}
