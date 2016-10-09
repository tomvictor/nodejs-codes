function Emitter() {
	this.events ={};
}

Emitter.prototype.on = function(type,listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
};

