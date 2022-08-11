<script lang="ts">
    import { config, manager } from '$lib/stores';
    let eventName = "";
    export let dismiss: typeof $manager.dismissModal;
    function initEvent(){

        // TODO : set this database in config(localstorage)
        const name = eventName=="" ? "New event" : eventName;
        manager.createEvent(name);
    }
</script>

<form on:submit|preventDefault={initEvent}>
    <label for="event-input">Event name:</label>
    <input bind:value={eventName} id="event-input" type="text" placeholder="New event" selected/>
    <input type="submit" value="Create">
</form>
<button on:click={dismiss}>Close</button>

<style>
</style>
