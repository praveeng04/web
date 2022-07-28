 // non-primitive type string methids
//========================================//

//string uppercase
 let s="jspider";
 console.log(s.toUpperCase())//JSPIDER

 // string lowercase
 const s1="CANST";
 console.log(s1.toLowerCase())//const

 //slice 
 let a="string"
 console.log(a.slice(2,6))   // ring
 console.log(a.slice(2,4))   // ri
 console.log(a.slice(-2,-4));// not printed 
 console.log(a.slice(1,3))   //tr

 //substring:- 
  let b="string"
  console.log(b.substring(2,7)) //ring
   console.log(b.substring(2,4)) //ri
   console.log(b.substring(1,3))  //tr
   console.log(b.substring(-2,-4)) //not printed
   console.log(b.substring(-4,-2));  //not printed 

   // substr
   let c="string";
   console.log(c.substr(2,4)); //ring
   console.log(c.substr(1,4)) //trin

   //IndexOf :- it gives the indexbase voule
   let d="string";
   console.log(d.indexOf("n"))//4
   console.log(d.indexOf("s")) //0
   console.log(d.indexOf(" "))  //-1
     
   //lastindexof
    console.log(d.lastIndexOf(" ")) //-1
    console.log(d.lastIndexOf()) //-1
    console.log(d.lastIndexOf("r"))  //2

    //Includes : check the boolean voule 
     console.log(s.includes("s")) //true  "s": it's there in the string so ti will be true
     console.log(s.includes("a")) //false  "a" : it's not in string


     //starwith:-check the boolean true or flase
     console.log(d.startsWith("s")) //true
     console.log(d.startsWith("r"))  //fasle

     //endswith
     console.log(d.endsWith("r"))//flase
     console.log(d.endsWith("g")) //true
      
     // replace
     console.log(d.replace("s","a"))    //string -->atring
     console.log(d.replace("g","s"))    // string-->strins

     //replaceAll
     console.log(d.replaceAll("st","trr")) //string-->trring

     //charAt :- number converted int character
     console.log(d.charAt(3)) // i
     console.log(d.charAt(5)) //g

     //charCodeAt :-ANCI voule used
     console.log(d.charCodeAt(65))  //NaN not in string character
     
     //split
     console.log(d.split("s")) //s,tring  its length:- 2
      console.log(d.split("str"))  // str,ing its length:- 2
      console.log(d.split('')) //'s', 't' ,'r' ,'i', 'n' 'g' lenght:- s6
     console.log(d.split(" "))  //string length:-1 bacuse string " " ; 
    
     //reverse
    //  console.log(d.reverse())
    //  console.log(d.reverse())
     

    //join
    // console.log(d.join(" "))
    

    let dt=new Date();
    console.log(dt.getDate());
    console.log(dt.getDay());
    console.log(dt.getFullYear())
        
    console.log(dt.getTime());
    console.log(dt.getHours());
    console.log(dt.getMinutes());   
    console.log(dt.getSeconds());  

   
    
    console.log(dt.toDateString())
    console.log(Math.SQRT1_2);
    console.log(Math.SQRT2);
    console.log(Math.sqrt(2));
    console.log(Math.min(1,3,4,56,6.7));
    console.log(Math.max(2,4,5,6,7,8));
    console.log(Math.round(3.5));
    console.log(Math.PI);
    console.log(Math.random); 


 
 
 
 


 
 
 