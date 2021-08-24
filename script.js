
    var choix=document.getElementById("todolist");
    var mytodo=document.getElementById("text");
    var btttn=document.getElementById("buttonn");
    var mytext=document.createElement("h3");
    function todolistee()
    {
       
        var comment=document.getElementById("text").value;
    choix.appendChild(mytext);
      
        var texte=document.createTextNode(comment);
        mytext.appendChild(texte);
        
    }



var liste=[
                 {
                     img:"killua6.jpg"
                 },
                 {
                  img:"palestine.jpg"
                 }
                 
                 ]
  var imgg=document.getElementById('image');
 /* var nvl=document.getElementById('file');
  alert(nvl.getAttribute("src"));*/


  

  var i=0;
  function slide()
  {
      imgg.src=liste[i].img;
      
      if(i<liste.length-1)
      {
          i++;
       
      }
      else{
      i=0;
      }
  }
