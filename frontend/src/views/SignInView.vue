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
        <h1>Registration</h1>
        <input type="text" name="" placeholder="Username">
        <input type="email" name="" placeholder="Your email">
        <div class="box__item">
          <input type="password" name="" id="password" placeholder="Password">
          <a class="password__toggle" id="icon" @click="togglePassword" target="_blank">
            <svg class="toggle__icon">
              <use xlink:href="#eye"></use>
            </svg>
          </a>
        </div>
        <div class="box__item">
          <input type="password" name="" id="repeat_password" placeholder="Repeat password">
          <a class="password__toggle" id="repeat__icon" @click="togglePassword" target="_blank">
            <svg class="toggle__icon">
              <use xlink:href="#eye"></use>
            </svg>
          </a>
        </div>
        <input type="submit" name="" value="Sign Up">
        <a>
          <router-link class="box__link" to="/login"><small>Already registered?</small></router-link>
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
      var repeat_input = document.getElementById('repeat_password');
      var icon = document.getElementById('icon');
      var repeat_icon = document.getElementById('repeat_icon');

      if (input.type === "password" || repeat_input.type === "password") {
        input.type = "text";
        repeat_input.type = "text";
        icon.classList.add('selected');
        repeat_icon.classList.add('selected');
      } else {
        input.type = "password";
        repeat_input.type = "password";
        icon.classList.remove('selected');
        repeat_icon.classList.remove('selected');
      }
    },
  }
}
</script>

<style>
.toggle__icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
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