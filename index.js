function safe(f) {
    try {
        return Ok(f())
    }
    catch (err) {
        return Err(err)
    }
}

async function async_safe(promise) {
    return await promise
        .then(Ok)
        .catch(Err)
}

const Good = (value) => value.err === undefined
const Err = (err) => ({ err })
const Ok = (ok) => ({ ok })

// const wat = () => {
//     throw new Error("wat")
// }
// const wait = (time) => new Promise(
//     (resolve) => setTimeout(resolve, time)
// )
// async function test() {
//     await wait(1000)
//     throw new Error("hi")
// }

// async function main() {
//     const res = await async_safe(test())
//     const r2 = safe(wat)

//     console.log(res)
//     console.log(r2)
//     console.log(Good(res))
//     console.log(Good(r2))
// }

// main()

exports.Err = Err
exports.Ok = Ok
exports.Good = Good
exports.safe = safe
exports.async_safe = async_safe
