let body = document.querySelector("body")
function submitData (name, email) {
    const data = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        }),
    }
    return fetch('http://localhost:3000/users', data)
    .then(resp => resp.json())
    .then((obj) => {
        let div = document.createElement('div')
        div.textContent = obj.id
        body.appendChild(div)
    })
    .catch((error)=> {
        let h1 = document.createElement('h1')
        h1.textContent = error.message
        body.appendChild(h1)
    })
}



