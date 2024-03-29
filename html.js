function attributes(attr) {
    let result = ""

    for (let X in attr) {
        result += `${X}="${attr[X]}"`
    }

    return result
}

function table(innards, attr={}) {
    return `<table ${this.attributes(attr)}>${innards}</table>`
}

function tr(innards, attr={}) {
    return `<tr ${this.attributes(attr)}>${innards}</tr>`
}

function td(innards, attr={}) {
    return `<td ${this.attributes(attr)}>${innards}</td>`
}

function button(innards, attr={}) {
    return `<button ${this.attributes(attr)}>${innards}</button>`
}
