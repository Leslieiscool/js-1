class Publish {
	constructor(){
		this.btn = document.querySelector("#btn");
		this.box = document.querySelector("#box");
		this.state = document.querySelector("#state");
		this.bindEvent();
	}
	
	//给按钮绑定事件
	bindEvent (){
		//发布按钮 弹出盒子
		this.btn.onclick = ()=>{
			this.popBox();
		};
		// 通过委托 实现删除和确定按钮 
		this.box.onclick = e=>{
			switch(e.target.id){
				case "okBtn": this.okBtnClick();
				case "closeBtn": this.closeBtnClick();
			}
		}
	}
	//弹出框事件
	popBox (){
		this.box.innerHTML='<h4>有什么想说的</h4><a id="closeBtn" class="close_btn" href="javascript:;">×</a><p><label><input id="context" type="text"></label></p><p><button id="okBtn" class="okBtn" type="button">确定</button></p>'
		//居中显示
		tools.showCenter(this.box);
		//modal遮罩
		this.modal = document.createElement("div");
		this.modal.className = "modal";
		document.body.appendChild(this.modal);
	}
	//关闭按钮事件
	closeBtnClick (){
		this.box.style.display = "none";
		this.modal.remove();
	}
	//确定按钮 
	okBtnClick (){
		let date = new Date();
		this.state.innerHTML = tools.$("#context").value + "<br>" + date;
	}
	
}

new Publish();
