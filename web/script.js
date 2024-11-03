
var math = {
    sum(a ,b){
        console.log(a+b);
    },
    fact(counter) {
        var f=1
        for(var i=1;i<=counter;i++){
            f=i*f;
            console.log(f);
        }
    },
    fibo(Counter){
        var f1=0;
        var f2=1;
        var f3=0;
        console.log(f1);
        console.log(f2);
        for(var i=3;i<=Counter;i++){
            f3=f1+f2
            f1=f2
            f2=f3
            
            console.log(f3);
        }
    }


}
math.sum(3,5)
math.fact(5)
math.fibo(7)