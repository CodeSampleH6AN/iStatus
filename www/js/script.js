$(document).ready(function() {
  //this calculates values automatically
  diff();
  $("#num1, #num2").on("keydown keyup change", function() {
    diff();
  });
  diff2();
  $("#num0, #num1, #num2").on("keydown keyup change", function() {
    diff2();
  });
  diff3();
  $(" #num0, #num1, #num2, #num3").on("keydown keyup change", function() {
    diff3();
  });
});

function diff() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var result = parseFloat(num2) * 60 / parseFloat(num1);
  if (!isNaN(result)) {
    document.getElementById('result').value = result.toFixed(0);
  }
}

function diff2() {
  var num0 = document.getElementById('num0').value;
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var result = parseFloat(num2) * 60 / parseFloat(num1);
  var result2 = parseFloat(result) + parseFloat(num0);
  if (!isNaN(result2)) {
    document.getElementById('result2').value = result2.toFixed(0);
  }
}

function diff3() {
  var num0 = document.getElementById('num0').value;
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var num3 = document.getElementById('num3').value;
  var result = parseFloat(num2) * 60 / parseFloat(num1);
  var result2 = parseFloat(result) + parseFloat(num0);
  var result3 = parseFloat(result2) - parseFloat(num3);
  if (!isNaN(result3)) {
    document.getElementById('result3').value = result3.toFixed(0);
  }
}

