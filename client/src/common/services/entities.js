	/* angular service */
	angular.module("os.entities", []).provider('Entities', function(){
		return {
			$get: function($http, $q){
				return {
					get: function(){
						var p = $q.defer();

						var response = {
							"modelTypes" : [ "time", "account", "campaign", "ad", "targeting", "creative" ],
							"modelInfo" : {
								"time" : {
								    "depth" : 0,
								    "value" : "time",
								    "label" : "Time",
								    "fields" : null,
								    "uri" : null
								},
								"account" : {
								    "depth" : 0,
								    "value" : "account",
								    "label" : "Account",
								    "fields" : "accountId,name,account_status,amount_spent,balance,business_name,currency,daily_spend_limit,spend_cap,timezone_id,timezone_name",
								    "uri" : null
								},
								"campaign" : {
								    "depth" : 1,
								    "value" : "campaign",
								    "label" : "Campaign",
								    "fields" : "id,account_id,name,campaign_status,daily_budget,lifetime_budget,budget_remaining,start_time,end_time,updated_time,created_time",
								    "uri" : "adcampaigns"
								},
								"ad" : {
								    "depth" : 2,
								    "value" : "ad",
								    "label" : "Ad",
								    "fields" : "id,account_id,name,campaign_id,adgroup_status,bid_type,bid_info,conversion_specs,created_time,creative_ids,tracking_specs,updated_time,view_tags,targeting",
								    "uri" : "adgroups"
								},
								"targeting" : {
								    "depth" : 2,
								    "value" : "targeting",
								    "label" : "Targeting",
								    "fields" : "genders,age_min,age_max,broad_age,countries,cities,regions,radius,user_adclusters,excluded_user_adclusters,keywords,user_os,user_device,wireless_carrier,site_category,connections,excluded_connections,friends_of_connections,college_networks,work_networks,education_statuses,college_years,college_majors,page_types,relationship_statuses,interested_in,locales,zipes,action_spec,action_spec_friend,action_spec_excluded",
								    "uri" : null
								},
								"creative" : {
								    "depth" : 2,
								    "value" : "creative",
								    "label" : "Creative",
								    "fields" : "id,name,type,object_id,body,image_hash,image_url,title,link_url,url_tags,preview_url,related_fan_page,auto_update,story_id,action_spec",
								    "uri" : null
								}
							},
							"parentTypes" : {
								"campaign" : "account",
							    "ad" : "campaign",
							    "targeting" : "ad",
							    "creative" : "ad",
							    "image" : "creative"
							},
							"childTypes" : {
							    "account" : [ "campaign" ],
							    "campaign" : [ "ad", "targeting", "creative" ]
							},
							"embeddedTypes" : [ "targeting" ]
						};

						p.resolve(response);
						return p.promise;
					}
				}
			}
		}
	});
