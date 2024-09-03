const seededRandom = function (seed: number) {
    let m = 2 ** 35 - 31
    let a = 185852
    let s = seed % m
    return function () {
        return (s = (s * a) % m) / m
    }
}

const fetchAPI = function (date: Date): Promise<string[]> {
    let result = []
    let random = seededRandom(date.getDate())

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00")
        }
        if (random() < 0.5) {
            result.push(i + ":30")
        }
    }
    return Promise.resolve(result)
}
const submitAPI = function (data: any): Promise<boolean> {
    console.log(data)
    return Promise.resolve(true)
}

export { fetchAPI, submitAPI }
