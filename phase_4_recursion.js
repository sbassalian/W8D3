// base case: start = end
// 

function range(start, end) {
    if (start === end) {
        return end;
    }

    let arr = []
    arr.push(end)
    range(start, end-1)
    return arr
}

console.log(range(3, 8) ())

