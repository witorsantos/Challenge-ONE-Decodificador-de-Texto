
function Criptografar(){

    let textoCriptado = document.querySelector('textarea#digTexto')

    if(textoCriptado.value.length == ''){
        window.alert('[ERRO] dados não inseridos')
    }
    else{
        let resultadoCrip = textoCriptado.value.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')

        document.getElementById('res').innerHTML = '<textarea readonly style="margin-top:45%;" id="input" cols="30" rows="15">' + resultadoCrip + '</textarea>'

        let mensagem1 = document.querySelector('p.mensagen-lateral')
        let mensagem2 = document.querySelector('p.mensagen-lateral-2')
        let botaoCopia = document.querySelector('input.botao-copy')
        
        mensagem1.style.display = 'none'
        mensagem2.style.display = 'none'
        botaoCopia.style.display = 'block'
    }
}

function Descriptografar(){

    let textoCriptado = document.querySelector('textarea#digTexto')

    if(textoCriptado.value.length == ''){
        window.alert('[ERRO] dados não inseridos')
    }
    else{
        let resultadoCrip = textoCriptado.value.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')

        document.getElementById('res').innerHTML = '<textarea readonly style="margin-top:45%;" id="input" cols="30" rows="15">' + resultadoCrip + '</textarea>'

        let mensagem1 = document.querySelector('p.mensagen-lateral')
        let mensagem2 = document.querySelector('p.mensagen-lateral-2')
        let botaoCopia = document.querySelector('input.botao-copy')

        mensagem1.style.display = 'none'
        mensagem2.style.display = 'none'
        botaoCopia.style.display = 'block'
    }
}

function copy(){

	var texto = document.getElementById("input");

	texto.select();
	texto.setSelectionRange(0, 9999999999);
	document.execCommand("copy")
	alert("Texto copiado: " + texto.value)
}