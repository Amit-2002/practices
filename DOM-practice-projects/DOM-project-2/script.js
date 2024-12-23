            // selecting main & all elements those have class 'btn'
const main = document.querySelector('main')
// console.log(body)
const buttons = document.querySelectorAll('.btn')  // it is an object of elements those have class 'btn'
// console.log(typeof buttons)


                // forEach method is used to access elements & operations are performed by callback function and 'addEventListener' methods 
buttons.forEach(function(btn){
    // console.log(btn)
    btn.addEventListener('click', function(e){   // 'click' is event type & another parameter is callback function(event handller) which will be executed when event is occurs. 'e' is a placeholder which automatically contains whole information of event.
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.id)

        if (e.target.id === 'red'){
            main.style.backgroundColor = 'red';
        }
        if (e.target.id === 'green'){
            main.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue'){
            main.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellowgreen'){
            main.style.backgroundColor = e.target.id
        }
    })
})