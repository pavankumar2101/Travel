function calculate() {
  
    let Name = document.getElementById("name").value;
  
    let Phone = document.getElementById("mobile").value;
  
    let Email = document.getElementById("email").value;
  
    let Address = document.getElementById("address").value;
  
    let paris = document.getElementById("paris").value;
  
    let maldives = document.getElementById("maldives").value;
  
    let bangkok = document.getElementById("bangkok").value;
  
    let hawaii = document.getElementById("hawaii").value;
  
    let GST = document.getElementById("GST").value;
  
    let payment = document.getElementById("payment");
  
  

    let total = [parseInt(paris), parseInt(bangkok), parseInt(maldives), parseInt(hawaii)];
  
    amount = 0;
  
    for (let i = 0; i < total.length; i++) {
        amount += total[i];
    }
  
    let bill = amount * (GST / 100);
  
    if (!isNaN(amount)) {
      document.getElementById("answer").innerHTML = `Name : ${Name},
      <br>Mobile : ${Phone},
      <br>Email : ${Email},
      <br>Address : ${Address},
      <br>Total Amount : ${amount}/-,
      <br>Total bill payment with ${GST}% GST is ${bill + amount}/-`;
  
      if ( amount < 20000) {
        document.getElementById("final").innerHTML = `With GST Charges 1500 rupees : ${bill + amount + 1500}/-<br><br>Note : Ticket exceeds more than 15000 then pay 2000 rupees for Service Charges`;
      } else {
        document.getElementById("final").innerHTML = `With GST Charges 2000 rupees : ${bill + amount + 2000}/-<br><br>Note : bill exceeds more than 15000 then pay 2000 rupees for Service Charges`;
      }
    }
  
  
  }
  calculate();
  