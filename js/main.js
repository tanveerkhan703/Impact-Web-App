document.documentElement.style.setProperty('--animate-duration', '3s');

// Incrementing Counter 


const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
         
        const c = +counter.innerText


        const increment = target / 600

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`

            setTimeout(updateCounter, 1)
        } else{
            counter.innerText = target
        }

    }
    updateCounter()
})
// Ended

// Scroll To Top Function

const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})
