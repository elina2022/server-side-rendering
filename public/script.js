const $ = element => document.querySelector(element)
const $all = element => document.querySelectorAll(element)
const click = (element, fun) => element.addEventListener("click", fun)

const points = $("#points")
const stats = $("#stats")
const config = $("#config")
const player = $all("#player")

const points_block = $("#points_block")
const stats_block = $("#stats_block")
const config_block = $("#config_block")
const player_block = $all("#player_block")
const all_blocks = $all(".all_blocks")

click(points, () => show_block(points_block))
click(stats, () => show_block(stats_block))
click(config, () => show_block(config_block))
for (let i = 0; i < player.length; i++) {
    click(player[i], () => show_block(player_block[i]))
}

let show_block = (current_block) => {
    all_blocks.forEach(block => {
        if (block !== current_block) {
            block.style.display = "none"
        }
    })
    current_block.style.display = "block"
}

const checkbox_player_stats = $("#checkbox_player_stats")
const checkbox_legend = $("#checkbox_legend")
const player_stats = $all("#player_stats")
const legend = $(".container-legend")
const table_without_legend = $(".container-table-score")

click(checkbox_player_stats, ("click", () => {
    player_stats.forEach(player => {
        if (checkbox_player_stats.checked === true) {
            player.style.display = "table-cell"
        } else {
            player.style.display = "none"
        }
    })
})
)

click(checkbox_legend, ("click", () => {
    if (checkbox_legend.checked === true) {
        legend.style.display = "block"
        table_without_legend.style.height = "87%"
    } else {
        legend.style.display = "none"
        table_without_legend.style.height = "100%"
    }
})
)