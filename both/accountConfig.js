T9n.setLanguage('fr')

const email = AccountsTemplates.removeField('email');
const password = AccountsTemplates.removeField('password');

AccountsTemplates.addField({
	_id: 'last_name',
	type: 'text',
	displayName: 'Nom',
	placeholder: 'Nom',
	required: true,
	trim: true
})

AccountsTemplates.addField({
	_id: 'first_name',
	type: 'text',
	displayName: 'Prénom',
	placeholder: 'Prénom',
	required: true,
	trim: true
})

AccountsTemplates.addField(email);
AccountsTemplates.addField(password);