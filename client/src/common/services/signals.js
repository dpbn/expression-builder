angular.module("os.signals", []).provider('Signals', function(){
	return {
		$get: function($q, $http){
			return {
				get: function(){
					var d = $q.defer();

					var response = 
					{
						values:[ 
						{
					  "id" : "3ddfa253-0e4c-4e5a-83f9-a8074c462286",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Twilio SMS",
					  "icon" : "fa-comment-o",
					  "prefix" : "twilio_sms",
					  "endpoint" : "https://ACd7ddf5a340994257b91d6658966799bc:6201f1d402503642d2a22042217d8bca@api.twilio.com/2010-04-01/Accounts/ACd7ddf5a340994257b91d6658966799bc/SMS/Messages.json",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Recipient",
					    "key" : "To",
					    "type" : "string",
					    "value" : "\"+14155390255\"",
					    "visible" : null
					  }, {
					    "label" : "",
					    "key" : "",
					    "type" : "string",
					    "value" : null,
					    "visible" : null
					  } ],
					  "tags" : "Twilio API, SMS, text, messaging",
					  "transform" : "function prepare(data) {  \n  return _.map(data.sms_messages, function(e) {return _.omit(e,[\"sid\",\"account_sid\",\"uri\"])})\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date Created",
					    "key" : "date_created",
					    "type" : "date"
					  }, {
					    "label" : "Date Updated",
					    "key" : "date_updated",
					    "type" : "date"
					  }, {
					    "label" : "Date Sent",
					    "key" : "date_sent",
					    "type" : "date"
					  }, {
					    "label" : "To",
					    "key" : "to",
					    "type" : "date"
					  }, {
					    "label" : "From",
					    "key" : "from",
					    "type" : "date"
					  }, {
					    "label" : "Body",
					    "key" : "body",
					    "type" : "date"
					  }, {
					    "label" : "Status",
					    "key" : "status",
					    "type" : "date"
					  }, {
					    "label" : "Direction",
					    "key" : "direction",
					    "type" : "date"
					  }, {
					    "label" : "Price",
					    "key" : "price",
					    "type" : "date"
					  }, {
					    "label" : "Price Unit",
					    "key" : "price_unit",
					    "type" : "date"
					  }, {
					    "label" : "Api Version",
					    "key" : "api_version",
					    "type" : "date"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "date_sent",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "time",
					    "field" : "date_time",
					    "expr" : null,
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "jwood+1@optimalsocial.com",
					  "createdOn" : "2013-09-23T19:17:10-0400",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:09-0500"
					}, {
					  "id" : "650edf67-665d-4503-8c03-2c364dd3f6d5",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Facebook Ad Stats - Test",
					  "icon" : "icon-bullhorn",
					  "prefix" : "ad_stats_test",
					  "endpoint" : "https://graph.facebook.com/act_1374649259454995/reportstats",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Date Range",
					    "key" : "date_preset",
					    "type" : "string",
					    "value" : "last_7_days",
					    "visible" : null
					  }, {
					    "label" : "Time Summary",
					    "key" : "time_increment",
					    "type" : "string",
					    "value" : "all_days",
					    "visible" : null
					  }, {
					    "label" : "Columns",
					    "key" : "data_columns",
					    "type" : "string",
					    "value" : "['account_id','account_name','campaign_id','campaign_name','adgroup_id','action_type','action_target_id','impressions','unique_impressions','frequency','spend','cpm','cpp','clicks','ctr','cpc','total_actions','total_unique_actions','cost_per_total_action']",
					    "visible" : null
					  }, {
					    "label" : "Limit",
					    "key" : "limit",
					    "type" : "number",
					    "value" : "1000",
					    "visible" : null
					  }, {
					    "label" : "Access Token",
					    "key" : "access_token",
					    "type" : "string",
					    "value" : "CAAChx6ScZBAQBAEVkR8QbwSaZCB4ZCnD7sewpx8SiYfGjaR3Ajmz27YzKLPIA7ZAYTdZCvA7nr40BsdQ6Kp2WqxiLNILfXBqJEgalHDmdkNBryTSlIfCMFZBZCiXPxOZBnhX7dxTjJFbTN3Le4KpFSA2Qp3qvhYxKZAWmZAhdCggOreOmvQjyyVOZAFNltIctd4LjEZD",
					    "visible" : null
					  } ],
					  "tags" : "Facebook API",
					  "transform" : "function prepare(input) {  \n  return input.data\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Adgroup ID",
					    "key" : "adgroup_id",
					    "type" : "long"
					  }, {
					    "label" : "Date Start",
					    "key" : "date_start",
					    "type" : "date"
					  }, {
					    "label" : "Date Stop",
					    "key" : "date_stop",
					    "type" : "date"
					  }, {
					    "label" : "Impressions",
					    "key" : "impressions",
					    "type" : "integer"
					  }, {
					    "label" : "Unique Impressions",
					    "key" : "unique_impressions",
					    "type" : "integer"
					  }, {
					    "label" : "Frequency",
					    "key" : "frequency",
					    "type" : "float"
					  }, {
					    "label" : "Spend",
					    "key" : "spend",
					    "type" : "float"
					  }, {
					    "label" : "Cpm",
					    "key" : "cpm",
					    "type" : "float"
					  }, {
					    "label" : "Cpp",
					    "key" : "cpp",
					    "type" : "float"
					  }, {
					    "label" : "Clicks",
					    "key" : "clicks",
					    "type" : "integer"
					  }, {
					    "label" : "Ctr",
					    "key" : "ctr",
					    "type" : "float"
					  }, {
					    "label" : "Cpc",
					    "key" : "cpc",
					    "type" : "float"
					  }, {
					    "label" : "Total Actions",
					    "key" : "total_actions",
					    "type" : "integer"
					  }, {
					    "label" : "Total Unique Actions",
					    "key" : "total_unique_actions",
					    "type" : "integer"
					  }, {
					    "label" : "Cost Per Total Action",
					    "key" : "cost_per_total_action",
					    "type" : "float"
					  }, {
					    "label" : "Account ID",
					    "key" : "account_id",
					    "type" : "long"
					  }, {
					    "label" : "Account Name",
					    "key" : "account_name",
					    "type" : "date"
					  }, {
					    "label" : "Campaign ID",
					    "key" : "campaign_id",
					    "type" : "long"
					  }, {
					    "label" : "Campaign Name",
					    "key" : "campaign_name",
					    "type" : "date"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "campaign_name",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "new RegExp(ad_stats_test.campaign_name).test(campaign.name)",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "jwood+1@optimalsocial.com",
					  "createdOn" : "2013-09-23T22:05:56-0400",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:11-0500"
					}, {
					  "id" : "8ba4800a-43e7-4cdd-9103-888874855147",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Facebook Ad Stats - Purina",
					  "icon" : "icon-bullhorn",
					  "prefix" : "ad_stats_purina",
					  "endpoint" : "https://graph.facebook.com/act_1376399515939581/reportstats",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Date Range",
					    "key" : "date_preset",
					    "type" : "string",
					    "value" : "last_7_days",
					    "visible" : null
					  }, {
					    "label" : "Time Summary",
					    "key" : "time_increment",
					    "type" : "string",
					    "value" : "all_days",
					    "visible" : null
					  }, {
					    "label" : "Columns",
					    "key" : "data_columns",
					    "type" : "string",
					    "value" : "['account_id','account_name','campaign_id','campaign_name','adgroup_id','action_type','action_target_id','impressions','unique_impressions','frequency','spend','cpm','cpp','clicks','ctr','cpc','total_actions','total_unique_actions','cost_per_total_action']",
					    "visible" : null
					  }, {
					    "label" : "Limit",
					    "key" : "limit",
					    "type" : "number",
					    "value" : "1000",
					    "visible" : null
					  }, {
					    "label" : "Access Token",
					    "key" : "access_token",
					    "type" : "string",
					    "value" : "CAAC2tT5Eb1YBAMf8QsW22PRgK9YEVYRFf9a321lKMPYlkSp8Xnl4sRryFLbae8pZCak5NSD4tKaZAA51CaQXRxDLF1nkIvDWNtmfVbTJ1HCy47ZAqZA4jTD6GmJmJVZCtFe1xTSIFfZB5kUvZA1pb7PHAwcg1ApbPSakEIsonKjSliepwq27UFpXSHB8n1NRnMZD",
					    "visible" : null
					  } ],
					  "tags" : "Facebook API",
					  "transform" : "function prepare(input) {  \n  return input.data\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Adgroup ID",
					    "key" : "adgroup_id",
					    "type" : "long"
					  }, {
					    "label" : "Date Start",
					    "key" : "date_start",
					    "type" : "date"
					  }, {
					    "label" : "Date Stop",
					    "key" : "date_stop",
					    "type" : "date"
					  }, {
					    "label" : "Impressions",
					    "key" : "impressions",
					    "type" : "integer"
					  }, {
					    "label" : "Unique Impressions",
					    "key" : "unique_impressions",
					    "type" : "integer"
					  }, {
					    "label" : "Frequency",
					    "key" : "frequency",
					    "type" : "float"
					  }, {
					    "label" : "Spend",
					    "key" : "spend",
					    "type" : "float"
					  }, {
					    "label" : "Cpm",
					    "key" : "cpm",
					    "type" : "float"
					  }, {
					    "label" : "Cpp",
					    "key" : "cpp",
					    "type" : "float"
					  }, {
					    "label" : "Clicks",
					    "key" : "clicks",
					    "type" : "integer"
					  }, {
					    "label" : "Ctr",
					    "key" : "ctr",
					    "type" : "float"
					  }, {
					    "label" : "Cpc",
					    "key" : "cpc",
					    "type" : "float"
					  }, {
					    "label" : "Total Actions",
					    "key" : "total_actions",
					    "type" : "integer"
					  }, {
					    "label" : "Total Unique Actions",
					    "key" : "total_unique_actions",
					    "type" : "integer"
					  }, {
					    "label" : "Cost Per Total Action",
					    "key" : "cost_per_total_action",
					    "type" : "float"
					  }, {
					    "label" : "Account ID",
					    "key" : "account_id",
					    "type" : "long"
					  }, {
					    "label" : "Account Name",
					    "key" : "account_name",
					    "type" : "date"
					  }, {
					    "label" : "Campaign ID",
					    "key" : "campaign_id",
					    "type" : "long"
					  }, {
					    "label" : "Campaign Name",
					    "key" : "campaign_name",
					    "type" : "date"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "campaign_name",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : null,
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "jwood+1@optimalsocial.com",
					  "createdOn" : "2013-09-23T22:05:56-0400",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:02:05-0500"
					}, {
					  "id" : "bdc3542d-c50c-4619-8c8b-f916b744cba7",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "TV Series Schedule (next 24 hr)",
					  "icon" : "icon-film",
					  "prefix" : "tv_series",
					  "endpoint" : "http://api.rovicorp.com/TVlistings/v9/listings/programdetails/70178/8019129/info",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Locale",
					    "key" : "locale",
					    "type" : "string",
					    "value" : "en-US",
					    "visible" : "public"
					  }, {
					    "label" : "Copytextformat",
					    "key" : "copytextformat",
					    "type" : "string",
					    "value" : "PlainText",
					    "visible" : "public"
					  }, {
					    "label" : "Include",
					    "key" : "include",
					    "type" : "string",
					    "value" : "Program",
					    "visible" : "public"
					  }, {
					    "label" : "Duration",
					    "key" : "duration",
					    "type" : "string",
					    "value" : "1440",
					    "visible" : "public"
					  }, {
					    "label" : "Inprogress",
					    "key" : "inprogress",
					    "type" : "string",
					    "value" : "false",
					    "visible" : "public"
					  }, {
					    "label" : "Pagesize",
					    "key" : "pagesize",
					    "type" : "string",
					    "value" : "0",
					    "visible" : "public"
					  }, {
					    "label" : "Format",
					    "key" : "format",
					    "type" : "string",
					    "value" : "json",
					    "visible" : "public"
					  }, {
					    "label" : "Apikey",
					    "key" : "apikey",
					    "type" : "string",
					    "value" : "nwxnxzg552qc55mr69zzq25y",
					    "visible" : "private"
					  } ],
					  "tags" : "Rovi API, TV, schedule",
					  "transform" : "function prepare(input) {\n  return _.map(input.ProgramDetailsResult.Schedule.Airings, function(e) {\n     return {\n         airing: moment(e.AiringTime).format(\"YYYY-MM-DD, h:mm:ss a\"),\n         program: e.Title,\n         programID: e.ProgramId,\n         title: e.EpisodeTitle,\n         description: e.Copy,\n         duration: e.Duration,\n         category: e.Category,\n         subcategory: e.Subcategory,\n         type: e.AiringType,\n         source: e.SourceLongName,\n         channel: e.Channel,\n         callLetters: e.CallLetters,\n         rating: e.TVRating,\n         provider: input.ProgramDetailsResult.Schedule.Name,\n         providerType: input.ProgramDetailsResult.Schedule.ServiceType,\n         CC: e.CC,\n         Stereo: e.Stereo,\n         HD: e.HD,\n         Dolby: e.Dolby\n      }         \n  })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Airing",
					    "key" : "airing",
					    "type" : "date"
					  }, {
					    "label" : "Program",
					    "key" : "program",
					    "type" : "string"
					  }, {
					    "label" : "ProgramID",
					    "key" : "programID",
					    "type" : "integer"
					  }, {
					    "label" : "Title",
					    "key" : "title",
					    "type" : "string"
					  }, {
					    "label" : "Description",
					    "key" : "description",
					    "type" : "string"
					  }, {
					    "label" : "Duration",
					    "key" : "duration",
					    "type" : "integer"
					  }, {
					    "label" : "Category",
					    "key" : "category",
					    "type" : "string"
					  }, {
					    "label" : "Subcategory",
					    "key" : "subcategory",
					    "type" : "string"
					  }, {
					    "label" : "Type",
					    "key" : "type",
					    "type" : "string"
					  }, {
					    "label" : "Source",
					    "key" : "source",
					    "type" : "string"
					  }, {
					    "label" : "Channel",
					    "key" : "channel",
					    "type" : "integer"
					  }, {
					    "label" : "CallLetters",
					    "key" : "callLetters",
					    "type" : "string"
					  }, {
					    "label" : "Rating",
					    "key" : "rating",
					    "type" : "string"
					  }, {
					    "label" : "Provider",
					    "key" : "provider",
					    "type" : "string"
					  }, {
					    "label" : "ProviderType",
					    "key" : "providerType",
					    "type" : "string"
					  }, {
					    "label" : "CC",
					    "key" : "CC",
					    "type" : "integer"
					  }, {
					    "label" : "Stereo",
					    "key" : "Stereo",
					    "type" : "integer"
					  }, {
					    "label" : "HD",
					    "key" : "HD",
					    "type" : "integer"
					  }, {
					    "label" : "Dolby",
					    "key" : "Dolby",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "param",
					    "source" : "locale",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "targeting",
					    "field" : "country",
					    "expr" : null,
					    "method" : null
					  } ],
					  "enabled" : false,
					  "runEvery" : 1,
					  "runUnits" : "hour",
					  "createdBy" : "jwood+1@optimalsocial.com",
					  "createdOn" : "2013-09-24T20:10:01-0400",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:09-0500"
					}, {
					  "id" : "519c8f52-ea88-46d3-93f7-c2a5c64bed6d",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Dropbox CSV Upload",
					  "icon" : "icon-dropbox",
					  "prefix" : "dropbox_csv",
					  "endpoint" : "https://dl.dropboxusercontent.com/s/fkbb9f442ezkget/adstats_csv.csv",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "Access Token",
					    "key" : "token_hash",
					    "type" : "string",
					    "value" : "AAES64niXYkTFvFKq3F9IH1K2Ecc52QPKnyFvNZiVHlcqw",
					    "visible" : "private"
					  }, {
					    "label" : "Download",
					    "key" : "dl",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "",
					    "key" : "",
					    "type" : "string",
					    "value" : null,
					    "visible" : null
					  } ],
					  "tags" : "1st party data",
					  "transform" : "function prepare(input) {\n  return EngineUtils.csvToJson(input)\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Start Date",
					    "key" : "start_date",
					    "type" : "date"
					  }, {
					    "label" : "End Date",
					    "key" : "end_date",
					    "type" : "date"
					  }, {
					    "label" : "Account ID",
					    "key" : "account_id",
					    "type" : "long"
					  }, {
					    "label" : "Account",
					    "key" : "account",
					    "type" : "string"
					  }, {
					    "label" : "Campaign ID",
					    "key" : "campaign_id",
					    "type" : "long"
					  }, {
					    "label" : "Impressions",
					    "key" : "impressions",
					    "type" : "integer"
					  }, {
					    "label" : "Reach",
					    "key" : "reach",
					    "type" : "integer"
					  }, {
					    "label" : "Frequency",
					    "key" : "frequency",
					    "type" : "float"
					  }, {
					    "label" : "Spend",
					    "key" : "spend",
					    "type" : "float"
					  }, {
					    "label" : "Cost Per 1000 Impressions",
					    "key" : "cost_per_1000_impressions",
					    "type" : "float"
					  }, {
					    "label" : "Cost Per 1000 People Reached",
					    "key" : "cost_per_1000_people_reached",
					    "type" : "float"
					  }, {
					    "label" : "Clicks",
					    "key" : "clicks",
					    "type" : "integer"
					  }, {
					    "label" : "Click Through Rate",
					    "key" : "click_through_rate",
					    "type" : "float"
					  }, {
					    "label" : "Cost Per Click",
					    "key" : "cost_per_click",
					    "type" : "float"
					  }, {
					    "label" : "Actions",
					    "key" : "actions",
					    "type" : "integer"
					  }, {
					    "label" : "People Taking Action",
					    "key" : "people_taking_action",
					    "type" : "integer"
					  }, {
					    "label" : "Cost Per All Actions",
					    "key" : "cost_per_all_actions",
					    "type" : "float"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "start_date",
					    "partner" : "facebook",
					    "entity" : "time",
					    "field" : "start_date",
					    "method" : "exact"
					  }, {
					    "type" : "output",
					    "source" : "end_date",
					    "partner" : "facebook",
					    "entity" : "time",
					    "field" : "end_date",
					    "method" : "exact"
					  }, {
					    "type" : "output",
					    "source" : "account_id",
					    "partner" : "facebook",
					    "entity" : "account",
					    "field" : "id",
					    "method" : "exact"
					  }, {
					    "type" : "output",
					    "source" : "campaign_id",
					    "partner" : "facebook",
					    "entity" : "campaign",
					    "field" : "id",
					    "method" : "exact"
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "jwood+1@optimalsocial.com",
					  "createdOn" : "2013-09-25T02:02:49-0400",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-13T14:00:40-0500"
					}, {
					  "id" : "bf217f27-a96e-4bb1-b3ec-883781ad6c7e",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Product Inventory Feed",
					  "icon" : "fa-file-text-o",
					  "prefix" : "inventory_feed",
					  "endpoint" : "https://dl.dropboxusercontent.com/s/iryeqasscx4lmxa/inventory-feed.csv",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "Access Token",
					    "key" : "token_hash",
					    "type" : "string",
					    "value" : "AAHM0Hv4ZZMPxIt9exJNs51anjRJJvA376fAR29ugsGEjw",
					    "visible" : "private"
					  }, {
					    "label" : "Download",
					    "key" : "dl",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  } ],
					  "tags" : "1st_party, retail, inventory, inventory_feed, dropbox",
					  "transform" : "function prepare(input) {\n  return EngineUtils.csvToJson(input)\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Productsku",
					    "key" : "productsku",
					    "type" : "number"
					  }, {
					    "label" : "Productname",
					    "key" : "productname",
					    "type" : "string"
					  }, {
					    "label" : "Producturl",
					    "key" : "producturl",
					    "type" : "string"
					  }, {
					    "label" : "Productcolor",
					    "key" : "productcolor",
					    "type" : "string"
					  }, {
					    "label" : "Productsize",
					    "key" : "productsize",
					    "type" : "string"
					  }, {
					    "label" : "Productgender",
					    "key" : "productgender",
					    "type" : "string"
					  }, {
					    "label" : "Productcategory",
					    "key" : "productcategory",
					    "type" : "string"
					  }, {
					    "label" : "Productmaterial",
					    "key" : "productmaterial",
					    "type" : "string"
					  }, {
					    "label" : "Productcondition",
					    "key" : "productcondition",
					    "type" : "string"
					  }, {
					    "label" : "Made In",
					    "key" : "made_in",
					    "type" : "string"
					  }, {
					    "label" : "Manufacturer",
					    "key" : "manufacturer",
					    "type" : "string"
					  }, {
					    "label" : "Mpn",
					    "key" : "mpn",
					    "type" : "string"
					  }, {
					    "label" : "Upc",
					    "key" : "upc",
					    "type" : "number"
					  }, {
					    "label" : "Price",
					    "key" : "price",
					    "type" : "number"
					  }, {
					    "label" : "Saleprice",
					    "key" : "saleprice",
					    "type" : "number"
					  }, {
					    "label" : "Shippingcost",
					    "key" : "shippingcost",
					    "type" : "number"
					  }, {
					    "label" : "Priority",
					    "key" : "priority",
					    "type" : "number"
					  }, {
					    "label" : "Inventory",
					    "key" : "inventory",
					    "type" : "number"
					  }, {
					    "label" : "Salestarttime",
					    "key" : "salestarttime",
					    "type" : "date"
					  }, {
					    "label" : "Saleendtime",
					    "key" : "saleendtime",
					    "type" : "date"
					  }, {
					    "label" : "Flashsaleproduct",
					    "key" : "flashsaleproduct",
					    "type" : "string"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "saleendtime",
					    "partner" : "facebook",
					    "entity" : "time",
					    "field" : "date",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "jwood+1@optimalsocial.com",
					  "createdOn" : "2013-09-25T19:09:53-0400",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-13T14:00:40-0500"
					}, {
					  "id" : "b12d9233-cd62-4f44-a921-0c5076456a54",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Adjusted Profit Margin",
					  "icon" : "icon-money",
					  "prefix" : "adj_margin",
					  "endpoint" : "https://dl.dropboxusercontent.com/s/xrcpqbtexqmi79p/conversions_csv.csv",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "Access Token",
					    "key" : "token_hash",
					    "type" : "string",
					    "value" : "AAG7tptRTfxEaXQXnJM4y6YeZXTn9NEON-gyUXUELLjsng",
					    "visible" : "private"
					  }, {
					    "label" : "Download",
					    "key" : "dl",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "",
					    "key" : "",
					    "type" : "string",
					    "value" : null,
					    "visible" : null
					  } ],
					  "tags" : "1st party, profit margin, profit",
					  "transform" : "function prepare(input) {  return EngineUtils.csvToJson(input)}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "date"
					  }, {
					    "label" : "Tracking ID",
					    "key" : "tracking_id",
					    "type" : "long"
					  }, {
					    "label" : "Revenue",
					    "key" : "revenue",
					    "type" : "float"
					  }, {
					    "label" : "Actions",
					    "key" : "actions",
					    "type" : "integer"
					  } ],
					  "matches" : [ ],
					  "enabled" : false,
					  "runEvery" : 1,
					  "runUnits" : "hour",
					  "createdBy" : "jwood+1@optimalsocial.com",
					  "createdOn" : "2013-09-25T20:54:27-0400",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:11-0500"
					}, {
					  "id" : "80e2acae-e6f1-4384-9c01-4d5476ddf607",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Website Analytics",
					  "icon" : "icon-user",
					  "prefix" : "website_analytics",
					  "endpoint" : "https://www.googleapis.com/analytics/v3/data/ga",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Ids",
					    "key" : "ids",
					    "type" : "string",
					    "value" : "ga%3A68543452",
					    "visible" : "public"
					  }, {
					    "label" : "Metrics",
					    "key" : "metrics",
					    "type" : "string",
					    "value" : "ga%3Avisitors%2Cga%3ApercentNewVisits%2Cga%3Avisits%2Cga%3Abounces%2Cga%3AavgTimeOnSite%2Cga%3AorganicSearches%2Cga%3AnewVisits%2Cga%3AvisitBounceRate%2Cga%3AtimeOnSite",
					    "visible" : "public"
					  }, {
					    "label" : "Start-date",
					    "key" : "start-date",
					    "type" : "string",
					    "value" : "2013-09-11",
					    "visible" : "public"
					  }, {
					    "label" : "End-date",
					    "key" : "end-date",
					    "type" : "string",
					    "value" : "2013-09-25",
					    "visible" : "public"
					  }, {
					    "label" : "Max-results",
					    "key" : "max-results",
					    "type" : "string",
					    "value" : "50",
					    "visible" : "public"
					  } ],
					  "tags" : "Google API",
					  "transform" : "function prepare(input) {\n  return input\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Error",
					    "key" : "error",
					    "type" : "string"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "jwood+1@optimalsocial.com",
					  "createdOn" : "2013-09-25T21:33:33-0400",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:09-0500"
					}, {
					  "id" : "d6b0c0c5-144f-4c73-b6a7-6578c6992f8f",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Winter Advisory (US)",
					  "icon" : "fa-umbrella",
					  "prefix" : "winter_US",
					  "endpoint" : "http://api.aerisapi.com/advisories/search",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Client Id",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "bmy6lvRGnVPgFspxW72Ha",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Fgrk36oiWnv7webtdNvPhaM9w21XeXcDcVtUZZb5",
					    "visible" : "private"
					  }, {
					    "label" : "Query",
					    "key" : "query",
					    "type" : "string",
					    "value" : "country:us",
					    "visible" : "public"
					  }, {
					    "label" : "Filter",
					    "key" : "filter",
					    "type" : "string",
					    "value" : "winter",
					    "visible" : "public"
					  }, {
					    "label" : "Limit",
					    "key" : "limit",
					    "type" : "string",
					    "value" : "250",
					    "visible" : "public"
					  } ],
					  "tags" : "advisories, winter, US, Aeris_API",
					  "transform" : "function prepare(input) {\n  return _.map(input.response, function(e) {\n     return {\n         begins: moment(e.timestamps.beginsISO).format(\"YYYY-MM-DD, h:mm:ss a\"),\n         expires: moment(e.timestamps.expiresISO).format(\"YYYY-MM-DD, h:mm:ss a\"),\n         name: e.details.name,\n         type: e.details.type,\n         country: e.place.country.toUpperCase(),\n         state: e.place.state.toUpperCase(),\n         city: e.place.name.toUpperCase(),\n         location: e.details.loc,\n         zipcodes: e.includes.zipcodes,\n         counties: e.includes.counties,\n         fips: e.includes.fips,\n         wxzones: e.includes.wxzones,\n         timezone: e.profile.tz\n      }         \n  })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Begins",
					    "key" : "begins",
					    "type" : "date"
					  }, {
					    "label" : "Expires",
					    "key" : "expires",
					    "type" : "date"
					  }, {
					    "label" : "Name",
					    "key" : "name",
					    "type" : "date"
					  }, {
					    "label" : "Type",
					    "key" : "type",
					    "type" : "date"
					  }, {
					    "label" : "Country",
					    "key" : "country",
					    "type" : "date"
					  }, {
					    "label" : "State",
					    "key" : "state",
					    "type" : "date"
					  }, {
					    "label" : "City",
					    "key" : "city",
					    "type" : "date"
					  }, {
					    "label" : "Location",
					    "key" : "location",
					    "type" : "date"
					  }, {
					    "label" : "Zipcodes",
					    "key" : "zipcodes",
					    "type" : "date"
					  }, {
					    "label" : "Counties",
					    "key" : "counties",
					    "type" : "date"
					  }, {
					    "label" : "Fips",
					    "key" : "fips",
					    "type" : "date"
					  }, {
					    "label" : "Wxzones",
					    "key" : "wxzones",
					    "type" : "date"
					  }, {
					    "label" : "Timezone",
					    "key" : "timezone",
					    "type" : "date"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "begins",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "time",
					    "field" : "date_time",
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "expires",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "time",
					    "field" : "date_time",
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "state",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "targeting",
					    "field" : "regions",
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "city",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "targeting",
					    "field" : "cities",
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "zipcodes",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "targeting",
					    "field" : "zips",
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "timezone",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "account",
					    "field" : "timezone_name",
					    "expr" : null,
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "quentin_d_wilson@homedepot.com",
					  "createdOn" : "2013-11-07T03:53:55-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:09-0500"
					}, {
					  "id" : "ef474889-a2e7-4d0f-a0c2-c4a58adba0f9",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "7-Day Forecast (San Francisco, CA)",
					  "icon" : "fa-umbrella",
					  "prefix" : "sfCA",
					  "endpoint" : "http://api.aerisapi.com/forecasts/san+francisco,ca",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Client Id",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "bmy6lvRGnVPgFspxW72Ha",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Fgrk36oiWnv7webtdNvPhaM9w21XeXcDcVtUZZb5",
					    "visible" : "private"
					  } ],
					  "tags" : "forecasts, hartford, CT, Aeris_API",
					  "transform" : "function prepare(input) {\n  return _.map(input.response[0].periods, function(e) {\n           return  {\n               date: moment(e.dateTimeISO).format(\"YYYY-MM-DD\"),\n               longitude: input.response[0].loc.long,\n               latitude: input.response[0].loc.lat,\n               weather: e.weatherPrimary,\n               description: e.weather,\n               weatherCode: e.weatherPrimaryCoded.split(\":\")[2],\n               coverageCode: e.weatherPrimaryCoded.split(\":\")[0],\n               intensityCode: e.weatherPrimaryCoded.split(\":\")[1],\n               clouds: e.cloudsCoded,\n               minTempF: e.minTempF,\n               avgTempF: e.avgTempF,\n               maxTempF: e.maxTempF,\n               feelslikeF: e.feelslikeF,\n               dewpointF: e.dewpointF,\n               humidity: e.humidity,\n               precipIN: e.precipIN,\n               pressureIN: e.pressureIN,\n               snowIN: e.snowIN,\n               windDir: e.windDir,\n               windSpeedMPH: e.windSpeedMPH,\n               windGustMPH: e.windGustMPH,\n               sunrise: moment(e.sunriseISO).format(\"h:mm:ss a\"),\n               sunset: moment(e.sunsetISO).format(\"h:mm:ss a\")\n           }\n     })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "integer"
					  }, {
					    "label" : "Longitude",
					    "key" : "longitude",
					    "type" : "integer"
					  }, {
					    "label" : "Latitude",
					    "key" : "latitude",
					    "type" : "integer"
					  }, {
					    "label" : "Weather",
					    "key" : "weather",
					    "type" : "string"
					  }, {
					    "label" : "Description",
					    "key" : "description",
					    "type" : "string"
					  }, {
					    "label" : "WeatherCode",
					    "key" : "weatherCode",
					    "type" : "string"
					  }, {
					    "label" : "CoverageCode",
					    "key" : "coverageCode",
					    "type" : "string"
					  }, {
					    "label" : "IntensityCode",
					    "key" : "intensityCode",
					    "type" : "string"
					  }, {
					    "label" : "Clouds",
					    "key" : "clouds",
					    "type" : "string"
					  }, {
					    "label" : "MinTempF",
					    "key" : "minTempF",
					    "type" : "integer"
					  }, {
					    "label" : "AvgTempF",
					    "key" : "avgTempF",
					    "type" : "integer"
					  }, {
					    "label" : "MaxTempF",
					    "key" : "maxTempF",
					    "type" : "integer"
					  }, {
					    "label" : "FeelslikeF",
					    "key" : "feelslikeF",
					    "type" : "integer"
					  }, {
					    "label" : "DewpointF",
					    "key" : "dewpointF",
					    "type" : "integer"
					  }, {
					    "label" : "Humidity",
					    "key" : "humidity",
					    "type" : "integer"
					  }, {
					    "label" : "PrecipIN",
					    "key" : "precipIN",
					    "type" : "integer"
					  }, {
					    "label" : "PressureIN",
					    "key" : "pressureIN",
					    "type" : "integer"
					  }, {
					    "label" : "SnowIN",
					    "key" : "snowIN",
					    "type" : "integer"
					  }, {
					    "label" : "WindDir",
					    "key" : "windDir",
					    "type" : "string"
					  }, {
					    "label" : "WindSpeedMPH",
					    "key" : "windSpeedMPH",
					    "type" : "integer"
					  }, {
					    "label" : "WindGustMPH",
					    "key" : "windGustMPH",
					    "type" : "integer"
					  }, {
					    "label" : "Sunrise",
					    "key" : "sunrise",
					    "type" : "integer"
					  }, {
					    "label" : "Sunset",
					    "key" : "sunset",
					    "type" : "integer"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "quentin_d_wilson@homedepot.com",
					  "createdOn" : "2013-11-07T04:21:19-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-02-06T09:29:53-0500"
					}, {
					  "id" : "db17bca8-d30b-4de0-bb3d-aeab5ab9cbe7",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "1-Hour Forecast (Northeast)",
					  "icon" : "fa-umbrella",
					  "prefix" : "hourNE",
					  "endpoint" : "http://api.aerisapi.com/batch",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Cities",
					    "key" : "requests",
					    "type" : "string",
					    "value" : "/forecasts/hartford,ct,/forecasts/boston,ma,/forecasts/hyannis,ma,/forecasts/long+island,ny,/forecasts/buffalo,ny,/forecasts/albany,ny,/forecasts/rochester,ny,/forecasts/nyc,ny,/forecasts/pittsburgh,pa,/forecasts/washington,dc",
					    "visible" : "public"
					  }, {
					    "label" : "Interval",
					    "key" : "filter",
					    "type" : "string",
					    "value" : "1hr",
					    "visible" : "public"
					  }, {
					    "label" : "Limit",
					    "key" : "limit",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Client ID",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "MlOTdar4NhIlflPior1K7",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Hh9TEYeIY9AKVNQgEF1xlRnJVng9zcuiag71e1t8",
					    "visible" : "private"
					  } ],
					  "tags" : "forecast, hourly, Aeris_API, northeast, CN, MA, NY, PA, DC",
					  "transform" : "function prepare(input) {\n  var data = input.response.responses;\n  var results = []\n  _.each(data, function(item) {\n       if (!item.response[0]) {return}\n       _.each(item.response[0].periods, function(e) {                 \n          var combined = item.request.split(\"/\")[2].split(\"?\")[0];\n           var city = EngineUtils.capitalize(combined.split(\",\")[0])\n           var state = combined.split(\",\")[1].toUpperCase();\n           results.push({\n               city: city+\", \"+state,\n               weather: e.weatherPrimary,\n               description: e.weather,\n               weatherCode: e.weatherPrimaryCoded.split(\":\")[2],\n               coverageCode: e.weatherPrimaryCoded.split(\":\")[0],\n               intensityCode: e.weatherPrimaryCoded.split(\":\")[1],\n               clouds: e.cloudsCoded,\n               minTempF: e.minTempF,\n               avgTempF: e.avgTempF,\n               maxTempF: e.maxTempF,\n               feelslikeF: e.feelslikeF,\n               dewpointF: e.dewpointF,\n               precipIN: e.precipIN,\n               humidity: e.humidity,\n               pressureIN: e.pressureIN,\n               snowIN: e.snowIN,\n               windDir: e.windDir,\n               windSpeedMPH: e.windSpeedMPH,\n               windGustMPH: e.windGustMPH,\n               sunrise: moment(e.sunriseISO).format(\"h:mm:ss a\"),\n               sunset: moment(e.sunsetISO).format(\"h:mm:ss a\")\n           });\n       })\n     })\n    return results;\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "City",
					    "key" : "city",
					    "type" : "string"
					  }, {
					    "label" : "Weather",
					    "key" : "weather",
					    "type" : "string"
					  }, {
					    "label" : "Description",
					    "key" : "description",
					    "type" : "string"
					  }, {
					    "label" : "WeatherCode",
					    "key" : "weatherCode",
					    "type" : "string"
					  }, {
					    "label" : "CoverageCode",
					    "key" : "coverageCode",
					    "type" : "string"
					  }, {
					    "label" : "IntensityCode",
					    "key" : "intensityCode",
					    "type" : "string"
					  }, {
					    "label" : "Clouds",
					    "key" : "clouds",
					    "type" : "string"
					  }, {
					    "label" : "MinTempF",
					    "key" : "minTempF",
					    "type" : "integer"
					  }, {
					    "label" : "AvgTempF",
					    "key" : "avgTempF",
					    "type" : "integer"
					  }, {
					    "label" : "MaxTempF",
					    "key" : "maxTempF",
					    "type" : "integer"
					  }, {
					    "label" : "FeelslikeF",
					    "key" : "feelslikeF",
					    "type" : "integer"
					  }, {
					    "label" : "DewpointF",
					    "key" : "dewpointF",
					    "type" : "integer"
					  }, {
					    "label" : "PrecipIN",
					    "key" : "precipIN",
					    "type" : "integer"
					  }, {
					    "label" : "Humidity",
					    "key" : "humidity",
					    "type" : "integer"
					  }, {
					    "label" : "PressureIN",
					    "key" : "pressureIN",
					    "type" : "integer"
					  }, {
					    "label" : "SnowIN",
					    "key" : "snowIN",
					    "type" : "integer"
					  }, {
					    "label" : "WindDir",
					    "key" : "windDir",
					    "type" : "string"
					  }, {
					    "label" : "WindSpeedMPH",
					    "key" : "windSpeedMPH",
					    "type" : "integer"
					  }, {
					    "label" : "WindGustMPH",
					    "key" : "windGustMPH",
					    "type" : "integer"
					  }, {
					    "label" : "Sunrise",
					    "key" : "sunrise",
					    "type" : "integer"
					  }, {
					    "label" : "Sunset",
					    "key" : "sunset",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "city",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "new RegExp(hourNE.city,\"i\").test(campaign.name)",
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "weatherCode",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "none",
					    "field" : null,
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "coverageCode",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "none",
					    "field" : null,
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "intensityCode",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "none",
					    "field" : null,
					    "expr" : null,
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "quentin_d_wilson@homedepot.com",
					  "createdOn" : "2013-11-09T01:15:35-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-27T10:48:02-0500"
					}, {
					  "id" : "524f1428-0fca-4131-8657-437b246929c5",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "1-Hour Forecast (Alaska Metros)",
					  "icon" : "fa-umbrella",
					  "prefix" : "hourAK",
					  "endpoint" : "http://api.aerisapi.com/batch",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Cities",
					    "key" : "requests",
					    "type" : "string",
					    "value" : "/forecasts/anchorage,ak,/forecasts/juneau,ak,/forecasts/fairbanks,ak",
					    "visible" : "public"
					  }, {
					    "label" : "Interval (Hourly)",
					    "key" : "filter",
					    "type" : "string",
					    "value" : "1hr",
					    "visible" : "public"
					  }, {
					    "label" : "Limit (1 Hour)",
					    "key" : "limit",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Client ID",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "bmy6lvRGnVPgFspxW72Ha",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Fgrk36oiWnv7webtdNvPhaM9w21XeXcDcVtUZZb5",
					    "visible" : "private"
					  } ],
					  "tags" : "forecast, hourly, AK, Aeris_API",
					  "transform" : "function prepare(input) {\n  var data = input.response.responses;\n  var results = []\n  _.each(data, function(item) {\n       _.each(item.response[0].periods, function(e) {                 \n           results.push({\n               date: moment(e.dateTimeISO).format(\"YYYY-MM-DD\"),\n               time: moment(e.dateTimeISO).format(\"h:mm:ss a\"),\n               city: item.request.split(\"/\")[2].split(\"?\")[0].toUpperCase(),\n               weather: e.weatherPrimary,\n               description: e.weather,\n               weatherCode: e.weatherPrimaryCoded.split(\":\")[2],\n               coverageCode: e.weatherPrimaryCoded.split(\":\")[0],\n               intensityCode: e.weatherPrimaryCoded.split(\":\")[1],\n               clouds: e.cloudsCoded,\n               minTempF: e.minTempF,\n               avgTempF: e.avgTempF,\n               maxTempF: e.maxTempF,\n               feelslikeF: e.feelslikeF,\n               dewpointF: e.dewpointF,\n               precipIN: e.precipIN,\n               humidity: e.humidity,\n               pressureIN: e.pressureIN,\n               snowIN: e.snowIN,\n               windDir: e.windDir,\n               windSpeedMPH: e.windSpeedMPH,\n               windGustMPH: e.windGustMPH,\n               sunrise: moment(e.sunriseISO).format(\"h:mm:ss a\"),\n               sunset: moment(e.sunsetISO).format(\"h:mm:ss a\")\n           });\n       })\n     })\n    return results;\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "integer"
					  }, {
					    "label" : "Time",
					    "key" : "time",
					    "type" : "integer"
					  }, {
					    "label" : "City",
					    "key" : "city",
					    "type" : "string"
					  }, {
					    "label" : "Weather",
					    "key" : "weather",
					    "type" : "string"
					  }, {
					    "label" : "Description",
					    "key" : "description",
					    "type" : "string"
					  }, {
					    "label" : "WeatherCode",
					    "key" : "weatherCode",
					    "type" : "string"
					  }, {
					    "label" : "CoverageCode",
					    "key" : "coverageCode",
					    "type" : "string"
					  }, {
					    "label" : "IntensityCode",
					    "key" : "intensityCode",
					    "type" : "string"
					  }, {
					    "label" : "Clouds",
					    "key" : "clouds",
					    "type" : "string"
					  }, {
					    "label" : "MinTempF",
					    "key" : "minTempF",
					    "type" : "integer"
					  }, {
					    "label" : "AvgTempF",
					    "key" : "avgTempF",
					    "type" : "integer"
					  }, {
					    "label" : "MaxTempF",
					    "key" : "maxTempF",
					    "type" : "integer"
					  }, {
					    "label" : "FeelslikeF",
					    "key" : "feelslikeF",
					    "type" : "integer"
					  }, {
					    "label" : "DewpointF",
					    "key" : "dewpointF",
					    "type" : "integer"
					  }, {
					    "label" : "PrecipIN",
					    "key" : "precipIN",
					    "type" : "integer"
					  }, {
					    "label" : "Humidity",
					    "key" : "humidity",
					    "type" : "integer"
					  }, {
					    "label" : "PressureIN",
					    "key" : "pressureIN",
					    "type" : "integer"
					  }, {
					    "label" : "SnowIN",
					    "key" : "snowIN",
					    "type" : "integer"
					  }, {
					    "label" : "WindDir",
					    "key" : "windDir",
					    "type" : "string"
					  }, {
					    "label" : "WindSpeedMPH",
					    "key" : "windSpeedMPH",
					    "type" : "integer"
					  }, {
					    "label" : "WindGustMPH",
					    "key" : "windGustMPH",
					    "type" : "integer"
					  }, {
					    "label" : "Sunrise",
					    "key" : "sunrise",
					    "type" : "integer"
					  }, {
					    "label" : "Sunset",
					    "key" : "sunset",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "date",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "time",
					    "field" : "date",
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "time",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "time",
					    "field" : "start_time",
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "city",
					    "partner" : "facebook",
					    "unique" : null,
					    "entity" : "targeting",
					    "field" : "cities",
					    "expr" : null,
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "quentin_d_wilson@homedepot.com",
					  "createdOn" : "2013-11-09T04:15:35-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-03-05T11:21:09-0500"
					}, {
					  "id" : "c14a3b8d-0c05-47f4-bdc2-05e8f9023083",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "1-Hour Forecast (Alaska)",
					  "icon" : "fa-umbrella",
					  "prefix" : "hourAK",
					  "endpoint" : "http://api.aerisapi.com/batch",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Cities",
					    "key" : "requests",
					    "type" : "string",
					    "value" : "/forecasts/anchorage,AK,/forecasts/juneau,AK,/forecasts/fairbanks,AK",
					    "visible" : "public"
					  }, {
					    "label" : "Interval",
					    "key" : "filter",
					    "type" : "string",
					    "value" : "1hr",
					    "visible" : "public"
					  }, {
					    "label" : "Limit",
					    "key" : "limit",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Client ID",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "MlOTdar4NhIlflPior1K7",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Hh9TEYeIY9AKVNQgEF1xlRnJVng9zcuiag71e1t8",
					    "visible" : "private"
					  } ],
					  "tags" : "forecast, hourly, AK, Aeris_API",
					  "transform" : "function prepare(input) {\n  var data = input.response.responses;\n  var results = []\n  _.each(data, function(item) {\n       if (!item.response[0]) {return}\n       _.each(item.response[0].periods, function(e) {                 \n          var combined = item.request.split(\"/\")[2].split(\"?\")[0];\n           var city = EngineUtils.capitalize(combined.split(\",\")[0])\n           var state = combined.split(\",\")[1].toUpperCase();\n           results.push({\n               city: city+\", \"+state,\n               weather: e.weatherPrimary,\n               description: e.weather,\n               weatherCode: e.weatherPrimaryCoded.split(\":\")[2],\n               coverageCode: e.weatherPrimaryCoded.split(\":\")[0],\n               intensityCode: e.weatherPrimaryCoded.split(\":\")[1],\n               clouds: e.cloudsCoded,\n               minTempF: e.minTempF,\n               avgTempF: e.avgTempF,\n               maxTempF: e.maxTempF,\n               feelslikeF: e.feelslikeF,\n               dewpointF: e.dewpointF,\n               precipIN: e.precipIN,\n               humidity: e.humidity,\n               pressureIN: e.pressureIN,\n               snowIN: e.snowIN,\n               windDir: e.windDir,\n               windSpeedMPH: e.windSpeedMPH,\n               windGustMPH: e.windGustMPH,\n               sunrise: moment(e.sunriseISO).format(\"h:mm:ss a\"),\n               sunset: moment(e.sunsetISO).format(\"h:mm:ss a\")\n           });\n       })\n     })\n    return results;\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "City",
					    "key" : "city",
					    "type" : "string"
					  }, {
					    "label" : "Weather",
					    "key" : "weather",
					    "type" : "string"
					  }, {
					    "label" : "Description",
					    "key" : "description",
					    "type" : "string"
					  }, {
					    "label" : "WeatherCode",
					    "key" : "weatherCode",
					    "type" : "string"
					  }, {
					    "label" : "CoverageCode",
					    "key" : "coverageCode",
					    "type" : "string"
					  }, {
					    "label" : "IntensityCode",
					    "key" : "intensityCode",
					    "type" : "string"
					  }, {
					    "label" : "Clouds",
					    "key" : "clouds",
					    "type" : "string"
					  }, {
					    "label" : "MinTempF",
					    "key" : "minTempF",
					    "type" : "integer"
					  }, {
					    "label" : "AvgTempF",
					    "key" : "avgTempF",
					    "type" : "integer"
					  }, {
					    "label" : "MaxTempF",
					    "key" : "maxTempF",
					    "type" : "integer"
					  }, {
					    "label" : "FeelslikeF",
					    "key" : "feelslikeF",
					    "type" : "integer"
					  }, {
					    "label" : "DewpointF",
					    "key" : "dewpointF",
					    "type" : "integer"
					  }, {
					    "label" : "PrecipIN",
					    "key" : "precipIN",
					    "type" : "integer"
					  }, {
					    "label" : "Humidity",
					    "key" : "humidity",
					    "type" : "integer"
					  }, {
					    "label" : "PressureIN",
					    "key" : "pressureIN",
					    "type" : "integer"
					  }, {
					    "label" : "SnowIN",
					    "key" : "snowIN",
					    "type" : "integer"
					  }, {
					    "label" : "WindDir",
					    "key" : "windDir",
					    "type" : "string"
					  }, {
					    "label" : "WindSpeedMPH",
					    "key" : "windSpeedMPH",
					    "type" : "integer"
					  }, {
					    "label" : "WindGustMPH",
					    "key" : "windGustMPH",
					    "type" : "integer"
					  }, {
					    "label" : "Sunrise",
					    "key" : "sunrise",
					    "type" : "integer"
					  }, {
					    "label" : "Sunset",
					    "key" : "sunset",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "city",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "new RegExp(hourAK.city,\"i\").test(campaign.name)",
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "weatherCode",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "none",
					    "field" : null,
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "coverageCode",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "none",
					    "field" : null,
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "intensityCode",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "none",
					    "field" : null,
					    "expr" : null,
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "quentin_d_wilson@homedepot.com",
					  "createdOn" : "2013-11-09T04:15:35-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:11-0500"
					}, {
					  "id" : "2aeb555c-82ef-486f-9d16-7755d3bc0a5e",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "1-Hour Forecast (Australia Metros)",
					  "icon" : "fa-umbrella",
					  "prefix" : "AUmetro",
					  "endpoint" : "http://api.aerisapi.com/batch",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Cities",
					    "key" : "requests",
					    "type" : "string",
					    "value" : "/forecasts/brisbane,au,/forecasts/sydney,au,/forecasts/melbourne,au",
					    "visible" : "public"
					  }, {
					    "label" : "Filter (Hourly)",
					    "key" : "filter",
					    "type" : "string",
					    "value" : "1hr",
					    "visible" : "public"
					  }, {
					    "label" : "Limit (1 Hour)",
					    "key" : "limit",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Client Id",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "bmy6lvRGnVPgFspxW72Ha",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Fgrk36oiWnv7webtdNvPhaM9w21XeXcDcVtUZZb5",
					    "visible" : "private"
					  } ],
					  "tags" : "Australia, weather, forecast, Aeris_API, Sydney, Melbourne, Brisbane",
					  "transform" : "function prepare(input) {\n  var data = input.response.responses;\n  var results = []\n  _.each(data, function(item) {\n       _.each(item.response[0].periods, function(e) {                 \n           results.push({\n               date: moment(e.dateTimeISO).format(\"YYYY-MM-DD\"),\n               time: moment(e.dateTimeISO).format(\"h:mm:ss a\"),\n               city: item.request.split(\"/\")[2].split(\"?\")[0].toUpperCase(),\n               weather: e.weatherPrimary,\n               description: e.weather,\n               weatherCode: e.weatherPrimaryCoded.split(\":\")[2],\n               coverageCode: e.weatherPrimaryCoded.split(\":\")[0],\n               intensityCode: e.weatherPrimaryCoded.split(\":\")[1],\n               clouds: e.cloudsCoded,\n               minTempC: e.minTempC,\n               avgTempC: e.avgTempC,\n               maxTempC: e.maxTempC,\n               feelslikeC: e.feelslikeC,\n               precipitationMM: e.precipMM,\n               humidity: e.humidity,\n               pressureMM: e.pressureMM,\n               windDir: e.windDir,\n               windSpeedKPH: e.windSpeedKPH,\n               windGustKPH: e.windGustKPH,\n           });\n       })\n     })\n    return results;\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "date"
					  }, {
					    "label" : "Time",
					    "key" : "time",
					    "type" : "string"
					  }, {
					    "label" : "City",
					    "key" : "city",
					    "type" : "string"
					  }, {
					    "label" : "Weather",
					    "key" : "weather",
					    "type" : "string"
					  }, {
					    "label" : "Description",
					    "key" : "description",
					    "type" : "string"
					  }, {
					    "label" : "WeatherCode",
					    "key" : "weatherCode",
					    "type" : "string"
					  }, {
					    "label" : "CoverageCode",
					    "key" : "coverageCode",
					    "type" : "integer"
					  }, {
					    "label" : "IntensityCode",
					    "key" : "intensityCode",
					    "type" : "integer"
					  }, {
					    "label" : "Clouds",
					    "key" : "clouds",
					    "type" : "string"
					  }, {
					    "label" : "MinTempC",
					    "key" : "minTempC",
					    "type" : "integer"
					  }, {
					    "label" : "AvgTempC",
					    "key" : "avgTempC",
					    "type" : "integer"
					  }, {
					    "label" : "MaxTempC",
					    "key" : "maxTempC",
					    "type" : "integer"
					  }, {
					    "label" : "FeelslikeC",
					    "key" : "feelslikeC",
					    "type" : "integer"
					  }, {
					    "label" : "PrecipitationMM",
					    "key" : "precipitationMM",
					    "type" : "float"
					  }, {
					    "label" : "Humidity",
					    "key" : "humidity",
					    "type" : "integer"
					  }, {
					    "label" : "PressureMM",
					    "key" : "pressureMM",
					    "type" : "string"
					  }, {
					    "label" : "WindDir",
					    "key" : "windDir",
					    "type" : "string"
					  }, {
					    "label" : "WindSpeedKPH",
					    "key" : "windSpeedKPH",
					    "type" : "integer"
					  }, {
					    "label" : "WindGustKPH",
					    "key" : "windGustKPH",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "date",
					    "partner" : "facebook",
					    "entity" : "time",
					    "field" : "date",
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "city",
					    "partner" : "facebook",
					    "entity" : "targeting",
					    "field" : "cities",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "will+signals@optimalsocial.com",
					  "createdOn" : "2013-11-14T05:03:00-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-13T14:00:39-0500"
					}, {
					  "id" : "32fd0ef7-79f1-4522-882a-f6984b944029",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "1-Hour Forecast - Home Depot",
					  "icon" : "fa-umbrella",
					  "prefix" : "HDweather",
					  "endpoint" : "http://api.aerisapi.com/batch",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Cities",
					    "key" : "requests",
					    "type" : "string",
					    "value" : "/forecasts/anchorage,ak,/forecasts/juneau,ak,/forecasts/fairbanks,ak/forecasts/st+louis,MO,/forecasts/kansas+city,MO,/forecasts/billings,MO,/forecasts/des+moines,IA,/forecasts/milwaukee,WI,/forecasts/indianapolis,IN,/forecasts/dayton,OH,/forecasts/cleveland,OH,/forecasts/cincinnati,OH,/forecasts/columbus,OH,/forecasts/toledo,OH,/forecasts/grand+rapids,MI,/forecasts/detroit,MI,/forecasts/chicago,IL,/forecasts/wichita,KS,/forecasts/omaha,NE,/forecasts/minneapolis,MN/forecasts/hartford,ct,/forecasts/boston,ma,/forecasts/hyannis,ma,/forecasts/long+island,ny,/forecasts/buffalo,ny,/forecasts/albany,ny,/forecasts/rochester,ny,/forecasts/nyc,ny,/forecasts/pittsburgh,pa,/forecasts/washington,dc/forecasts/reno,nv,/forecasts/durango,co,/forecasts/grand+junction,co,/forecasts/vail,co,/forecasts/spokane,wa",
					    "visible" : "public"
					  }, {
					    "label" : "Filter (Hourly)",
					    "key" : "filter",
					    "type" : "string",
					    "value" : "1hr",
					    "visible" : "public"
					  }, {
					    "label" : "Limit (1 Hour)",
					    "key" : "limit",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Client Id",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "MlOTdar4NhIlflPior1K7",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Hh9TEYeIY9AKVNQgEF1xlRnJVng9zcuiag71e1t8",
					    "visible" : "private"
					  } ],
					  "tags" : "Australia, weather, forecast, Aeris_API, Sydney, Melbourne, Brisbane",
					  "transform" : "function prepare(input) {\n  var data = input.response.responses;\n  var results = []\n  _.each(data, function(item) {\n         if (!item.response[0]) {return}\n       _.each(item.response[0].periods, function(e) {                 \n          var combined = item.request.split(\"/\")[2].split(\"?\")[0];\n           var city = EngineUtils.capitalize(combined.split(\",\")[0])\n           var state = combined.split(\",\")[1].toUpperCase();\n           results.push({\n               city: city+\", \"+state,\n               weather: e.weatherPrimary,\n               description: e.weather,\n               weatherCode: e.weatherPrimaryCoded.split(\":\")[2],\n               coverageCode: e.weatherPrimaryCoded.split(\":\")[0],\n               intensityCode: e.weatherPrimaryCoded.split(\":\")[1],\n               clouds: e.cloudsCoded,\n               minTempC: e.minTempC,\n               avgTempC: e.avgTempC,\n               maxTempC: e.maxTempC,\n               feelslikeC: e.feelslikeC,\n               dewpointC: e.dewpointC,\n               precipMM: e.precipMM,\n               humidity: e.humidity,\n               pressureMB: e.pressureMB,\n               windDir: e.windDir,\n               windSpeedKPH: e.windSpeedKPH,\n               windGustKPH: e.windGustKPH\n           });\n       })\n     })\n    return results;\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "City",
					    "key" : "city",
					    "type" : "string"
					  }, {
					    "label" : "Weather",
					    "key" : "weather",
					    "type" : "string"
					  }, {
					    "label" : "Description",
					    "key" : "description",
					    "type" : "string"
					  }, {
					    "label" : "WeatherCode",
					    "key" : "weatherCode",
					    "type" : "string"
					  }, {
					    "label" : "CoverageCode",
					    "key" : "coverageCode",
					    "type" : "string"
					  }, {
					    "label" : "IntensityCode",
					    "key" : "intensityCode",
					    "type" : "string"
					  }, {
					    "label" : "Clouds",
					    "key" : "clouds",
					    "type" : "string"
					  }, {
					    "label" : "MinTempC",
					    "key" : "minTempC",
					    "type" : "integer"
					  }, {
					    "label" : "AvgTempC",
					    "key" : "avgTempC",
					    "type" : "integer"
					  }, {
					    "label" : "MaxTempC",
					    "key" : "maxTempC",
					    "type" : "integer"
					  }, {
					    "label" : "FeelslikeC",
					    "key" : "feelslikeC",
					    "type" : "integer"
					  }, {
					    "label" : "DewpointC",
					    "key" : "dewpointC",
					    "type" : "integer"
					  }, {
					    "label" : "PrecipMM",
					    "key" : "precipMM",
					    "type" : "integer"
					  }, {
					    "label" : "Humidity",
					    "key" : "humidity",
					    "type" : "integer"
					  }, {
					    "label" : "PressureMB",
					    "key" : "pressureMB",
					    "type" : "integer"
					  }, {
					    "label" : "WindDir",
					    "key" : "windDir",
					    "type" : "string"
					  }, {
					    "label" : "WindSpeedKPH",
					    "key" : "windSpeedKPH",
					    "type" : "integer"
					  }, {
					    "label" : "WindGustKPH",
					    "key" : "windGustKPH",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "city",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "new RegExp(HDweather.city,\"i\").test(campaign.name)",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "will+signals@optimalsocial.com",
					  "createdOn" : "2013-11-14T05:03:00-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:02:06-0500"
					}, {
					  "id" : "ae0a2438-07c6-4c7f-a15c-91b8ff6ab4be",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "1-Hour Forecast - Purina",
					  "icon" : "fa-umbrella",
					  "prefix" : "AUmetro",
					  "endpoint" : "http://api.aerisapi.com/batch",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Cities",
					    "key" : "requests",
					    "type" : "string",
					    "value" : "/forecasts/brisbane,AU,/forecasts/sydney,AU,/forecasts/melbourne,AU",
					    "visible" : "public"
					  }, {
					    "label" : "Filter (Hourly)",
					    "key" : "filter",
					    "type" : "string",
					    "value" : "1hr",
					    "visible" : "public"
					  }, {
					    "label" : "Limit (1 Hour)",
					    "key" : "limit",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Client Id",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "MlOTdar4NhIlflPior1K7",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Hh9TEYeIY9AKVNQgEF1xlRnJVng9zcuiag71e1t8",
					    "visible" : "private"
					  } ],
					  "tags" : "Australia, weather, forecast, Aeris_API, Sydney, Melbourne, Brisbane",
					  "transform" : "function prepare(input) {\n  var data = input.response.responses;\n  var results = []\n  _.each(data, function(item) {\n         if (!item.response[0]) {return}\n       _.each(item.response[0].periods, function(e) {                 \n          var combined = item.request.split(\"/\")[2].split(\"?\")[0];\n           var city = EngineUtils.capitalize(combined.split(\",\")[0])\n           var state = combined.split(\",\")[1].toUpperCase();\n           results.push({\n               city: city+\", \"+state,\n               weather: e.weatherPrimary,\n               description: e.weather,\n               weatherCode: e.weatherPrimaryCoded.split(\":\")[2],\n               coverageCode: e.weatherPrimaryCoded.split(\":\")[0],\n               intensityCode: e.weatherPrimaryCoded.split(\":\")[1],\n               clouds: e.cloudsCoded,\n               minTempC: e.minTempC,\n               avgTempC: e.avgTempC,\n               maxTempC: e.maxTempC,\n               feelslikeC: e.feelslikeC,\n               dewpointC: e.dewpointC,\n               precipMM: e.precipMM,\n               humidity: e.humidity,\n               pressureMB: e.pressureMB,\n               windDir: e.windDir,\n               windSpeedKPH: e.windSpeedKPH,\n               windGustKPH: e.windGustKPH\n           });\n       })\n     })\n    return results;\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "City",
					    "key" : "city",
					    "type" : "string"
					  }, {
					    "label" : "Weather",
					    "key" : "weather",
					    "type" : "string"
					  }, {
					    "label" : "Description",
					    "key" : "description",
					    "type" : "string"
					  }, {
					    "label" : "WeatherCode",
					    "key" : "weatherCode",
					    "type" : "string"
					  }, {
					    "label" : "CoverageCode",
					    "key" : "coverageCode",
					    "type" : "string"
					  }, {
					    "label" : "IntensityCode",
					    "key" : "intensityCode",
					    "type" : "string"
					  }, {
					    "label" : "Clouds",
					    "key" : "clouds",
					    "type" : "string"
					  }, {
					    "label" : "MinTempC",
					    "key" : "minTempC",
					    "type" : "integer"
					  }, {
					    "label" : "AvgTempC",
					    "key" : "avgTempC",
					    "type" : "integer"
					  }, {
					    "label" : "MaxTempC",
					    "key" : "maxTempC",
					    "type" : "integer"
					  }, {
					    "label" : "FeelslikeC",
					    "key" : "feelslikeC",
					    "type" : "integer"
					  }, {
					    "label" : "DewpointC",
					    "key" : "dewpointC",
					    "type" : "integer"
					  }, {
					    "label" : "PrecipMM",
					    "key" : "precipMM",
					    "type" : "integer"
					  }, {
					    "label" : "Humidity",
					    "key" : "humidity",
					    "type" : "integer"
					  }, {
					    "label" : "PressureMB",
					    "key" : "pressureMB",
					    "type" : "integer"
					  }, {
					    "label" : "WindDir",
					    "key" : "windDir",
					    "type" : "string"
					  }, {
					    "label" : "WindSpeedKPH",
					    "key" : "windSpeedKPH",
					    "type" : "integer"
					  }, {
					    "label" : "WindGustKPH",
					    "key" : "windGustKPH",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "city",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "targeting",
					    "field" : "cities",
					    "expr" : null,
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "will+signals@optimalsocial.com",
					  "createdOn" : "2013-11-14T05:03:00-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:11-0500"
					}, {
					  "id" : "bc96c7c6-45dc-497a-b4e1-7a287aeb0e3a",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Weather Advisory (US)",
					  "icon" : "fa-umbrella",
					  "prefix" : "advisoryUS",
					  "endpoint" : "http://api.aerisapi.com/advisories/search",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Query",
					    "key" : "query",
					    "type" : "string",
					    "value" : "country:us",
					    "visible" : "public"
					  }, {
					    "label" : "Limit",
					    "key" : "limit",
					    "type" : "string",
					    "value" : "250",
					    "visible" : "public"
					  }, {
					    "label" : "Client Id",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "bmy6lvRGnVPgFspxW72Ha",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Fgrk36oiWnv7webtdNvPhaM9w21XeXcDcVtUZZb5",
					    "visible" : "private"
					  } ],
					  "tags" : "advisories, US, weather, Aeris_API",
					  "transform" : "function prepare(input) {\n  return _.map(input.response, function(e) {\n     return {\n         begins: moment(e.timestamps.beginsISO).format(\"YYYY-MM-DD, h:mm:ss a\"),\n         expires: moment(e.timestamps.expiresISO).format(\"YYYY-MM-DD, h:mm:ss a\"),\n         name: e.details.name,\n         type: e.details.type,\n         country: e.place.country.toUpperCase(),\n         state: e.place.state.toUpperCase(),\n         city: e.place.name.toUpperCase(),\n         location: e.details.loc,\n         zipcodes: e.includes.zipcodes,\n         counties: e.includes.counties,\n         fips: e.includes.fips,\n         wxzones: e.includes.wxzones,\n         timezone: e.profile.tz\n      }         \n  })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Begins",
					    "key" : "begins",
					    "type" : "integer"
					  }, {
					    "label" : "Expires",
					    "key" : "expires",
					    "type" : "integer"
					  }, {
					    "label" : "Name",
					    "key" : "name",
					    "type" : "string"
					  }, {
					    "label" : "Type",
					    "key" : "type",
					    "type" : "string"
					  }, {
					    "label" : "Country",
					    "key" : "country",
					    "type" : "string"
					  }, {
					    "label" : "State",
					    "key" : "state",
					    "type" : "string"
					  }, {
					    "label" : "City",
					    "key" : "city",
					    "type" : "string"
					  }, {
					    "label" : "Location",
					    "key" : "location",
					    "type" : "string"
					  }, {
					    "label" : "Zipcodes",
					    "key" : "zipcodes",
					    "type" : "integer"
					  }, {
					    "label" : "Counties",
					    "key" : "counties",
					    "type" : "string"
					  }, {
					    "label" : "Fips",
					    "key" : "fips",
					    "type" : "integer"
					  }, {
					    "label" : "Wxzones",
					    "key" : "wxzones",
					    "type" : "string"
					  }, {
					    "label" : "Timezone",
					    "key" : "timezone",
					    "type" : "string"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "will+signals@optimalsocial.com",
					  "createdOn" : "2013-11-14T05:31:56-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-02-04T11:22:01-0500"
					}, {
					  "id" : "4e65e403-c905-4e94-95bd-cc503b4398c3",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Hazardous Weather Advisories",
					  "icon" : "fa-umbrella",
					  "prefix" : "advisories",
					  "endpoint" : "http://api.aerisapi.com/batch",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Locations (25)",
					    "key" : "requests",
					    "type" : "string",
					    "value" : "/advisories/new+york,ny,/advisories/rochester,ny,/advisories/boston,ma,/advisories/houston,tx,/advisories/austin,tx,/advisories/san+antonio,tx,/advisories/west+palm+beach,fl,/advisories/tampa,fl,/advisories/miami,fl,/advisories/fort+lauderdale,fl,/advisories/orlando,fl,/advisories/new+orleans,la,/advisories/baton+rouge,la,/advisories/charlotte,nc,/advisories/raleigh,nc,/advisories/durham,nc,/advisories/philadelphia,pa,/advisories/scranton,pa,/advisories/harrisburg,pa,/advisories/washington,dc,/advisories/richmond,va,/advisories/atlanta,ga,/advisories/hartford,ct,/advisories/baltimore,md,/advisories/portland,me",
					    "visible" : "public"
					  }, {
					    "label" : "Client Id",
					    "key" : "client_id",
					    "type" : "string",
					    "value" : "bmy6lvRGnVPgFspxW72Ha",
					    "visible" : "private"
					  }, {
					    "label" : "Client Secret",
					    "key" : "client_secret",
					    "type" : "string",
					    "value" : "Fgrk36oiWnv7webtdNvPhaM9w21XeXcDcVtUZZb5",
					    "visible" : "private"
					  } ],
					  "tags" : "Aeris API, advisories, weather",
					  "transform" : "function prepare(input) {\n  var data = input.response.responses;\n  var results = []\n  _.each(data, function(item) {\n       _.each(item.response.length ? item.response : {'empty': true}, function(e) {\n          var combined = item.request.split(\"/\")[2].split(\"?\")[0];\n           var city = _.capitalize(combined.split(\",\")[0])\n           var state = combined.split(\",\")[1].toUpperCase();                          \n\t    results.push({\n                  alertKey: e.timestamps ? e.timestamps.issued : null,\n                  begins: e.timestamps ? moment(e.timestamps.beginsISO).format(\"YYYY-MM-DD, h:mm:ss a\") : null,\n                  expires: e.timestamps ? moment(e.timestamps.expiresISO).format(\"YYYY-MM-DD, h:mm:ss a\") : null,\n                  name: e.details ? e.details.name : null,\n                  type: e.details ? e.details.type : null,\n                  country: e.place ? e.place.country.toUpperCase() : null,\n                  state: e.place ? e.place.state.toUpperCase() : null,\n                  city: city+\", \"+state,\n                  county: e.place ? e.place.name.toUpperCase() : null,\n                  timezone: e.profile ? e.profile.tz : null\n           });\n       })\n     })\n    return results;\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "AlertKey",
					    "key" : "alertKey",
					    "type" : "long"
					  }, {
					    "label" : "Begins",
					    "key" : "begins",
					    "type" : "date"
					  }, {
					    "label" : "Expires",
					    "key" : "expires",
					    "type" : "date"
					  }, {
					    "label" : "Name",
					    "key" : "name",
					    "type" : "string"
					  }, {
					    "label" : "Type",
					    "key" : "type",
					    "type" : "string"
					  }, {
					    "label" : "Country",
					    "key" : "country",
					    "type" : "string"
					  }, {
					    "label" : "State",
					    "key" : "state",
					    "type" : "string"
					  }, {
					    "label" : "City",
					    "key" : "city",
					    "type" : "string"
					  }, {
					    "label" : "County",
					    "key" : "county",
					    "type" : "string"
					  }, {
					    "label" : "Timezone",
					    "key" : "timezone",
					    "type" : "string"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "city",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "new RegExp(advisories.city,\"i\").test(campaign.name)",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "simonpoplyansky+1@gmail.com",
					  "createdOn" : "2013-11-19T22:11:33-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:10-0500"
					}, {
					  "id" : "d3aab4be-be26-49f1-b802-58ca93615cb2",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Flight Search (SFO)",
					  "icon" : "fa-globe",
					  "prefix" : "flight",
					  "endpoint" : "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/SFO/anywhere/anytime/anytime",
					  "format" : "json",
					  "params" : [ {
					    "label" : "ApiKey",
					    "key" : "apiKey",
					    "type" : "string",
					    "value" : "19d62a4f-513d-4193-91a6-727cf055689d",
					    "visible" : "private"
					  } ],
					  "tags" : "Skyscanner API, flights, SFO, ticket price",
					  "transform" : "function prepare(input) {\n  return _.map(input.Quotes, function(e) {\n     return {\n         destination: e.OutboundLeg.DestinationId,\n         departureDate: moment(e.OutboundLeg.DepartureDate).format(\"YYYY-MM-DD, h:mm:ss a\"),\n         returnDate: moment(e.InboundLeg.DepartureDate).format(\"YYYY-MM-DD, h:mm:ss a\"),\n         price: e.MinPrice,\n         direct: e.Direct\n      }         \n  })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Destination",
					    "key" : "destination",
					    "type" : "integer"
					  }, {
					    "label" : "DepartureDate",
					    "key" : "departureDate",
					    "type" : "integer"
					  }, {
					    "label" : "ReturnDate",
					    "key" : "returnDate",
					    "type" : "integer"
					  }, {
					    "label" : "Price",
					    "key" : "price",
					    "type" : "integer"
					  }, {
					    "label" : "Direct",
					    "key" : "direct",
					    "type" : "string"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "diana@optimalsocial.com",
					  "createdOn" : "2013-12-05T05:23:20-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:11-0500"
					}, {
					  "id" : "fd4881e3-d885-4b76-b7d5-f1a857ab6fd4",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Offline Sales",
					  "icon" : "fa-shopping-cart",
					  "prefix" : "offline_sales",
					  "endpoint" : "https://dl.dropboxusercontent.com/s/vg3o8i4avc6blco/offline-sales-data.csv",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "Download",
					    "key" : "dl",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Token Hash",
					    "key" : "token_hash",
					    "type" : "string",
					    "value" : "AAHW5-fpxIHOLni4393TGVAVU22mkJUQIvMi7Hfg3Js47w",
					    "visible" : "private"
					  } ],
					  "tags" : "dropbox, 1st party, offline sales, sales",
					  "transform" : "function prepare(input) {\n  return EngineUtils.csvToJson(input)\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "integer"
					  }, {
					    "label" : "Productsku",
					    "key" : "productsku",
					    "type" : "integer"
					  }, {
					    "label" : "Tracking Code",
					    "key" : "tracking_code",
					    "type" : "string"
					  }, {
					    "label" : "Visits",
					    "key" : "visits",
					    "type" : "integer"
					  }, {
					    "label" : "Margin",
					    "key" : "margin",
					    "type" : "integer"
					  }, {
					    "label" : "Sale Margin",
					    "key" : "sale_margin",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "productsku",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "(new RegExp(offline_sales.productsku)).test(campaign.name)",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2013-12-17T18:47:38-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:02:06-0500"
					}, {
					  "id" : "bac8d504-9232-4912-87e6-2a3da75af4fc",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Offline Sales - Purina",
					  "icon" : "fa-shopping-cart",
					  "prefix" : "salesAU",
					  "endpoint" : "https://dl.dropboxusercontent.com/s/7dk13xmlj4f4bmy/offline-sales-data-AU.csv",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "Download",
					    "key" : "dl",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Token Hash",
					    "key" : "token_hash",
					    "type" : "string",
					    "value" : "AAHmzNMmU-ijstw-U5URAXCpDHxz4ok6jUp-8zs5Ot0paw",
					    "visible" : "private"
					  } ],
					  "tags" : "dropbox, purina, 1st party, offline sales",
					  "transform" : "function prepare(input) {\n  return EngineUtils.csvToJson(input)\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Location",
					    "key" : "location",
					    "type" : "string"
					  }, {
					    "label" : "Total Sold",
					    "key" : "total_sold",
					    "type" : "integer"
					  }, {
					    "label" : "Woolworths",
					    "key" : "woolworths",
					    "type" : "integer"
					  }, {
					    "label" : "Coles",
					    "key" : "coles",
					    "type" : "integer"
					  }, {
					    "label" : "Independent",
					    "key" : "independent",
					    "type" : "integer"
					  }, {
					    "label" : "Pet Specialty",
					    "key" : "pet_specialty",
					    "type" : "integer"
					  }, {
					    "label" : "Coupon Redemptions",
					    "key" : "coupon_redemptions",
					    "type" : "integer"
					  }, {
					    "label" : "Price",
					    "key" : "price",
					    "type" : "integer"
					  }, {
					    "label" : "Margin",
					    "key" : "margin",
					    "type" : "integer"
					  }, {
					    "label" : "Sale Margin",
					    "key" : "sale_margin",
					    "type" : "integer"
					  }, {
					    "label" : "Profit",
					    "key" : "profit",
					    "type" : "integer"
					  }, {
					    "label" : "Percentage Total",
					    "key" : "percentage_total",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "location",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "(new RegExp(salesAU.location)).test(campaign.name)",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2013-12-18T15:48:02-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:02:05-0500"
					}, {
					  "id" : "ccf0d35e-eb2f-4e17-b71b-57a0d7150371",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Product Inventory Feed - Target",
					  "icon" : "fa-file-text-o",
					  "prefix" : "inventory",
					  "endpoint" : "https://dl.dropboxusercontent.com/s/yo3b8irg2nn128i/Social%20Campaign%20Inventory%20Update.csv",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "Download",
					    "key" : "dl",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Token Hash",
					    "key" : "token_hash",
					    "type" : "string",
					    "value" : "AAF6vBb9SSfI1zLjs6kRYuG0fWdkNp5iskXZYqASc2MeSg",
					    "visible" : "private"
					  } ],
					  "tags" : "target, 1st party, inventory, dropbox",
					  "transform" : "function prepare(input) {\n  return EngineUtils.csvToJson(input)\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "integer"
					  }, {
					    "label" : "Theme",
					    "key" : "theme",
					    "type" : "string"
					  }, {
					    "label" : "Title/Item",
					    "key" : "title/item",
					    "type" : "string"
					  }, {
					    "label" : "Product Name",
					    "key" : "product_name",
					    "type" : "string"
					  }, {
					    "label" : "Tcin",
					    "key" : "tcin",
					    "type" : "integer"
					  }, {
					    "label" : "Dpci",
					    "key" : "dpci",
					    "type" : "integer"
					  }, {
					    "label" : "Eoh",
					    "key" : "eoh",
					    "type" : "integer"
					  }, {
					    "label" : "Oo",
					    "key" : "oo",
					    "type" : "integer"
					  }, {
					    "label" : "Owned/Pfl",
					    "key" : "owned/pfl",
					    "type" : "integer"
					  }, {
					    "label" : "Future Wos",
					    "key" : "future_wos",
					    "type" : "integer"
					  }, {
					    "label" : "Pdp Url",
					    "key" : "pdp_url",
					    "type" : "string"
					  }, {
					    "label" : "Category Url",
					    "key" : "category_url",
					    "type" : "integer"
					  }, {
					    "label" : "Copy",
					    "key" : "copy",
					    "type" : "integer"
					  }, {
					    "label" : "Cartwheel",
					    "key" : "cartwheel",
					    "type" : "integer"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "tcin",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "new RegExp(inventory.tcin,\"i\").test(campaign.name)",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2013-12-19T19:40:50-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:02:06-0500"
					}, {
					  "id" : "256168d0-589f-4d91-832d-a7b8b486d908",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Facebook Graph - LM",
					  "icon" : "fa-facebook-square",
					  "prefix" : "LM",
					  "endpoint" : "https://graph.facebook.com/100004004893421",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Fields",
					    "key" : "fields",
					    "type" : "string",
					    "value" : "id,accounts.fields(posts.limit(25).fields(created_time,message,comments,likes,type),global_brand_page_name,category)",
					    "visible" : "public"
					  }, {
					    "label" : "Access Token",
					    "key" : "access_token",
					    "type" : "string",
					    "value" : "CAACEdEose0cBADZBT362TYAYiDNq4HsYSgHVpJ0k100HOx89PFZCHhDvZBEcUU6ZCGuaEZCMZCm7TDYPIZBr24QY4V5JEZARaxPPGSoXWgyQD8ZAlbeN81NKujaFURqDXIkliZA6aOuTQoOsaGNZB7WsZCdFGRUaMAOjEm1rh679DcwdZCjCWzw01dJQBPpL0Aze0akMcZBauNh3GRwwZDZD",
					    "visible" : "private"
					  }, {
					    "label" : "",
					    "key" : "",
					    "type" : "string",
					    "value" : null,
					    "visible" : null
					  } ],
					  "tags" : null,
					  "transform" : "function prepare(input) {\n  return _.map(input.accounts.data[0].posts.data, function (e) {\n    return {\n      created_time: moment(e.created_time).format(\"YYYY-MM-DD, h:mm:ss a\"),\n      brand: input.accounts.data[0].global_brand_page_name,\n      industry: input.accounts.data[0].category,\n      post: e.message,\n      post_id: e.id,\n      type: e.type,\n      comments: e.comments.data.length,\n      likes: e.likes.data.length\n      }         \n  })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Created Time",
					    "key" : "created_time",
					    "type" : "integer"
					  }, {
					    "label" : "Brand",
					    "key" : "brand",
					    "type" : "string"
					  }, {
					    "label" : "Industry",
					    "key" : "industry",
					    "type" : "string"
					  }, {
					    "label" : "Post",
					    "key" : "post",
					    "type" : "string"
					  }, {
					    "label" : "Post ID",
					    "key" : "post_id",
					    "type" : "integer"
					  }, {
					    "label" : "Type",
					    "key" : "type",
					    "type" : "string"
					  }, {
					    "label" : "Comments",
					    "key" : "comments",
					    "type" : "integer"
					  }, {
					    "label" : "Likes",
					    "key" : "likes",
					    "type" : "integer"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2013-12-31T14:56:42-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:11-0500"
					}, {
					  "id" : "d1226f97-b99b-4cab-aa86-a3a05a16bc2a",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Local Events",
					  "icon" : "fa-calendar",
					  "prefix" : "seatgeek",
					  "endpoint" : "http://api.seatgeek.com/2/events",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Geoip",
					    "key" : "geoip",
					    "type" : "string",
					    "value" : "99.62.164.161",
					    "visible" : "public"
					  }, {
					    "label" : "Range",
					    "key" : "range",
					    "type" : "string",
					    "value" : "15mi",
					    "visible" : "public"
					  } ],
					  "tags" : "seatgeek, 3rd party, api",
					  "transform" : "function prepare(input) {\n  return _.map(input.events, function (e) {\n    return {\n      date_time: moment(e.datetime_local).format(\"YYYY-MM-DD, h:mm:ss a\"),\n      event: e.title,\n      id: e.id,\n      type: e.type,\n      score: e.score,\n      venue: e.venue.name,\n      address: e.venue.address,\n      headliner: e.performers[0].name,\n      listings: e.stats.listing_count,\n      average_price: e.stats.average_price,\n      lowest_price: e.stats.lowest_price,\n      highest_price: e.stats.highest_price,\n      location: input.meta.geolocation.display_name,\n      zip: input.meta.geolocation.postal_code,\n      range: input.meta.geolocation.range\n      }         \n  })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date Time",
					    "key" : "date_time",
					    "type" : "integer"
					  }, {
					    "label" : "Event",
					    "key" : "event",
					    "type" : "string"
					  }, {
					    "label" : "ID",
					    "key" : "id",
					    "type" : "integer"
					  }, {
					    "label" : "Type",
					    "key" : "type",
					    "type" : "string"
					  }, {
					    "label" : "Score",
					    "key" : "score",
					    "type" : "integer"
					  }, {
					    "label" : "Venue",
					    "key" : "venue",
					    "type" : "string"
					  }, {
					    "label" : "Address",
					    "key" : "address",
					    "type" : "integer"
					  }, {
					    "label" : "Headliner",
					    "key" : "headliner",
					    "type" : "string"
					  }, {
					    "label" : "Listings",
					    "key" : "listings",
					    "type" : "integer"
					  }, {
					    "label" : "Average Price",
					    "key" : "average_price",
					    "type" : "integer"
					  }, {
					    "label" : "Lowest Price",
					    "key" : "lowest_price",
					    "type" : "integer"
					  }, {
					    "label" : "Highest Price",
					    "key" : "highest_price",
					    "type" : "integer"
					  }, {
					    "label" : "Location",
					    "key" : "location",
					    "type" : "string"
					  }, {
					    "label" : "Zip",
					    "key" : "zip",
					    "type" : "integer"
					  }, {
					    "label" : "Range",
					    "key" : "range",
					    "type" : "integer"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2013-12-31T16:00:50-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:10-0500"
					}, {
					  "id" : "be35c526-0e78-4cd9-80f7-04e88a6d40df",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Offline Sales by Location",
					  "icon" : "fa-shopping-cart",
					  "prefix" : "location_sales",
					  "endpoint" : "https://dl.dropboxusercontent.com/s/gzm1yumrjkb5crz/offline-sales-data-locations.csv",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "Dl",
					    "key" : "dl",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Token Hash",
					    "key" : "token_hash",
					    "type" : "string",
					    "value" : "AAEb-vlcs16QZsI1QKYqXxRqqNSFysL56ix9Hmo-noG64w",
					    "visible" : "private"
					  } ],
					  "tags" : "Dropbox, offline sales, 1st party",
					  "transform" : "function prepare(input) {\n  return EngineUtils.csvToJson(input)\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "integer"
					  }, {
					    "label" : "Productsku",
					    "key" : "productsku",
					    "type" : "integer"
					  }, {
					    "label" : "Tracking Code",
					    "key" : "tracking_code",
					    "type" : "string"
					  }, {
					    "label" : "Total Sales",
					    "key" : "total_sales",
					    "type" : "integer"
					  }, {
					    "label" : "Nyc Sales",
					    "key" : "nyc_sales",
					    "type" : "integer"
					  }, {
					    "label" : "Chicago Purchases",
					    "key" : "chicago_purchases",
					    "type" : "integer"
					  }, {
					    "label" : "La Sales",
					    "key" : "la_sales",
					    "type" : "integer"
					  }, {
					    "label" : "Margin",
					    "key" : "margin",
					    "type" : "integer"
					  }, {
					    "label" : "Sale Margin",
					    "key" : "sale_margin",
					    "type" : "integer"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2014-01-07T13:18:07-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:10-0500"
					}, {
					  "id" : "c6903b1b-0990-42b9-a770-83d6eaf08a73",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Optimalsocial WWW",
					  "icon" : "fa-rss",
					  "prefix" : "coach",
					  "endpoint" : "https://www.optimalsocial.com/api/v1/brand/coach",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Access Token",
					    "key" : "access_token",
					    "type" : "string",
					    "value" : "b088c1ef13c5ae2856939a6fea5c81b1",
					    "visible" : "private"
					  }, {
					    "label" : "Posts",
					    "key" : "posts",
					    "type" : "string",
					    "value" : "facebook",
					    "visible" : "public"
					  }, {
					    "label" : "",
					    "key" : "",
					    "type" : "string",
					    "value" : null,
					    "visible" : null
					  } ],
					  "tags" : "brand",
					  "transform" : "function prepare(input) {\n  var data = input.posts.facebook;\n  var results = []\n  _.each(data, function(item) {                    \n\t    results.push({\n                  created_time: moment(item.created_time).format(\"YYYY-MM-DD, h:mm:ss a\"),\n                  updated_time: moment(item.updated_time).format(\"YYYY-MM-DD, h:mm:ss a\"),\n                  brand: item.from.name,\n                  industry: input.industry.verbose_name,\n                  type: item.type,\n                  post_id: item.id,\n                  post: item.message,\n                  comments: item.comment_count,\n                  likes: item.like_count\n           });\n     })\n    return results;\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Created Time",
					    "key" : "created_time",
					    "type" : "integer"
					  }, {
					    "label" : "Updated Time",
					    "key" : "updated_time",
					    "type" : "integer"
					  }, {
					    "label" : "Brand",
					    "key" : "brand",
					    "type" : "string"
					  }, {
					    "label" : "Industry",
					    "key" : "industry",
					    "type" : "string"
					  }, {
					    "label" : "Type",
					    "key" : "type",
					    "type" : "string"
					  }, {
					    "label" : "Post ID",
					    "key" : "post_id",
					    "type" : "integer"
					  }, {
					    "label" : "Post",
					    "key" : "post",
					    "type" : "string"
					  }, {
					    "label" : "Comments",
					    "key" : "comments",
					    "type" : "integer"
					  }, {
					    "label" : "Likes",
					    "key" : "likes",
					    "type" : "integer"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2014-01-07T17:28:37-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:10-0500"
					}, {
					  "id" : "8226d2ff-7f00-41c3-92a2-b0b92d6e284c",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Planalytics WeatherSmart (Dropbox)",
					  "icon" : "fa-umbrella",
					  "prefix" : "weathersmart",
					  "endpoint" : "https://dl.dropboxusercontent.com/s/gltfn6vtz29s4en/Optimal_Social_WeatherSmart_Feed_-_Snow_Throwers.csv",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "Dl",
					    "key" : "dl",
					    "type" : "string",
					    "value" : "1",
					    "visible" : "public"
					  }, {
					    "label" : "Token Hash",
					    "key" : "token_hash",
					    "type" : "string",
					    "value" : "AAEMA0g0IlFpYGTqih_xVfmr9hV6zwyDJhpCNnFeOo6OuQ",
					    "visible" : "private"
					  } ],
					  "tags" : "dropbox, weathersmart, planalytics",
					  "transform" : "function prepare(input) {\n  return EngineUtils.csvToJson(input)\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Product",
					    "key" : "product",
					    "type" : "string"
					  }, {
					    "label" : "Market",
					    "key" : "market",
					    "type" : "integer"
					  }, {
					    "label" : "Marketname",
					    "key" : "marketname",
					    "type" : "string"
					  }, {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "integer"
					  }, {
					    "label" : "Favorability",
					    "key" : "favorability",
					    "type" : "string"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "marketname",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "new RegExp(weathersmart.market_name,\"i\").test(campaign.name)",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2014-01-13T13:54:05-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:10-0500"
					}, {
					  "id" : "22e1b39c-77da-4597-a40d-a7aac7aa9e6c",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "TV Ads",
					  "icon" : "fa-cloud-download",
					  "prefix" : "civolution",
					  "endpoint" : "https://labs-api.optim.al/api/civolution/airings",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Broadcast Time",
					    "key" : "broadcast_start_time_gt",
					    "type" : "string",
					    "value" : "2014-01-15T06:00:00-08",
					    "visible" : "public"
					  }, {
					    "label" : "Timezone",
					    "key" : "timezone",
					    "type" : "string",
					    "value" : "America/Los_Angeles",
					    "visible" : "public"
					  }, {
					    "label" : "Brand",
					    "key" : "brand_name",
					    "type" : "string",
					    "value" : "",
					    "visible" : "public"
					  }, {
					    "label" : "Product",
					    "key" : "product_name",
					    "type" : "string",
					    "value" : "",
					    "visible" : "public"
					  }, {
					    "label" : "Channel",
					    "key" : "channel_name",
					    "type" : "string",
					    "value" : "",
					    "visible" : "public"
					  }, {
					    "label" : "Limit",
					    "key" : "limit",
					    "type" : "string",
					    "value" : "50",
					    "visible" : "public"
					  }, {
					    "label" : "Order By",
					    "key" : "order_by",
					    "type" : "string",
					    "value" : "broadcast_start_time",
					    "visible" : "public"
					  }, {
					    "label" : "Order Direction",
					    "key" : "order_direction",
					    "type" : "string",
					    "value" : "descending",
					    "visible" : "public"
					  }, {
					    "label" : "T",
					    "key" : "t",
					    "type" : "string",
					    "value" : "8e818d33-7198-4cc5-9253-c600df8bc183",
					    "visible" : "private"
					  } ],
					  "tags" : "Civolution API, 3rd party, TV ads",
					  "transform" : "function prepare(input) {\n  return _.map(input.objects, function(e) {\n     return {\n         Start_Time: moment(e.broadcastStartTime).zone('-1100').format(\"YYYY-MM-DD, h:mm:ss a\"),\n         Timezone: e.timezone,\n         Duration: e.entity.duration,\n         Channel: e.channel.name.split(\"-\")[0].toUpperCase(),\n         Channel_Full: e.channel.name,\n         Brand: e.entity.brand.name,\n         Product: e.entity.productName,\n         Category: e.entity.categoryLabel,\n         Ad: e.entity.permalink\n      }         \n  })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Start Time",
					    "key" : "Start_Time",
					    "type" : "integer"
					  }, {
					    "label" : "Timezone",
					    "key" : "Timezone",
					    "type" : "string"
					  }, {
					    "label" : "Duration",
					    "key" : "Duration",
					    "type" : "integer"
					  }, {
					    "label" : "Channel",
					    "key" : "Channel",
					    "type" : "string"
					  }, {
					    "label" : "Channel Full",
					    "key" : "Channel_Full",
					    "type" : "string"
					  }, {
					    "label" : "Brand",
					    "key" : "Brand",
					    "type" : "string"
					  }, {
					    "label" : "Product",
					    "key" : "Product",
					    "type" : "string"
					  }, {
					    "label" : "Category",
					    "key" : "Category",
					    "type" : "string"
					  }, {
					    "label" : "Ad",
					    "key" : "Ad",
					    "type" : "string"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2014-01-15T13:05:44-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-02-18T14:04:52-0500"
					}, {
					  "id" : "88bb9729-5514-4a8f-97d3-e06ade7b63ad",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Planalytics Weather Data",
					  "icon" : "fa-umbrella",
					  "prefix" : "planalytics",
					  "endpoint" : "http://qa2-signals.optim.al/api/v1/ftp/planalytics",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "FTP URL",
					    "key" : "url",
					    "type" : "string",
					    "value" : "ftp://54.211.156.30/Planalytics_WeatherSmart_Feed_OptimalSocial_01132014.csv",
					    "visible" : "public"
					  } ],
					  "tags" : "Weather FTP",
					  "transform" : "function prepare(input) {\n  return EngineUtils.csvToJson(input)\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "integer"
					  }, {
					    "label" : "Product",
					    "key" : "product",
					    "type" : "string"
					  }, {
					    "label" : "Market",
					    "key" : "market",
					    "type" : "integer"
					  }, {
					    "label" : "City State",
					    "key" : "city_state",
					    "type" : "string"
					  }, {
					    "label" : "Country",
					    "key" : "country",
					    "type" : "string"
					  }, {
					    "label" : "Favorability",
					    "key" : "favorability",
					    "type" : "string"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "date",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "time",
					    "field" : "start_date",
					    "expr" : null,
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "city_state",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "targeting",
					    "field" : "cities",
					    "expr" : null,
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "mlewis@brandnetworksinc.com",
					  "createdOn" : "2014-01-16T11:47:16-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-21T16:07:25-0500"
					}, {
					  "id" : "acb59d9e-f2d9-4bb8-945d-6fa16636dac1",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Planalytics WeatherSmart (FTP)",
					  "icon" : "fa-umbrella",
					  "prefix" : "planalytics",
					  "endpoint" : "http://qa2-signals.optim.al/api/v1/ftp/planalytics",
					  "format" : "csv",
					  "params" : [ {
					    "label" : "FTP URL",
					    "key" : "url",
					    "type" : "string",
					    "value" : "ftp://54.211.156.30/weathersmartfeed.csv",
					    "visible" : "public"
					  } ],
					  "tags" : "Weather FTP",
					  "transform" : "function prepare(input) {\n  return EngineUtils.csvToJson(input)\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Date",
					    "key" : "date",
					    "type" : "integer"
					  }, {
					    "label" : "Product",
					    "key" : "product",
					    "type" : "string"
					  }, {
					    "label" : "Market",
					    "key" : "market",
					    "type" : "integer"
					  }, {
					    "label" : "City State",
					    "key" : "city_state",
					    "type" : "string"
					  }, {
					    "label" : "Country",
					    "key" : "country",
					    "type" : "string"
					  }, {
					    "label" : "Favorability",
					    "key" : "favorability",
					    "type" : "string"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "date",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "time",
					    "field" : "date",
					    "expr" : null,
					    "method" : "exact"
					  }, {
					    "type" : "output",
					    "source" : "city_state",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "new RegExp(planalytics.city_state,\"i\").test(campaign.name)",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "mlewis@brandnetworksinc.com",
					  "createdOn" : "2014-01-16T11:47:16-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:02:05-0500"
					}, {
					  "id" : "92ceb0d1-cca2-4615-b66c-c7b21024fa1f",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Killersports ",
					  "icon" : "fa-rss",
					  "prefix" : "query",
					  "endpoint" : "http://killersports.com/nfl.py/query",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Sdql",
					    "key" : "sdql",
					    "type" : "string",
					    "value" : "team%3D49ers+and+season%3D2013",
					    "visible" : "public"
					  }, {
					    "label" : "Submit",
					    "key" : "submit",
					    "type" : "string",
					    "value" : "S+D+Q+L+%21",
					    "visible" : "public"
					  }, {
					    "label" : "Sid",
					    "key" : "sid",
					    "type" : "string",
					    "value" : "guest",
					    "visible" : "public"
					  } ],
					  "tags" : "nfl.py",
					  "transform" : "function prepare(input) {\n  return input\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "0",
					    "key" : "0",
					    "type" : "string"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2014-01-16T13:46:41-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-29T15:14:55-0500"
					}, {
					  "id" : "ef8f0c18-bae2-43c3-9d4d-7c557cfd6766",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "NCAA Men's Basketball Schedule",
					  "icon" : "fa-trophy",
					  "prefix" : "NCAA",
					  "endpoint" : "http://api.sportsdatallc.org/ncaamb-t3/games/2013/REG/schedule.xml",
					  "format" : "xml",
					  "params" : [ {
					    "label" : "Api Key",
					    "key" : "api_key",
					    "type" : "string",
					    "value" : "4ctsjxg95fjxu5srxncvyfut",
					    "visible" : "private"
					  } ],
					  "tags" : "SportsData API, NCAA, schedule, regular season",
					  "transform" : "function prepare(input) {\n  return input\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "0",
					    "key" : "0",
					    "type" : "string"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2014-01-22T13:09:45-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-29T14:17:58-0500"
					}, {
					  "id" : "39199734-d99d-47d6-82c1-b2ec2d44c7b0",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "NFL Schedule",
					  "icon" : "fa-trophy",
					  "prefix" : "NFL_Schedule",
					  "endpoint" : "http://api.sportsdatallc.org/nfl-t1/2013/REG/1/schedule.xml",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Api Key",
					    "key" : "api_key",
					    "type" : "string",
					    "value" : "ebfbyb3fqsya7ezramu57buk",
					    "visible" : "private"
					  } ],
					  "tags" : "SportsData API, NFL, schedule, regular season",
					  "transform" : "function prepare(input) {\n    return _.map(input, function (e) {\n      return {\n         Scheduled: moment(e.scheduled).zone('-0800').format(\"YYYY-MM-DD, h:mm:ss a\"),\n         Conditions: e.wx_condition,\n         Venue: e.venue.name,\n         Venue_Location: e.venue.city+\", \"+e.venue.state,\n         Home_Team: e.home_team.city+\" \"+e.home_team.name,\n         Away_Team: e.away_team.city+\" \"+e.away_team.name\n      }         \n  })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Scheduled",
					    "key" : "Scheduled",
					    "type" : "integer"
					  }, {
					    "label" : "Conditions",
					    "key" : "Conditions",
					    "type" : "string"
					  }, {
					    "label" : "Venue",
					    "key" : "Venue",
					    "type" : "string"
					  }, {
					    "label" : "Venue Location",
					    "key" : "Venue_Location",
					    "type" : "string"
					  }, {
					    "label" : "Home Team",
					    "key" : "Home_Team",
					    "type" : "string"
					  }, {
					    "label" : "Away Team",
					    "key" : "Away_Team",
					    "type" : "string"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2014-01-22T13:22:46-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-29T14:51:47-0500"
					}, {
					  "id" : "1cb73b77-4813-4bd8-9920-d312624cf18c",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "NFL Scores",
					  "icon" : "fa-trophy",
					  "prefix" : "NFL_Scores",
					  "endpoint" : "http://api.sportsdatallc.org/nfl-t1/2013/PST/3/NE/DEN/boxscore.xml",
					  "format" : "xml",
					  "params" : [ {
					    "label" : "Api Key",
					    "key" : "api_key",
					    "type" : "string",
					    "value" : "ebfbyb3fqsya7ezramu57buk",
					    "visible" : "private"
					  } ],
					  "tags" : "SportsData API, NFL, boxscore, post season",
					  "transform" : "function prepare(e) {\n    var data = $.xml2json(e)\n    return data[\"team\"];\n    return {\n         Start_Time: moment(e.scheduled).zone('-0800').format(\"YYYY-MM-DD, h:mm:ss a\"),\n         Quarter: e.quarter,\n         Clock: e.clock,\n         Home_Team: e.home_team.market+\" \"+e.home_team.name,\n         Home_Team_Points: e.home_team.points,\n         Away_Team: e.away_team.market+\" \"+e.away_team.name,\n         Away_Team_Points: e.away_team.points\n      }         \n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Scoring",
					    "key" : "scoring",
					    "type" : "string"
					  }, {
					    "label" : "ID",
					    "key" : "id",
					    "type" : "string"
					  }, {
					    "label" : "Name",
					    "key" : "name",
					    "type" : "string"
					  }, {
					    "label" : "Market",
					    "key" : "market",
					    "type" : "string"
					  }, {
					    "label" : "Remaining Challenges",
					    "key" : "remaining_challenges",
					    "type" : "integer"
					  }, {
					    "label" : "Remaining Timeouts",
					    "key" : "remaining_timeouts",
					    "type" : "integer"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2014-01-22T13:41:22-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-29T15:46:47-0500"
					}, {
					  "id" : "851367c7-830b-45d4-ac32-b16fffd0f6b8",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "TV Channel",
					  "icon" : "fa-film",
					  "prefix" : "tv_channel",
					  "endpoint" : "http://api.rovicorp.com/TVlistings/v9/listings/gridschedule/70178/info",
					  "format" : "json",
					  "params" : [ {
					    "label" : "Locale",
					    "key" : "locale",
					    "type" : "string",
					    "value" : "en-US",
					    "visible" : "public"
					  }, {
					    "label" : "Duration (next 4 hours)",
					    "key" : "duration",
					    "type" : "string",
					    "value" : "240",
					    "visible" : "public"
					  }, {
					    "label" : "Includechannelimages",
					    "key" : "includechannelimages",
					    "type" : "string",
					    "value" : "false",
					    "visible" : "public"
					  }, {
					    "label" : "Channel",
					    "key" : "sourceid",
					    "type" : "string",
					    "value" : "8559",
					    "visible" : "public"
					  }, {
					    "label" : "Format",
					    "key" : "format",
					    "type" : "string",
					    "value" : "json",
					    "visible" : "public"
					  }, {
					    "label" : "Apikey",
					    "key" : "apikey",
					    "type" : "string",
					    "value" : "nwxnxzg552qc55mr69zzq25y",
					    "visible" : "private"
					  } ],
					  "tags" : "Rovi API, TV listings, listings, grid schedule",
					  "transform" : "function prepare(input) {\n  return _.map(input.GridScheduleResult.GridChannels[0].Airings, function(e) {\n     return {\n         airing: moment(e.AiringTime).format(\"YYYY-MM-DD, h:mm:ss a\"),\n         program: e.Title,\n         programID: e.ProgramId,\n         title: e.EpisodeTitle,\n         description: e.Copy,\n         duration: e.Duration,\n         category: e.Category,\n         subcategory: e.Subcategory,\n         type: e.AiringType,\n         source: input.GridScheduleResult.GridChannels[0].SourceLongName,\n         channel: input.GridScheduleResult.GridChannels[0].Channel,\n         callLetters: input.GridScheduleResult.GridChannels[0].CallLetters,\n         rating: e.TVRating,\n         provider: input.GridScheduleResult.Name,\n         CC: e.CC,\n         Stereo: e.Stereo,\n         HD: e.HD,\n         Dolby: e.Dolby\n      }   \n  })\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Airing",
					    "key" : "airing",
					    "type" : "integer"
					  }, {
					    "label" : "Program",
					    "key" : "program",
					    "type" : "string"
					  }, {
					    "label" : "ProgramID",
					    "key" : "programID",
					    "type" : "integer"
					  }, {
					    "label" : "Title",
					    "key" : "title",
					    "type" : "string"
					  }, {
					    "label" : "Description",
					    "key" : "description",
					    "type" : "string"
					  }, {
					    "label" : "Duration",
					    "key" : "duration",
					    "type" : "integer"
					  }, {
					    "label" : "Category",
					    "key" : "category",
					    "type" : "string"
					  }, {
					    "label" : "Subcategory",
					    "key" : "subcategory",
					    "type" : "string"
					  }, {
					    "label" : "Type",
					    "key" : "type",
					    "type" : "string"
					  }, {
					    "label" : "Source",
					    "key" : "source",
					    "type" : "string"
					  }, {
					    "label" : "Channel",
					    "key" : "channel",
					    "type" : "integer"
					  }, {
					    "label" : "CallLetters",
					    "key" : "callLetters",
					    "type" : "string"
					  }, {
					    "label" : "Rating",
					    "key" : "rating",
					    "type" : "string"
					  }, {
					    "label" : "Provider",
					    "key" : "provider",
					    "type" : "string"
					  }, {
					    "label" : "CC",
					    "key" : "CC",
					    "type" : "string"
					  }, {
					    "label" : "Stereo",
					    "key" : "Stereo",
					    "type" : "string"
					  }, {
					    "label" : "HD",
					    "key" : "HD",
					    "type" : "string"
					  }, {
					    "label" : "Dolby",
					    "key" : "Dolby",
					    "type" : "string"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "dianatobey@gmail.com",
					  "createdOn" : "2014-01-22T14:58:45-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-23T14:03:09-0500"
					}, {
					  "id" : "de1767bb-0716-48e1-8701-749fbe4ddd51",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "NFL Schedule (XML)",
					  "icon" : "fa-rss",
					  "prefix" : "nflScheduleXML",
					  "endpoint" : "http://api.sportsdatallc.org/nfl-t1/2013/REG/1/schedule.xml",
					  "format" : "xml",
					  "params" : [ {
					    "label" : "API Key",
					    "key" : "api_key",
					    "type" : "string",
					    "value" : "ebfbyb3fqsya7ezramu57buk",
					    "visible" : "private"
					  } ],
					  "tags" : "nfl-t1",
					  "transform" : "function prepare(input) {\n  var data = $.xml2json(input);\n  return data[\"game\"];\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Venue",
					    "key" : "venue",
					    "type" : "string"
					  }, {
					    "label" : "Weather",
					    "key" : "weather",
					    "type" : "string"
					  }, {
					    "label" : "Broadcast",
					    "key" : "broadcast",
					    "type" : "string"
					  }, {
					    "label" : "Links",
					    "key" : "links",
					    "type" : "string"
					  }, {
					    "label" : "ID",
					    "key" : "id",
					    "type" : "integer"
					  }, {
					    "label" : "Scheduled",
					    "key" : "scheduled",
					    "type" : "integer"
					  }, {
					    "label" : "Home Rotation",
					    "key" : "home_rotation",
					    "type" : "string"
					  }, {
					    "label" : "Away Rotation",
					    "key" : "away_rotation",
					    "type" : "string"
					  }, {
					    "label" : "Home",
					    "key" : "home",
					    "type" : "string"
					  }, {
					    "label" : "Away",
					    "key" : "away",
					    "type" : "string"
					  }, {
					    "label" : "Status",
					    "key" : "status",
					    "type" : "string"
					  } ],
					  "matches" : null,
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "mlewis@brandnetworksinc.com",
					  "createdOn" : "2014-01-29T14:53:31-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-01-29T15:48:01-0500"
					}, {
					  "id" : "1dcc6e9c-1e7d-45a9-a485-c8f93c88616a",
					  "hashKey" : "company:3771",
					  "modelType" : "signal",
					  "name" : "Test Push Signal",
					  "icon" : "fa-rss",
					  "prefix" : "push_test",
					  "endpoint" : null,
					  "format" : "json",
					  "params" : [ ],
					  "tags" : "push",
					  "transform" : "function prepare(input) {\n  return input\n}",
					  "view" : "table",
					  "fields" : [ {
					    "label" : "Post Name",
					    "key" : "post_name",
					    "type" : "string"
					  }, {
					    "label" : "Store Name",
					    "key" : "store_name",
					    "type" : "string"
					  }, {
					    "label" : "BID",
					    "key" : "bid",
					    "type" : "integer"
					  }, {
					    "label" : "Bid Type",
					    "key" : "bid_type",
					    "type" : "string"
					  }, {
					    "label" : "Targeting",
					    "key" : "targeting",
					    "type" : "integer"
					  }, {
					    "label" : "Targeting Radius",
					    "key" : "targeting_radius",
					    "type" : "integer"
					  }, {
					    "label" : "Post ID",
					    "key" : "post_id",
					    "type" : "long"
					  } ],
					  "matches" : [ {
					    "type" : "output",
					    "source" : "store_name",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "campaign",
					    "field" : "name",
					    "expr" : "push_test.store_name",
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "bid",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "ad",
					    "field" : "object_id",
					    "expr" : "push_test.bid",
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "bid_type",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "ad",
					    "field" : "bid_type",
					    "expr" : "push_test.bid_type",
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "targeting",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "targeting",
					    "field" : "zips",
					    "expr" : "push_test.targeting",
					    "method" : null
					  }, {
					    "type" : "output",
					    "source" : "post_id",
					    "partner" : "facebook",
					    "unique" : "true",
					    "entity" : "creative",
					    "field" : "object_id",
					    "expr" : "push_test.post_id",
					    "method" : null
					  } ],
					  "enabled" : null,
					  "runEvery" : null,
					  "runUnits" : null,
					  "createdBy" : "mlewis@brandnetworksinc.com",
					  "createdOn" : "2014-02-25T15:08:28-0500",
					  "modifiedBy" : "mlewis@brandnetworksinc.com",
					  "modifiedOn" : "2014-03-07T11:33:43-0500"
						} ]
					};
					
					d.resolve(response);
			        return d.promise;
				}
			}
		}
	}
});