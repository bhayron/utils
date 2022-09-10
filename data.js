   let data = new Date()
//formatacao com replace
   let novadata = data.toLocaleDateString().replace(/[^\d]/g, '.')

   console.log(novadata)
//formatacao com javascript
    const data = new Date().toLocaleDateString('pt-BR', {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
       });
   
   //formatacao com moment

   const dataFormatada = moment(data).format('DD/MM/YYYY HH:mm:ss')
   
   console.log(dataFormatada)
