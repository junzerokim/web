let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
  integer += 1;
  int.innerHTML = integer;
})

remove.addEventListener('click', function(){
  integer -= 1;
  int.innerHTML = integer;
})

reset.addEventListener('click', function(){
  integer *= 0;
  int.innerHTML = integer;
})