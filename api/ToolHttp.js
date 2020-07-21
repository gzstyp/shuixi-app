exports.install = function(Vue,options){
	function request(url,method,params,success,fail){
		uni.request(
			{
				url:url,
				method:method,
				data:params,
				header: {
					'accessToken': 'eyJhbGciOiJSUzM4NCJ9.eyJqdGkiOiIwMDAwMDAwMDEyNmQ4NjVhZmZmZmZmZmZjZjIxOGM5ZCIsImlzcyI6IuW8lei3r-iAhXd3dy55aW5sei5jb20iLCJpYXQiOjE1OTUyMDc0MTIsImV4cCI6MTU5NjUwMzQxMn0.HDSE_UQtwwtTB81FZ3iJtN1sEY5IZyQ8ipP8ZFCvH7CnSlByEhKZjAOSJhff3dW2MYQxYKK3LXGX9Vfhp02lYEqr7GtvBasiJQekk5Vah4jtfGYw9JRi2eRXLCJgGchqNU0PoLxbxkFL3SLUI7DGa7RNd5fmcvd9BMQOfxEGDbLkpGjgC6FlE-7WbjsYmF8m14vI9c7c4e7dgmGIb8pxFVYbkxs1-a4YEBaypJqzFzQWj-y1BCF5XwP9QhEfYHPX4cXncCHRnj_ySve84GwhwVAluEfpHkSf_pVKeKn-6jJCgEJytYlXlPh94DB8e9fOLHs3Q3mrvHnmW-cbvEXE5Q',
					'refreshToken': 'eyJhbGciOiJSUzM4NCJ9.eyJqdGkiOiIwMDAwMDAwMDEyNmQ4NjVhZmZmZmZmZmZjZjIxOGM5ZCIsImlzcyI6IuW8lei3r-iAhXd3dy55aW5sei5jb20iLCJpYXQiOjE1OTUyMDc0MTIsImV4cCI6MTU5NTgxMjIxMn0.nuANkUIHcGunQn90QkiXl7M6_5RFJ8ZNIoNCT-gEXGttaY1qda7Tu77_JVlTuXPoyzg8DxHDplMZd0PX8I4wwG6o-gpiYZ3Yab5aiHqESPcMvFHxuiNnBzqIPqDobOwCPuD5J7M43AbDor7mq2rXArm4bv1C6MNOGb1ipCyipg3MSyad60375XaUbbRwgMEfE7SIlx7nldi0ZjtWcxNplVh9cvYMTGzadWWx_l5opQEwDJwIxTZWao-jHfc_ukz4kAXEMrNJQQuHYXt0SAVq2OOvgqcChY16OgdMFouDvGVUhL6kJGfpYqj72jP6kyVsgPzZ71KPzf2Em2owRwMnKg',
				},
				success: (data) => {
					success(data.data);
				},
				fail: (data) => {
					if (fail){
						fail(data)
					}
				},
				complete: (data) => {
					try{
						console.info('request->complete:' + JSON.stringify(data.data));
					}catch(e){}
				}
			}
		);
	}
	/*调用方法this.reqGet('url',{},function(data){});*/
	Vue.prototype.reqGet = function(url,params,success,fail){
		console.info('reqGet:'+url);
		request(url, 'GET',params,success,fail);
	};
	/*调用方法this.reqPost('url',{},function(data){});*/
	Vue.prototype.reqPost = function(url,params,success,fail){
		console.info('reqPost:'+url);
		request(url, 'POST', params,success,fail);
	};

};
