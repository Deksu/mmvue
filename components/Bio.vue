<template>
<div class="bio-container" id="bio">
    <div class="text-container">

        <h2>Bio</h2>

        <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </div>
    <div class="image-container">
        <img src="http://via.placeholder.com/350x400" alt="placeholder">
    </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.bio-container {
    /* background-color: lightblue; */
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    padding-top: 4em;
}

.text-container {
    /* background-color: #fff; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    align-self: center;
    width: calc(50%-2em);
    height: auto;
    margin-top: 4em;
    margin-left: 2em;
    padding: 0 2em;
    text-align: justify;
}

.text-container p {
    font-size: 1.2em;
    letter-spacing: 0.1em;
    line-height: 125%;
}

.text-container h2 {
    align-self: flex-start;
    margin-bottom: 1.5em;
    font-size: 1.8em;
    letter-spacing: 0.1em;
}

.image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;
    text-align: center;
    align-items: center;
    width: 50%;
    height: auto;
    margin-top: 2em;
}
</style>
