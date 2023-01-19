function validateForm(e) {
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comments").value;
    var genders = document.getElementsByName("gender");
    var gender;
    for (var i = 0; i < genders.length; i++) {
      if (genders[i].checked) {
        gender = genders[i].value;
      }
    }
    console.log(name);
    console.log(comment);
    console.log(gender);
    if (name == "" || comment == "" || !gender) {
        $(':input:text[value=""]').first().focus();
      e.preventDefault();
      alert("All fields are compulsory");
    } else {
      alert("Thank you for your Comments");
     
  }
  }