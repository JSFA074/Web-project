<template>
  <center>
    <div class="page center">
      <div class="container center">
        <h1 class="page__title">About Us</h1>
        <div class="page__text">
          <div>We are a team of FEFU student developers.</div>
          <div>We study in the first year, second semester.</div>
          <div>Direction Applied Mathematics and Informatics (DAMI).</div>
          <div>This site is the final project on the subject of web development.</div>
          <div>Teacher - Pavel Rostislavovich Mesenev.</div>
          <div>This site was created in order to give free rein to culinary lovers.</div>
          <div>Here you can learn, improve your skills, share your own recipes.</div>
          <div>@CookKing@</div>
        </div>
        <button class="btn" @click="showDialog">Feedback</button>
        <center>
          <MyDialog class="" v-model:show="dialogVisible">
            <h1>Say a few words about us!</h1>
            <div class="container">
              <form action="mailto:k1ngcook@yandex.ru" method="post" enctype="text/plain">
                  <input type="text" name="FirstName" placeholder="First name">
                  <input type="text" name="Email" placeholder="Your email">
                  <input type="submit" name="submit" value="Submit">
              </form>
            </div>
          </MyDialog>
        </center>
      </div>
    </div>
  </center>
</template>

<script>
import MyDialog from '@/components/MyDialog.vue'

export default {
  components: {
    MyDialog,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
  },
}

</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 600px;
  flex-direction: column;
}

.page {
  width: 50%;
  height: 110vh;
  background-color: #ffcc99;
  opacity: 0.75;
}

.page__text {
  font-size: 20px;
  line-height: 1.5;
}

.page__title {
  font-size: 32px;
  font-weight: 1000;
  text-transform: uppercase;
}

.btn {
  width: 150px;
  height: 50px;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  margin: 5px;
  background-color: #ff8174;
  opacity: 0.75;
  margin-top: 50px;
  padding: 20px 0px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}

.btn:hover {
  opacity: 1;
}

input {
  width: 400px;
  padding: 15px 10px;
  outline: none;
  border: 1px solid #6c7279;
  border-radius: 12px;
  margin-top: 10px;
  background: none;
}

input[type="text"]:focus,
input[type="email"]:focus {
  width: 420px;
}

input[type="submit"] {
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  width: 200px;
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

input[type="submit"]:hover {
  border-color: #91907d;
  color: #91907d;
  background-color: #f9e3dc;
}
</style>
