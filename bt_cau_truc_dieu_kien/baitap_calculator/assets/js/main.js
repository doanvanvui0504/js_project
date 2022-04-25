const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btns = $$('button');
const result = $('.result');

for(let btn of btns) {
    btn.addEventListener('click', function() {
        result.innerHTML += this.value;
        console.log(this.value);
    });
}

const del = $('.del');

del.onclick = () => {
    result.innerHTML = ''; 
};

const equal = $('.equal');

equal.onclick = () => {
    let res = result.innerHTML;
    let output = Function("return " + res)
    result.innerHTML = output();
}