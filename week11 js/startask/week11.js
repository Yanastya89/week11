const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');

const item1Value = +item1.innerHTML;
const item2Value = +item2.innerHTML;
const item3Value = +item3.innerHTML;
const item4Value = +item4.innerHTML;

const sum = item1Value + item2Value + item3Value + item4Value;

const resultElement = document.getElementById('sum');
resultElement.innerHTML = 'Итого:' + sum.toLocaleString('ru-RU',  { style: 'currency', currency: 'RUB' });

function applyDiscount(sum){
	const discount = sum*0.2;
	const finalCost = sum - discount;
	return finalCost;
}
const discountedSum = applyDiscount(sum);

const coupon = document.getElementById('discountButton');
coupon.addEventListener('click', function(){
	
	item.textContent ='Новая стоимость со скидкой:'+ discountedSum.toLocaleString('ru-RU',  { style: 'currency', currency: 'RUB' });
});

const item = document.createElement('div');
const total = document.querySelector('.total');
total.append(item);


