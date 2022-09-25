let num = 0
let length = 0
let string = ``


function numberOfLines(){
    string = document.getElementById("test").value;
    num = 0
    const lines = string.split(/\r\n|\r|\n/);
    for (let i = 0; i < lines.length; i++) {
        if(lines[i] == "")
        {
            num += 1
        }
    }
   for(let i = 0; i < string.length; i++){
    if(string[i] == "/" && string[i + 1] == "/")
    {
        num += 1
    }
   }
   console.log(num)
   alert("The number of non code lines is " + num)
}