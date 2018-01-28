function shortid() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

class Interface {
  constructor() {
    this.inputTemplate = document.getElementById('address-input-template')
    this.inputsContainer = document.getElementById('inputs-container')
    this.inputRoster = {}
  }

  getInputCount() {
    return Object.keys(this.inputRoster).length
  }

  addNewInput() {
    if (this.getInputCount() >= 10) return
    const id = shortid()
    this.inputRoster[id] = id
    const newInput = this.inputTemplate.cloneNode(true)
    newInput.id = id
    newInput.children[0].children[0].classList.add('address')
    newInput.children[0].children[0].id = `address-${id}`
    newInput.children[0].children[1].setAttribute('for', `address-${id}`)
    newInput.children[1].onclick = (e) => {
      this.removeInput(id)
    }
    this.inputsContainer.appendChild(newInput)
  }

  removeInput(id) {
    if (this.getInputCount() <= 2) return
    const input = document.getElementById(id)
    input.classList.add('fade-out')
    window.setTimeout(() => input.remove(), 250)
    delete this.inputRoster[id]
  }

  getAddresses() {
    const addresses = []
    document.querySelectorAll('.address').forEach(e => {
      addresses.push(e.value)
    })
    return addresses
  }

  initialRender() {
    this.addNewInput()
    this.addNewInput()
  }
}

const interface = new Interface()

interface.initialRender()
