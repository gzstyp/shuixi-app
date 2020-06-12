exports.install = function(Vue, options){
	/*调用方法this.reqGet();this.reqGet('url',{},function(data){});*/
	Vue.prototype.reqGet = function(url,params,success,fail){
		console.info('reqGet:'+url);
		uni.request(
			{
				url:url,
				method:'GET',
				data:params,
				header: {
				    'token': '102420483096'
				},
			}
		).then((data) =>{
			success(data);
		}).catch((err) =>{
			if(fail) fail(err);
		});
	};
	Vue.prototype.reqPost = function(){
		console.info('reqPost');
	};
};