 function attachGradientEvents() {
     let gradientElement = document.getElementById('gradient')
     gradientElement.addEventListener('mousemove', gradientClicked)

     function gradientClicked(event) {
         let power = event.offsetX / (event.target.clientWidth - 1);

         let gradientElement = document.getElementById('gradient')
         power = Math.trunc(power * 100);

         document.getElementById('result').textContent = `${power}%`
     }
 }