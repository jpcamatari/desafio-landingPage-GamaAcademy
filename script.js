const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  let nome = document.getElementById('nome').Value
  let email = document.getElementById('email').Value
  let data = {
    nome,
    email
  }
  let convertData = JSON.stringify(data)

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>Carregando</p>`

  content.innerHTML
})
