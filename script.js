const params = new URLSearchParams(window.location.search);

document.getElementById("token").value =
    params.get("token");

document.getElementById("ticket").value =
    params.get("ticket");

document.getElementById("frm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    await fetch(
      "POWER_AUTOMATE_URL",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
            token: document.getElementById("token").value,
            ticket: document.getElementById("ticket").value,
            telefoon: document.getElementById("telefoon").value,
            adres: document.getElementById("adres").value
        })
      });

    alert("Bestelling ontvangen");

});
