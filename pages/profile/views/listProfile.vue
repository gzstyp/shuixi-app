<template>
	<view class="profile-list-hot">
		<block v-for="(item,index) in hotListData" :key="index">
			<itemProfileHot :item="item"></itemProfileHot>
		</block>
	</view>
</template>

<script>
	import itemProfileHot from './item/itemProfileHot.vue'
	export default{
		components: {
			itemProfileHot
		},
		props : {},
		data() {
			return {
				hotListData : [
					{
						"KID":"102401",
						"TITLE":"水西古城",
						"IMAGE":"/static/images/profile/image01.png",
						"PVTOTAL":"1022w",
						"DETAILS":"水西古城位于黔西县城西北侧，东侧临近向阳桥，西侧抵运煤大道，南侧抵杜鹃大道，北侧以山体为界包括玲珑寺和天生洞，为拟建的AAAA级文化旅游区项目，总占地面积15.0781公顷，净占地14.5239公顷，总建筑面积199224平方米(其中地上建筑面积186850.73平方米，地下建筑面积12374.02平方米)，建筑占地面积46608.572平方米，容积率1.1，建筑密度为24.94%，绿地率为30.056%，拟建车位数642个"
					},
					{
						"KID":"102402",
						"TITLE":"古城历史",
						"IMAGE":"/static/images/profile/image02.png",
						"PVTOTAL":"10002w",
						"DETAILS":"水西古城景区拟建于2012年，占地面积近2250亩，总投资约32.5亿元，分五期开发。集民族文化展示和休闲娱乐为一体。已规划建设的水西古城文化旅游区项目一期已完成,投入资金7.5亿元，总占地面积498亩。其中建设用地267.3亩；文化设施及停车场、大型游乐场、游泳场、旅游生态建设等占地21.98亩；总建筑面积约20万平方米，项目设置文化展示、旅游接待、休闲度假、商业贸易、商务会展、客服中心等六个功能区。景区打造旨在传承和弘扬厚重的水西文化、展示水西绚丽多彩的民族风情，同时为群众增加收入"
					},
					{
						"KID":"102403",
						"TITLE":"古城人文",
						"IMAGE":"/static/images/profile/image03.png",
						"PVTOTAL":"52w",
						"DETAILS":"总体规划的原则是：依山就势、因地制宜；城随水转、水绕城流；户户养花、人人嬉水，实现古城建设与自然环境的完美结合。同时确保古城具备文化展示、商务会展、旅游接待、观光娱乐、商业贸易、文艺展演等功能，使之成为涵盖吃、住、行，游、购、娱为一体的综合旅游风景区。在设计风格上，做到古代水西古建风格、以彝族建筑为主的民族建筑风格、黔西北民居建筑风格三种风格相结合，同时镶嵌独树一帜的古城门楼、四蛙神鼓、牌坊、寨门、彝族十月太阳历广场、水西传奇实景舞台、木结构旅游小品房等，形成“十步一个故事，百步一段历史”的民族文化旅游古镇。"
					},
					{
						"KID":"102404",
						"TITLE":"古城人文",
						"IMAGE":"/static/images/profile/image04.png",
						"PVTOTAL":"512w",
						"DETAILS":"水西古城成为涵盖吃、住、行，游、购、娱为一体的综合旅游风景区"
					}
				]
			}
		},
		methods:{},
		onLoad(options) {
			console.info(options);
		}
	}
</script>

<style scoped>
	.profile-list-hot{
		margin-top:26rpx;
		margin-bottom: 20rpx;
	}
</style>
