window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.cuartoArticle')
        .classList.add('show')
    }else{
        document.querySelector('.cuartoArticle')
        .classList.remove('show')
    }
}

document.querySelector('.cuartoArticle')
.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});