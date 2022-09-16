fetch("task2.json")
    .then(response => response.json())
    .then(data =>{
       document.querySelector("#cost").innerText = "Rs."+data.transactionamount
       document.querySelector("#date").innerText = data.transactiondate
       document.querySelector("#from").innerText = data.senderDetails.sender
       document.querySelector("#to").innerText = data.recieverDetails.reciever
       document.querySelector("#sbi_ifsc").innerText = data.senderDetails.bank+",IFSC "+data.senderDetails.IFSC
       document.querySelector("#acno").innerText = data.senderDetails.accountno
       document.querySelector("#wallet").innerText = data.recieverDetails.wallet
       document.querySelector("#date1").innerText = data.senderDetails.transactiondate
       document.querySelector("#date2").innerText = data.recieverDetails.transactiondate
       document.querySelector("#refno").innerText = "Refno. "+data.recieverDetails.referenceno
       document.querySelector("#paymethod").innerText = "Payment Method: "+data.paymentmethod
       document.querySelector("#transid").innerText = "Transaction ID: "+data.transactionId
       
    })


function openNav() {
    document.getElementById("mySidenav").style.width = "205px";
    document.getElementById("menu-font").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu-font").style.display = "";
  }

  var btnPopup = document.getElementById('btnPopup');
  var overlay = document.getElementById('overlay');
  var btnClose = document.getElementById('btnClose');
  
  btnPopup.addEventListener('click',openModal);
  btnClose.addEventListener('click',closePopup)
  
  function openModal(){
   overlay.style.display = 'block';
   ;
  
  }
  
  function closePopup(){
   overlay.style.display = 'none';
   
  }
    

    
    
    
    