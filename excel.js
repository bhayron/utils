    const file = 'NomedoArquivo.xlsx'
    const readFile = XLSX.readFile(file)

    const xlsxInstance = XLSX.readFile(file)
    const firstSheet = xlsxInstance.Sheets[xlsxInstance.SheetNames[0]]

    const xlsxData = XLSX.utils.sheet_to_json(firstSheet)
     console.log(xlsxData)
  

    let worksheets = {}
    for (const sheetName of readFile.SheetNames) {
      worksheets[sheetName] = XLSX.utils.sheet_to_json(readFile.Sheets[sheetName])
    }
    const responseJson =  JSON.stringify(worksheets)
    console.log(responseJson)
