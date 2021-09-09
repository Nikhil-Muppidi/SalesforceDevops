import { LightningElement } from 'lwc';

export default class ContactSignUp extends LightningElement {
    contact = {}

    //This function will check validity for all the input fields and returns true if valid false if invalid
    inputValidity(){
        let isValid = true;
        let inputFields = this.template.querySelectorAll('.validate');//Getting all the input fields
        inputFields.forEach(inputField=>{
            //console.log(`${inputField.name} : ${inputField.value}`)
            if(!inputField.checkValidity()){ //Checking the validity of the field, this checkValidity() functions is available for all input fields
                inputField.reportValidity(); // if not valid, then report the validity
                isValid = false;
            }
            this.contact[inputField.name] = inputField.value; //
        });
        console.log(isValid);
        return isValid;
    }
    signUpHandler(){
        if(this.inputValidity()){
            console.log(this.contact)
        }
    }
}