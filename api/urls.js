let baseUrl = 'http://192.168.3.108:801/api/v1.0/';

var urls = {
	home : {
		getListData : `${baseUrl}show/listData`,
	},
	my : {
		register : `${baseUrl}user/register`,
	}
}
export{urls}
