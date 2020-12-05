
function change_btn()
{
      var div_ele = document.getElementById('block_id').value;
      //document.getElementById('block_id').value = div_ele;
      //console.log(div_ele);
      var clr_ele = document.getElementById('colour_id').value;
      //console.log(clr_ele);
    // document.getElementById("2").style.backgroundColor = clr_ele;

      //console.log("hi");
      if(div_ele === "1")
      {
        document.getElementById("1").style.backgroundColor = clr_ele;
      }
      else if (div_ele === "2") {
        document.getElementById("2").style.backgroundColor = clr_ele;
      }
      else if (div_ele === "3") {
        document.getElementById("3").style.backgroundColor = clr_ele;
      }
      else if (div_ele === "4") {
        document.getElementById("4").style.backgroundColor = clr_ele;
      }
      else if (div_ele === "5") {
        document.getElementById("5").style.backgroundColor = clr_ele;
      }
      else if (div_ele === "6") {
        document.getElementById("6").style.backgroundColor = clr_ele;
      }
      else if (div_ele === "7") {
        document.getElementById("7").style.backgroundColor = clr_ele;
      }
      else if (div_ele === "8") {
        document.getElementById("8").style.backgroundColor = clr_ele;
      }else if(div_ele === "9"){
        document.getElementById("9").style.backgroundColor =  clr_ele;
      }


}


function reset_btn(){
  document.getElementById("1").style.backgroundColor = "transparent";
  document.getElementById("2").style.backgroundColor = "transparent";
  document.getElementById("3").style.backgroundColor = "transparent";
  document.getElementById("4").style.backgroundColor = "transparent";
  document.getElementById("5").style.backgroundColor = "transparent";
  document.getElementById("6").style.backgroundColor = "transparent";
  document.getElementById("7").style.backgroundColor = "transparent";
  document.getElementById("8").style.backgroundColor = "transparent";
  document.getElementById("9").style.backgroundColor = "transparent";
}
