angular.module("os.rules", []).provider('Rules', function(){
	return {
		$get: function($http, $q){
			return {
				get: function(){
					var p = $q.defer();

					var response = { 
						values: [ 
							{
							  "id" : "9af6d6da-154c-49fb-87d5-2dfd2d75b620",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Inventory Optimization",
							  "icon" : "icon-money",
							  "description" : "fwefwef",
							  "runLevel" : "campaign",
							  "signalIds" : [ "fd4881e3-d885-4b76-b7d5-f1a857ab6fd4", "bf217f27-a96e-4bb1-b3ec-883781ad6c7e" ],
							  "template" : {
							    "expr" : "A and B and C",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A && this.B && this.C", "'null' && 'null' && 'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "In Stock?",
							    "expr" : "inventory_feed.inventory > 25",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.inventory_feed.inventory > 25", "'?????' > 25", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "On Sale?",
							    "expr" : "inventory_feed.flashsaleproduct == \"Yes\"",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.inventory_feed.flashsaleproduct == \"Yes\"", "'?????' == \"Yes\"", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Sales Margin > 20?",
							    "expr" : "offline_sales.sale_margin > 20",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.offline_sales.sale_margin > 20", "'?????' > 20", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "default",
							    "type" : "email",
							    "match" : true,
							    "expr" : "product@optimalsocial.com",
							    "execute" : null
							  }, {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : true,
							    "expr" : "1",
							    "execute" : null
							  }, {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : false,
							    "expr" : "2",
							    "execute" : null
							  } ],
							  "createdBy" : "jwood+1@optimalsocial.com",
							  "createdOn" : "2013-09-23T22:44:11-0400",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-01-23T14:02:06-0500",
							  "runEvery" : 1,
							  "runUnits" : "hour"
							}, {
							  "id" : "876ae5c1-b5e4-46d2-a15c-d94424612b0f",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Weather Optimization (Home Depot)",
							  "icon" : "fa-umbrella",
							  "description" : null,
							  "runLevel" : "campaign",
							  "signalIds" : [ "32fd0ef7-79f1-4522-882a-f6984b944029" ],
							  "template" : {
							    "expr" : "A and B and (C or D)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A && this.B && (this.C || this.D)", "'null' && 'null' && ('null' || 'null')", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "Name = City?",
							    "expr" : "true // new RegExp(HDweather.city).test(campaign.name)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "true // new RegExp(this.HDweather.city).test(this.campaign.name)", "true // new RegExp('?????').test('?????')", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Snowing?",
							    "expr" : "_.contains([\"S\",\"SW\",\"BS\"],HDweather.weatherCode)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "_.contains([\"S\",\"SW\",\"BS\"],this.HDweather.weatherCode)", "_.contains([\"S\",\"SW\",\"BS\"],'?????')", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Heavy Coverage?",
							    "expr" : "!_.contains([\"BR\",\"C\",\"IN\",\"IS\",\"L\",\"O\",\"PA\",\"PD\",\"S\",\"SC\",\"VC\"],HDweather.coverageCode)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "!_.contains([\"BR\",\"C\",\"IN\",\"IS\",\"L\",\"O\",\"PA\",\"PD\",\"S\",\"SC\",\"VC\"],this.HDweather.coverageCode)", "!_.contains([\"BR\",\"C\",\"IN\",\"IS\",\"L\",\"O\",\"PA\",\"PD\",\"S\",\"SC\",\"VC\"],'?????')", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Heavy Intensity?",
							    "expr" : "!_.contains([\"L\",\"VL\"],HDweather.intensityCode)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "!_.contains([\"L\",\"VL\"],this.HDweather.intensityCode)", "!_.contains([\"L\",\"VL\"],'?????')", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : true,
							    "expr" : "1",
							    "execute" : null
							  }, {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : false,
							    "expr" : "2",
							    "execute" : null
							  } ],
							  "createdBy" : "quentin_d_wilson@homedepot.com",
							  "createdOn" : "2013-11-07T22:31:19-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-01-23T14:02:06-0500",
							  "runEvery" : 30,
							  "runUnits" : "minute"
							}, {
							  "id" : "b28e5360-246d-4364-bd26-15e73b2ed96b",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Northeast Optimization (Hourly)",
							  "icon" : "fa-umbrella",
							  "description" : null,
							  "runLevel" : "campaign",
							  "signalIds" : [ "db17bca8-d30b-4de0-bb3d-aeab5ab9cbe7" ],
							  "template" : {
							    "expr" : "A and B and (C or D)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A && this.B && (this.C || this.D)", "'null' && 'null' && ('null' || 'null')", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "Name = City?",
							    "expr" : "new RegExp(hourNE.city).test(campaign.name)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "new RegExp(this.hourNE.city).test(this.campaign.name)", "new RegExp('?????').test('?????')", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Snowing?",
							    "expr" : "_.contains([\"S\",\"SW\",\"BS\"],hourNE.weatherCode)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "_.contains([\"S\",\"SW\",\"BS\"],this.hourNE.weatherCode)", "_.contains([\"S\",\"SW\",\"BS\"],'?????')", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Heavy Coverage?",
							    "expr" : "!_.contains([\"BR\",\"C\",\"IN\",\"IS\",\"L\",\"O\",\"PA\",\"PD\",\"S\",\"SC\",\"VC\"],hourNE.coverageCode)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "!_.contains([\"BR\",\"C\",\"IN\",\"IS\",\"L\",\"O\",\"PA\",\"PD\",\"S\",\"SC\",\"VC\"],this.hourNE.coverageCode)", "!_.contains([\"BR\",\"C\",\"IN\",\"IS\",\"L\",\"O\",\"PA\",\"PD\",\"S\",\"SC\",\"VC\"],'?????')", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Heavy Intensity?",
							    "expr" : "!_.contains([\"L\",\"VL\"],hourNE.intensityCode)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "!_.contains([\"L\",\"VL\"],this.hourNE.intensityCode)", "!_.contains([\"L\",\"VL\"],'?????')", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : true,
							    "expr" : "1",
							    "execute" : null
							  }, {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : false,
							    "expr" : "2",
							    "execute" : null
							  }, {
							    "target" : "default",
							    "type" : "email",
							    "match" : true,
							    "expr" : "ml@bn.co",
							    "execute" : null
							  } ],
							  "createdBy" : "quentin_d_wilson@homedepot.com",
							  "createdOn" : "2013-11-07T22:31:19-0500",
							  "modifiedBy" : "dp@bn.co",
							  "modifiedOn" : "2014-03-04T15:33:34-0500",
							  "runEvery" : 30,
							  "runUnits" : "minute"
							}, {
							  "id" : "d56c84c8-e0a5-445d-9929-5ad376502050",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Alaska Optimization (Hourly)",
							  "icon" : "fa-umbrella",
							  "description" : null,
							  "runLevel" : "ad",
							  "signalIds" : [ "524f1428-0fca-4131-8657-437b246929c5" ],
							  "template" : {
							    "expr" : "A and B and C",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A && this.B && this.C", "'null' && 'null' && 'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "Today?",
							    "expr" : "hourAK.date == \"today\"",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.hourAK.date == \"today\"", "'?????' == \"today\"", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Targeting Match?",
							    "expr" : "hourAK.city == ad.targeting.cities",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.hourAK.city == this.ad.this.targeting.cities", "'?????' == '?????'.cities", "?????" ],
							    "enabled" : false
							  }, {
							    "name" : "Snowy?",
							    "expr" : "(hourAK.weatherCode == \"S\") || (hourAK.weatherCode == \"SW\") || (hourAK.weatherCode == \"BS\")",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "(this.hourAK.weatherCode == \"S\") || (this.hourAK.weatherCode == \"SW\") || (this.hourAK.weatherCode == \"BS\")", "('?????' == \"S\") || ('?????' == \"SW\") || ('?????' == \"BS\")", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "default",
							    "type" : "email",
							    "match" : true,
							    "expr" : "product@optimalsocial.com",
							    "execute" : null
							  } ],
							  "createdBy" : "quentin_d_wilson@homedepot.com",
							  "createdOn" : "2013-11-09T01:24:02-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-27T15:44:39-0500",
							  "runEvery" : 1,
							  "runUnits" : "hour"
							}, {
							  "id" : "ef728d51-b260-47e6-91bb-a5602c5b870f",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Sales Optimization - Purina",
							  "icon" : "fa-shopping-cart",
							  "description" : null,
							  "runLevel" : "campaign",
							  "signalIds" : [ "8ba4800a-43e7-4cdd-9103-888874855147", "bac8d504-9232-4912-87e6-2a3da75af4fc" ],
							  "template" : {
							    "expr" : "A and B",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A && this.B", "'null' && 'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "% Sales",
							    "expr" : "salesAU.percentage_total > 25",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.salesAU.percentage_total > 25", "'?????' > 25", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "ROI > 50%",
							    "expr" : "( salesAU.profit - ad_stats_purina.spend ) / salesAU.profit > 1.5",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "( this.salesAU.profit - this.ad_stats_purina.spend ) / this.salesAU.profit > 1.5", "( '?????' - '?????' ) / '?????' > 1.5", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "default",
							    "type" : "email",
							    "match" : true,
							    "expr" : "product@optimalsocial.com",
							    "execute" : null
							  }, {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : true,
							    "expr" : "1",
							    "execute" : null
							  }, {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : false,
							    "expr" : "2",
							    "execute" : null
							  } ],
							  "createdBy" : "nicholas+purina@optimalsocial.com",
							  "createdOn" : "2013-12-13T02:47:23-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-01-29T10:15:04-0500",
							  "runEvery" : 1,
							  "runUnits" : "hour"
							}, {
							  "id" : "3d682d0a-cac0-41a9-b0a4-a5ac25e43c01",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Inventory Optimization - Target",
							  "icon" : "fa-money",
							  "description" : null,
							  "runLevel" : "campaign",
							  "signalIds" : [ "ccf0d35e-eb2f-4e17-b71b-57a0d7150371" ],
							  "template" : {
							    "expr" : "A and B",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A && this.B", "'null' && 'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "Always On?",
							    "expr" : "inventory.date == \"Always On\"",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.inventory.date == \"Always On\"", "'?????' == \"Always On\"", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Future WOS < 1 Week?",
							    "expr" : "inventory.future_wos < 1",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.inventory.future_wos < 1", "'?????' < 1", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "default",
							    "type" : "email",
							    "match" : true,
							    "expr" : "product@optimalsocial.com",
							    "execute" : null
							  }, {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : true,
							    "expr" : "2",
							    "execute" : null
							  } ],
							  "createdBy" : "dianatobey@gmail.com",
							  "createdOn" : "2013-12-19T18:25:05-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-01-23T14:02:06-0500",
							  "runEvery" : 1,
							  "runUnits" : "day"
							}, {
							  "id" : "b4f39876-ae26-4fe7-91d4-91e903ed5d0f",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Planalytics - Snow Thrower (Favorable)",
							  "icon" : "fa-umbrella",
							  "description" : null,
							  "runLevel" : "campaign",
							  "signalIds" : [ "acb59d9e-f2d9-4bb8-945d-6fa16636dac1" ],
							  "template" : {
							    "expr" : "A and B and C",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A && this.B && this.C", "'null' && 'null' && 'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "Favorable?",
							    "expr" : "planalytics.favorability == \"Favorable\"",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.planalytics.favorability == \"Favorable\"", "'?????' == \"Favorable\"", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Today?",
							    "expr" : "planalytics.date == {today}",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.planalytics.date == 2014-01-22", "'?????' == 2014-01-22", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Tomorrow?",
							    "expr" : "planalytics.date == {today+1}",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.planalytics.date == 2014-01-23", "'?????' == 2014-01-23", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : true,
							    "expr" : "1",
							    "execute" : null
							  }, {
							    "target" : "campaign",
							    "type" : "none",
							    "match" : false,
							    "expr" : "",
							    "execute" : null
							  } ],
							  "createdBy" : "dianatobey@gmail.com",
							  "createdOn" : "2014-01-08T18:03:32-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-01-23T14:02:05-0500",
							  "runEvery" : 1,
							  "runUnits" : "day"
							}, {
							  "id" : "e64126f9-f512-442e-b9f5-1d9e5a6d84ac",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Planalytics - Snow Thrower (Unfavorable)",
							  "icon" : "fa-umbrella",
							  "description" : null,
							  "runLevel" : "campaign",
							  "signalIds" : [ "acb59d9e-f2d9-4bb8-945d-6fa16636dac1" ],
							  "template" : {
							    "expr" : "A and B",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A && this.B", "'null' && 'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "Favorable?",
							    "expr" : "planalytics.favorability == \"Unfavorable\"",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.planalytics.favorability == \"Unfavorable\"", "'?????' == \"Unfavorable\"", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Today?",
							    "expr" : "planalytics.date == {today}",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.planalytics.date == 2014-01-22", "'?????' == 2014-01-22", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "campaign",
							    "type" : "campaign_status",
							    "match" : true,
							    "expr" : "2",
							    "execute" : null
							  }, {
							    "target" : "campaign",
							    "type" : "none",
							    "match" : false,
							    "expr" : "",
							    "execute" : null
							  } ],
							  "createdBy" : "dianatobey@gmail.com",
							  "createdOn" : "2014-01-08T18:03:32-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-01-23T14:02:05-0500",
							  "runEvery" : 1,
							  "runUnits" : "day"
							}, {
							  "id" : "09407b13-a198-4fe2-82c9-27e5ebb07d0e",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Planalytics Test Rule",
							  "icon" : "fa-list",
							  "description" : null,
							  "runLevel" : "ad",
							  "signalIds" : [ "88bb9729-5514-4a8f-97d3-e06ade7b63ad" ],
							  "template" : {
							    "expr" : "A",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A", "'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "City",
							    "expr" : "planalytics.date == {today-12}",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.planalytics.date == 2014-01-09", "'?????' == 2014-01-09", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "default",
							    "type" : "email",
							    "match" : true,
							    "expr" : "mlewis@brandnetworksinc.com",
							    "execute" : null
							  } ],
							  "createdBy" : "mlewis@brandnetworksinc.com",
							  "createdOn" : "2014-01-16T14:26:23-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-01-21T15:32:08-0500",
							  "runEvery" : 1,
							  "runUnits" : "hour"
							}, {
							  "id" : "8193589b-8c8a-4a10-8fdc-297940058736",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "TV Ad Syncing",
							  "icon" : "fa-cloud-download",
							  "description" : null,
							  "runLevel" : "ad",
							  "signalIds" : [ "22e1b39c-77da-4597-a40d-a7aac7aa9e6c" ],
							  "template" : {
							    "expr" : "A and B",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A && this.B", "'null' && 'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "Airing Now?",
							    "expr" : "civolution.Start_Time >= {now-12hr}",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.civolution.Start_Time >= {now-12hr}", "'?????' >= {now-12hr}", "?????" ],
							    "enabled" : true
							  }, {
							    "name" : "Brand?",
							    "expr" : "civolution.Brand == \"Target\"",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.civolution.Brand == \"Target\"", "'?????' == \"Target\"", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "ad",
							    "type" : "adgroup_status",
							    "match" : true,
							    "expr" : "'ACTIVE'",
							    "execute" : null
							  }, {
							    "target" : "ad",
							    "type" : "adgroup_status",
							    "match" : true,
							    "expr" : "'ADGROUP_PAUSED'",
							    "execute" : null
							  } ],
							  "createdBy" : "diana@optimalsocial.com",
							  "createdOn" : "2014-02-11T12:56:40-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-14T11:25:54-0500",
							  "runEvery" : 5,
							  "runUnits" : "minute"
							}, {
							  "id" : "3da29bd3-443c-46d0-a33a-0fd8211c9d5d",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "TV Ad Sync 2",
							  "icon" : "fa-list",
							  "description" : null,
							  "runLevel" : "campaign",
							  "signalIds" : [ "22e1b39c-77da-4597-a40d-a7aac7aa9e6c" ],
							  "template" : {
							    "expr" : "A",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A", "'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "Brand?",
							    "expr" : "civolution.Brand == \"ESPN\"",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.civolution.Brand == \"ESPN\"", "'?????' == \"ESPN\"", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "default",
							    "type" : "email",
							    "match" : true,
							    "expr" : "ml@bn.co",
							    "execute" : null
							  }, {
							    "target" : "default",
							    "type" : "email",
							    "match" : false,
							    "expr" : "ml@bn.co",
							    "execute" : null
							  } ],
							  "createdBy" : "mlewis@brandnetworksinc.com",
							  "createdOn" : "2014-02-19T17:16:10-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-19T17:17:33-0500",
							  "runEvery" : 1,
							  "runUnits" : "hour"
							}, {
							  "id" : "3929097d-316d-42e1-a4dc-8c168243c30b",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Test Push Rule",
							  "icon" : "fa-list",
							  "description" : null,
							  "runLevel" : "ad",
							  "signalIds" : [ "1dcc6e9c-1e7d-45a9-a485-c8f93c88616a" ],
							  "template" : {
							    "expr" : "A",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A", "'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : null,
							    "expr" : "time.date == EngineUtils.parseDate('{today}')",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.time.date == EngineUtils.parseDate('2014-03-05')", "'?????' == EngineUtils.parseDate('2014-03-05')", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "ad",
							    "type" : "create_page_post_ad",
							    "match" : true,
							    "expr" : "",
							    "execute" : null
							  } ],
							  "createdBy" : "mlewis@brandnetworksinc.com",
							  "createdOn" : "2014-02-26T14:52:16-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-03-05T15:05:55-0500",
							  "runEvery" : 1,
							  "runUnits" : "hour"
							}, {
							  "id" : "62f4c85d-c473-44f3-a36e-2c748e278966",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "Test Rule for Empty Execution",
							  "icon" : "fa-list",
							  "description" : null,
							  "runLevel" : "campaign",
							  "signalIds" : [ "db17bca8-d30b-4de0-bb3d-aeab5ab9cbe7" ],
							  "template" : {
							    "expr" : "A",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "this.A", "'null'", "null" ]
							  },
							  "conditions" : [ {
							    "name" : "Snowing?",
							    "expr" : "_.contains([\"S\",\"SW\",\"BS\"],hourNE.weatherCode)",
							    "valid" : "true",
							    "message" : null,
							    "trace" : [ "_.contains([\"S\",\"SW\",\"BS\"],this.hourNE.weatherCode)", "_.contains([\"S\",\"SW\",\"BS\"],'?????')", "?????" ],
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "default",
							    "type" : "email",
							    "match" : true,
							    "expr" : "mlewis@brandnetworksinc.com",
							    "execute" : null
							  }, {
							    "target" : "default",
							    "type" : "email",
							    "match" : false,
							    "expr" : "mlewis@brandnetworksinc.com",
							    "execute" : null
							  } ],
							  "createdBy" : "mlewis@brandnetworksinc.com",
							  "createdOn" : "2014-02-27T16:34:07-0500",
							  "modifiedBy" : "mlewis@brandnetworksinc.com",
							  "modifiedOn" : "2014-02-27T16:34:25-0500",
							  "runEvery" : 1,
							  "runUnits" : "hour"
							}, {
							  "id" : "0905dcae-eb31-42f3-b068-fb3e530bc100",
							  "hashKey" : "company:3771",
							  "modelType" : "rule",
							  "name" : "New Rule",
							  "icon" : "fa-list",
							  "description" : null,
							  "runLevel" : "campaign",
							  "signalIds" : [ "d6b0c0c5-144f-4c73-b6a7-6578c6992f8f" ],
							  "template" : {
							    "expr" : "A",
							    "valid" : null,
							    "message" : null,
							    "trace" : null
							  },
							  "conditions" : [ {
							    "name" : null,
							    "expr" : null,
							    "valid" : null,
							    "message" : null,
							    "trace" : null,
							    "enabled" : true
							  } ],
							  "actions" : [ {
							    "target" : "default",
							    "type" : "email",
							    "match" : true,
							    "expr" : "dp@bn.co",
							    "execute" : null
							  }, {
							    "target" : "default",
							    "type" : "email",
							    "match" : false,
							    "expr" : "dp@bn.co",
							    "execute" : null
							  } ],
							  "createdBy" : "dp@bn.co",
							  "createdOn" : "2014-03-05T11:34:33-0500",
							  "modifiedBy" : "dp@bn.co",
							  "modifiedOn" : "2014-03-05T11:34:33-0500",
							  "runEvery" : 1,
							  "runUnits" : "hour"
							} ]
					};

					p.resolve(response);
					return p.promise;
				}
			}
		}
	}
})