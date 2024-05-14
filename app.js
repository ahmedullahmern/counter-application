var rumber_genrate  = document.getElementById("rumber_genrate")
var box  = document.getElementById("box")

var count = 0;

function Increment(){
    rumber_genrate.innerHTML=count++

     if(count % 2 == 0){
        rumber_genrate.style.color="red"
        box.innerHTML="odd"
        box.style.background="red"
        box.style.color="white"
    }

    else{
        rumber_genrate.style.color="blue"
        box.innerHTML="Even"
        box.style.background="blue"
        box.style.color="white"
    }

}

function Reset(){
    rumber_genrate.innerHTML=count=0
    rumber_genrate.innerHTML="(00)"
    box.innerHTML="Even/odd"
    box.style.background="none"
    box.style.color="black"
    rumber_genrate.style.color="black"
}