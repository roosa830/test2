<template>
    <div class="timing">
        <img src="../assets/img/time.jpg" class="Clock" />
        <div class="data">
            {{hour}}:{{minute}}:{{second}}
        </div>
    </div>
    
	
</template>

<script>
import axios from 'axios'
export default{
	props:['timer'],
	data(){
		return {
			hours: '',
            minutes: '',
            seconds: '',
			time: ''
		}
	},
	methods:{
		async getTime(){
			const res = await axios.get('/api/GetTime')
			this.hours = res.data.data[0].hours
			this.minutes = res.data.data[0].minutes
			this.seconds = res.data.data[0].seconds
			// console.log(this.seconds)
		},
		// 防止数值小于10时，出现一位数
		num(n) {
			return n < 10 ? '0' + n : '' + n
		},
		// 倒计时函数
		add() {
			// if(this.timer===true){
				let time = window.setInterval( ()=> {
					if(this.timer === true){
						if (this.hours !== 0 && this.minutes === 0 && this.seconds === 0) {
						this.hours -= 1;
						this.minutes = 59;
						this.seconds = 59;
						} else if (this.hours === 0 && this.minutes !== 0 && this.seconds ===
							0) {
							this.minutes -= 1;
							this.seconds = 59;
						} else if (this.hours === 0 && this.minutes === 0 && this.seconds ===
							0) {
							this.seconds = 0
							// console.log(this.time)
							alert('时间已到，自动交卷')
							this.time= false;
							
							window.clearInterval(time)
							// console.log(this.time)
						} else if (this.hours !== 0 && this.minutes !== 0 && this.seconds ===
							0) {
							this.minutes -= 1;
							this.seconds = 59;
						} else {
							this.seconds -= 1;
						}
					}
					else{
						console.log(this.timer)
						this.hours = 0,
           				this.minutes = 0
            			this.seconds = 0
						window.clearInterval(time)
					}
					
				}, 1000)
			// }
			// else{
			// 	window.clearInterval(time)
			// 	console.log('11111')
			// }
			
		},
		byTimer(){
			this.$emit('endtime',this.time)
		}
	},
	created(){
		this.getTime()
		this.add()
		// this.bytimer()
	},
	watch: {
		// 监听数值变化
		second: {
			handler(newVal) {
				this.num(newVal)
			}
		},
		minute: {
			handler(newVal) {
				this.num(newVal)
			}
		},
		hour: {
			handler(newVal) {
				this.num(newVal)
			}
		},
		time(newVal,oldVal){
			this.time=newVal
			// console.log(`${newVal} : ${oldVal}`);
			this.byTimer()
		}
	},
	computed: {
		// 初始化数据
		second() {
			return this.num(this.seconds)
		},
		minute() {
			return this.num(this.minutes)
		},
		hour() {
			return this.num(this.hours)
		}
	}
}
</script>


<style lang="scss">
@import '../assets/styles/timer.scss'
</style>
