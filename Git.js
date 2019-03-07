const apiUrl = "https://api.github.com/users/a840409g/repos";
const myGit = new Vue({
	el: '#gitAPI',
	data:{
		repos: null,
	},
	created: function(){
		this.getData();
	},
	methods:{
		getData: function(){
			let xhr = new XMLHttpRequest();
			let self = this;
			xhr.open('GET',apiUrl);
			xhr.onload = function(){
				self.repos = JSON.parse(xhr.responseText);
				console.log(self.repos)
			}
			xhr.send()
		}
	}
})