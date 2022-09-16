fetch('http://localhost:4000/user')
    .then(res => res.json())
    .then(data => document.write(JSON.stringify(data)));