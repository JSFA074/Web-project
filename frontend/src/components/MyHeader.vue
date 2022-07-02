<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">

        <div class="header__logo">
          <img src="@/assets/logo.png" alt="">
          <a>
            <router-link class="logo__name" to="/">CookKing</router-link>
          </a>
        </div>

        <nav class="nav">
          <a>
            <router-link class="nav__link" to="/">Home</router-link>
          </a>
          <a>
            <router-link class="nav__link" to="/recipes">Recipes</router-link>
          </a>
          <a>
            <router-link class="nav__link" to="/timer">Timer</router-link>
          </a>
          <a>
            <router-link class="nav__link" to="/publish">Publish</router-link>
          </a>
          <a>
            <router-link class="nav__link" to="/about">About</router-link>
          </a>
          <div class="btns">
            <a>
              <router-link class="btns__item" to="/login">Authority</router-link>
            </a>
          </div>
          
        </nav>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0px;
  z-index: 100;
}

.container {
  width: 100%;
  max-width: 1170px;
  margin: 0 100px;
  background-color: #e99072;
  border-radius: 30px;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  border: 1px solid #5b8f7d;
  border-radius: 30px;
  padding: 10px 0;
  align-items: center;
  padding: 15px;
}

.header__logo {
  display: flex;
  align-items: center;
}

.logo__name {
  font-family: 'Lobster', cursive;
  font-size: 36px;
  font-weight: 700;
  margin-left: 2px;
  color: #5d5352;
  text-decoration: none;
  opacity: 0.75;
}

.nav {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.nav__link {
  color: #fff;
  text-decoration: none;
  opacity: .75;
  border-bottom: 1px solid #f4e285;
  border-radius: 12px;
  padding: 10px;
  margin-left: 30px;

  transition: color, font-size .1s linear;
}

.nav__link:hover {
  opacity: 1;
  color: #f4e285;
}

.btns {
  font-size: 15px;
  font-weight: 700;
  margin-left: 150px;
  display: flex;
}

.btns__item {
  text-decoration: none;
  margin-left: 10px;
  border: 3px solid #bc4b51;
  border-radius: 12px;
  padding: 5px;
  color: #bc4b51;
  background-color: #fff;
  opacity: 0.75
}

.btns__item:hover {
  opacity: 1;
}
</style>
