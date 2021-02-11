window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("jour").innerHTML = ""
  document.getElementById("autre").innerHTML = ""

  var ladate = new Date()
  var dateactuelle = ladate.getDate() + "/" + (ladate.getMonth() + 1) + "/" + ladate.getFullYear()
  var datefinal = dateactuelle
  var mois = ladate.getMonth() + 1
  var jour = ladate.getDate()
  if (parseInt(ladate.getMonth()) + 1 < 10) {
    mois = String("0" + parseInt(ladate.getMonth() + 1));
    if (parseInt(ladate.getDate()) < 10) {
      jour = String("0" + parseInt(ladate.getDate()))
    }
  } else {
    if (parseInt(ladate.getDate()) < 10) {
      jour = String("0" + parseInt(ladate.getDate()))
    }
  }
  datefinal = jour + "/" + mois + "/" + ladate.getFullYear()

  var nb_storage = localStorage.getItem("nb")
  if (nb_storage === null) {
    localStorage.setItem("nb", "0")
    nb_storage = localStorage.getItem("nb")
  }
  var barreactuel = undefined
  var barreactuelauj = undefined
  var num_serie = 1
  var rougeactuel = undefined
  var htmlbarre = ""
  var htmlbarreauj = ""
  for (let pas = 0; pas < nb_storage; pas++) {
    htmlbarre = "<input type='button' value=' -  'onclick='csupprime(" + String(num_serie) + ")' class='' id='buttoni"+String(num_serie)+"'> <input type='text' id='value" + String(num_serie) + "'><br><br><input type='text' id='date" + String(num_serie) + "' value='" + localStorage.getItem("date" + String(num_serie)) + "'> <input type='button' value='OK'onclick='cmodifie(" + num_serie + ")' id='buttonii"+String(num_serie)+"'><br><br>"
    htmlbarreauj = "<input type='button' value=' -  'onclick='csupprime(" + String(num_serie) + ")'> <input type='text' id='valueauj" + String(num_serie) + "' value='" + localStorage.getItem("value" + String(num_serie)) + "'><br><br>"
    
    if (barreactuel === undefined) {
      document.getElementById('barre').innerHTML = htmlbarre
      barreactuel = htmlbarre
      document.getElementById("autre").innerHTML = "Toutes mes taches :"
    } else {
      document.getElementById('barre').innerHTML = barreactuel + htmlbarre
      barreactuel = barreactuel + htmlbarre
    }

    document.getElementById('date' + String(num_serie)).value = localStorage.getItem("date" + String(num_serie))

    if (document.getElementById('date' + String(num_serie)).value == datefinal) {
      document.getElementById("jour").innerHTML = "Mes taches pour aujourd'hui :"
      if (document.getElementById('barreauj').innerHTML == "") {
        document.getElementById('barreauj').innerHTML = htmlbarreauj
        document.getElementById('valueauj' + String(num_serie)).value = localStorage.getItem('value' + String(num_serie))
      } else {
        document.getElementById('barreauj').innerHTML = document.getElementById('barreauj').innerHTML + htmlbarreauj
      }
    }
    var dateencours = parseInt(document.getElementById('date' + String(num_serie)).value.substr(0, 2));
    if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("01")) {
      dateencours = String(dateencours) + " January "
    } else {
      if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("02")) {
        dateencours = String(dateencours) + " February "
      } else {
        if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("03")) {
          dateencours = String(dateencours) + " March "
        } else {
          if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("04")) {
            dateencours = String(dateencours) + " April "
          } else {
            if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("05")) {
              dateencours = String(dateencours) + " May "
            } else {
              if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("06")) {
                dateencours = String(dateencours) + " June "
              } else {
                if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("07")) {
                  dateencours = String(dateencours) + " July "
                } else {
                  if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("08")) {
                    dateencours = String(dateencours) + " August "
                  } else {
                    if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("09")) {
                      dateencours = String(dateencours) + " September "
                    } else {
                      if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("10")) {
                        dateencours = String(dateencours) + " October "
                      } else {
                        if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("11")) {
                          dateencours = String(dateencours) + " November "
                        } else {
                          if (document.getElementById('date' + String(num_serie)).value.substr(3, 2) == String("12")) {
                            dateencours = String(dateencours) + " December "
                          } else {
              
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    dateencours = dateencours + document.getElementById('date'+String(num_serie)).value.substr(6, 4)
    dateencours = Date.parse(dateencours)
    dateencours = new Date(dateencours)
    if (dateencours < ladate) {
      if (datefinal == document.getElementById("date" + String(num_serie)).value) {
        sessionStorage.setItem("rouge"+num_serie, "no")
      } else {
        sessionStorage.setItem("rouge"+num_serie, "yes")
        document.getElementById("date" + String(num_serie)).className = "yesterday"
        document.getElementById("value" + String(num_serie)).className = "yesterday"
        document.getElementById("buttoni" + String(num_serie)).className = "yesterday"
        document.getElementById("buttonii" + String(num_serie)).className = "yesterday"
      }
      
    } else {
      sessionStorage.setItem("rouge"+num_serie, "no")
    }
    for(let pieds = 1; pieds < num_serie; pieds++){
      if (sessionStorage.getItem("rouge"+pieds) == "yes") {
        document.getElementById("date" + String(pieds)).className = "yesterday"
        document.getElementById("value" + String(pieds)).className = "yesterday"
        document.getElementById("buttoni" + String(pieds)).className = "yesterday"
        document.getElementById("buttonii" + String(pieds)).className = "yesterday"
      }
    }
    
    num_serie = num_serie + 1
  }
  
  num_serie = 1
  for (let pas = 0; pas < nb_storage; pas++) {
    document.getElementById('value' + String(num_serie)).value = localStorage.getItem("value" + String(num_serie))
    if (!document.getElementById("valueauj" + String(num_serie)) === null) {
      document.getElementById("valueauj" + String(num_serie)).value = localStorage.getItem("value" + String(num_serie))
    }
    num_serie = num_serie + 1
  }
});

function cvalide() {
  var set = document.getElementById("value").value
  var setdate = document.getElementById("date").value
  localStorage.setItem("value" + String(parseInt(localStorage.getItem("nb")) + 1), set)
  localStorage.setItem("date" + String(parseInt(localStorage.getItem("nb")) + 1), setdate)
  localStorage.setItem("nb", (parseInt(localStorage.getItem("nb")) + 1))
  window.location.reload();
}


function csupprime(n) {
  num_serie = 1
  for (let pas = n; pas < localStorage.getItem("nb"); pas++) {
    localStorage.removeItem("value" + String(n + num_serie - 1))
    localStorage.removeItem("date" + String(n + num_serie - 1))
    localStorage.setItem("value" + String(n + num_serie - 1), localStorage.getItem("value" + String(n + num_serie)));
    localStorage.setItem("date" + String(n + num_serie - 1), localStorage.getItem("date" + String(n + num_serie)));
    num_serie = num_serie + 1
  }
  localStorage.setItem("nb", parseInt(localStorage.getItem("nb")) - 1)
  window.location.reload();
}

function cmodifie(n) {
  var set = document.getElementById("value" + String(n)).value
  var setdate = document.getElementById("date" + String(n)).value
  localStorage.setItem("value" + String(n), set)
  localStorage.setItem("date" + String(n), setdate)
  window.location.reload();
}

function cre() {
  window.location.reload();
}

function cchange() {
  localStorage.setItem("white/dark", "white")
  window.location.href = '../white/index.html';
}