<template>
  <header class="header" id="header">
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
              <router-link class="btns__item" to="/authority">Authority</router-link>
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
  z-index: 2000;
  width: 100%;
  border-radius: 30px;
}

.container {
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
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 0 10px;
}

.logo__name {
  font-family: 'Lobster', cursive;
  font-size: 36px;
  font-weight: 700;
  margin-left: 2px;
  color: #5d5352;
  text-decoration: none;
  opacity: 0.9;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
  border-left: 1px solid #fff;
  border-radius: 12px;
  padding: 10px 20px;
  margin-left: 30px;
  transition: color .1s linear;
  box-shadow: -5px -5px 3px rgba(0, 0, 0, 0.2);
  background: none;
}

.nav__link:hover {
  opacity: 1;
  color: #fff;
}

.btns {
  font-size: 15px;
  font-weight: 700;
  margin-left: 350px;
  display: flex;
}

.btns__item {
  text-decoration: none;
  margin-left: 10px;
  border-radius: 12px;
  padding: 10px 10px;
  color: #bc4b51;
  background-color: #fff;
  opacity: 0.75;
  box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.3);
}

.btns__item:hover {
  opacity: 1;
}
</style>
