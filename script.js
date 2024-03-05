function solve(val)  { 
                document.getElementById("res").value+=val
                return val 
            }
            function display(){
            let x= document.getElementById("res").value
            let y = eval(x)
            document.getElementById("res").value =y
            return y;
                }
         function clr(){
              document.getElementById("res").value=""
            }