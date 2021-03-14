comecar = function() {
    const email = document.getElementById('user-email').value
    console.log(email)
    const senha = document.getElementById('user-senha').value
    console.log(senha)
    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((user) => {
            console.log(`Logado: ${user.uid}`);
        })
        .catch((error) => {
            if (error.code == 'auth/user-not-found') {
                firebase.auth().createUserWithEmailAndPassword(email, senha)
                    .then((user) => {
                        console.log(`Logado: ${user.uid}`);
                    })
                    .catch((error) => {
                        console.log(error.message)
                    });
            }
        });
}

const login = document.getElementById('btn-login')

login.addEventListener('click', () => {
    comecar()
})