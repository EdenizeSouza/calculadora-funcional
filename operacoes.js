let displayValue = ''

function appendToDisplay(value) {
    displayValue += value
    document.getElementById('display').value = displayValue
}

function clearToDisplay() {
    displayValue = ''
    document.getElementById('display').value = displayValue
}

function calculate() {
    try {
        
        console.log('display',displayValue)
        const result = eval(displayValue)
        console.log('Result',result)
        document.getElementById('display').value = result
        
        displayValue = result.toString() 
        console.log('displayValue',displayValue)
        
    }catch (error){
        
        console.log(error)
        document.getElementById('display').value = 'Erro'

    }
}