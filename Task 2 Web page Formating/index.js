function validateForm(e) {
    let form=document.forms[0];
    let name=form.elements.name.value;
    let comment=form.elements.comments.value;
    let gender=form.elements.gender.value;

    console.log(name);
    console.log(comment);
    console.log(gender);
    if (name === "" || comment === "" || gender==="") {
      //   $(':input:text[value=""]').first().focus();
      // e.preventDefault();
      alert("All fields are compulsory");
    } else {
      alert("Thank you for your Comments");
     
  }
  }