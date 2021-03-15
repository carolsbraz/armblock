//var btn = document.getElementById('btn-login')
//
//btn.addEventListener('click', () => {
//    var senha = document.getElementById('usersenha').value
//    var email = document.getElementById('useremail').value
//    var erro = document.getElementById('length-error')
//    console.log(senha.length)
//    if (senha.length < 6) {
//        erro.innerHTML = 'A senha precisa ter no mínimo 6 dígitos.'
//        erro.style.display = 'inline'
//    } else if (email.length == 0 || senha.length == 0) {
//        erro.innerHTML = 'Por favor, preencha os campos acima.'
//        erro.style.display = 'inline'
//    } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
//        erro.innerHTML = 'Por favor, insira um email válido.'
//        erro.style.display = 'inline'
//    } else {
//        var form = document.getElementById('dados');
//        form.action = "/autenticar-user";
//        form.submit();
//    }
//})