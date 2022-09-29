const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("atendimento:transactions")) || []
    },

    set(transactions) {
        localStorage.setItem("atendimento:transactions", JSON.stringify(transactions))
    } 
}

const transactions = [
    {
        id: 1,
        nomeFuncionario: 'Nome do Paciente',
        date: '10/08/2022',
    },
    {
        id: 2,
        nomeFuncionario: 'Nome do Paciente',
        date: '08/04/2021',
    },
    {
        id: 3,
        nomeFuncionario: 'Nome do Paciente',
        date: '15/9/2021',
    },
]

const Transaction = {
 all: Storage.get(),
 /*[
    {
        id: 1,
        nomeFuncionario: 'Nome do Paciente',
        date: '10/08/2022',
    },
    {
        id: 2,
        nomeFuncionario: 'Nome do Paciente',
        date: '08/06/2022',
    },
    {
        id: 3,
        nomeFuncionario: 'Nome do Paciente',
        date: '15/9/2021',
    },
],*/

 add(transaction){
     Transaction.all.push(transaction)
     App.reload()
 },
 
 asoAtual(index){
     document.querySelector(".selected", index, 1)
 },
 
 preencheAso(){
     var text = document.querySelector(".data-index") 
 },
 
 remove(index) {
     if(confirm('Deseja realmente deletar o registro numero' +' '+index+'?')){
         Transaction.all.splice(index, 1)
         App.reload()
        }
    }
    
}

const aso = {
}
console.log(aso)


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
        tr.classList.add('selected')
        tr.dataset.index = index

        DOM.transactionsContainer.appendChild(tr)
        
    },
    innerHTMLTransaction(transaction, index) {

        const html = `
            <td>${index}</td>
            <td>${transaction.nomePaciente}</td>
            <td>${transaction.date}</td>
            <td>${transaction.tipoExame}</td>
            <td>${transaction.cpf}</td>
            <td>${transaction.rg}</td>
            <td>${transaction.nascimento}</td>
            <td>${transaction.riscoFisico}</td>
            <td>${transaction.riscoAcidente}</td>
            <td>${transaction.exame1}</td>
            <td>${transaction.dateExame1}</td>
            <td>${transaction.exame2}</td>
            <td>${transaction.dateExame2}</td>
            <td>${transaction.exame3}</td>
            <td>${transaction.dateExame3}</td>
            <td>${transaction.exame4}</td>
            <td>${transaction.dateExame4}</td>
            <td>${transaction.exame5}</td>
            <td>${transaction.dateExame5}</td>

            <td>${transaction.medico}</td>
            <td>${transaction.observacao}</td>

            <td>
                <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover Atendimento">
            </td>

            <td>
                <a onclick="Transaction.aso(${index})" href="aso.html" target="blank"><img src="./assets/send.svg" alt="imprimir aso"></a>
            </td>

        `

        return html
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatDate(date) {
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    }
}



