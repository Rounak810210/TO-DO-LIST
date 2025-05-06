let todo=[];

let req= prompt("Please enter your request");

while(true){
    if(req=="quit"){
        console.log("quite aap");
        break;
    }
    if(req=="list"){
        console.log("---------------");
        for(i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("---------------");
        
    }

    else if(req=="add"){
        let task= prompt("enter task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("enter the index you want tto delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("wrong request");
    }

    req= prompt("Please enter your request");

}
