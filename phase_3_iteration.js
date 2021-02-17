Array.prototype.bubbleSort = function(){
    sorted = false;
    
    while (!sorted) {
        sorted = true;
        this.forEach ((ele, index) => {
            if (this[index] > this[index + 1]) {
                let temp = this[index+1];
                this[index+1] = this[index];
                this[index] = temp;
                // this[index], this[index + 1] = this[index + 1], this[index]
                sorted = false;
            }
        }) 
    }
    return this;   
}

// console.log([1,5,4,6,3,8,10].bubbleSort())


// arr = []

// (0...string.length).each do |start_idx|
//     (start_idx...string.length).each do |end_idx|
//         arr << [string[start_idx]..string[end_idx]]
//         end
//         arr

String.prototype.substrings =  function() {
    let arr = [];
    for(i = 0; i <= this.length; i++) {
        for(j = i+1; j <= this.length; j++) {
            arr.push(this.slice(i,j))
        }
    }
    return arr;
}

console.log(("hello").substrings())