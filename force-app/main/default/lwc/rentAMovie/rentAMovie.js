import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import RENT_OBJECT from '@salesforce/schema/Rent__c';
import MOVIE_FIELD from '@salesforce/schema/Rent__c.Movie__c';
import CONTACT_FIELD from '@salesforce/schema/Rent__c.Contact__c';
import DATEOFRENTAL_FIELD from '@salesforce/schema/Rent__c.Date_of_Rental__c';

export default class RentCreator extends LightningElement {
    objectApiName = RENT_OBJECT;
    fields = [MOVIE_FIELD, DATEOFRENTAL_FIELD, CONTACT_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Rent created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}