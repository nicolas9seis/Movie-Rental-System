global class PreparePlayground implements SandboxPostCopy {
    global void runApexClass(SandboxContext context) {
         
        /*
         * Insert sample Movies
         */
        StaticResource movieStaticResource = [select Body from StaticResource
                                                where Name = 'Movie_csv'];
        String movieCsv = movieStaticResource.Body.toString();
        Movie__c[] movieList = new Movie__c[] {};
        for(String row : movieCsv.split('\n')) {
            String[] column = row.split(',');
            accountList.add(new Movie__c(
                Name = column[1],
                Release_Date__c = column[2],
                Country__c = column[3],
                Genre__c = column[4],
                Categorie__c = [5],
                Quantity__c = [6]
            ));
        }
        insert movieList;
         
        /*
         * Use a Map to avoid creating an unnecessary External ID field on Movie
         */
        Map<String, Id> MovieMap = new Map<String, Id>();
        for (Movie__c mov : movieList) {
            accountMap.put(mov.Name, mov.Id);
        }
        

    }
}