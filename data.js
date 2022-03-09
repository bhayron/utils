   let data = new Date()

   let novadata = data.toLocaleDateString().replace(/[^\d]/g, '.')

   console.log(novadata)
   
   //formatacao com moment

   const dataFormatada = moment(data).format('DD/MM/YYYY HH:mm:ss')
   
   console.log(dataFormatada)
