<template>
  <div id="login-page">
    <image
      src="https://github.com//osamhack2022/WEB_HOGUGI_MARCH/blob/main/HOGUGI_LOGO2.png?raw=true"
    ></image>
    <p>영내 체육시설 예약 플랫폼</p>
    <div class="login-interface">
      <p>ID</p>
      <input type="text"><br>
      <p>PASSWORD</p>
      <input type="password"><br>
      <span style="text-align: right"><a href="" style="text-decoration-line: none">FORGOT PASSWORD?</a></span><br>
      <input class="login-btn" type="submit" value="LOGIN" style="padding: 20px 111px"/><br>
      <a href="./Signup.vue" style="text-decoration: none">JOIN</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-page {
  margin: 10rem auto 10rem;
  text-align: center;
}

.login-interface {
  padding: 10px;
  margin: auto;
  height: 300px;
  width: 500px;
  border: 2px solid black;
}
.login-interface p {
  width: 270px;
  margin: auto;
  text-align: left;
}
.login-interface input {
  margin: auto auto 10px auto;
  padding: 20px 50px;
}
</style>
