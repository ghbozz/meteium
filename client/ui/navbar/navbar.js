import './navbar.html'

Template.navbar.events({
	'click .js-open-modal'(event, instance) {
		Modal.show('login_modal')
	},

	'click .js-logout'(event, instance) {
		Meteor.logout();
	}
})

Template.login_modal.onCreated(function() {
	this.autorun(() => {
		if (Meteor.userId()) {
			Modal.hide('login_modal');
		}
	})
})