function sum(){
      let result = 0;
    
      function func(num){
         result = num + result;
         console.log(result);
      };

      return func;
}

let a = sum();
a(3);
a(7);


function arr(){
    let array = [];

    function func(num){
        array.push(num);
        if(num == null){
            array.splice(0, array.length);
        } 
       array.forEach(e => console.log(e));
    }
    
    return func;
}


let b = arr();
b(3);
b("Nastya");
b();
b(2);