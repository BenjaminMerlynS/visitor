Package.describe({
	name: 'merlyn:visitor',
	version: '0.0.5',
	summary: 'Anonymous User Tracking Platform',
	git: 'https://github.com/BenjaminMerlynS/visitor',
	documentation: 'README.md'
});

Package.onUse(function(api) {

	api.versionsFrom('2.4');

	// ====== BUILT-IN PACKAGES =======

	// ====== 3RD PARTY PACKAGES =======

	api.use('merlyn:visitor-client@0.0.5', 'client');
	api.imply('merlyn:visitor-client', 'client');

	api.use('merlyn:visitor-server@0.0.5', 'server');
	api.imply('merlyn:visitor-server', 'server');

	// ====== BOTH =======

	// ====== SERVER =======

	// ====== CLIENT =======

	// ====== EXPORTS =======

});

Package.onTest(function(api) {
	api.use('tinytest');
});
