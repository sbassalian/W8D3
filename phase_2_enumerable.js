Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++){
        const ele = this[i];
        callback(ele)
    }
}

// const cb = function (num){
//     console.log(`this is the number ${num}`)
// }

// const ab = function (num) {
//     console.log(`I hate this number ${num*2}`)
// }

// console.log([1, 2, 3].myEach(cb))
// console.log([1, 2, 3].myEach(ab))





Array.prototype.myMap = function(callback) {
    let arr = []

    // this.myEach ((el)=>{
    //     arr.push(callback(el))
    // })
    
    const newFunction = function(el) {
        arr.push(callback(el))
    }
    this.myEach(newFunction)

    return arr
}
// myeach
const cb = function (ele) {
    // console.log(`${ele*2}`) --> cant use console.log here because in line 26 arr couldnt push in the second value of 'undefined'
    return ele * 2
}

console.log([1,2,3].myMap(cb))


Array.prototype.myReduce = function(callback, acc = null) {
    if (acc == 0) {
       acc = this.shift
    }

    // acc = acc || this.shift()
    // if (!acc) {acc = this.shift()};

     


    this.myEach ((el)=>{
        acc = callback(acc, el)
    })
    return acc
}

const cb = function(acc, ele){
    return acc + ele 
}

console.log([1,2,3].myReduce(cb))



