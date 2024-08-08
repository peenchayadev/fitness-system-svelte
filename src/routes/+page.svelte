<script>
	import Swal from "sweetalert2";

	let username = '';
	let password = '';

	async function SignIn() {
		try {
			if (username =='' || password == ''){
				Swal.fire({
				title : 'ตรวจสอบข้อมูล',
				text: 'โปรดกรอกข้อมูลด้วย',
				icon: 'warning'
			})
			} else {
				const payload = {
					username: username,
					password: password
				}

				const res = await axios.post('http://localhost:3000/api/user/signin',payload)
			}
		} catch (e) {
			Swal.fire({
				title : 'error',
				text: e.message,
				icon: 'error'
			})
		}
	}
</script>

<div class="crad mt-3">
	<div class="card-header bg-primary">SignIn to BackOffice of Fitness center</div>
	<div class="card-body">
		<div>
			<div>Username</div>
			<input class="form-control" bind:value={username}>
		</div>
		<div class="mt-3">
			<div>Password</div>
			<input class="form-control mt-3" type='password' bind:value={password}>
		</div>
		<div class="mt-3">
			<button class="btn btn-primary" on:click={()=> SignIn()}>
				<i class="fa fa-check mt-2">Sign In now</i>
			</button>
		</div>
	</div>
</div>
