const express = require('express');

const router = express.Router();
router.get('/',(req, res) => {
   let obj = { 
    nome: req.query.nome
   }; 
   res.render('home', obj);
});

router.get('/grade',(req, res) => {
   let obj2 = { 
    nm: req.query.nm,
    hr: req.query.hr,
    mostrar: true,
    grade: [
      {nm : 'Gestão Ágil de Projetos de Software', hr : '07:40 - 11:20'},
      
      {nm : 'Banco de Dados - Não relacional', hr : '07:40 - 11:20'},
      {nm : 'Inglês I', hr : '11:20 - 13:00'},
      
      {nm : 'Desenvolvimento Web III', hr : '07:40 - 11:20'},
      {nm : 'Interação Humano Computador', hr : '11:20 - 13:00'},
      
      {nm : 'Álgebra Linear', hr : '07:40 - 11:20'},
      
      {nm : 'Técnica de Programação II', hr : '07:40 - 11:20'},
      {nm : 'Estágio Supervisionado em Desenvolvimento de Software Multiplataforma', hr : 'indefinida'},
    ]
   }; 
   res.render('grade', obj2);
});

router.get('/historico',(req, res) => {
   let obj3 = { 
    nm: req.query.nm,
    sts: req.query.sts,
    mostrar: true,
    historico: [
      {nm : 'Gestão Ágil de Projetos de Software', sts: 'Em Curso'},  
      {nm : 'Banco de Dados - Não relacional', sts: 'Em Curso'},
      {nm : 'Inglês I', sts: 'Em Curso'},
      {nm : 'Desenvolvimento Web III', sts: 'Em Curso'},
      {nm : 'Interação Humano Computador', sts: 'Em Curso'},
      {nm : 'Álgebra Linear', sts: 'Em Curso'},
      {nm : 'Técnica de Programação II', sts: 'Em Curso'},
      {nm : 'Estágio Supervisionado em Desenvolvimento de Software Multiplataforma', sts: 'Em Curso'},
      {nm : 'Algoritmo e Lógica de Programação', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Modelagem de Banco de Dados', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Banco de Dados – Relacional', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Estrutura de Dados', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Engenharia de Software I', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Engenharia de Software II', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Técnica de Programação I', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Sistemas Operacionais e Redes de Computadores', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Desenvolvimento Web I', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Desenvolvimento Web II', sts: 'Reprovado por Nota'},
      {nm : 'Design Digital	', sts: 'Aprovado por Nota e Frequência'},
      {nm : 'Matemática para Computação', sts: 'Aprovado por Nota e Frequência'},
    ]
   }; 
   res.render('historico', obj3);
});

module.exports = router;