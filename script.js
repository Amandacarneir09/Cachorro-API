const getImageBtn = document.getElementById('getImageBtn');
const dogImageDiv = document.getElementById('dogImage');

getImageBtn.addEventListener('click', () => {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY"
    });

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        .then(response => response.json())
        .then(result => {
            const imageUrl = result[0].url;
            dogImageDiv.innerHTML = `<img src="${imageUrl}" alt="Cão Aleatório">`;
        })
        .catch(error => {
            dogImageDiv.innerHTML = `<p>Houve um erro ao obter a imagem. Tente novamente!</p>`;
            console.log('Erro:', error);
        });
});
