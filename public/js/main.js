const link = document.querySelectorAll("a")

link.forEach(el=>{
    el.href=`${location.host}${location.pathname}`
})


console.log('Bonjour a tous');
console.log("L'exercisse étant basé principalement sur l'HTML et le CSS j'ai préferé gérer le burger menu avec ces techs plutôt qu'en utilisant un event listener JS")