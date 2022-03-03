trigger updateMovieRecordAfterRent on Rent__c (after insert) {

    List<Movie__c> moviesRecords= new List<Movie__c>();
    Set<Rent__c> rentId = new Set<Rent__c>();

    for(Rent__c lastRent: Trigger.new){
        rentId.add(Trigger.newMap.get(lastRent));
    }

    for(Movie__c lastMovie: moviesRecords){
        lastMovie.Availability__c = 'Rented';
        moviesRecords.add(lastMovie);
    }
    update moviesRecords;
}