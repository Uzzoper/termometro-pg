const apiKey = "***REMOVED***"
const cityId = "3453186"
const url = `https://api.openweathermap.org/data/2.5/weather?id=3453186&appid=***REMOVED***&units=metric&lang=pt_br`

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