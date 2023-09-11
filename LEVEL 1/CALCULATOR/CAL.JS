function cleardisplay(){
    const display=document.getElementById("display_calc");
    display.value="";
    }
    function todisplay(value){
        const display=document.getElementById("display_calc");
        display.value+=value;
       
    
    }
    function tocalc(){
        const display=document.getElementById("display_calc");
        try{
            display.value=eval(display.value);
        }catch{
            display.value="error"
        }
    }
    function todel(){
        const display=document.getElementById("display_calc");
        display.value= display.value.slice(0, -1);
    }
    