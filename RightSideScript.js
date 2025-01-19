let formCount2=0;
let listCount=0;
let buttonIdCount = 0;

//add list to right side===========================================================================================

document.getElementById("listAddButtonToRight").addEventListener("click", function(){
    let count1=0;
    // create new div class  to adde forme
    const container = document.getElementById("rightSide");
    const newDiv = document.createElement("div");
    const listAddButtonDiv = document.getElementById("listAddBttonDivToRight");
    newDiv.id = "newDiv_1"+formCount2;
    newDiv.classList.add("my_class");
    container.insertBefore(newDiv,listAddButtonDiv);

    // create new fome
    const newForm = document.createElement("form");
    newForm.classList.add("newfrom");
    newForm.id = "form_"+formCount2;
    console.log('forme id',newForm.id);

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("listName")
    input.placeholder= "ENTER THE LISTNAME";
    input.id = `list${listCount}`;
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
        newText.id = 'details_'+listCount+count1;
        console.log(newText.id);
            
        newForm.insertBefore(newText, buttonContainer);
    
        count1++;
    
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

    });

    //add list deta to cv==============================================================================================
    document.getElementById("addToCv_"+buttonIdCount).addEventListener("click", function(event) {
        event.preventDefault();
        let count1=0;
        // create new div class  send to adde forme
        const container2 = document.getElementById("righttDetails");
        const newDiv = document.createElement("div");
        newDiv.id = "div_"+formCount2;
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
    });


formCount2++;
buttonIdCount++;
listCount++;


    
});

// remove list right side

// function removeListfromRigth()

 function removeListfromRigth (){
    
        const remList=   document.getElementById("newDiv_1"+(formCount2-1));
        if(remList){
          remList.remove();
          formCount2--;
          buttonIdCount--;
          listCount--;
        }else{
          
        console.log("No list to remove");
        }
        // remopve details frm CV when all list remove 
        const container2 = document.getElementById("righttDetails");
              const lastDiv = container2.lastElementChild;
      
              if(lastDiv){
                  container2.removeChild(lastDiv);
              }
         
      
}
// =====================================================================================================================
