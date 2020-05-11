
var tempPage = 1;

function gettyshxymtip(){
  var dwmc = $("#frdwqc").val();
  $.ajax({
    url:"/wwfw_ldjy/ygsb/unitBaseInfo.do",
    type : "post",
    dataType : "json",
    data : {dwmc:dwmc},
    cache:false,
    success : function(d) {
      var isSuc = d.ret == "T";
      var data = d.result;
      if (isSuc && data) {
        $("#frdwtyshxym").val(data.tyshxym);
        $("#frdwzzjgdm").val(data.zzjgdm);
        $("#frdwcid").val(data.cid);
      }

    }

  });
}

/* 第一个法人单位区县街道start */
var ss1;
$.getJSON("/wwfw_ldjy/resources/dict/street.json",function(data){
  ss1=data;
});

$("#frdwzcqxid").change(function(){
  var htmls="<option value=\"\">------请选择------</option>";
  for(var i=0;i<ss1.length;i++){
    if($(this).val()==ss1[i].pid){
      htmls+="<option value='"+ss1[i].id+"'>"+ss1[i].name+"</option>";
      $("#frdwzcdzid").html(htmls);
    }
  }
});
/*  第一个法人单位区县街道end */

/* 第2个法人单位区县街道start */
var ss2;
$.getJSON("/wwfw_ldjy/resources/dict/street.json",function(data){
  ss2=data;
});

$("#bgqx").change(function(){
  var htmls="<option value=\"\">------请选择------</option>";
  for(var i=0;i<ss2.length;i++){
    if($(this).val()==ss2[i].pid){
      htmls+="<option value='"+ss2[i].id+"'>"+ss2[i].name+"</option>";
      $("#frdwbgdzid").html(htmls);
    }
  }
});
/*  第2个法人单位区县街道end */

/* 第3个法人单位区县街道start */
var ss3;
$.getJSON("/wwfw_ldjy/resources/dict/street.json",function(data){
  ss3=data;
});

$("#jyqxid").change(function(){
  var htmls="<option value=\"\">------请选择------</option>";
  for(var i=0;i<ss3.length;i++){
    if($(this).val()==ss3[i].pid){
      htmls+="<option value='"+ss3[i].id+"'>"+ss3[i].name+"</option>";
      $("#jydzid").html(htmls);
    }
  }
});
/*  第3个法人单位区县街道end */

