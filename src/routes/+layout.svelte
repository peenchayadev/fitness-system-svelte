<script>
	import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';
</script>

<Navbar />
<Sidebar />

<div class="content-wrapper">
	<section class="content">
		<div class="container-fluid">
			<slot />
		</div>
	</section>
</div>
