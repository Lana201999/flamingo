var nested = [ [1,2,3], [1,[1]]];
console.log(String(nested).split(',').map(Number));

const arr1 =  [ [1,2,3], [1,[1]]];
console.log(arr1.flat(3));
// function sort(arr1) {



// }
function  salutes(s) {
    var right = [];
    var left = [];
    for(var i =0;i<s.length;i++)
    {
        if(s[i] === ">")
        {
            right.push(i);
                
        }
        
        if(s[i] === "<")
        {
            
            left.push(i);
        }
    } 
    var meetings = 0;
    for(var i = 0;i<right.length;i++)
    {
        for(var j = 0;j<left.length;j++)
    {       if(right[i]<left[j])
            {
                meetings += 1;
            }
            
    }

    }
    return meetings+ meetings; 
}
salutes("<--<-->--<") ;

function  prime(number) {
    for(var i = 2; i<n ; i++)
    {
        if( n % i === 1)
        {
            return "this number in prime";
            break;
        }else 
        return "not prime";

    }
}
function  prime(num) {
    let x;
    for(var i = 2; i<num/2 ; i++)
    {
        if( num % i === 0)
        {
            x = 1;
           
        }
    }
    if(x == 1)
    {
        return "is not";
    }else return "prime";


}


function  count(word) {
    var count2 = 0; //The number of letters that were repeated 
    var r =[]; //The letter that is repeated and how many times 
    var y = word.toLowerCase(); //convert all letters to lower case
    for(var i =0;i<y.length;i++){
        var count =0;//count how many the letter repeat
        for(var j =0;j<y.length;j++)
        {
            if(y[i] == y[j])
            {
                count++;
            }  
        }
        if(count > 1)
        {
            count2++;
            r.push((y[i]),(count));
            y = y.replaceAll(y[i],"");
            i--;
        }
    }
    return(r);
}
var x ="aaAAbbBB";
function count(word){
    let res ={};
    let str = word.toLowerCase();
    let resultString="";
    for(var i = 0; i<str.length;i++)
    {
        if(res[str[i]]=== undefined){
            res[str[i]] = 1;

        }else{
            res[str[i]]++;
        }
    }
    
    for (let key in res){
        if(res[key]>1){
            resultString+=key +":"+ res[key]+"  ";
        }
    }
    return resultString;

}

