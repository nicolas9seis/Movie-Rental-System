@isTest class PreparePlaygroundTest {
    @isTest static void testMySandboxPrep() {
        Test.startTest();
        Test.testSandboxPostCopyScript(
            new PreparePlayground.runApexClass(),
            UserInfo.getOrganizationId(),
            UserInfo.getOrganizationId(),
            UserInfo.getOrganizationName()
        );
        Test.stopTest();
        System.assertEquals(1000, [select count() from Movie__c],'It was great');

    }
}