$(document).ready(function(){

  $("#sjh").val('18702153742');
  $("#frdwtyshxym").val('91310104MA1FRHLU54');
  $("#frdwzzjgdm").val('MA1FRHLU5');
  $("#frdwqc").val('上海瀚巍微电子技术有限公司');
  $("#frdwcid").val('201908203666421');
//$("#frdwzcdzid").val('0411');
  $("#frdwzcdz").val('上海市徐汇区桂平路680号32幢7层7A-6室、7A-8室');
//$("#frdwbgdzid").val('0411');
  $("#frdwbgdz").val('上海市徐汇区桂平路680号32幢7层7A-6室、7A-8室');
  $("#frdwyyzzzch").val('');
  $("#frdwzzbh").val('91310104MA1FRHLU54');
  $("#syjdwmc").val('');
  $("#ffrdwqc").val('');
  $("#ffrdwcid").val('');
  $("#ffrdwtyshxym").val('');
  $("#ffrdwzzjgdm").val('');
  $("#ffrdwyyzzzch").val('');
  $("#ffrdwzzbh").val('');

  var sfjbfrzg = '1';
  if(sfjbfrzg=="0"){
    $("#sfjbfrzg").attr("checked",true);
    $("#syj1").attr("style","display:block;");
    $("#ffr1").attr("style","display:none;");
    $("#ffr2").attr("style","display:none;");
    $("#ffr3").attr("style","display:none;");
    $("#ffr4").attr("style","display:none;");

  }else{
    $("#sfjbfrzg").attr("checked",false);
    $("#syj1").attr("style","display:none;");
    $("#ffr1").attr("style","display:none;");
    $("#ffr2").attr("style","display:none;");
    $("#ffr3").attr("style","display:none;");
    $("#ffr4").attr("style","display:none;");
  }

  $("#jydz").val('');
//$("#jydzid").val('');
  $("#yb").val('');
  $("#tbr").val('');
  $("#dwdh").val('');
  $("#dwxzid").val('');
  $("#lsgxid").val('');
  $("#hylbid").val('');
  if('0'=="1"){
    $("[name='radio1']:eq(0)").prop("checked",true);
    $("#301").attr("style","display:block;");
  }else if('0'=="0"){
    $("[name='radio1']:eq(1)").prop("checked",true);
    $("#301").attr("style","display:none;");
  }
  $("#fddbr").val('');
  $("#frdh").val('');
  $("#zjlxid").val('');
  $("#zjhm").val('');
  $("#cyryzs").val('5');
  $("#qznxrs").val('1');

  $("#ldrsfzr").val('');
  $("#ldrszw").val('');
  $("#lxdh").val('');
  $("#bshtzry").val('5');
  $("#wdhtzry").val('0');
  $("#bslwpqry").val('0');
  $("#wdlwpqry").val('0');
  $("#txpyry").val('0');
  $("#xbxgry").val('0');
  $("#tgary").val('0');
  $("#wgry").val('0');
  $("#fqrzry").val('0');
  $("#qtry").val('0');

  $("#lwpqdw1").val('');
  $("#lwpqrs1").val('');
  $("#lwpqdw2").val('');
  $("#lwpqrs2").val('');
  $("#lwpqdw3").val('');
  $("#lwpqrs3").val('');
  $("#lwpqdw4").val('');
  $("#lwpqrs4").val('');

  if(-1!='1'.indexOf("1")){
    $("[name='checkmul1']:eq(0)").attr("checked",'true');
  }
  if(-1!='1'.indexOf("2")){
    $("[name='checkmul1']:eq(1)").attr("checked",'true');
  }
  if(-1!='1'.indexOf("3")){
    $("[name='checkmul1']:eq(2)").attr("checked",'true');
  }
  $("#sxjjgzzrs").val('');
  $("#ydzfgzrq").val('31');

  if('1'=="1"){
    $("[name='radio2']:eq(0)").prop("checked",true);
  }else if('1'=="0"){
    $("[name='radio2']:eq(1)").prop("checked",true);
  }
  if('1'=="1"){
    $("[name='radio3']:eq(0)").prop("checked",true);
  }else if('1'=="0"){
    $("[name='radio3']:eq(1)").prop("checked",true);
  }

  if(-1!='1'.indexOf("1")){
    $("[name='checkmul2']:eq(0)").attr("checked",'true');
  }
  if(-1!='1'.indexOf("2")){
    $("[name='checkmul2']:eq(1)").attr("checked",'true');
  }

  if(-1!='1'.indexOf("1")){
    $("[name='checkmul3']:eq(0)").attr("checked",'true');
  }
  if(-1!='1'.indexOf("2")){
    $("[name='checkmul3']:eq(1)").attr("checked",'true');
  }

  if(-1!=''.indexOf("1")){
    $("[name='checkmul4']:eq(0)").attr("checked",'true');
  }
  if(-1!=''.indexOf("2")){
    $("[name='checkmul4']:eq(1)").attr("checked",'true');
  }
  //实行工时制度
  if(-1!='0'.indexOf("1")){
    $("[name='checkmul5']:eq(0)").attr("checked",'true');
  }
  if(-1!='0'.indexOf("1")){
    $("[name='checkmul5']:eq(1)").attr("checked",'true');
  }
  if(-1!='0'.indexOf("1")){
    $("[name='checkmul5']:eq(2)").attr("checked",'true');
  }
  //实行综合计时周期
  if(-1!=''.indexOf("1")){
    $("[name='checkmul6']:eq(0)").attr("checked",'true');
  }
  if(-1!=''.indexOf("2")){
    $("[name='checkmul6']:eq(1)").attr("checked",'true');
  }
  if(-1!=''.indexOf("3")){
    $("[name='checkmul6']:eq(2)").attr("checked",'true');
  }

  $("#spqsrq").val('');
  $("#sqzzrq").val('');
  $("#bdssjgw").val('');
  $("#zhjsssjgw").val('');

  if('1'=="1"){
    $("[name='radio9']:eq(0)").prop("checked",true);
  }else if('1'=="0"){
    $("[name='radio9']:eq(1)").prop("checked",true);
  }
  if('1'=="1"){
    $("[name='radio4']:eq(0)").prop("checked",true);
  }else if('1'=="0"){
    $("[name='radio4']:eq(1)").prop("checked",true);
  }
  $("#bshjjnsbrs").val('');
  $("#wsshjjnsbrs").val('');
  if('1'=="1"){
    $("[name='radio5']:eq(0)").prop("checked",true);
  }else if('1'=="0"){
    $("[name='radio5']:eq(1)").prop("checked",true);
  }
  if('0'=="1"){
    $("[name='radio6']:eq(0)").prop("checked",true);
  }else if('0'=="0"){
    $("[name='radio6']:eq(1)").prop("checked",true);
  }
  if(''=="1"){
    $("[name='radio7']:eq(0)").prop("checked",true);
  }else if(''=="0"){
    $("[name='radio7']:eq(1)").prop("checked",true);
  }
  if(''=="1"){
    $("[name='radio8']:eq(0)").prop("checked",true);
  }else if(''=="0"){
    $("[name='radio8']:eq(1)").prop("checked",true);
  }

  var addr1 = '0411';
  var strict1 = addr1.substring(0,2);
  var addr2 = '0411';
  var strict2 = addr2.substring(0,2);
  var addr3 = '';
  var strict3 = addr3.substring(0,2);
  var ss;
  $.getJSON("/wwfw_ldjy/resources/dict/street.json",function(data){
    ss=data;
    var html1="<option value=\"\">------请选择------</option>";
    var html2="<option value=\"\">------请选择------</option>";
    var html3="<option value=\"\">------请选择------</option>";
    for(var i=0;i<ss.length;i++){
      if(ss[i].pid == strict1){
        html1+="<option value='"+ss[i].id+"'>"+ss[i].name+"</option>";
      }
      if(ss[i].pid == strict2){
        html2+="<option value='"+ss[i].id+"'>"+ss[i].name+"</option>";
      }
      if(ss[i].pid == strict3){
        html3+="<option value='"+ss[i].id+"'>"+ss[i].name+"</option>";
      }

    }
    $(frdwzcdzid).html(html1);
    $(frdwbgdzid).html(html2);
    $(jydzid).html(html3);
    $(frdwzcdzid).val(addr1);
    $(frdwbgdzid).val(addr2);
    $(jydzid).val(addr3);
    $(frdwzcqxid).val(strict1);
    $(bgqx).val(strict2);
    $(jyqxid).val(strict3);


  });



  $("#tbbz").val('');
  $("#cpbs").val('0');
  $("#cznf").val('2020');
  $("#bz").val('');

  var myDate1 = new Date();
  var year = myDate1.getFullYear();

  if($("#cpbs").val()=="1"&&year==$("#cznf").val()){
    $("#btnsavefirst").attr("style","display:none;");
    $("#btnsavefirstsp1").attr("style","display:none;");
    $("#btncommitfirst").attr("style","display:none;");
    $("#btncommitfirstsp1").attr("style","display:none;");
    $("#btnprint").removeAttr("style");
    $("#btnprintp1").removeAttr("style");
    //$("#btnprint").attr("style","display:inline");
    //$("#btnprintp1").attr("style","display:inline");
  }else{
    $("#btnprint").attr("style","display:none");
    $("#btnprintp1").attr("style","display:none");
  }
  gettyshxymtip();
  /*     tempPage = $("#tbbz").val();
      if(tempPage==""||tempPage=undefined){
       tempPage=1;
      } */
  tempPage=1;
  switchshow(tempPage);
});


function switchsffr(){
  if($("#sfjbfrzg").prop('checked')==true){
    $("#syj1").attr("style","display:block;");

  }else{
    $("#syj1").attr("style","display:none;");
    $("#ffr1").attr("style","display:none;");
    $("#ffr2").attr("style","display:none;");
    $("#ffr3").attr("style","display:none;");
    $("#ffr4").attr("style","display:none;");
  }
}


$(function () {
  $('.rq').datetimepicker({
    bootcssVer:3,
    language:  'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    format: 'yyyymmdd',
    minView: "month",
    forceParse: 0
  });
});

