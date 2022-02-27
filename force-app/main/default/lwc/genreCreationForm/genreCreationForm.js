import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import GENRE_OBJECT from '@salesforce/schema/Genre__c';
import GENRE_NAME from '@salesforce/schema/Genre__c.Name';

export default class GenreCreationForm extends LightningElement {
    objectApiName = GENRE_OBJECT;
    fields = [GENRE_NAME];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Genre created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}