function processForm (){
    Message = document.getElementById("Message")
   var content = document.getElementById("output")
   content.innerHTML = "";
   for(var i = 0; i<100; i++){
    content.innerHTML += "<div>" + Message.value + "</div>";
   }
}