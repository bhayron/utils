const cpf = "04813816193";

 //retira os caracteres indesejados...
const cpfSem = cpf.replace(/[^\d]/g, "");

//realizar a formatação...
const cpfCom = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

// formatar com cpf-cnpj-validator

import { cpf } from 'cpf-cnpj-validator'


    const CPF = "04813816193";
//formata o cpf
    const novoCpf = cpf.format(CPF.cpf)
//verifica se cpf é valido
    const validCpf = cpf.isValid(novoCpf)
