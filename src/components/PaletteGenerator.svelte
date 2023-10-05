<script lang="ts">
	let color: string = '#ff0000';
	let hueStepCount: number = 4;

	$: colors =
</script>

<div class="form">
	<label for="input-color-base">Colour</label>
	<input id="input-color-base" type="color" bind:value={color} />

	<label for="input-hue-step-count">Hue step count</label>
	<input id="input-hue-step-count" type="number" bind:value={hueStepCount} />
</div>

<table>
	<tr></tr>
</table>

<style>
	.form {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 0.5em;
	}
</style>

<style>
	table
</style>
