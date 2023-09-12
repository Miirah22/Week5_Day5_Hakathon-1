
function envoyerEmail(){
  Email.Envoyer({
    Host : "smtp.gmail.com",
    Nom_Utilisateur : "amiluxe@gmail.com",
    Password : "password",
    To : 'amiluxe@hotmail.com',
    From : document.getElementById("email").value,
    Subject : "Nouveau formulaire de contact",
    Body : "Prénom: " + document.getElementById("prénom").value
    + "<br> Nom: " + document.getElementById("nom").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Mobile: " + document.getElementById("mobile").value
    + "<br> Message: " + document.getElementById("message").value

}).then(
  message => alert("Message envoyé reussie")
);
}









/*function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }