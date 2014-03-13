Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('allElements', {path: '/'});
	this.route('elementForm', {path: '/new'});
});