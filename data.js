   let data = new Date()

   let novadata = data.toLocaleDateString().replace(/[^\d]/g, '.')

   console.log(novadata)
