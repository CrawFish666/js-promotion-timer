# js-promotion-timer
Countdown timer until the end of the promotion
## Installation
```sh
npm i js-promotion-timer
```
## Usage
ES6
```sh
import promoTimer from "js-promotion-timer";
promoTimer({
	timePromotionEnd: string,
	timerSelector: selectorTimerContainer,
	clockSelectors: {
		days: selector,
		hours: selector,
		minutes: selector,
		seconds: selector,
	}
})
```
## Example
### [watch example](https://crawfish666.github.io/js-promotion-timer/)
```sh
import promoTimer from "js-promotion-timer";
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
```
## Customazing styles
You can customaze what ever you want. You have you're HTML markup and you're css style's
## Params
| ParametersName | Type | Detail | Example | Optional?
| ------ | ------ | ------ | ------ | ------ |
| timePromotionEnd | String | selector of timer container | '2023-12-25' | <img src="https://github.com/CrawFish666/pictures/blob/c5437c67cbb879ff69fda5ad8185c65113a3651c/redCross.png" width="25" heigth="25" />
| timerSelector | String | selector of timer container | '.promotion__timer' | <img src="https://github.com/CrawFish666/pictures/blob/c5437c67cbb879ff69fda5ad8185c65113a3651c/redCross.png" width="25" heigth="25" />
| clockSelectors | Object {} | object with dd:hh:mm:ss selectors | - | <img src="https://github.com/CrawFish666/pictures/blob/c5437c67cbb879ff69fda5ad8185c65113a3651c/redCross.png" width="25" heigth="25" />
| days | String | selector where insert remaining days | '#days' | <img src="https://github.com/CrawFish666/pictures/raw/98f37be0ada7015f8bc0e7ac3d031c7f0cc1b9b2/greenCheckMark.png" width="25" heigth="25" />
| hours | String | selector where insert remaining hours | '#hours' | <img src="https://github.com/CrawFish666/pictures/raw/98f37be0ada7015f8bc0e7ac3d031c7f0cc1b9b2/greenCheckMark.png" width="25" heigth="25" />
| minutes | String | selector where insert remaining minutes | '#minutes' | <img src="https://github.com/CrawFish666/pictures/raw/98f37be0ada7015f8bc0e7ac3d031c7f0cc1b9b2/greenCheckMark.png" width="25" heigth="25" />
| seconds | String | selector where insert remaining seconds | '#seconds' | <img src="https://github.com/CrawFish666/pictures/raw/98f37be0ada7015f8bc0e7ac3d031c7f0cc1b9b2/greenCheckMark.png" width="25" heigth="25" />
## License
Copyright (c) 2023 [CrawFish666](https://github.com/CrawFish666) Released under the [MIT license](https://opensource.org/license/mit/)
