document.querySelectorAl1('a[href^="#"]').forEach (anchor => {
    anchor.addEventListener("click", function(e){
        // e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoview({
            behavior : "smooth"
        });
    });
});