let butt1=document.getElementById("btn1");
let results=document.getElementById("results-sections");
butt1.addEventListener('click',add_form);
let details_arr=[];
let count=0;
function add_form(){
    count++;
    let firstName=document.getElementById("firstName");
    let lastName=document.getElementById("lastName");
    let phone=document.getElementById("phone");
    let date=document.getElementById("DOB");
    let gender=document.getElementById("gender");
    let details_obj= {
        id:count,
        Firstfield:  `${firstName.value}`,
        LastField:  `${lastName.value}`,
        Phonefield: `${phone.value}`,
        Datefield : `${date.value}`,
        Genderfield:`${gender.value}`};
    details_arr.push(details_obj);
    document.getElementById("form").reset();
    updateTable();
}

function edit_form(id) {
    butt1.setAttribute("Value","SAVE");
    butt1.removeEventListener('click',add_form);
    for (let x = 0; x < details_arr.length; x++) {
        if (details_arr[x].id === id) {
            let firstName = document.getElementById("firstName");
            let lastName = document.getElementById("lastName");
            let phone = document.getElementById("phone");
            let date = document.getElementById("DOB");
            let gender = document.getElementById("gender");
            firstName.value=`${details_arr[x].Firstfield}`;
            lastName.value=`${details_arr[x].LastField}`;
            phone.value=`${details_arr[x].Phonefield}`;
            date.value=`${details_arr[x].Datefield}`;
            gender.value=`${details_arr[x].Genderfield}`;

        }

    }
    butt1.setAttribute('onclick','save_form('+id+')')
    return "";
}

function save_form(id){
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let phone = document.getElementById("phone");
    let date = document.getElementById("DOB");
    let gender = document.getElementById("gender");
    let details_obj= {
        id:id,
        Firstfield:  `${firstName.value}`,
        LastField:  `${lastName.value}`,
        Phonefield: `${phone.value}`,
        Datefield : `${date.value}`,
        Genderfield:`${gender.value}`};
    del_form(id);
    details_arr.push(details_obj);
    document.getElementById("form").reset();
    updateTable();
    butt1.setAttribute("Value","ADD");
    butt1.setAttribute('onclick','add_form('+')')
}

function del_form(id){
    for (let x=0;x<details_arr.length;x++){
        if(details_arr[x].id===id){
            details_arr.splice(x,1);
        }
    }
    updateTable();
    return "";
}

function updateTable(){
    if(document.getElementById("table")!==null){
    let old=document.getElementById("table");
    old.remove();
    }
        let table=document.createElement("table");
        table.setAttribute("id","table");
        results.appendChild(table);
        let headerrow=table.insertRow(-1);
        let name_th=document.createElement("th");
        name_th.innerHTML="NAME"
        headerrow.appendChild(name_th);
        let phone_th=document.createElement("th");
        phone_th.innerHTML="PHONE"
        headerrow.appendChild(phone_th);
        let date_th=document.createElement("th");
        date_th.innerHTML="DATE"
        headerrow.appendChild(date_th);
        let gender_th=document.createElement("th");
        gender_th.innerHTML="GENDER"
        headerrow.appendChild(gender_th);
        for(let row_num in details_arr){
            let row=table.insertRow(-1);
            let nameCell=row.insertCell(-1);
            nameCell.innerText=`${details_arr[row_num].Firstfield} ${details_arr[row_num].LastField}`;
            let phoneCell=row.insertCell(-1);
            phoneCell.innerText=`${details_arr[row_num].Phonefield}`;
            let dateCell=row.insertCell(-1);
            dateCell.innerText=`${details_arr[row_num].Datefield}`;
            let genderCell=row.insertCell(-1);
            genderCell.innerText=`${details_arr[row_num].Genderfield}`;
            let editbtn=document.createElement("button");
            editbtn.setAttribute("onclick","edit_form("+details_arr[row_num].id+")")
            editbtn.innerHTML="EDIT";
            editbtn.id=row_num.id;
            row.appendChild(editbtn);
            let delbtn=document.createElement("button");
            delbtn.innerHTML="DELETE";
            delbtn.setAttribute("id",row_num.id)
            delbtn.id=row_num.id;
            delbtn.setAttribute("onclick","del_form("+details_arr[row_num].id+")")
            row.appendChild(delbtn);
        }
}