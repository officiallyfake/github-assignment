function usdfunc(event){
  
    var targetCurrency = event.target.value;
    
    var conversion;
    var dollarValue = document.converter.dollar.value;
    
    switch (targetCurrency) {
      case "eur":
        conversion = dollarValue * 0.73640;
        break;
      case "mxn":
        conversion = dollarValue * 0.60984;
        break;
      case "gbp":
        conversion = dollarValue * 13.2436;
        break;
      case "jpy":
        conversion = dollarValue * 102.490;
        break;
    }
    
    var output = document.getElementById("output");
    output.innerHTML = "$" + dollarValue + " = " + targetCurrency + " " + conversion;
  
  }