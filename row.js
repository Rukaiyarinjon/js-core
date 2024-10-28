
var p=prompt("enter the row");

for(row=0;row<5; row++){
    for(col=0;col<=row;col++){
        document.write("*");
        
        }
      
        document.write("<br>");
       
    }

    document.write("<h1>break1</h1>");
    
    for(row=0;row<5; row++){
    for(col=0;col<=row;col++){
        document.write("*");
        
        }
        
        document.write("<br>");
    }
    

    document.write("<h2>break2</h2>");


    for(row=0;row<7;row++){
        for(col=0;col<=row;col++){
            document.write("# #");

        }
        document.write("<br>");
      

    }


    document.write("<h2>pattern1</h2>");    
    for(let i=0;i<5;i++){
        for(let j=0;j<i;j++){
            document.write("#");
        }
        document.write("<br>");
    }

    for(let i=0;i<6;i++){
        for(let j=0;j<i;j++){
            document.write("#");
        }
        document.write("<br>");
    }

    document.write("<h2>pattern2</h2>");   

    for(let row=1;row<10;row++){
        for(let col=1;col<row;col++){
            document.write("*");
        }

        document.write("<br>");
    }




    