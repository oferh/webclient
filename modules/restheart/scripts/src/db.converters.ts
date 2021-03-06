/**
 * Created by nitzan on 02/01/2017.
 */

/// <reference path="../../../../scripts/bin/app/application.d.ts" />
/// <reference path="../../../../scripts/bin/components/components.d.ts" />
/// <reference path="../../../../scripts/bin/components/converters.d.ts" />

(function(): void {
	fugazi.components.modules.descriptor.loaded({
		name: "restheart.databases",
		converters: {
			RawDatabases2Databases: {
				title: "converts RawDatabases to Databases",
				input: "RawDatabases",
				output: "Databases",
				converter: function(response: { _embedded: { _id: string }[] }): string[] {
					return response._embedded.map(db => db._id);
				}
			},
			RawDatabase2Database: {
				title: "converts RawDatabase to Database",
				input: "RawDatabase",
				output: "Database",
				converter: function(response: { _id: string, _embedded: { _id: string }[] }): { _id: string, collections: string[] } {
					return {
						_id: response._id,
						collections: response._embedded.map(db => db._id)
					};
				}
			}
		}
	});
})();
