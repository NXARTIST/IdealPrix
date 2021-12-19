


function calc() {

   var fprix=parseFloat(document.getElementById("fprix").value);
   var shiprix=parseFloat(document.getElementById("shiprix").value);
   var adsprix=parseFloat(document.getElementById("adsprix").value);
   var total= document.getElementById("total").value=fprix+adsprix+shiprix;

}
function calcf() {
    var total=parseFloat(document.getElementById("total").value);
    var prixfinal=parseFloat(document.getElementById("prixfinal").value);
    var netprofit=document.getElementById("netprofit").value=prixfinal-total;
    var prof = document.getElementById("profit").value;  
  if(prof==='10')
  {
     document.getElementById("prixfinal").value=total+total*0.10;

  }
  if(prof==='20')
  {
      document.getElementById("prixfinal").value=total+total*0.20;

  }
  if(prof==='30')
  {
      document.getElementById("prixfinal").value=total+total*0.30;


  }
  if(prof==='40')
  {
      document.getElementById("prixfinal").value=total+total*0.40;

  }
  if(prof==='50')
  {
      document.getElementById("prixfinal").value=total+total*0.50;

  }
  if(prof==='60')
  {
      document.getElementById("prixfinal").value=total+total*0.60;

  }
  if(prof ==='70')
  {
      document.getElementById("prixfinal").value=total+total*0.70;


  }
  if(prof==='80')
  {
     document.getElementById("prixfinal").value=total+total*0.80;

  }
  if(prof==='90')
  {
      document.getElementById("prixfinal").value=total+total*0.90;

  }
  if(prof==='100')
  {
      document.getElementById("prixfinal").value=total+total;

  }
}



