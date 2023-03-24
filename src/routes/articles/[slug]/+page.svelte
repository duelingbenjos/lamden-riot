<script lang="ts">
	export let data;
	console.log(data);
	const { content, title } = data;
</script>

{@html content.html}
