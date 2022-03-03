import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import MOVIE_OBJECT from '@salesforce/schema/Movie__c';
import NAME_FIELD from '@salesforce/schema/Movie__c.Name';
import DATE_FIELD from '@salesforce/schema/Movie__c.Release_Date__c';
import COUNTRY_FIELD from '@salesforce/schema/Movie__c.Country__c';
import GENRE_FIELD from '@salesforce/schema/Movie__c.Genre__c';
import LANGUAGE_FIELD from '@salesforce/schema/Movie__c.Languages__c';
import CATEGORIE_FIELD from '@salesforce/schema/Movie__c.Categorie__c';


export default class MovieCreator extends LightningElement {
    objectApiName = MOVIE_OBJECT;
    fields = [NAME_FIELD, DATE_FIELD, COUNTRY_FIELD, LANGUAGE_FIELD, GENRE_FIELD, CATEGORIE_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}