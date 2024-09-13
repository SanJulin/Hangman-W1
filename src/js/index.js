/* import Game from "./Game" */

/* const Game = new Game() */
/* eslint-disable jsdoc/require-description */

/**
 *
 */
class Game {
  #word
  #numberOfChars
  #underline
  #message
  /**
   *
   */
  constructor () {
    this.#word = 'world'
    this.#message = document.querySelector('#message')
    const button = document.querySelector('#button')
    this.#underline = document.querySelector('#underline')
    this.#underline.textContent = '_ _ _ _ _'

    button.addEventListener('click', () => {
      this.#checkWord()
    })

    this.#numberOfChars = this.#word.length
    console.log(this.#numberOfChars)
  }

  /**
   *
   */
  #checkWord () {
    this.#message.textContent = ''
    const word = document.querySelector('#input').value
    let correctChars = 0
    console.log(word)
    console.log(this.#word)
    if (this.#word === word) {
      this.#message.textContent = 'Congratulations! You managed to figure out the correct word'
      return
    } else {
      for (let i = 0; i < word.length; i++) {
        console.log(word[i])
        for (let j = 0; j < this.#word.length; j++) {
          console.log(this.#word[j])
          if (word[i] === this.#word[j]) {
            correctChars += 1
            console.log(correctChars)
          }
        }
      }
    }
    this.#message.textContent = `you have ${correctChars} correct charachters`
  }
}

export default Game
const gameInstance = new Game()
