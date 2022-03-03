public with sharing class UpdateMovieRentedHelper {
    public static void updateMovie(Rent__c lastMovieRented) {

    //Check if the movie has units available 
    if(lastMovieRented.Quantity__c > 0){
        lastMovieRented.Quantity__c = lastMovieRented.Quantity__c - 1;
    } else if (lastMovieRented.Quantity__c == 0){
        lastMovieRented.Availability__c = 'Rented';
    }

    }
}
