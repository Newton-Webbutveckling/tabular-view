const links = document.querySelectorAll("a")

for(let link of links){
  link.addEventListener("click", function(){
    const tabs = document.querySelectorAll(".tab")
    tabs.forEach(tab => tab.classList.remove("active"))
    const selector = "." + link.getAttribute("data-target")
    const section = document.querySelector(selector)
    section.classList.add("active")
  })
}