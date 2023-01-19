let check=false;
const Login=()=> {
    let form=document.forms[0];
    let username=form.elements.username.value;
    let password=form.elements.password.value;
    let selection=form.elements.selection.value;
    let district=form.elements.district.value;
    let state=form.elements.state.value; 



    console.log(selection);
    console.log(state);
    console.log(district);
    console.log(username);
    console.log(password);
    if(check)
    console.log("checked");
    else
    console.log("unchecked");

      alert("Thank you for your Comments");
  }
  
  const Onclick=()=>check=true;