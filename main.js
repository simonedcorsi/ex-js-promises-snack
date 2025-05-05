/* SNACK 1 */
// Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(post => resolve(post.title))
            .catch(reject)
    });
}

getPostTitle(1)
    .then(title => console.log(`Titolo del post:`, title))
    .catch(err => console.error(err));



/* SNACK 2 */
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        console.log('Sto lanciando il dado...');
        setTimeout(() => {
            const incastrato = Math.random() < 0.2;
            if (incastrato) {
                reject("Il dado si è incastrato! Riprova.")
            } else {
                const risultato = Math.floor(Math.random() * 6) + 1;
                resolve(risultato);
            }
        }, 3000);
    });
}

lanciaDado()
    .then(risultato => console.log(`Il dado ha lanciato:`, risultato))
    .catch(err => console.error(err));