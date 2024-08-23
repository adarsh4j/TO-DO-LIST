const InputBox= document.getElementById("input-box");
const list=document.getElementById("list");
function addtask()
{
    if(InputBox.value === '')
        {
            alert("First write something");
        }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=InputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    InputBox.value=" ";
    Save();
}
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked");
            Save();
        }
    else if(e.target.tagName==="SPAN")
        {
             e.target.parentElement.remove();
             Save();
        }
}, false);
function Save()
{
   localStorage.setItem("data" , list.innerHTML);
}
function show()
{
    list.innerHTML =localStorage.getItem("data");
}
show();