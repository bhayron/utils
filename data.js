   let data = new Date()

   let novadata = data.toLocaleDateString().replace(/[^\d]/g, '.')

   console.log(novadata)

    const data = new Date().toLocaleDateString('pt-BR', {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
       });
   
   //formatacao com moment

   const dataFormatada = moment(data).format('DD/MM/YYYY HH:mm:ss')
   
   console.log(dataFormatada)
