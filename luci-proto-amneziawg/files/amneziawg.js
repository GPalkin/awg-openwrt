'use strict';
'require network';

return network.registerProtocol('amneziawg', {
	getI18n: function() {
		return _('AmneziaWG VPN');
	},

	getPackageName: function() {
		return 'amneziawg-tools';
	},

	isFloating: function() {
		return true;
	},

	isVirtual: function() {
		return true;
	},

	getDevices: function() {
		return null;
	},

	getIfname: function() {
		return this._ubus('l3_device') || this.sid;
	},

	containsDevice: function(ifname) {
		return network.getIfnameOf(ifname) == this.getIfname();
	}
});
