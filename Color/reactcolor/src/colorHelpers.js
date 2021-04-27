import chroma from "chroma-js"

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starter) {
    let palette = {
        paletteName: starter.paletteName,
        id: starter.id,
        emoji: starter.emoji,
        colors: {}
    }

    for (let level of levels) {
        palette.colors[level] = [];
    }

    for (let color of starter.colors) {
        let scale = generateScale(color.color, 10).reverse()
        for (let s in scale) {
            palette.colors[levels[s]].push({
                name: `${color.name} ${levels[s]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[s],
                rgb: chroma(scale[s]).css(),
                rgba: chroma(scale[s]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }
    return palette
}

function range(hex) {
    const end = '#FFF';
    return [
        chroma(hex).darken(1.4).hex(),
        hex,
        end
    ]
}

function generateScale(hex, numberOfColors) {
    return chroma
        .scale(range(hex))
        .mode("lab")
        .colors(numberOfColors)
}

export { generatePalette };