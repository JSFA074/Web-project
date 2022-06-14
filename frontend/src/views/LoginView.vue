<template>
  <svg style="display: none;">

    <symbol id="eye" viewBox="0 0 512.001 512.001">
      <g>
        <path d="M256,192.012c-35.313,0-64.002,28.688-64.002,64s28.689,63.969,64.002,63.969s64-28.656,64-63.969
		S291.313,192.012,256,192.012z" />
        <path d="M505.381,236.512c-56.082-72.938-125.065-140.438-249.225-140.5h-0.016h-0.016c0-0.031-0.094-0.031-0.125,0
		c0,0-0.078,0-0.109,0c-0.016,0-0.016,0-0.016,0h-0.016c-0.016,0-0.016,0-0.016,0C131.684,96.075,62.7,163.575,6.62,236.512
		c-8.826,11.5-8.826,27.5,0,39c56.08,72.938,125.065,140.438,249.225,140.5c0,0,0,0,0.016,0h0.016c0,0,0,0,0.016,0h0.016
		c0.016,0,0.094,0,0.094,0c0.016,0,0.031,0,0.064,0h0.029h0.016h0.016h0.016h0.016c0.109,0,0.219,0,0.344,0
		c0.141-0.031,0.281-0.031,0.422,0c123.66-0.336,192.486-67.719,248.459-140.5C514.207,264.012,514.207,248.012,505.381,236.512z
		M256.094,352.012h-0.018h-0.012h-0.018h-0.031H256c-0.031,0-0.065,0-0.065,0h-0.014c0,0,0,0-0.016,0
		c-52.879-0.063-95.908-43.125-95.908-96s43.029-95.938,95.908-96c0.029,0,0.078,0,0.141,0h0.047
		c52.877,0.063,95.906,43.125,95.906,96S308.971,351.95,256.094,352.012z" />
      </g>
    </symbol>
  </svg>
  <center>
    <div class="container">
      <form class="box" action="" method="post">
        <h1>Login</h1>
        <input type="text" name="" placeholder="Username">
        <div class="box__item">
          <input type="password" name="" id="password" placeholder="Password">
          <a class="password__toggle" id="icon" @click="togglePassword" target="_blank">
            <svg class="toggle__icon">
              <use xlink:href="#eye"></use>
            </svg>
          </a>
        </div>
        <input type="submit" name="" value="Log In">
        <a>
          <router-link class="box__link" to="/signin"><small>Not registered yet?</small></router-link>
        </a>
      </form>
    </div>
  </center>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    togglePassword() {
      var input = document.getElementById('password');
      var icon = document.getElementById('icon');

      if (input.type === "password") {
        input.type = "text";
        icon.classList.add('selected');
      } else {
        input.type = "password";
        icon.classList.remove('selected');
      }
    },
  }
}
</script>

<style>


.box {
  width: 300px;
  background-color: #ffcc99;
  border-radius: 12px;
  padding: 40px 10px;
  margin-top: 10%;
  margin-bottom: 10%;
  opacity: 0.9;
}

.box h1 {
  font-family: 'Lobster', cursive;
  font-weight: 700;
  margin-bottom: 15px;
}

.box input[type="text"],
.box input[type="email"],
.box input[type="password"] {
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 1px solid #91907d;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  border-radius: 12px;
  transition: all linear .2s;
  font-size: 17px;
  color: #91907d;
}

.box input[type="text"]:focus,
.box input[type="email"]:focus,
.box input[type="password"]:focus {
  width: 280px;
  border-color: #f9e3dc;
}

.box input[type="submit"] {
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #bc4b51;
  padding: 14px 40px;
  outline: none;
  color: #bc4b51;
  border-radius: 30px;
  transition: all linear .2s;
  cursor: pointer;
  opacity: 0.9;
  margin-top: 40px;
  text-transform: uppercase;
  font-weight: 700;
}

.box input[type="submit"]:hover {
  border-color: #91907d;
  color: #91907d;
  background-color: #f9e3dc;
}

.box__link {
  text-decoration: none;
  font-size: 18px;
  color: #bc4b51;
}

.box__link:hover {
  color: #91907d;
}

.toggle__icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  transition: all .1s linear;
}

.toggle__icon:hover {
  fill: #333;
}

.box__item {
  position: relative;
}

.password__toggle {
  position: absolute;
  top: 14px;
  right: 50px;
  opacity: 0.5;
}
</style>