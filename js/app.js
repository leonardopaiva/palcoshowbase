Application = {
	init: function () {
		this.project();
	},

	// Project
	project: function (a){
		a = "Js Ok! Go Application.js";
		console.log(a);

		$(function() {
	    $('.mask-money').maskMoney();
	  })
	}
};


$(document).on("ready", function () {
	Application.init();
});