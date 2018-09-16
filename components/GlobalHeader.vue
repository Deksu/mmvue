<template>
<header>
        <div class="header-logo">
            <a href="/"><img src="~/static/mattimarin-headerimg.png" alt="img-logo"></a>
        </div>
    <nav>
        <ul>
            
            <!-- <li><nuxt-link to="/#info">info</nuxt-link></li> -->
            <li><a href="#info">info</a></li>
            <button type="button" :class="{active:index ==1}" @click="moveTo(2)">Second page</button>
            <!-- <li><nuxt-link to="/#collection">collection</nuxt-link></li> -->
            <li><a href="#gallery">collection</a></li>
            <!-- <li><nuxt-link to="/bio">bio</nuxt-link></li> -->
            <li><a href="#bio">bio</a></li>
        </ul>
    </nav>
</header>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            opts: {
                start: 0,
                dir: 'v',
                duration: 500,
                beforeChange: function(ele, current, next) {
                    console.log('before', current, next)
                    this.index = next;
                },
                afterChange: function(ele, current) {
                    this.index = current;
                    console.log('after', current)
                }
            }
        }
  },
  methods: {
        moveTo: function(index) {
            this.$refs.fullpage.$fullpage.moveTo(index, true);
        }
  
}
}
</script>


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
