const userName =  document.querySelector("#userName")
const saveScoreBtn =  document.querySelector("#saveScoreBtn")
const finaleScore =  document.querySelector("#finaleScore")
const mostRecentScore =  localStorage.getItem("mostRecentScore")

const highScores =  JSON.parse(localStorage.getItem("highScores")) ||[]

const MAX_HIGH_SCORES  = 5

finaleScore.innerText = mostRecentScore
userName.addEventListener("keyup",()=> {
saveScoreBtn.disabled =!userName.value
} )

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: userName.value
    }

    highScores.push(score)

    highScores.sort((a,d)=>  {
        return blur.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.assign("/")
}