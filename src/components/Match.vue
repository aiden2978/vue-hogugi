<template>
  <!-- 맨 위 -->
  <div class="logo">
    <img
      src="https://github.com/osamhack2022/WEB_HOGUGI_MARCH/blob/fff80fe8dd58c3dab4cd8bacaaf0f637c1c69029/HOGUGI_LOGO.png?raw=true"
      style="width: 200px; display: block; margin: 0 auto"
    />
    <h3>영내 체육시설 예약 플랫폼</h3>
  </div>

  <!-- 메뉴바  -->
  <nav id="topmenu">
    <ul>
      <li><a class="menulink" href="book.html">예약하기</a></li>
      <li><a class="menulink" href="match.html">매칭하기</a></li>
    </ul>
  </nav>
  <br />
</template>

<script>
export default {
  name: 'Match',
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
