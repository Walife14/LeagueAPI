const leagueForm = document.querySelector('#leagueForm');
const leagueName = document.querySelector('#leagueName');
const leagueIcon = document.querySelector('.leagueIcon');
const summonerName = document.querySelector('.summoner-name');
const topChampionsImg = document.querySelectorAll('.top-champions-img')
const topChampionsName = document.querySelectorAll('.top-champions-name')

// League API Key
// RGAPI-f9ff2a32-4293-4871-bf55-fdf931162ebc

// Champion Square Assets
// http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Aatrox.png

// https://developer.riotgames.com/docs/lol#data-dragon_champions


leagueForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = leagueName.value;
    getSummoner(name);
})

const getSummoner = (summonerName) => {
    fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-f9ff2a32-4293-4871-bf55-fdf931162ebc`)
        .then(response => response.json())
        .then(data => {
            setInfo(data)

            return fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${data.id}?api_key=RGAPI-f9ff2a32-4293-4871-bf55-fdf931162ebc`)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch('There was a problem finding a summoner with that name')
}

const setInfo = (data) => {
    console.log(data)
    leagueIcon.src = `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${data.profileIconId}.png`
    summonerName.innerText = data.name
}

const setInfo2 = (data) => {

}