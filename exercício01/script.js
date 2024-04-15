function verificar(){
      var data = new Date()
      var ano = data.getFullYear()
      var fano = document.querySelector('txtano')
      var res = document.getElementById('div#res')
      if(fano == 0 || fano > ano) {
           alert('Tente novamente')
      } else{
           alert('Tudo OK')
      }
}