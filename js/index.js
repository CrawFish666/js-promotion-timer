import promoTimer from "../promotionTimer";

promoTimer({
	timePromotionEnd: '2023-12-25',
	timerSelector: '.promotion__timer',
	clockSelectors: {
		days: '#days',
		hours: '#hours',
		minutes: '#minutes',
		seconds: '#seconds',
	}
})