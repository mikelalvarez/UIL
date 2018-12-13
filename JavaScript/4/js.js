var a = ("", "", "")
function kutxatxoak()
{
  if (document.getElementById('kutxa1').checked && document.getElementById('kutxa2').checked)
  {
    alert("Bi aukerak hautatu dituzu");
  }
  else{

    if (document.getElementById('kutxa1').checked)
    {
      alert("1. Aukera hautatu duzu");
    }
    if (document.getElementById('kutxa2').checked)
    {
      alert("2. Aukera hautatu duzu");
    }
  }
}
