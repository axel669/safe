const {Err, safe, Ok} = require("./index")

const f = () => {
    // throw new Error("wat")
    return "wat"
    // return Ok("wat")
    // return Err("wat")
}

console.time("speed")
for (let i = 0; i < 10000; i += 1) {
    // safe(f)
    f()
}
console.timeEnd("speed")
