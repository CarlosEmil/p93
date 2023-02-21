
var firebaseConfig = {
   apiKey: "AIzaSyC9wQszVkmSlSsa2Nu0fktSOSX4RjKANBQ",
   authDomain: "kwit-1b73f.firebaseapp.com",
   databaseURL: "https://kwit-1b73f-default-rtdb.firebaseio.com",
   projectId: "kwit-1b73f",
   storageBucket: "kwit-1b73f.appspot.com",
   messagingSenderId: "59655649133",
   appId: "1:59655649133:web:378fe856c1e2214f118c64"
 };
 
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name+ " !";

function addRoom(){
   room_name = document.getElementById("room_name").value;
// se referencia la base de datos
// database significa que queremos añadir datos a la base.
//ref(“/”) significa la referencia, donde queremos añadir un nombre de
//usuario en la base de datos.
//“/” esto significa que queremos añadir el nombre de usuario en la raíz
//como carpeta principal.

//child(room_name) la función child() se utiliza para dar el nombre a la
//carpeta principal. room_name es el nombre de la carpeta principal.
//update es la función de firebase que se utiliza para actualizar la base de
//datos con los valores.


   firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
   });
   localStorage.setItem("room_name",room_name);
    window.location.replace("kwitter_page.html");

}

// function getData()
//  {
//       firebase.database().ref("/" + room_name).on('value', function(snapshot) {
//       document.getElementById("output").innerHTML = "";
//       snapshot.forEach(function(childSnapshot) {
//       childKey  = childSnapshot.key;
//        Room_names = childKey;
//        childData = childSnapshot.val();
//        if(childKey != "purpose"){
//          firebase_message_id =childKey;
//          message_data = childData;
//       //Inicio del código
//       console.log(firebase_message_id);
//       console.log(message_data);
//       name = message_data["name"];
//       message = message_data["message"];
//       like = message_data["like"];
//       name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
//       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
//       like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
//       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

//       console.log("Nombre de sala " + Room_names);
//       row = name_with_tag + message_with_tag + like_button + span_with_tag;

//      // row= "<div class='room_name' id=" + Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div> <hr>";
//       document.getElementById("output").innerHTML += row;
//    //Final del código

//        }
//       });
//    });
// }
// getData();


function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location.replace("index.html");
}

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name",name);
   window.location ="kwitter_page.html"
}