function verificar(){
      var data = new Date()
      var ano = data.getFullYear()
      var fano = document.querySelector('txtano')
      var res = document.getElementById('div#res')
      if(fano.value.length == 0 || number(fano.value) > ano) {
           alert('Tente novamente')
      } else{
           alert('Tudo OK')
      }
}