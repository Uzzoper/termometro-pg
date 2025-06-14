const url = '/api/weather'

fetch(url)
    .then(res => res.json())
    .then(dados => {
        const temperatura = Math.round(dados.main.temp)
        document.getElementById('temperatura').textContent = `${temperatura} °C`

        const sensacao = Math.round(dados.main.feels_like)
        document.getElementById('sensacao').textContent = `${sensacao} °C`

        const giria = temperatura <= 15
            ? "Frio do djanho!"
            : temperatura <= 25
            ? "Nem frio nem quente!"
            : "Esquentou né, jaguara!"
        document.getElementById('descricao').textContent = giria
    })
    .catch(erro => {
        console.error('Erro ao buscar clima: ', erro);
        document.getElementById('temperatura').textContent = 'Erro'
        document.getElementById('descricao').textContent = 'Não deu pra saber o tempo!'
    })