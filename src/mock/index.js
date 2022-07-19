import Mock from 'mockjs';
//考试信息
Mock.mock('/api/ExamInformation', 'get',{
	status: 200,
	message: '获取考试信息成功！',
	data:[{
		id: 0,
		name: '孙家豪',
		class: '计算机1901',
		exam: '四年级模拟考试'
	}]
})
//时间信息
Mock.mock("/api/GetTime",'get',{
	status: 200,
	message: '获取时间信息成功！ ',
	data:[{
		hours: 0,
		minutes: 1,
		seconds: 0,
		time: true
	}]
})
//音乐试题信息
Mock.mock("/api/getMusicSubject",'get',{
	status: 200,
	message: '获取音乐试题成功！',
	'data|12': [{
		sentence: '@csentence(10,50)'
	}
	]
})

//美术试题信息
Mock.mock("/api/getArtSubject",'get',{
	status: 200,
	message: '获取美术试题成功！',
	'data|14': [{
		sentence: '@csentence(10,30)'
	}
	]
})

//答案提交
Mock.mock("/api/AddAnswer",'post',function(option){
	// console.log(option)
	return  {
		status: 200,
		message: '答案提交成功'

	}
})