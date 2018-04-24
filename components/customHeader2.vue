<template>
<header>
        <div class="header-logo">
            <a href="/"><img src="~/static/mattimarin-headerimg.png" alt="img-logo"></a>
        </div>
    <nav>
        <ul>
            <li @click.native="scrollFix('#infoArea')" ><nuxt-link to="/#infoArea">info</nuxt-link></li>
            <li><nuxt-link to="/">collection</nuxt-link></li>
            <li><nuxt-link to="/">bio</nuxt-link></li>
        </ul>
    </nav>
</header>
</template>

<style scoped>

 @import url('https://fonts.googleapis.com/css?family=Work+Sans:300');

header {
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    z-index: 2;
}

.header-logo {
    display: flex;
    justify-content: flex-start;
    padding-left: 30px;
}

nav {
    display: flex;
    flex-direction: row;
    height: 80px;
    width: 40%;
    align-items: center;
    justify-content: flex-end;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

li {
    margin: 2px 80px 2px 80px;
}

a {
    font-size: 20px;
    font-family: 'Work Sans';
    font-weight: 300;
    letter-spacing: 3px;
    color: #fff;
    text-decoration: none;
}

</style>
