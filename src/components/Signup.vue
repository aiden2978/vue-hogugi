<template>
  <div id="signup-page">
    <image src = "https://github.com//osamhack2022/WEB_HOGUGI_MARCH/blob/main/HOGUGI_LOGO2.png?raw=true"></image>
    <p>영내 체육시설 예약 플랫폼</p>
    <div class ="signup-interface">
      <p>ID</p>
      <input type="text"><br>
      <p>PASSWORD</p>
      <input type="password"><br>
      <p>이름</p>
      <input type="text"><br>
      <p>군번</p>
      <input type="text"><br>
      <p>소속</p>
      <input type="text"><br>
      <p>이메일</p>
      <input type="email"><br>
      <input class="signup-btn" type="submit" value="JOIN" style="padding:20px 111px;"><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#signup-page {
  margin: 10rem auto 10rem;
  text-align: center;
}

.signup-interface{
  padding: 10px;
  margin: auto;
  height: 650px;
  width: 500px;
  border: 2px solid black;
}
.signup-interface p{
  width: 270px;
  margin: auto;
  text-align:left;
}
.signup-interface input{
  margin: auto auto 10px auto;
  padding:20px 50px;
}
</style>
