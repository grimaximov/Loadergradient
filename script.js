let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let persent = document.querySelector("span");
let count = 0;

inner.addEventListener('click', function() {

    let loading = setInterval(animate, 200);

    function animate() {
        if (count == 100) {
            clearInterval();
            outer.classList.remove('active-loader');

        } else {

            count++;
            persent.textContent = count + '%';
            outer.classList.add('active-loader');
        }



    }

});