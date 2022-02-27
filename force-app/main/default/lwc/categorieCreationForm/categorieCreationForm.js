import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CATEGORIE_OBJECT from '@salesforce/schema/Categorie__c';
import CATEGORIE_NAME from '@salesforce/schema/Categorie__c.Name';

export default class GenreCreationForm extends LightningElement {
    objectApiName = CATEGORIE_OBJECT;
    fields = [CATEGORIE_NAME];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Categorie created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}