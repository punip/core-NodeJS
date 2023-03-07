export function fibonacci(n) {
    let nos = [];
    let a = 0;
    let b = 1;

    nos.push(a,b);

    let i = 2;
    while( i<= n) {
        let c = a+b ;
        nos.push(c);

        a=b;
        b=c;
        i++;
    }
    return nos;
}   

export function evenSeries(n) {
    //cpu
    let nos = [];
    let a = 0;
    let b = 1;

    nos.push(a,b);

    let i = 2;
    while( i<= n) {
        let c = a+b ;
        nos.push(c);

        a=b;
        b=c;
        i=i+2;
} return nos;
}