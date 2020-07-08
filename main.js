let body = document.querySelector('body')


let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        coin.state = Math.round(Math.random())
        // console.log(this.state)
        // return this.state
        
        },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return "Heads"
        } else if (this.state === 1) {
            return "Tails"
        }
    },
    toHTML: function() {
        let image = document.createElement('img');
        image.classList.add = 'image'
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) { 
            image.src = "./images/heads.png"
        } else if (this.state === 1) {
            image.src = "./images/tails.jpg"
        }
        return body.append(image);
    }
};
let result = []
let heading1 = document.createElement('h3')
heading1.append('20 FLIPS')
body.appendChild(heading1)
let solution1 = document.createElement('div')
body.appendChild(solution1)
function display20Flips() {
    for(i=0; i < 20; i++) {
        coin.flip()
        coin.toString()
        console.log(coin.toString())
        result.push(coin.toString())
    }
    solution1.append(result)
}
let heading2 = document.createElement('h3')
heading2.append('20 IMAGES')
body.appendChild(heading2)

function display20Images(){
    for(i=0; i < 20; i++) { 
        coin.flip()
        coin.toHTML()
    }
    heading2.append()
}
display20Flips()
display20Images()

