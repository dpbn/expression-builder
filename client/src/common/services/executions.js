/* angular service */
angular.module("os.executions", []).provider('Executions', function(){
	return {
		$get: function($http, $q){
			return {
				get: function(){
					var p = $q.defer();
					var response = {
						values:[ {
						  "id" : "481e61f3-ab25-42da-a5ec-2dd015930271",
						  "hashKey" : "company:3771",
						  "modelType" : "execution",
						  "accountId" : "1374324466146211",
						  "name" : "Northeast Optimization (Hourly)",
						  "icon" : "fa-umbrella",
						  "ruleIds" : [ "b28e5360-246d-4364-bd26-15e73b2ed96b" ],
						  "entityType" : "campaign",
						  "entityIds" : [ "6013543439148", "6013543329748", "6013543328348", "6013543297348", "6013543296548", "6013543271748", "6013543270348", "6013543246148", "6013543224948", "6013543222948" ],
						  "email" : "ml@bn.co",
						  "scheduleId" : "707fe7b6-8688-4e2e-9f95-9cb30f764cd9",
						  "locked" : { },
						  "createdBy" : "quentin_d_wilson@homedepot.com",
						  "createdOn" : "2013-12-04T09:30:21-0500",
						  "modifiedBy" : "dp@bn.co",
						  "modifiedOn" : "2014-03-04T15:35:02-0500"
							}, {
							  "id" : "aaa9eb13-6e80-4dfd-82ee-3acb844f1833",
							  "hashKey" : "company:3771",
							  "modelType" : "execution",
							  "accountId" : "1376399515939581",
							  "name" : "Sydney",
							  "icon" : "fa-bolt",
							  "ruleIds" : [ "ef728d51-b260-47e6-91bb-a5602c5b870f" ],
							  "entityType" : "campaign",
							  "entityIds" : [ "6010491773675", "6010491756675", "6010432366075", "6010432357275", "6010432336675", "6010432328275", "6010432273275", "6010432269075" ],
							  "email" : "product@optimalsocial.com",
							  "scheduleId" : "49f09623-c192-4c2f-b98b-5fe752df1408",
							  "locked" : {
							    "6010491776875" : true,
							    "6010432353275" : true,
							    "6010432342275" : true,
							    "6010432278075" : true
							  },
							  "createdBy" : "nicholas+purina@optimalsocial.com",
							  "createdOn" : "2013-12-12T02:06:33-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-27T15:43:12-0500"
							}, {
							  "id" : "1a92f126-0a40-466d-86fe-6c554a203445",
							  "hashKey" : "company:3771",
							  "modelType" : "execution",
							  "accountId" : "1374649259454995",
							  "name" : "Inventory Optimization",
							  "icon" : "fa-money",
							  "ruleIds" : [ "9af6d6da-154c-49fb-87d5-2dfd2d75b620" ],
							  "entityType" : "campaign",
							  "entityIds" : [ "6011384527848", "6011384522048", "6011384518848", "6011384515648", "6011384512448", "6011384509248", "6011384506048", "6011384502648", "6011384499248", "6011384494248", "6011384492048", "6011384487448", "6011384484048", "6011384480848", "6011384477648", "6011384474448", "6011384471448", "6011384467848", "6011384463248", "6011384459848", "6011384457648", "6011384453248", "6011384452448", "6011384445048", "6011384444248", "6011384438248", "6011384435048", "6011384429448", "6011384428448", "6011384420248" ],
							  "email" : null,
							  "scheduleId" : "77854126-09eb-41a0-9916-753fe5d7c4ff",
							  "locked" : { },
							  "createdBy" : "dianatobey@gmail.com",
							  "createdOn" : "2013-12-17T19:10:55-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-27T15:44:46-0500"
							}, {
							  "id" : "d4c99c21-7058-4549-b4d6-1bf9b081d741",
							  "hashKey" : "company:3771",
							  "modelType" : "execution",
							  "accountId" : "1374649259454995",
							  "name" : "Inventory Optimization - Target",
							  "icon" : "fa-money",
							  "ruleIds" : [ "3d682d0a-cac0-41a9-b0a4-a5ac25e43c01" ],
							  "entityType" : "campaign",
							  "entityIds" : [ "6011505813048", "6011505811848", "6011505811048", "6011505787448", "6011505786648", "6011505759448", "6011505758448", "6011505737648", "6011505736448", "6011505712448", "6011505711448", "6011505690248", "6011505689448" ],
							  "email" : null,
							  "scheduleId" : null,
							  "locked" : { },
							  "createdBy" : "dianatobey@gmail.com",
							  "createdOn" : "2013-12-19T18:27:44-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-27T15:58:21-0500"
							}, {
							  "id" : "865f2fef-f1a2-4eee-8699-6bb11f6c2acf",
							  "hashKey" : "company:3771",
							  "modelType" : "execution",
							  "accountId" : "1374324466146211",
							  "name" : "Planalytics - Snow Thrower",
							  "icon" : "fa-umbrella",
							  "ruleIds" : [ "b4f39876-ae26-4fe7-91d4-91e903ed5d0f", "e64126f9-f512-442e-b9f5-1d9e5a6d84ac", "876ae5c1-b5e4-46d2-a15c-d94424612b0f" ],
							  "entityType" : "campaign",
							  "entityIds" : [ "6013543656948", "6013543638148", "6013543622748", "6013543603548", "6013543594748", "6013543581748", "6013543568748", "6013543555148", "6013543542348", "6013543529548", "6013543516748", "6013543491548", "6013543488948", "6013543465748", "6013543464748", "6013543440148", "6013543439148", "6013543414548", "6013543410148", "6013543382148", "6013543381348", "6013543361348", "6013543346748", "6013543329748", "6013543328348", "6013543297348", "6013543296548", "6013543271748", "6013543270348", "6013543246148", "6013543224948", "6013543222948", "6013359991148", "6013359977748", "6013358656148" ],
							  "email" : null,
							  "scheduleId" : "3749295d-165e-45d9-805a-7522c45c8819",
							  "locked" : { },
							  "createdBy" : "dianatobey@gmail.com",
							  "createdOn" : "2014-01-08T18:06:03-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-27T15:45:03-0500"
							}, {
							  "id" : "e0f04d62-9517-4114-a0ad-4d64de3cfe66",
							  "hashKey" : "company:3771",
							  "modelType" : "execution",
							  "accountId" : "0",
							  "name" : "Planalytics Test",
							  "icon" : "fa-umbrella",
							  "ruleIds" : [ "09407b13-a198-4fe2-82c9-27e5ebb07d0e" ],
							  "entityType" : "campaign",
							  "entityIds" : [ ],
							  "email" : null,
							  "scheduleId" : null,
							  "locked" : { },
							  "createdBy" : "mlewis@brandnetworksinc.com",
							  "createdOn" : "2014-01-17T11:52:18-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-01-24T13:22:12-0500"
							}, {
							  "id" : "091f9d30-b950-4e8e-9cb4-3436b3a143d1",
							  "hashKey" : "company:3771",
							  "modelType" : "execution",
							  "accountId" : "1y94sl",
							  "name" : "TV Ad Syncing",
							  "icon" : "fa-cloud-download",
							  "ruleIds" : [ "8193589b-8c8a-4a10-8fdc-297940058736" ],
							  "entityType" : "campaign",
							  "entityIds" : [ "2mo", "2td", "38i", "3is" ],
							  "email" : null,
							  "scheduleId" : "7c8ceb20-f225-430a-8a2f-066178360672",
							  "locked" : { },
							  "createdBy" : "diana@optimalsocial.com",
							  "createdOn" : "2014-02-11T12:56:21-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-20T15:52:17-0500"
							}, {
							  "id" : "2b00de3d-60e3-4bb8-bce8-a31d1b052598",
							  "hashKey" : "company:3771",
							  "modelType" : "execution",
							  "accountId" : "1374324466146211",
							  "name" : "Test Push Execution",
							  "icon" : "fa-bolt",
							  "ruleIds" : [ "3929097d-316d-42e1-a4dc-8c168243c30b" ],
							  "entityType" : "campaign",
							  "entityIds" : [ ],
							  "email" : null,
							  "scheduleId" : null,
							  "locked" : { },
							  "createdBy" : "mlewis@brandnetworksinc.com",
							  "createdOn" : "2014-02-27T09:44:36-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-03-07T15:42:25-0500"
							}, {
							  "id" : "4888b224-7dbe-4dd2-8e26-c7d9d75f1ce4",
							  "hashKey" : "company:3771",
							  "modelType" : "execution",
							  "accountId" : "1374649259454995",
							  "name" : "Test Empty Execution",
							  "icon" : "fa-bolt",
							  "ruleIds" : [ "62f4c85d-c473-44f3-a36e-2c748e278966" ],
							  "entityType" : "campaign",
							  "entityIds" : [ ],
							  "email" : null,
							  "scheduleId" : null,
							  "locked" : { },
							  "createdBy" : "mlewis@brandnetworksinc.com",
							  "createdOn" : "2014-02-27T16:24:59-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-28T10:19:36-0500"
							} ]
					};
					p.resolve(response);
					return p.promise;
				}	
			}
		}
	}
});