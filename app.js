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
try {
    const data1 = JSON.parse(fs.readFileSync('./public/api/game/943.json').toString())
    const data2 = JSON.parse(fs.readFileSync('./public/api/game/943/statistics.json').toString())   
    // const stats = JSON.parse(fs.readFileSync('./public/js-stats/calculate-stats.js').toString())   
    console.log(data1)
    console.log(data2) 
    // console.log(stats)

    data = Object.assign({}, data1, data2)
    // console.log(data) 
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