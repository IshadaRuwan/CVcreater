let formCount1=0;
let listCount1=0;
let buttonIdCount = 0;
let divCount1=0;
let divCount2=0;

window.onload = function() {
    displayMasage();
};

// hide err msagfe

function messageOK(){
    document.getElementById("masage").style.display = "none";
}
//coloer chnage 

document.getElementById("changeColorButton-r").addEventListener("click", function () {
    // Change the main colors dynamically
    document.documentElement.style.setProperty('--main-color', 'rgb(63, 4, 4)');  
    document.documentElement.style.setProperty('--main-color2', 'rgb(219, 161, 161)'); 
    document.documentElement.style.setProperty('--main-color3', 'rgba(63, 4, 4, 0.616)');
    document.documentElement.style.setProperty('--main-color4', ' rgb(99, 99, 99);');
    showCvAsImage()

});

document.getElementById("changeColorButton-b").addEventListener("click", function () {
    // Change the main colors dynamically
    document.documentElement.style.setProperty('--main-color', 'rgb(12, 12, 61)');  // New background color
    document.documentElement.style.setProperty('--main-color2', 'rgb(155, 218, 255)'); // New text color
    document.documentElement.style.setProperty('--main-color3', 'rgba(12, 12, 61, 0.795)'); 
    document.documentElement.style.setProperty('--main-color4 ', 'rgb(99, 99, 99)');
    showCvAsImage()

});

document.getElementById("changeColorButton-g").addEventListener("click", function () {
    // Change the main colors dynamically
    document.documentElement.style.setProperty('--main-color', 'rgb(8, 59, 12)');  // New background color
    document.documentElement.style.setProperty('--main-color2', 'rgb(173, 219, 161)'); // New text color
    document.documentElement.style.setProperty('--main-color3', 'rgba(8, 59, 12, 0.582)'); 
    document.documentElement.style.setProperty('--main-color4', ' rgb(39, 39, 39)');
    showCvAsImage()

});

document.getElementById("changeColorButton-y").addEventListener("click", function () {
    // Change the main colors dynamically
    document.documentElement.style.setProperty('--main-color', 'rgb(0, 0, 0)');  // New background color
    document.documentElement.style.setProperty('--main-color2', 'rgb(175, 175, 175)'); // New text color
    document.documentElement.style.setProperty('--main-color3', 'rgba(0, 0, 0, 0.719)');
    document.documentElement.style.setProperty('--main-color4', 'rgb(82, 82, 82)');
    showCvAsImage()

});







// show CV as image in opnther place 
function showCvAsImage() {

    const cvContent = document.getElementById("content");
    const download =document.getElementById("download1");

    download.style.display = "block";

    // Use html2canvas to capture the CV as an image
    html2canvas(cvContent).then(canvas => {
        // Display the image in the preview section
        const imagePreview = document.getElementById("imagePreview");
        imagePreview.innerHTML = ""; // Clear any previous content
        imagePreview.appendChild(canvas);
    });
}

// containt CV height chnage 
const content = document.getElementById("content");

function adjustHeight() {
    const contentHeight = content.scrollHeight; // Get the actual height of the content

    if (contentHeight > 2112) {
        content.style.height = "3168px";
    } else if (contentHeight > 1056) {
        content.style.height = "2112px";
    } else {
        content.style.height = "1056px";
    }
}

// Adjust height initially
adjustHeight();

// Use a MutationObserver to detect changes in the content
const observer = new MutationObserver(() => {
    adjustHeight(); // Adjust height whenever content changes
});

// Observe the content element for changes
observer.observe(content, { childList: true, subtree: true });

const profileDiv = document.getElementById("proifile")

//chnage profle TITle
const contactTopicProflr =document.getElementById("profilNam");
const contactTopicProfle = document.getElementById("profileName")
contactTopicProflr.addEventListener("input",function(){
    
        contactTopicProfle.innerHTML=contactTopicProflr.innerHTML
        showCvAsImage()
   });

//change Profl NAme 
const contactTopicProflrP =document.getElementById("profileDetaislCv");
const contactTopicProfleP = document.getElementById("profileDetaisl")
contactTopicProflrP.addEventListener("input",function(){
    
        contactTopicProfleP.innerHTML=contactTopicProflrP.innerHTML
        showCvAsImage()
    });



//this use for edidt persanal details topic as youer choice=====================================
const contactTopicForm =document.getElementById("PerDet");
const contactTopicCv = document.getElementById("contctListTopic")
contactTopicForm.addEventListener("input",function(){
    contactTopicCv.innerHTML=contactTopicForm.innerHTML;
    showCvAsImage()
});

