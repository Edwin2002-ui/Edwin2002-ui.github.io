const boton_si = document.querySelector('#boton_si');

boton_si.addEventListener('click', function () {
    alert('Ya lo sabia corazon')
 });

 const boton_no = document.querySelector('#boton_no');

 boton_no.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    boton_no.style.setProperty('top',randomY+'%');
    boton_no.style.setProperty('left',randomX+'%');
    boton_no.style.setProperty('transform',`traslate(-${randomX}%,-${randomY}%)`);
    
 })