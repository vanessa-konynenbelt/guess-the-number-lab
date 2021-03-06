const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  guess: null,
  prevGuesses: [],

  getBounds: function() {
    this.biggestNum = parseInt(prompt(`Enter your choice for an upper limit`))
    this.smallestNum = parseInt(prompt(`Enter your choice for a  lower limit`))
    if(this.biggestNum < this.smallestNum){
      alert(`Oh no! Your lower bound is greater than your upper bound! Please reselect bounds. :)`) 
      this.getBounds()
    }
    if(this.biggestNum === this.smallestNum){
      alert(`Ooof. Single value range? I DON'T THINK SO COWBOY. Please reselect bounds`)
      this.getBounds()
    }
    
  },

  getNum: function() { 
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum 
  }, 

  getGuess: function() {
    this.guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`)) //get input from player

    if(this.guess !== NaN && this.guess >= this.smallestNum && this.guess <= this.biggestNum){
      this.prevGuesses.push(this.guess) //check if valid -> push onto prevGuesses
    }  
    else{
      alert(`Hmm.. looks like ${this.guess} isn't in the specified range. Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`) 
    }
  },
  
  render: function(){
    let dir = null
    if(this.guess === this.secretNum){ //correct guess! 
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses! Way to go!`)
      return 
    }
    else{
      if(this.guess >= this.smallestNum && this.guess <= this.biggestNum){ //in range
        if(this.guess < this.secretNum){
          this.smallestNum = this.guess 
          dir = 'low'
        }
        if(this.guess > this.secretNum){
          this.biggestNum = this.guess
          dir = 'high'
        }
        alert(`Too ${dir}! Try guessing between ${this.smallestNum} and ${this.biggestNum}. Previous guesses are: ${this.prevGuesses.join('  ')}`)
      }
    }
  },

    play: function() {
     this.getBounds() 
     this.getNum()
      do{ 
        this.getGuess()
        this.render()
      }while(this.guess !== this.secretNum)
  }
}

game.play()
