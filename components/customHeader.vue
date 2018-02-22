<template>
  <div class="header-container">
      <div class="header-logo">
          <img src="https://i.imgur.com/p88lOp0.png" alt="img-logo">
      </div>
      <div class="header-nav">
          <a href="#info">info</a>
          <a href="#collection">collection</a>
          <a href="#bio">bio</a>
      </div>
  </div>
</template>

<style scoped>

 @import url('https://fonts.googleapis.com/css?family=Work+Sans:300');

.header-container {
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 2;
}


.header-logo {
    display: flex;
    justify-content: flex-start;
    padding-left: 30px;
}

.header-nav {
    display: flex;
    height: 80px;
    width: 40%;
    justify-content: space-around;
    align-items: center;
    padding-right: 50px;
}

.header-nav a {
    font-size: 20px;
    font-family: 'Work Sans';
    font-weight: 300;
    letter-spacing: 3px;
    color: #fff;
    text-decoration: none;
}

.nav-item {
    padding: 2px 0px 2px 0px;
}

</style>