const myname = document.getElementById("nameInput");
const contactTopicCvname = document.getElementById("name")


myname.addEventListener("input",function(){
    contactTopicCvname.innerHTML=myname.value;
    showCvAsImage()
});

// create add icon and contact to person details==============================


function contactEnter(type) {
    const container = document.getElementById("cv_contact");

 
    const div = document.createElement("div");
    div.classList.add("item");

    const contactIcon = document.createElement("i");
    const contactInput = document.createElement("input");
    const delIcon = document.createElement("button");

    delIcon.textContent = "-";
    delIcon.classList.add("ContctDelIcon");
    delIcon.id = `delIcon`;

    contactInput.type = "text";
    contactInput.classList.add("contactInput");



    
    switch (type) {
        case 1:
            contactIcon.classList.add("fas", "fa-envelope");
            contactInput.placeholder = "Enter Email Address";
            break;
        case 2:
            contactIcon.classList.add("fas", "fa-mobile");
            contactInput.placeholder = "Enter Mobile Number";
            break;
        case 3:
            contactIcon.classList.add("fas", "fa-phone");
            contactInput.placeholder = "Enter Phone Number";
            break;
        case 4:
            contactIcon.classList.add("fas", "fa-home");
            contactInput.placeholder = "Enter Address";
            break;
        case 5:
            contactIcon.classList.add("fas", "fa-calendar");
            contactInput.placeholder = "Enter Birthday";
            break;
        case 6:
            contactIcon.classList.add("fas", "fa-map-marker-alt");
            contactInput.placeholder = "Enter Location";
            break;
        case 7:
            contactIcon.classList.add("fab", "fa-linkedin");
            contactInput.placeholder = "Enter LinkedIn URL";
            break;
        case 8:
            contactIcon.classList.add("fab", "fa-github");
            contactInput.placeholder = "Enter GitHub Profile";
            break;
        case 9:
            contactIcon.classList.add("fab", "fa-facebook");
            contactInput.placeholder = "Enter Facebook Profile";
            break;
        case 10:
            contactIcon.classList.add("fab", "fa-instagram");
            contactInput.placeholder = "Enter Instagram Handle";
            break;
        case 11:
            contactIcon.classList.add("fas", "fa-link");
            contactInput.placeholder = "Enter Website Link";
            break;
        default:
            break;
    }

    // const addToCVButton = document.createElement("button");
    // addToCVButton.textContent = "Add to CV";
    // addToCVButton.classList.add("addToCVButton");
    // addToCVButton.onclick = function () {
    //     addToCV(contactIcon, contactInput.value);
    // };

   
    div.appendChild(contactIcon);
    div.appendChild(contactInput);
     div.appendChild(delIcon);
    // container.appendChild(addToCVButton);


    container.appendChild(div);

    delIcon.addEventListener("click", function (event) {
        event.preventDefault();
        const div = container.querySelectorAll("div");
        if (div.length > 1) { // Ensure the main input field is not removed
            const lastDiv = div[div.length - 1];
            if (lastDiv !== div) {
                lastDiv.remove();
            }
        }

    });
    showCvAsImage()

    
}

//use to add cntact details to CV===================================================================
function addAllCntactToCV() {

    
    const cvContent = document.getElementById("contacList");
    const contactDivs = document.querySelectorAll("#cv_contact .item");

    
    


    contactDivs.forEach((div) => {
        const icon = div.querySelector("i");
        const input = div.querySelector("input");

        if (input.value.trim() !== ""){

            const div = document.createElement("div");
            const div2= document.createElement("div");
            div.classList.add("cvEntry");
            div.id = "cvEntry";
            div2.classList.add("oneContact");

            const iconClone = icon.cloneNode(true);
            iconClone.classList.add("iconClone");
            const text = document.createElement("span");
            text.textContent = input.value;

            div2.appendChild(iconClone);
            div2.appendChild(text);
            div.appendChild(div2);

            cvContent.appendChild(div);

            

           
        }else{
            alert("Please enter a valid input to add to the CV.or delete added Icon");
        }
    });

    // Alert if no valid inputs are found
    if (!cvContent.children.length) {
        alert("Please enter at least one valid input to add to the CV.");
    }
    showCvAsImage()
}
//remov last enterd contact
function removeAllCntactFromCV() {
    const cvContent = document.getElementById("contacList");
    const lastDiv = cvContent.lastElementChild;

    // Ensure there is more than one child and avoid deleting the first div
    if (cvContent.children.length > 1 && lastDiv !== cvContent.firstElementChild) {
        cvContent.removeChild(lastDiv);
   
}
showCvAsImage()
};






