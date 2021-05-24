export class CounterJS {
  constructor () {
    this.number = 0
  }

  render () {
    const container = document.createElement('div')

    const h1 = document.createElement('h1')
    h1.innerText = this.number

    const button = document.createElement('button')
    button.innerText = '+'

    button.addEventListener(
      'click',
      () => {
        this.number = this.number + 1
      }
    )

    container.appendChild(h1)
    container.appendChild(button)

    return container
  }
}

export default CounterJS
