function shortid() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

class Interface {
  constructor() {
    this.inputRoster = {}
    this.inputTemplate = document.getElementById('address-input-template')
    this.inputsContainer = document.getElementById('inputs-container')
    this.helpModal = $('#help-modal')
    this.deployModal = $('#deploy-modal')
    this.reviewArea = document.getElementById('review-area')
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
    newInput.children[0].children[0].oninput = (e) => {
      console.log(e)
      if (this.validateAddress(e.target.value)) {
        e.target.classList.replace('invalid', 'valid')
        newInput.children[0].children[1].style.color = 'green'
        newInput.children[0].children[1].children[0].innerHTML = 'check'
      } else {
        e.target.classList.add('valid', 'invalid')
        newInput.children[0].children[1].style.color = 'red'
        newInput.children[0].children[1].children[0].innerHTML = 'close'
      }
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
    return addresses.filter(a => a.length)
  }

  openHelp() {
    this.helpModal.modal('open')
  }

  deploy(contractCode) {
    this.deployModal.modal('open')
    this.reviewArea.innerHTML = contractCode
  }

  validateAddress(address) {
    console.log(address)
    return web3.isAddress(address)
  }

  initialRender() {
    this.addNewInput()
    this.addNewInput()
    $(document).ready(() => {
      this.deployModal.modal()
      this.helpModal.modal()
      window.setTimeout(() => this.helpModal.modal('open'), 500)
    })
  }
}

const interface = new Interface()

interface.initialRender()