//add nmew list=======================================================================================================================

document.getElementById("listAddButton").addEventListener("click", function(){
    let count1=0;
    // create new div class  to adde forme
    const container = document.getElementById("leftSide");
    const newDiv = document.createElement("div");
    const listAddButtonDiv = document.getElementById("listAddBttonDiv");
    newDiv.id = "newDiv_"+formCount1;
    newDiv.classList.add("my_class");
    container.insertBefore(newDiv,listAddButtonDiv);

    // create new fome
    const newForm = document.createElement("form");
    newForm.classList.add("newfrom");
    newForm.id = "form_"+formCount1;
    console.log('forme id',newForm.id);

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("listName")
    input.placeholder= "ENTER THE LISTNAME";
    input.id = `list${listCount1}`;
    console.log("input ID ",input.id);

    const button = document.createElement("button");
    button.textContent = "+";
    button.classList.add("add_button");
    button.style.float="left";
    button.id = "button_"+buttonIdCount;
    console.log("add button iD",button.id);

    const remButton = document.createElement("button");
    remButton.textContent = "-";
    remButton.classList.add("rem_button");
    remButton.id = "remButton_"+buttonIdCount;
    console.log("remove button id",remButton.id);

    const addToCv = document.createElement("button");
    addToCv.textContent = "ADD DETAILS TO CV";
    addToCv.classList.add("addToCv");
    addToCv.id = "addToCv_"+buttonIdCount;
    console.log("addToCv_ button id",remButton.id);

    const removeFromCv = document.createElement("button");
    removeFromCv.textContent = "REMOVE LAST FROM CV";
    removeFromCv.classList.add("removeFromCv");
    removeFromCv.id = "removeFromCv_" + buttonIdCount;

    


    // Create a container div for the buttons
    const buttonContainer = document.createElement("div");
    const buttonContainer2 = document.createElement("div");

    buttonContainer2.classList.add("button-group_2");
    buttonContainer.classList.add("button-group");

    // Append buttons to the button container
    buttonContainer.appendChild(button);
    buttonContainer.appendChild(remButton);
    buttonContainer2.appendChild(addToCv);
    buttonContainer2.appendChild(removeFromCv);

    // Append the button container to the form
    newForm.appendChild(input);

    newForm.appendChild(buttonContainer);
    newForm.appendChild(buttonContainer2)



    
    

    
    
    newDiv.appendChild(newForm);

    // add input are to list==============================================================
    button.addEventListener("click",function(event){
        

        event.preventDefault();
        const listName = input.value;
        const newText = document.createElement("input");
    
        newText.type="Text";
        newText.classList.add("details");
        newText.placeholder= (listName==="")? "Enter List Details" :"Enter your "+listName;
        newText.id = 'details_'+listCount1+count1;
        console.log(newText.id);
            
        newForm.insertBefore(newText, buttonContainer);
    
        count1++;
        showCvAsImage()
    
    });
    
    //remove inputs ============================================================
    remButton.addEventListener("click", function (event) {
        event.preventDefault();
        const inputs = newForm.querySelectorAll("input[type='text']");
        if (inputs.length > 1) { // Ensure the main input field is not removed
            const lastInput = inputs[inputs.length - 1];
            if (lastInput !== input) {
                lastInput.remove();
            }
        }
        showCvAsImage()

    });

    //add list deta to cv==============================================================================================
    document.getElementById("addToCv_"+buttonIdCount).addEventListener("click", function(event) {
        event.preventDefault();
        let count1=0;
        // create new div class  send to adde forme
        const container2 = document.getElementById("leftDetails");
        const newDiv = document.createElement("div");
        newDiv.id = "div_"+formCount1;
        newDiv.classList.add("dive_CV");
        container2.appendChild(newDiv);

       
        // Add form title (List Name)
        const title = document.createElement("h3");
        title.contentEditable="true"
        title.textContent = input.value;
        title.classList.add("CV_Details_title");
        newDiv.appendChild(title);

        // Add all input values (except the main list name input)
            const inputs = newForm.querySelectorAll("input[type='text']");
                inputs.forEach((field) => {
                    if (field !== input ) {
                        const detail = document.createElement("p");
                        detail.classList.add("p_detail");
                        detail.contentEditable="true"
                        detail.textContent = field.value;
                        newDiv.appendChild(detail);
                    }
                count1++;

    });
    showCvAsImage()
   

    });


     //remove details from CV=======================================================================
  
     removeFromCv.addEventListener("click", function (event) {
        event.preventDefault(); 
        
        const container2 = document.getElementById("leftDetails");
        const lastDiv = container2.lastElementChild;

        if (lastDiv) {
            container2.removeChild(lastDiv);
        }
        showCvAsImage()
    });


formCount1++;
buttonIdCount++;
listCount1++;


    
});



