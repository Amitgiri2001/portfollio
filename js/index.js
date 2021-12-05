document.getElementById("myBtn").addEventListener("mouseover", function() {
    document.getElementById("demo").innerHTML = "Please Fill This Form & Sign in";
    this.style.backgroundColor = "black";
  });

    document.getElementById("myBtn").addEventListener("mouseout", function() {
        document.getElementById("demo").innerHTML = "Thanks for fill this Form ***(if you sign in already)";
    this.style.backgroundColor = "purple";
    
    });
//     var name=prompt("Enter Your Name Please: ")
//     if(name!==''){
//     alert("Thanks For View My Website "+name);
// }