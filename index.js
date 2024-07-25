//for loop
for(let i=0;i<3;i++)
    {
        console.log("for loop run 5 times")
    }
    
//while loop
    let i=0;
    while(i<0)
    {
      console.log("check the condition then run the statement inside loop")
      i++;  
    }

    //do While Loop
    do{
        console.log("first  and then check condition")
        i++;  
    }while(i<0);
    
    //if-else loop
    let k="ADESH";
    let l="onkar"
    if(k=="ADESH" || l=="onkar")
    {
        console.log("topper");
    }else if(k=="onkar"){
        console.log("legend")
    }else if(k=="Rushi")
    {
        console.log("Pro")
    }else{
        console.log("student")
    }
    
    //switch case
    let ch=1;
    
    switch(ch) {
        case 1:
            console.log("case1");
           break;
        case 2:
            console.log("case2");
            break;
        default:
            console.log("Invalid choice");
    }




//code using for and if loop

    for(i=0;i<5;i++)
    {
        for(j=0;j<5;j++)
        {
            if(i==0||i==4)
            {
        process.stdout.write("*"); 
        }
       else if(i==1 || i==2|| i==3)
        {
          if(j==0||j==4)
          {
            process.stdout.write("*"); 
          }
          else
          {
            process.stdout.write(" "); 
          }
        }
    }
        console.log(" ")
    }