//==============================================================================================================

// remove last adede list ======================================================================================
function removeList(){
  const remList=   document.getElementById("newDiv_"+(formCount1-1));
  if(remList){
    remList.remove();
    formCount1--;
    buttonIdCount--;
    listCount1--;
  }else{
    
  console.log("No list to remove");
  }
  // remopve details frm CV when all list remove 
  const container2 = document.getElementById("leftDetails");
        const lastDiv = container2.lastElementChild;

        if(lastDiv){
            container2.removeChild(lastDiv);
        }
        showCvAsImage()
   
}
//===============================================================================================================


//add list to right side===========================================================================================

document.getElementById("listAddButton").addEventListener("click", function(){
    let count1=0;
    // create new div class  to adde forme
    const container = document.getElementById("leftSide");
    const newDiv = document.createElement("div");
    const listAddButtonDiv = document.getElementById("listAddButton");
    newDiv.id = "newDiv_"+formCount1;
    newDiv.classList.add("my_class");
    container.insertBefore(newDiv,listAddButtonDiv);

    // create new fome
    const newForm = document.createElement("form");
    newForm.classList.add("newfrom");
    newForm.id = "form_"+formCount1;
    console.log('forme id',newForm.id);

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("listName")
    input.placeholder= "ENTER THE LISTNAME";
    input.id = `list${listCount1}`;
    console.log("input ID ",input.id);

    const button = document.createElement("button");
    button.textContent = "+";
    button.classList.add("add_button");
    button.style.float="left";
    button.id = "button_"+buttonIdCount;
    console.log("add button iD",button.id);

    const remButton = document.createElement("button");
    remButton.textContent = "-";
    remButton.classList.add("rem_button");
    remButton.id = "remButton_"+buttonIdCount;
    console.log("remove button id",remButton.id);

    const addToCv = document.createElement("button");
    addToCv.textContent = "ADD DETAILS TO CV";
    addToCv.classList.add("addToCv");
    addToCv.id = "addToCv_"+buttonIdCount;
    console.log("addToCv_ button id",remButton.id);

    const removeFromCv = document.createElement("button");
    removeFromCv.textContent = "REMOVE LAST FROM CV";
    removeFromCv.classList.add("removeFromCv");
    removeFromCv.id = "removeFromCv_" + buttonIdCount;

    


    // Create a container div for the buttons
    const buttonContainer = document.createElement("div");
    const buttonContainer2 = document.createElement("div");

    buttonContainer2.classList.add("button-group_2");
    buttonContainer.classList.add("button-group");

    // Append buttons to the button container
    buttonContainer.appendChild(button);
    buttonContainer.appendChild(remButton);
    buttonContainer2.appendChild(addToCv);
    buttonContainer2.appendChild(removeFromCv);

    // Append the button container to the form
    newForm.appendChild(input);

    newForm.appendChild(buttonContainer);
    newForm.appendChild(buttonContainer2)


    
    newDiv.appendChild(newForm);

    // add input are to list==============================================================
    button.addEventListener("click",function(event){
        

        event.preventDefault();
        const listName = input.value;
        const newText = document.createElement("input");
    
        newText.type="Text";
        newText.classList.add("details");
        newText.placeholder= (listName==="")? "Enter List Details" :"Enter your "+listName;
        newText.id = 'details_'+listCount1+count1;
        console.log(newText.id);
            
        newForm.insertBefore(newText, buttonContainer);
    
        count1++;
        showCvAsImage()
    
    });
    
    //remove inputs ============================================================
    remButton.addEventListener("click", function (event) {
        event.preventDefault();
        const inputs = newForm.querySelectorAll("input[type='text']");
        if (inputs.length > 1) { // Ensure the main input field is not removed
            const lastInput = inputs[inputs.length - 1];
            if (lastInput !== input) {
                lastInput.remove();
            }
        }
        showCvAsImage()
    });

    //add list deta to cv==============================================================================================
    document.getElementById("addToCv_"+buttonIdCount).addEventListener("click", function(event) {
        event.preventDefault();
        let count1=0;
        // create new div class  send to adde forme
        const container2 = document.getElementById("righttDetails");
        const newDiv = document.createElement("div");
        newDiv.id = "div_"+formCount1;
        newDiv.classList.add("dive_CV");
        container2.appendChild(newDiv);

       
        // Add form title (List Name)
        const title = document.createElement("h3");
        title.textContent = input.value;
        title.classList.add("CV_Details_title");
        newDiv.appendChild(title);

        // Add all input values (except the main list name input)
            const inputs = newForm.querySelectorAll("input[type='text']");
                inputs.forEach((field) => {
                    if (field !== input ) {
                        const detail = document.createElement("p");
                        detail.classList.add("p_detail");
                        detail.textContent = field.value;
                        newDiv.appendChild(detail);
                    }
                count1++;

    });
    showCvAsImage()
   

    });


     //remove details from CV=======================================================================
  
     removeFromCv.addEventListener("click", function (event) {
        event.preventDefault(); 
        
        const container2 = document.getElementById("righttDetails");
        const lastDiv = container2.lastElementChild;

        if (lastDiv) {
            container2.removeChild(lastDiv);
        }
        showCvAsImage()
    });


formCount1++;
buttonIdCount++;
listCount1++;


    
});

