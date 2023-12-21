function generateBarcodes(input) {
    let validBarcodes = "";
  
    for (let i = 1000; i <= 9999; i++) {
      let barcode = i;
      let hasEvenDigit = false;
  
      while (barcode > 0) {
        let digit = barcode % 10;
        if (digit % 2 === 0) {
          hasEvenDigit = true;
          break;
        }
        barcode = Math.floor(barcode / 10);
      }
  
      if (!hasEvenDigit) {
        validBarcodes += i + " ";
      }
    }
  
    console.log(validBarcodes);
  }
  
  generateBarcodes();