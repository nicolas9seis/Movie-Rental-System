import { LightningElement, api } from 'lwc';
import RENT_FIELD from '@salesforce/schema/Rent__c.Name';

export default class RecordEditFormExample extends LightningElement {
    // Expose a field to make it available in the template
    nameField = RENT_FIELD;

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;
}