var move = function(obj, attr, end, fn) {
	let start = parseInt(this.getStyle(obj, attr));
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function () {
		// 剩下距离 = 终点值 - 当前位置
		let distance = end - start;
		// 计算速度，每一步的速度都是剩下距离的1/10
		// 速度在最后几步最后都要变成1px，但是正负方向不一样
		let speed = distance > 0 ?  Math.ceil(distance/10) : Math.floor(distance/10);
		// 往前移动一步
		start += speed;
		
		obj.style[attr] = start + "px";
		
		// 判断终点
		if(start === end) {
			clearInterval(obj.timer);
			fn && fn();
		}	
	}, 20);
}
//获取元素
var getStyle = function (obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
		
	}else{
		return getComputedStyle(obj, false)[attr];
	}
}