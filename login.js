email=document.querySelector(".email")
pass=document.querySelector(".password")
btn=document.querySelector(".click")
spinnerHeight=document.querySelector(".spinner-height")
btn.addEventListener('click',async function(){
    emailRes={
        email:email.value,
        password:pass.value
    }
    emailResJson=JSON.stringify(emailRes)
    console.log(emailResJson)
    spinnerHeight.style.display="flex"
    await fetch("https://reqres.in/api/register",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: emailResJson
    }).then((res) => {
        // if()
        console.log(res.status)
        if(res.status==200){
        window.location.href="file:///C:/Users/melli/Desktop/projects/headphones/index.html"
        }
        else{
            spinnerHeight.style.display="none"
            window.alert("user name or password is incorrect")
        }
    })
})
