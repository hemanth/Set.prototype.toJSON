'use strict';
(function () {
	if (!Set.prototype.toJSON) {
        let toJSON = function() {
            var o = Object.create(null);
            for(let [k, v] of this.entries()) {
                o[k] = v;
            }
            return o;
        }
     if (Object.defineProperty) {
			Object.defineProperty(Set.prototype, 'toJSON', {
				'value': toJSON,
				'configurable': true,
				'writable': true
			});
		} else {
			Set.prototype.toJSON = toJSON;
		}        
    }
}());
