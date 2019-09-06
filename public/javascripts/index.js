'use strict'

// cookie policy
new Vue({
	el: '#cookieConsent',
	mounted: function () {
		setTimeout(function () {
			$("#cookieConsent").fadeIn(200);
		}, 2000);
		$(".cookieConsentOK").click(function () {
			$("#cookieConsent").fadeOut(200);
		});
	},
})

// 상단 메뉴
new Vue({
	el: '#top-menu',
	mounted: function () {
		$('#top-menu').singlePageNav({
			offset: $('#scroll-menu').outerHeight(),
		})
	},
	methods: {
		onClick: function (e) {
			$('.hamburger span').toggleClass('active')
			$('#hamburger-menu').toggleClass('active')
		}
	},
})


// 햄버거 메뉴
new Vue({
	el: '#hamburger-navi',
	mounted: function () {
		$('#hamburger-navi').singlePageNav({
			offset: $('#scroll-menu').outerHeight(),
			beforeStart: function (e) {
				$('.hamburger span').removeClass('active')
				$('#hamburger-menu').removeClass('active')
			}
		})
	},
})


// 광고 팝업
new Vue({
	el: '#ad-info',
	methods: {
		adClick: function () {
			$('#ad-on-popup-contents').bPopup()
		}
	}
})

// 광고 팝업 버튼들
new Vue({
	el: '#ad-button-container',
	methods: {
		adPopupSend: function (e) {
			console.log('TCL: adPopUpSend -> e', e)
		},
		adPopupClose: function () {
			$('#ad-on-popup-contents').bPopup().close()
		},
	},
})


// 설치 팝업
new Vue({
	el: '#mount-info',
	methods: {
		mountClick: function () {
			$('#mount-popup-contents').bPopup()
		}
	}
})


// 설치 팝업 버튼 들
new Vue({
	el: '#mount-button-container',
	methods: {
		mountPopupSend: function (e) {
			console.log('TCL: mountPopUpSend -> e', e)
		},
		mountPopupClose: function () {
			$('#mount-popup-contents').bPopup().close()
		},
	},
})
