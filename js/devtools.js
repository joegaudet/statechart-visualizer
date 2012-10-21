
// chrome.devtools.panels.create('Statechart Visualizer', 'images/big-icon.png', 'Panel.html', function(panel){
// 	var self = panel;
// 	chrome.devtools.inspectedWindow.eval(
// 	    "window",
// 	     function(result, isException) {
// 			 chrome.extension.getBackgroundPage().console.log('This is a message');
// 	     }
// 	);	
// 	
// });
chrome.extension.getBackgroundPage().logit("HI MOTHER FUCKERS");

