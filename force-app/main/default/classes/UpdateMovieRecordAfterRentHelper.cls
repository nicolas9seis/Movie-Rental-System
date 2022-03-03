public with sharing class UpdateMovieRecordAfterRentHelper {

    public static void updateMovie() {

        Rent__c lastRent = [SELECT Id FROM Rent__c ORDER BY CreatedDate DESC LIMIT 1];
        lastRent.Rents__r.Movie__c.Quantity__c = 1;
                                

    }
}
