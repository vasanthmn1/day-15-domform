



function dobullClassList(tagName, fistclass, asecandclass) {
  let ele = document.createElement(tagName);
  // ele.setAttribute(clas, classNA);
  ele.classList.add(fistclass, asecandclass)
  return ele
}
function twoclasslist(tagName, fistclass, secclass) {
  let ele = document.createElement(tagName);
  ele.classList.add(fistclass, secclass)
  return ele
}
function heading(tagName, contant) {
  let ele = document.createElement(tagName);
  ele.innerHTML = contant
  return ele
}

function lablelist(tagName, For, forclass, contant) {
  let ele = document.createElement(tagName);
  ele.setAttribute(For, forclass);
  ele.innerHTML = contant;
  return ele
}
function inputlist(tagName, fistClass, type, text, id, idvalue, placeholder, placeholdername,) {
  let ele = document.createElement(tagName);
  ele.classList.add(fistClass)
  ele.setAttribute(type, text);
  ele.setAttribute(id, idvalue);
  ele.setAttribute(placeholder, placeholdername);
  // ele.innerHTML = contant;
  return ele
}
function brake(brake) {
  let ele = document.createElement(brake)
  return ele
}

function radio(tagName, fistClass, secclass, theclass, type, text, placeholder, placeholdername, id, idvalue, name, namevalue) {
  let ele = document.createElement(tagName);
  ele.classList.add(fistClass, secclass, theclass)
  ele.setAttribute(type, text);
  // ele.setAttribute(id, idvalue);
  ele.setAttribute(placeholder, placeholdername);
  ele.setAttribute(id, idvalue);
  ele.setAttribute(name, namevalue);

  // ele.innerHTML = contant;
  return ele
}
function lab(con) {
  let ele = document.innerHTML = con;
  return ele
}

function bt(tagName, type, typevalue, id, idvalue, fclass, sclass, tclass, contant) {
  let ele = document.createElement(tagName);
  ele.setAttribute(type, typevalue);
  ele.setAttribute(id, idvalue);
  ele.classList.add(fclass, sclass, tclass)
  ele.innerHTML = contant
  return ele
}
function td(tagname, contant) {
  let ele = document.createElement(tagname)
  ele.innerHTML = contant
  return ele
}

function tbody(tagName, id, idvalue) {
  let ele = document.createElement(tagName);
  ele.setAttribute(id, idvalue);
  return ele
}
function placeholdername(tagname, type, text, clas, classname, id, idvalue, name, namevalue, placeholder, placeholdername) {
  let ele = document.createElement(tagname);
  ele.setAttribute(type, text)
  ele.setAttribute(clas, classname)
  ele.setAttribute(id, idvalue)
  ele.setAttribute(name, namevalue)
  ele.setAttribute(placeholder, placeholdername)

  return ele


}

let container = dobullClassList("div", "container-fluid", "p-3")
let row = twoclasslist("div", "row", "justify-content-between")
let col = twoclasslist("div", "col-md-12", "col-lg-4")
let form = twoclasslist("form", "mt-3", "mb-5")
let h1 = heading("h1", "Form Submission:")

let lable1 = lablelist("lable", "for", "fname", "First Name:");
let inputlist1 = inputlist("input", "form-control", "type", "text", "id", "fname", "placeholder", "FistName")
let br1 = brake("br")

let lable2 = lablelist("lable", "for", "lname", "LastName:");
let inputlist2 = inputlist("input", "form-control", "type", "text", "id", "lname", "placeholder", "LastName")
let br2 = brake("br")

let lable3 = lablelist("lable", "for", "adderss1", "Adderse line 1:");
let inputlist3 = inputlist("input", "form-control", "type", "text", "id", "address1", "placeholder", "Address Line 1:")
let br3 = brake("br")

let lable4 = lablelist("lable", "for", "adderss2", "Address Line 2:");
let inputlist4 = inputlist("input", "form-control", "type", "text", "id", "address2", "placeholder", "Address Line 2:")
let br4 = brake("br")
// ! pin
let lable5 = lablelist("lable", "for", "pin", "PIN:");
let inputlist5 = inputlist("input", "form-control", "type", "number", "id", "pin", "placeholder", "PIN:")
let br5 = brake("br")
// !gender
let lable6 = lablelist("lable", "for", "gender", "gender:");
let br6 = brake("br")

let inputlist6 = radio("input", "mb-2", "m-3", "redio", "type", "radio", "value", "male", "id", "genter", "name", "redio")
let la = lab("male")

let inputlist7 = radio("input", "mb-2", "m-3", "redio", "type", "radio", "value", "Female", "id", "genter", "name", "redio")
let la2 = lab("female")

let lable7 = lablelist("p", "for", " ", "Choice of Food: (must choose at least 2 out of 5 options):");
let br7 = brake("br")
let la3 = lab("North Indian")


// ! chackbox
let chckbox1 = radio("input", "foodItem", "m-3", "redio", "type", "checkbox", "value", "North Indian", "id", "ch")
let br8 = brake("br")
let la4 = lab("South Indian")

let chckbox2 = radio("input", "foodItem", "m-3", "redio", "type", "checkbox", "value", "South Indian", "id", "ch")
let br9 = brake("br")
let la5 = lab("Chinese")

