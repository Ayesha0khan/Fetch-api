let head = document.querySelector("h1")
let number = document.querySelector("h2")
let img = document.querySelector("img")
function genQuotes() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0].name.first);
        let user = data.results[0]
        head.innerText = user.name.first;
        
            console.log(user.email); 
            number.innerText = user.email
    
            console.log(user.picture)  
            img.setAttribute("src" , `${user.picture.thumbnail}`)
    
    
    });
  }



