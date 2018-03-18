const path = require('path');

module.exports = (Franz) => {

	const getMessages = function getMessages() {
		let count = 0;
		const badge = document.querySelectorAll('.badge.ng-star-inserted')[0];
		
		if (badge !== undefined) {
			if(badge.length !== 0){
				count = 1; //badge.innerText.replace("+", "")
			}else{
				count = 0;
			}
		}
		
		Franz.setBadge(0, count);
	};

	Franz.loop(getMessages);
  
};
