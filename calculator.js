let array = ["AC" , "DEL" , "%" , "/" ,7,8,9,"*",4 ,5 ,6 ,"-" ,1,2,3,"+","." ,0,"="]
let screen = document.querySelector(".screen")
let container = document.querySelector(".container");
let j=-1;
let btn="";

for(let i =0 ;i<array.length;i++){
     btn=document.createElement("button");
    container.append(btn);
    
    btn.innerText=array[i];
    
    btn.addEventListener("click" ,function(){
        // screen.innerText+=this.innerText;
        let value=this.innerText;
        if(value==="AC"){
            screen.innerText = " ";
        }
        else if(value === "DEL"){
            screen.innerText =screen.innerText.slice(0,-1);
        }

        else if(this.innerText === "="){
            try{
                screen.innerText = eval(screen.innerText);
            }
            catch{
                screen.innerText="Error";
            }
        }
        else{
            screen.innerText+=this.innerText;
            screen.scrollLeft = screen.scrollWidth;
        }
        

    })
    
}

