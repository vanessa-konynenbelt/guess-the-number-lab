console.log('check')
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: 8,
  guess: null,
  prevGuesses: [],

  getGuess: function() {
    this.guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`))

    if(this.guess !== NaN && this.guess > this.smallestNum && this.guess < this.biggestNum){
      this.prevGuesses.push(this.guess)
    }  
    else{
      alert(`Hmm.. looks like ${this.guess} isn't in the range. Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`)
    }
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do{
        this.getGuess()
        this.render()
      }while(this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum)
  },
  render: function(){
    let dir = null
    if(this.guess === this.secretNum){
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses! Way to go!`)
      return 
    }
    else{
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
}

game.play()
