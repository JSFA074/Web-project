<template>
  <center>
    <div class="main center">
      <div class="container center">
        <div class="name">
          <h1>CookKing StopWatch</h1>
        </div>
        <div class="main__inner">
          <div><small>To help people navigate the cooking time, this time</small></div>
          <div><small>needs to be known somehow. Therefore, we suggest you use</small></div>
          <div><small>this stopwatch directly from our website.</small></div>
          <div><small>For convenience make notes.</small></div>
          <div><small>With love for you</small></div>
          <div><small>@CookKing@</small></div>
        </div>
        <div class="watch">
          <h2 id="watch">00:00:00</h2>
        </div>
        <div class="buttons">
          <button id="start">Start</button>
          <button id="pause">Pause</button>
          <button id="reset">Reset</button>
        </div>
        <div class="name">
          <h1>CookKing Notes</h1>
        </div>
        <div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name" v-model="newNote.name">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Time" v-model="newNote.time">
          </div>
          <button type="submit" class="btn btn-primary" @click="addNote()">Add note</button>
        </div>
        <tbody class="note">
          <tr v-for="note in notes" :key="note.id">
            <td>{{ note.name }}</td>
            <td>{{ note.time }}</td>
          </tr>
        </tbody>
      </div>
    </div>
  </center>
</template>

<script>
export default {
  data() {
    return {
      columns: ['id', 'name', 'time'],
      newNote: {},
      notes: [],
      time: 0,
    };
  },
  methods: {
    addNote: function () {
      this.notes.push(this.newNote);
      this.newNote = {};
    }
  },
}

window.onload = function () {
  const watch = document.querySelector("#watch");
  let milliseconds = 0;
  let timer;
  var buttonStart = document.getElementById("start")
  var buttonPause = document.getElementById("pause")
  var buttonReset = document.getElementById("reset")

  buttonStart.onclick = function () {
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(() => {
      milliseconds += 10;
      let dateTimer = new Date(milliseconds);
      watch.innerHTML =
        ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
        ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
        ('0' + dateTimer.getUTCSeconds()).slice(-2)
    }, 10);
  };

  buttonPause.onclick = function () {
    watch.classList.add('paused');
    clearInterval(timer);
  };

  buttonReset.onclick = function () {
    watch.classList.remove('paused');
    clearInterval(timer);
    milliseconds = 0;
    watch.innerHTML = '00:00:00';
  };
}
</script>

<style scoped>




h1 {
  font-family: 'Lobster', cursive;
}

.note {
  border-bottom: 1px solid #6c7279;
  border-radius: 12px;
  margin-top: 40px;
  width: 600px;
}

td {
  margin-right: 15px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  border-radius: 30px;
  border: 1px solid #6c7279;
  padding: 0 10px;
  margin-top: 100px;
  margin-bottom: 20px;  
  width: 600px;
}

.main {
  width: 50%;
  height: 150vh;
  background-color: #ffcc99;
  opacity: 0.75;
}

.main__inner {
  margin-top: 10px;
  font-size: 20px;
}

.container {
  width: 600px;
  flex-direction: column;
}

.container h2 {
  font-size: 5rem;
  margin: 25px;
}

button {
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
  margin-top: 20px;
}

button:hover {
  opacity: 1;
}

input {
  width: 500px;
  padding: 15px 10px;
  outline: none;
  border: 1px solid #6c7279;
  border-radius: 12px;
  margin-top: 10px;
  background: none;
}
</style>