const Form = {
    /*id: document.querySelector('input#id'),*/
    nomePaciente: document.querySelector('input#Paciente'),
    date: document.querySelector('input#date'),
    tipoExame: document.querySelector('input#tipoExame'),
    cpf: document.querySelector('input#cpf'),
    RG: document.querySelector('input#rg'),
    nascimento: document.querySelector('input#nascimento'),
    riscoFisico: document.querySelector('input#riscoFisico'),
    riscoAcidente: document.querySelector('input#riscoAcidente'),
    
    /* EXAMES 1*/

    exame1: document.querySelector('input#exame1'),
    dateExame1: document.querySelector('input#dateExame1'),
    exame2: document.querySelector('input#exame2'),
    dateExame2: document.querySelector('input#dateExame2'),
    exame3: document.querySelector('input#exame3'),
    dateExame3: document.querySelector('input#dateExame3'),
    exame4: document.querySelector('input#exame4'),
    dateExame4: document.querySelector('input#dateExame4'),
    exame5: document.querySelector('input#exame5'),
    dateExame5: document.querySelector('input#dateExame5'),
    

    /* DIVIDER EXAMES 1*/

    aptidao: document.querySelector('input#aptidao'),
    medicoCoordenador: document.querySelector('input#medicoCoordenador'),
    observacao: document.querySelector('input#observacao'),

    getValues() {
        return {
            nomePaciente: Form.nomePaciente.value,
            date: Form.date.value,
            tipoExame: Form.tipoExame.value,
            cpf: Form.cpf.value,
            rg: Form.rg.value,
            nascimento: Form.nascimento.value,
            riscoFisico: Form.riscoFisico.value,
            riscoAcidente: Form.riscoAcidente.value,

            exame1: Form.exame1.value,
            dateExame1: Form.dateExame1.value,
            exame2: Form.exame2.value,
            dateExame2: Form.dateExame2.value,
            exame3: Form.exame3.value,
            dateExame3: Form.dateExame3.value,
            exame4: Form.exame4.value,
            dateExame4: Form.dateExame4.value,
            exame5: Form.exame5.value,
            dateExame5: Form.dateExame5.value,


            aptidao: Form.aptidao.value,
            medicoCoordenador: Form.medicoCoordenador.value,
            observacao: Form.observacao.value,
        }
    },
    
   formatData() {

    },

    validateFields() {
       const {nomePaciente, date, tipoExame, cpf, rg, nascimento, riscoFisico,
       riscoAcidente, exame1, dateExame1, exame2, dateExame2, exame3, dateExame3, exame4, dateExame4, exame5, dateExame5, aptidao, medicoCoordenador, observacao} = Form.getValues()

       

       nomePaciente.trim() ==="" ||
       date.trim() ==="" ||
       tipoExame.trim() ==="" ||
       cpf.trim() ==="" ||
       rg.trim() ==="" ||
       nascimento.trim() ==="" ||
       riscoFisico.trim() ==="" ||
       riscoAcidente.trim() ==="" ||
       exame1.trim() ==="" ||
       dateExame1.trim() ==="" ||
       exame2.trim() ==="" ||
       dateExame2.trim() ==="" ||
       exame3.trim() ==="" ||
       dateExame3.trim() ==="" ||
       exame4.trim() ==="" ||
       dateExame4.trim() ==="" ||
       exame5.trim() ==="" ||
       dateExame5.trim() ==="" ||
       

       aptidao.trim() ==="" ||
       medicoCoordenador.trim() ==="" ||
       observacao.trim() ==="" ||
        {
       }
    },

    formatValues() {
        console.log(Form.getValues())       

        let {nomePaciente, date, tipoExame, cpf, rg, nascimento, riscoFisico,
        riscoAcidente, exame1, dateExame1, exame2, dateExame2, exame3, dateExame3, exame4, dateExame4, exame5, dateExame5, aptidao, medicoCoordenador, observacao,} = Form.getValues()

        date = Utils.formatDate(date)
        nascimento = Utils.formatDate(nascimento)
        

        return {
            nomePaciente,
            date,
            tipoExame,
            cpf,
            rg,
            nascimento,
            riscoFisico,
            riscoAcidente,
            exame1,
            dateExame1,
            exame2,
            dateExame2,
            exame3,
            dateExame3,
            exame4,
            dateExame4,
            exame5,
            dateExame5,

            aptidao,
            medicoCoordenador,
            observacao,
        }
    },

    saveTransaction(transaction) {
        Transaction.add(transaction)
    },

    clearFields() {
        Form.nomePaciente.value = ""
        Form.date.value = ""
        Form.tipoExame.value = ""
        Form.cpf.value = ""
        Form.rg.value = ""
        Form.nascimento.value = ""
        Form.riscoFisico.value = ""
        Form.riscoAcidente.value = ""
        Form.exame1.value = ""
        Form.dateExame1.value = ""
        Form.exame2.value = ""
        Form.dateExame2.value = ""
        Form.exame3.value = ""
        Form.dateExame3.value = ""
        Form.exame4.value = ""
        Form.dateExame4.value = ""
        Form.exame5.value = ""
        Form.dateExame5.value = ""

        Form.aptidao.value = ""
        Form.medicoCoordenador.value = ""
        Form.observacao.value = ""

    },


    submit(event) {
        event.preventDefault()

        try {
           //verificar se os campos sao validos
        Form.validateFields()
           //pegar transacao formatada
        const transaction = Form.formatValues()
           //adicionar transação 
        Form.saveTransaction(transaction)
           //limpar formulario 
        Form.clearFields()
           //fechar formulario
        Modal.close()

        } catch (error) {
            alert(error.message)
        }



    }
}

const App = {
    init() {
        Transaction.all.forEach(function(transaction, index) {
            DOM.addTransaction(transaction, index)
        })

        Storage.set(Transaction.all)
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()

