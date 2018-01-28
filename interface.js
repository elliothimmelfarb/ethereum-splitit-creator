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
    newInput.children[1].onclick = (e) => {
      this.removeInput(id)
    }
    this.inputsContainer.appendChild(newInput)
  }

  removeInput(id) {
    if (this.getInputCount() <= 2) return
    document.getElementById(id).remove()
    delete this.inputRoster[id]
  }

  initialRender() {
    console.log('inputsContainer:', this.inputsContainer)
    this.addNewInput()
  }

}

const interface = new Interface()

interface.initialRender()
