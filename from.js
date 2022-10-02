function showlist() {
  if (document.getElementById("etr").checked) {
    document.getElementById("labelpays").style.visibility = "visible";
  }
}
function hidelist() {
  if (document.getElementById("mar").checked) {
    document.getElementById("labelpays").style.visibility = "hidden";
  }
}
function show() {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var age = document.getElementById("age").value;
  var yes = document.getElementsByName("choices");
  for (i = 0; i < yes.length; i++) {
    if (yes[i].checked) {
      var yesv = yes[i].value;
    }
  }
  var nat = document.getElementsByName("choix");
  for (i = 0; i < nat.length; i++) {
    if (nat[i].checked) {
      var natv = nat[i].value;
    }
  }
  if (nat[1].checked) {
    var selected = document.getElementById("pays");
    var valued = selected.options[selected.selectedIndex].value;
  } else {
    valued = " ";
  }
  var act = document.getElementsByName("activity");
  activities = [];
  for (i = 0; i < act.length; i++) {
    if (act[i].checked) {
      var actv = act[i].value;
      activities.push(actv);
    }
  }
  sh = document.getElementById("result");
  sh.innerHTML =
    nom +
    " " +
    prenom +
    " " +
    age +
    " " +
    " Sexe " +
    yesv +
    " Nationalite: " +
    natv +
    ". " +
    valued +
    " Activities: " +
    activities;
}