// remove list right side

function removeList(){
    const remList=   document.getElementById("newDiv_"+(formCount1-1));
    if(remList){
      remList.remove();
      formCount1--;
      buttonIdCount--;
      listCount1--;
    }else{
      
    console.log("No list to remove");
    }
    // remopve details frm CV when all list remove 
    const container2 = document.getElementById("leftDetails");
          const lastDiv = container2.lastElementChild;
  
          if(lastDiv){
              container2.removeChild(lastDiv);
          }
          showCvAsImage()
  }
// =====================================================================================================================




// add list itam button 1================================================================= 
/* document.getElementById("button_"+buttonIdCount).addEventListener("click", function(event){
    const a = formCount1;
    a--
    event.preventDefault();

    const listName = document.getElementById("list"+listCount1).value;
    const form1 =  document.getElementById("form"+a);
    const newText = document.createElement("input");

   newText.type="Text";
   newText.placeholder= "Enter your "+listName;
   newText.id = `detail_${count1}`;
    
   const button = document.getElementById("button_2");
   form1.insertBefore(newText, button);

   count1++;
});*/




// document.getElementById("name").addEventListener("input", function () {
//     document.getElementById("NAME").innerHTML = document.getElementById("name").value;
// });
// // fill the CV==============================================================
// document.getElementById("generate-cv").addEventListener("click", function () {
//     const cvContent = `
//         <h1>${document.getElementById("name").value}</h1>
//         <p><strong>Email:</strong> ${document.getElementById("email").value}</p>
//         <p><strong>Phone:</strong> ${document.getElementById("phone").value}</p>
//         <p><strong>Address:</strong> ${document.getElementById("address").value}</p>
//         <p><strong>Education:</strong> ${document.getElementById("education").value}</p>
//         <p><strong>Work Experience:</strong> ${document.getElementById("experience").value}</p>
//         <p><strong>Skills:</strong> ${document.getElementById("skills").value}</p>
//     `;
//     document.getElementById("NAME").innerHTML = document.getElementById("name").value;    
//     //document.getElementById("cv-content").innerHTML = cvContent; 
//     document.getElementById("cv-preview").classList.remove("hidden");
// });

// dwonload the CV==============================================================

