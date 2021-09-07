 var btttn=document.getElementById("buttonn");
var todol=document.getElementById("todolist");
var div2=document.getElementById("div2");
var div3=document.getElementById("link");

todol.appendChild(div2);
todol.appendChild(div3);
var texte=document.createElement("ul");
   document.body.appendChild(texte);
function todolistee()
{   
    var RemoveButton=document.createElement("button");
    var texte2=document.createElement("li");
   RemoveButton.innerHTML="x";
   // RemoveButton.classList.add("buttonX");
    texte2.classList.add("lii")
   // div3.appendChild(RemoveButton);
    div3.appendChild(texte);
    texte.appendChild(texte2);
RemoveButton.setAttribute("style","width:10%; border-style:none; margin-right:65%;");
RemoveButton.classList.add("buttonX");
 RemoveButton.onclick=function(){
   texte2.classList.add("destroy");
 }
    
    var comment=document.getElementById("text").value;
    
    if(comment!="")
    {
      texte2.appendChild(RemoveButton);
var valcomment=document.createTextNode(comment);
texte2.appendChild(valcomment);
document.getElementById("text").value="";}
else{
  alert("write your future action!");
}
   }
   function throughe(e){
    if(e.target.tagName=="LI"){
       // e.target.style.color='red';
e.target.classList.add("through");
}
}

texte.addEventListener('click', throughe, false);
  
  


var liste=[
             {
                 img:"killua6.jpg"
             },
             {
              img:"palestine.jpg"
             }
             
             ]
var imgg=document.getElementById('image');


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


