        //     // People use console when debuging
        //      name ="Fihlo"; console.log(name)
        //     //if u want to put the two diffent line in one one put samecolon
        //    // you can changethe variable name
        //     name = "Singita"
        //     // its going tp print the name 
        //     console.log(name)
        //     // the order that u write ur code as its going to print that way, its not going to jump to net line 
        /*let firstname = "Fihlo"// string
        let age = 12 //number
        let student =["Fihlo,Singita"]  //arrays it can be anything, whether its numbers or string,
        let personInfo={
            "name": "Fihlo",
            "age" : 12

        }//this is json objective, key value pad, its always be string and numbers*/
        // let firstname = "fihlo"
        // let age = 12
        // let studentsNames = ["Fihlo" , "Singita"]//arrays
        
        // let personInfo = {
        //     "Name": "Fihlo",
        //     "age": 12
        // }//JSON objects

        // 13 May 2024
        // connecting javaScript to web page
        // let h1Element = document.getElementsByTagName("h1")
        // console.log(h1Element)
        // access the dom  we use the documets, and get what is the document we use dot(.), get the element we use getElementsByTagName(h1)u have to specify where u want to the elements,its going to release all elements that are in n1
        // let h1Element = document.querySelectorAll(".second-p")
        //  console.log(h1Element)
         //if you dont want to use the getElementByTagName, u can use the querySelectorAll("p")
        //  if you want to select the second paragrph you use .second-p
        // let h1Element = document.querySelector(".second-p")
        // console.log(h1Element)
        // if u want to return one element not as a list u use querySelector(".second-P")
        // let h1Element = document.querySelector("p")
        // // console.log(h1Element)
        // this will return the first element (seletor p) that it will get.\
    //    let h1Content = h1Element.textContent
    //    this will return the content without the tags
        // console.log(h1Content)
        // u when assign it to something make sure its prints whatever u are looking for.
        let p1Element  = document.querySelectorAll("p")[0]
        // we that dodument.querySelectorAll is an arry/list, so to access the first paragraph/element we use index [0]
       let p1COntent = p1Element.textContent
        console.log(p1COntent)
    
        // CREATING NEW ELEMENT
        const myButton = document.createElement("button")
        // if u want to create something we use create element, it either be div/button
        // first we created a button, now we must find location where to add the button
        
        // we use document, everything is inside the body , and the location where we want(before) the button, we must have two methods that we pass,which is the new element(myButton) and the element we are insecting before(p1Element)
        myButton.textContent = "console Hello"
        // if we want to add content in our button we this, it acn be anything("console Hello/click/next") 
        // an button is an eleemnt, for its to have funcianality you ahve to tell on what it needs to do

        // CREATE A FUNCTION
        // we use key word function
        // VOID FUNCTION
        function printMessage(){
            // whatever u want to run when u call the function should br put in here
            console.log("hello basic webpge")
        }
        // myButton.onclick = printMessage
        // after someone click the button i want it to return the function(printMessage)
        myButton.addEventListener("click",printMessage)
        // OR u can use it like this,
        document.body.insertBefore(myButton,p1Element)

        // Returning Function
        function getfullName(firstname, lastName) //to parameters which a person can pass in
        {
            let tmpFullName = firstname + " " + lastName
            // return tmpFullName

        }
        let fullName = getfullName("Fihlo", "Ntimane")
        console.log(fullName)