Array.prototype.uniq = function() {
    let arr = []
    this.forEach ((ele) => {  
        if (!arr.includes(ele)) {
            arr.push(ele)
        }  
    })
    return arr
}

// console.log([1,2,2,3,3,3].uniq())

// iterate through the array w/ indexes also
    // nested loop
// let arr = []
// if  ele1 + ele 2 == 0
    // push in arr of indexes

Array.prototype.twoSum = function() {
    let arr = []
    this.forEach ((ele1, index1) => {
        this.forEach((ele2, index2) => {
            if ((index2 > index1) && ((ele1 + ele2) === 0 )){
                arr.push([index1, index2])
            }
        })
    })
    return arr
}

// console.log([1,3,-1,4,-3].twoSum())

// [[1,2,3],[4,5,6],[7,8,9]] => [[1,4,7],[2,5,8],[3,6,9]]

Array.prototype.transpose = function () {
    let arr = []
    for(let i = 0; i < this.length; i++) {
        arr.push([])
    }

    this.forEach ((row) => {
        for (var j = 0; j < this.length; j++) {
            arr[j].push(row[j])
        }
    })
    return arr
}

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose())


