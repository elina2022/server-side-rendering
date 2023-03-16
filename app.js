import express from "express"
import fs from "fs"
const app = express()
app.listen(8000)
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log("Request made on following url: " + req.url)
    next()
})

let data
let getData = pathApi => JSON.parse(fs.readFileSync('./public/api/' + pathApi + '.json').toString())

try {
    const data1 = getData("game/943")
    const data2 = getData("game/943/statistics")
    const players = getData("facts/players-extra")
    // const player1 = getData("facts/Player/8602")
    // const player2 = getData("facts/Player/8607")
    // const player3 = getData("facts/Player/17373")
    data = Object.assign({}, data1, data2, players)
    console.log(data) 
} catch (err) {
    console.error(err) 
}

app.get('/', async (req, res) => {
    res.render('index', data)
})

app.use((req, res) => {
    res.status(404).render("404")
})




// let jsonData1
// let jsonData2
// try {
//     const data1 = fs.readFileSync('./public/api/game/943.json')
//     jsonData1 = JSON.parse(data1.toString())
//     console.log(jsonData1)
    
//     const data2 = fs.readFileSync('./public/api/game/943/statistics.json')
//     jsonData2 = JSON.parse(data2.toString())
//     console.log(jsonData2)
// } catch (err) {
//     console.error(err);
// }



// && fs.existsSync("/api/facts/Player/" + player.playerId + ".json")