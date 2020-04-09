function klk(){
    
}

var provincias = [
    { name: 'Monte Cristi', cConfim: '4', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Dajabón', cConfim: '1', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Elias Piña', cConfim: '0', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Independencia', cConfim: '1', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Pedernales', cConfim: '1', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Puerto Plata', cConfim: '52', deaths: '1', recup: '0', totalDesc: '2349' },
    { name: 'Valverde', cConfim: '11', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Santiago Rodríguez', cConfim: '7', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Santiago de los caballeros', cConfim: '309', deaths: '8', recup: '0', totalDesc: '2349' },
    { name: 'San Juan', cConfim: '14', deaths: '3', recup: '0', totalDesc: '2349' },
    { name: 'Bahoruco', cConfim: '1', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Barahona', cConfim: '12', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Espaillat', cConfim: '60', deaths: '1', recup: '0', totalDesc: '2349' },
    { name: 'La Vega', cConfim: '126', deaths: '6', recup: '0', totalDesc: '2349' },
    { name: 'Azua', cConfim: '10', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Hermanas Mirabal', cConfim: '35', deaths: '2', recup: '0', totalDesc: '2349' },
    { name: 'María Trinidad Sánchez', cConfim: '26', deaths: '1', recup: '0', totalDesc: '2349' },
    { name: 'Duarte', cConfim: '196', deaths: '40', recup: '0', totalDesc: '2349' },
    { name: 'Sánchez Ramírez', cConfim: '42', deaths: '4', recup: '0', totalDesc: '2349' },
    { name: 'Monseñor Nouel', cConfim: '53', deaths: '3', recup: '0', totalDesc: '2349' },
    { name: 'San José de Ocoa', cConfim: '0', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'Peravia', cConfim: '13', deaths: '1', recup: '0', totalDesc: '2349' },
    { name: 'Samaná', cConfim: '15', deaths: '1', recup: '0', totalDesc: '2349' },
    { name: 'Monte Plata', cConfim: '4', deaths: '2', recup: '0', totalDesc: '2349' },
    { name: 'San Cristóbal', cConfim: '45', deaths: '1', recup: '0', totalDesc: '2349' },
    { name: 'Santo Domingo', cConfim: '389', deaths: '19', recup: '0', totalDesc: '2349' },
    { name: 'Distrito Nacional', cConfim: '800', deaths: '18', recup: '0', totalDesc: '2349' },
    { name: 'Hato Mayor', cConfim: '5', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'San Pedro de Macorís', cConfim: '26', deaths: '4', recup: '0', totalDesc: '2349' },
    { name: 'El Seibo', cConfim: '2', deaths: '0', recup: '0', totalDesc: '2349' },
    { name: 'La Romana', cConfim: '38', deaths: '1', recup: '0', totalDesc: '2349' },
    { name: 'La Altagracia', cConfim: '48', deaths: '1', recup: '0', totalDesc: '2349' }
  ];


function cargar() {
    
      var id, index;
      var child = document.getElementById('rd-map').children;
  
      for(let i = 0; i < child.length; i++){
        child[i].addEventListener('click', (element) => {
          id = document.getElementById('rd-map').children[i].id;
          index = provincias.findIndex((element) => element.name === id);
          document.getElementById('pName').value = provincias[index].name;

      var provincia = provincias[index].name;
       var  confirmado = provincias[index].cConfim ;
       var  muerte = provincias[index].deaths;
       var  recuperado = provincias[index].recup;
       var  total = provincias[index].totalDesc;


  var texto =" hay "+confirmado+" personas confirmado " + muerte+"personas muerta "+"y "+recuperado+"personas recuperadas , En la provincia de"+provincia + "para un total a nivel nacional de "+total+"casos confirmado" ;


       speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   

          document.getElementById('Confim').innerHTML = provincias[index].cConfim;
          document.getElementById('deaths').innerHTML = provincias[index].deaths;
          document.getElementById('recup').innerHTML = provincias[index].recup;
          document.getElementById('totalDesc').innerHTML = provincias[index].totalDesc;
          for(let j = 0; j < child.length; j++){
            child[j].style.fill = 'rgb(124, 124, 124)';
          }
          child[i].style.fill = '#ccc';
  
          /* = provArr.cConfim;
          document.getElementById('deaths').value = provArr.deaths;
          document.getElementById('recup').value = provArr.recup;
          document.getElementById('totalDesc').value = provArr.totalDesc;*/
        });
      }
  }
 

 