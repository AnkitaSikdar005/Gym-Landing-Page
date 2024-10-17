
let btn = document.getElementById('btn');

btn.addEventListener('click', async (e)=>{

    e.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let locality = document.getElementById('locality').value;
    let phno = document.getElementById('phno').value;
    let email = document.getElementById('email').value;

    const response = await fetch('http://localhost:5000/api/v1/formdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, age, gender, locality, phno, email})
    })
    
    const data = await response.json()
    console.log(data)

})

