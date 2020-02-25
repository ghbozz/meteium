import '../both'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './ui/layout/layout.js'


if (Meteor.isDevelopment) {
	window.FlowRouter = FlowRouter;
}