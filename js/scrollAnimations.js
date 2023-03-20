const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show1');
        }else{
            entry.target.classList.remove('show1');
        }
    })
})
const hiddenElements1 = document.querySelectorAll('.hid1');
hiddenElements1.forEach((el) => observer1.observe(el));

const observerE = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('showE');
            document.getElementById("imgExtra").classList.add('showExtra')
        }else{
            entry.target.classList.remove('showE');
            document.getElementById("imgExtra").classList.remove('showExtra')
        }
    })
})
const hiddenElementsE = document.querySelectorAll('.hiddenE');
hiddenElementsE.forEach((el) => observerE.observe(el));