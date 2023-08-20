async function buscaEndereco() {
    var consultaCEP = await fetch('https://viacep.com.br/ws/60811110/json/');
    var consultaCEPConvertida = await consultaCEP.json();
    console.log(consultaCEPConvertida);
}

buscaEndereco();