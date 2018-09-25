var A3= document.querySelector('div.A3');
var A3Y = A3.offsetTop;
			
			document.body.onscroll = function() {
				if(window.pageYOffset > A3Y - window.innerHeight + A3.clientHeight) {
					addClass(A3,'active')
				} else {
					
				}
			}