document.getElementById('download').addEventListener('click', function () {
    // Select the element to be converted
    const element = document.getElementById('content');
    
    // Define options for html2pdf
    const opt = {
        margin:       [0,0,0,-0.5],
        filename:     'my-web-page.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, scrollY: 0, x:247.5, y: 0 },

        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Convert the element to PDF
    html2pdf().set(opt).from(element).save();
});



//===============================================================================================================================



let formCount2=0;
let listCount3=0;
let buttonIdCount2 = 0;



//add list to right side===========================================================================================

document.getElementById("listAddButtonToRight").addEventListener("click", function(){
    let count1=0;
    // create new div class  to adde forme
    const container = document.getElementById("rightSide");
    const newDiv = document.createElement("div");
    const listAddButtonDiv = document.getElementById("listAddBttonDivToRight");
    newDiv.id = "newDiv2_"+formCount2;
    newDiv.classList.add("my_class");
    container.insertBefore(newDiv,listAddButtonDiv);

    // create new fome
    const newForm = document.createElement("form");
    newForm.classList.add("newfrom");
    newForm.id = "form2_"+formCount2;
    console.log('forme    s00 id',newForm.id);

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("listName")
    input.placeholder= "ENTER THE LISTNAME";
    input.id = `list2${listCount3}`;
    console.log("input ID ",input.id);

    const button = document.createElement("button");
    button.textContent = "+";
    button.classList.add("add_button");
    button.style.float="left";
    button.id = "button2_"+buttonIdCount2;
    console.log("add button iD",button.id);

    const remButton = document.createElement("button");
    remButton.textContent = "-";
    remButton.classList.add("rem_button");
    remButton.id = "remButton2_"+buttonIdCount2;
    console.log("remove button id",remButton.id);

    const addToCv = document.createElement("button");
    addToCv.textContent = "ADD DETAILS TO CV";
    addToCv.classList.add("addToCv");
    addToCv.id = "addToCv2_"+buttonIdCount2;
    console.log("addToCv_ button id",remButton.id);

    const removeFromCv = document.createElement("button");
    removeFromCv.textContent = "REMOVE LAST FROM CV";
    removeFromCv.classList.add("removeFromCv");
    removeFromCv.id = "removeFromCv2_" + buttonIdCount2;

    


    // Create a container div for the buttons
    const buttonContainer = document.createElement("div");
    const buttonContainer2 = document.createElement("div");

    buttonContainer2.classList.add("button-group_2");
    buttonContainer.classList.add("button-group");

    // Append buttons to the button container
    buttonContainer.appendChild(button);
    buttonContainer.appendChild(remButton);
    buttonContainer2.appendChild(addToCv);
    buttonContainer2.appendChild(removeFromCv);

    // Append the button container to the form
    newForm.appendChild(input);

    newForm.appendChild(buttonContainer);
    newForm.appendChild(buttonContainer2)



    
    

    
    
    newDiv.appendChild(newForm);

    // add input are to list==============================================================
    button.addEventListener("click",function(event){
        

        event.preventDefault();
        const listName = input.value;
        const newText = document.createElement("input");
    
        newText.type="Text";
        newText.classList.add("details");
        newText.placeholder= (listName==="")? "Enter List Details" :"Enter your "+listName;
        newText.id = 'details_'+listCount3+count1;
        console.log(newText.id);
            
        newForm.insertBefore(newText, buttonContainer);
    
        count1++;
        showCvAsImage()
    
    });
    
    //remove inputs ============================================================
    remButton.addEventListener("click", function (event) {
        event.preventDefault();
        const inputs = newForm.querySelectorAll("input[type='text']");
        if (inputs.length > 1) { // Ensure the main input field is not removed
            const lastInput = inputs[inputs.length - 1];
            if (lastInput !== input) {
                lastInput.remove();
            }
        }
        showCvAsImage()

    });

    //add list deta to cv==============================================================================================
    document.getElementById("addToCv2_"+buttonIdCount2).addEventListener("click", function(event) {
        event.preventDefault();
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        let count1=0;
        // create new div class  send to adde forme
        const container2 = document.getElementById("righttDetails");
        const newDiv = document.createElement("div");
        newDiv.id = "div2_"+formCount2;
        newDiv.classList.add("dive_CV_right");
        container2.appendChild(newDiv);

       
        // Add form title (List Name)
        const title = document.createElement("h3");
        title.textContent = input.value;
        title.classList.add("CV_Details_title");
        title.contentEditable = "true";
        newDiv.appendChild(title);

        // Add all input values (except the main list name input)
            const inputs = newForm.querySelectorAll("input[type='text']");
                inputs.forEach((field) => {
                    if (field !== input ) {
                        const detail = document.createElement("p");
                        detail.contentEditable = "true";
                        detail.classList.add("p_detail");
                        detail.textContent = field.value;
                        newDiv.appendChild(detail);
                    }
                count1++;

    });
    showCvAsImage()
   

    });


     //remove details from CV=======================================================================
  
     removeFromCv.addEventListener("click", function (event) {
        event.preventDefault(); 
        
        const container2 = document.getElementById("leftDetails");
        const lastDiv = container2.lastElementChild;

        if (lastDiv) {
            container2.removeChild(lastDiv);
        }
        showCvAsImage()
    });


formCount2++;
buttonIdCount2++;
listCount3++;


    
});
