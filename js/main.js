
$(document).ready(function(){
    let form = document.querySelector('#Calculator')
    let exp = document.querySelector('#exp')
    let btn = document.querySelectorAll('.btn')
    
    btn.forEach(bt => {
        bt.addEventListener('click',calculate)
    });

    function calculate(e)
    {
        e.preventDefault();
        let val = e.target.value;
        if (val === '=')
        {
            console.log("Calculate")
            if (exp.value === "")
            {
                console.log("Do Nothing")
            }
            else
            {
                let expression = exp.value;
                let ops = ["+","-","/","*"]
                isValid = false
                let ans = 0
                ops.forEach(op=>{
                    let operands = expression.split(op)
                    console.log(operands)
                    if (operands.length == 2 && operands[0] !="" && operands[1] !="")
                    {
                        isValid = true;
                        switch(op)
                        {
                            case '+' : ans = parseFloat(operands[0])  + parseFloat(operands[1]);break;
                            case '-' : ans = parseFloat(operands[0])  - parseFloat(operands[1]);break;
                            case '*' : ans = parseFloat(operands[0])  * parseFloat(operands[1]);break;
                            case '/' : ans = parseFloat(operands[0])  / parseFloat(operands[1]);break;
                        }
                        
                    }

                })
                                
                if (isValid == true)
                {
                    exp.value = ans;
                }
                else
                {
                    exp.value = "";
                }
                
            }
        }
        else
        {
            console.log("Append")
            exp.value += val;
        }

    }

});