let chckbox3 = radio("input", "foodItem", "m-3", "redio", "type", "checkbox", "value", "Chinese")
let br10 = brake("br")
let la6 = lab("Japanese")

let chckbox4 = radio("input", "foodItem", "m-3", "redio", "type", "checkbox", "value", "Japanese")
let br11 = brake("br")
let la7 = lab("Sea Food")

let chckbox5 = radio("input", "foodItem", "m-3", "redio", "type", "checkbox", "value", "Sea Food")
let br12 = brake("br")

let lable8 = lablelist("lable", "for", "State", "State:");
let inputlist8 = placeholdername("input", "type", "text", "class", "form-control", "id", "state", "name", "state", "placeholder", "dtate:")
let br13 = brake("br")

let lable9 = lablelist("lable", "for", "country", "country:");
let inputlist9 = placeholdername("input", "type", "text", "class", "form-control", "id", "country", "name", "country", "placeholder", "country:")
let br14 = brake("br")

let button = bt("button", "type", "sumit", "id", "btn", "form-control", "btn-lg", "btn-secondary", "sumit")


// !-------------
// 2box
let Database = dobullClassList("div", "pl-5", "col-lg-8")
let h2 = heading("h2", "Temporary Database")
let table = dobullClassList("table", "table", "-")
let thead = dobullClassList("thead", "bg-dark", "text-light")
let tr = brake("tr")
let td1 = td("td", "FistName")
let td2 = td("td", "Last Name")
let td3 = td("td", "Address")
let td4 = td("td", "Pincode")
let td5 = td("td", "Gender")
let td6 = td("td", "Food")
let td7 = td("td", "State")
let td8 = td("td", "Country")

// store vlaue

let storevalue = tbody("tbody", "id", "tbody")


// ! 1

container.append(row)
row.append(col)
col.append(form)

form.append(h1)
form.append(lable1)
form.append(inputlist1)
form.append(br1)
form.append(lable2)
form.append(inputlist2)
form.append(br2)
form.append(lable3)
form.append(inputlist3)
form.append(br3)
form.append(lable4)
form.append(inputlist4)
form.append(br4)
form.append(lable5)
form.append(inputlist5)
form.append(br5)
form.append(lable6)
form.append(br6)

form.append(inputlist6)
form.append(la)

form.append(inputlist7)
form.append(la2)

form.append(lable7)
form.append(br7)
form.append(chckbox1)
form.append(la3)
form.append(br8)
form.append(chckbox2)
form.append(la4)

form.append(br9)

form.append(chckbox3)
form.append(la5)

form.append(br10)

form.append(chckbox4)
form.append(la6)

form.append(br11)

form.append(chckbox5)
form.append(la7)

form.append(br12)

form.append(lable8)
form.append(inputlist8)
form.append(br13)

form.append(lable9)
form.append(inputlist9)
form.append(br14)
form.append(button)

// ! 2
row.append(Database)
Database.append(h2)

Database.append(table)
table.append(thead)
thead.append(tr)
tr.append(td1)
tr.append(td2)
tr.append(td3)
tr.append(td4)
tr.append(td5)
tr.append(td6)
tr.append(td6)
tr.append(td7)
tr.append(td8)
table.append(storevalue)

document.body.append(container)


let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let address1 = document.getElementById("address1")
let address2 = document.getElementById("address2")
let pin = document.getElementById("pin")
let gender = document.getElementById("gender")
let food = document.querySelectorAll(".foodItem")
let state = document.getElementById("state")
let country = document.getElementById("country")


function createTable(fname, lname, address, pincode, gender, food, state, country) {
  let tbody = document.getElementById("tbody")
  let tr = document.createElement("tr")
  let td1 = document.createElement("td")
  let td2 = document.createElement("td")
  let td3 = document.createElement("td")
  let td4 = document.createElement("td")
  let td5 = document.createElement("td")
  let td6 = document.createElement("td")
  let td7 = document.createElement("td")
  let td8 = document.createElement("td")
  td1.innerHTML = fname;
  td2.innerHTML = lname;
  td3.innerHTML = address;
  td4.innerHTML = pincode;
  td5.innerHTML = gender;
  td6.innerHTML = food;
  td7.innerHTML = state;
  td8.innerHTML = country;
  tr.append(td1)
  tr.append(td2)
  tr.append(td3)
  tr.append(td4)
  tr.append(td5)
  tr.append(td6)
  tr.append(td7)
  tr.append(td8)
  tbody.append(tr)
}

// 
let submit = document.getElementById("btn")
submit.addEventListener("click", function (cl) {
  cl.preventDefault();
  let address = [];
  address.push(address1.value)
  address.push(address2.value)

  let gender = document.querySelectorAll("#genter")
  let genderValue;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderValue = gender[i].value
    }
  }

  let food = document.querySelectorAll(".foodItem")
  let foodList = []
  let foodCount = 0;

  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      foodList.push(food[i].value)
      foodCount++
    }
  }
  if (foodList.length >= 2) {
    result = foodList.join(", ")
  }

  else {
    result = alert("must choose at least 2 out of 5 options")
  }

  createTable(fname.value, lname.value, address, pin.value, genderValue, result, state.value, country.value)
  fname.value = ""
  lname.value = ""
  address1.value = ""
  address2.value = ""
  pin.value = ""
  gender.value = ""
  foodList = "";
  state.value = ""
  country.value = ""
})