const btns = document.querySelectorAll(".btn");
const article = document.querySelectorAll(".article");
const about = document.querySelector(".about");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        
        article.forEach(function(article){
            article.classList.remove('active');
        })
    }
    const element = document.getElementById(id);
    element.classList.add('active');
    
})