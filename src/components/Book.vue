<template>
  <div class="black_bg" v-if="modalOpen == true">
    <div class="white_bg">
      <p>A 풋살장 16시 예약하기</p>
      <p>대표자 관등성명</p>
      <input type="text"><br>
      <p>인원</p>
      <input type="text"><br>
      <p>사용 시간 및 수칙을 준수하여 주시기 바랍니다.</p>
      <input type="button" @click="modalOpen = false" value="예약하기" />
    </div>
  </div>
  <div class="date">
    <header>
      <div class="logo">
        <img
          src="https://github.com/osamhack2022/WEB_HOGUGI_MARCH/blob/fff80fe8dd58c3dab4cd8bacaaf0f637c1c69029/HOGUGI_LOGO.png?raw=true"
          style="width: 200px; display: block; margin: 0 auto"
        />
        <h3>영내 체육시설 예약 플랫폼</h3>
      </div>
    </header>
    <nav id="topmenu">
      <ul>
        <li><a class="menulink" href="book.html">구장 예약</a></li>
        <li><a class="menulink" href="match.html">게임 매칭</a></li>
      </ul>
    </nav>
    <input type="date" />
  </div>
  <br />
  <button class="yellowbox">예약불가</button>
  <button class="graybox">예약가능</button>
  <input
    type="button"
    @click="modalOpen = true"
    value="16시"
  />
  <table class="court-list">
    <form>
      <thead>
        <tr>
          <td>이용가능한 시설</td>
          <td>시간</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>A 풋살장</p>
            <img
              src="https://data.ac-illust.com/data/thumbnails/5c/5c2f9076c6a00ea6f7f266199dde85e5_t.jpeg"
              style="width: 100px; height: 80px; display: inline"
            />
          </td>
          <td>
            <button>17시</button>
            <button class="court-1ist-1-18">18시</button>
            <button class="court-1ist-1-19">19시</button>
          </td>
        </tr>
        <tr>
          <td>
            <p>B 풋살장</p>
            <img
              src="https://data.ac-illust.com/data/thumbnails/5c/5c2f9076c6a00ea6f7f266199dde85e5_t.jpeg"
              style="width: 100px; height: 80px; display: inline"
            />
          </td>
          <td>
            <button class="court-1ist-2-16">16시</button>
            <button class="court-1ist-2-17">17시</button>
            <button class="court-1ist-2-18">18시</button>
            <button class="court-1ist-2-19">19시</button>
          </td>
        </tr>
        <tr>
          <td>
            <p>A 농구장</p>
            <img
              src="https://us.123rf.com/450wm/praewpailin/praewpailin1903/praewpailin190300582/124292922-%EB%82%98%EB%AC%B4-%ED%8C%A8%ED%84%B4-%EC%A7%88%EA%B0%90-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%84%A0%EC%9D%B4-%EC%9E%88%EB%8A%94-%EB%86%8D%EA%B5%AC-%EC%BD%94%ED%8A%B8-%EB%B0%94%EB%8B%A5-%EB%86%8D%EA%B5%AC%EC%9E%A5-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-.jpg?ver=6"
              style="width: 100px; height: 80px; display: inline"
            />
          </td>
          <td>
            <button class="court-1ist-3-16">16시</button>
            <button class="court-1ist-3-17">17시</button>
            <button class="court-1ist-3-18">18시</button>
            <button class="court-1ist-3-19">19시</button>
          </td>
        </tr>
      </tbody>
    </form>
  </table>
</template>

<script>
export default {
  name: 'Book',
  props: {
    msg: String,
  },
  data() {
    return {
      modalOpen: false,
      time: ['16시', '17시', '18시', '19시'],
    };
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-bottom: solid 1px #aaa;
  background-color: #eee;
}

nav a {
  display: inline-block;
  min-width: 9rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: solid 1px #aaa;
  text-align: center;
  text-decoration: none;
  color: #555;
}

nav a[aria-current='page'] {
  color: #000;
  background-color: #d4d4d4;
}

h1 {
  text-align: center;
}

h3 {
  text-align: center;
}

#topmenu {
  height: 100px;
  width: 100vw;
  display: block;
  margin: 0 auto;
}

#topmenu ul li {
  list-style: none;
  background-color: #d4d4d4;
  float: left;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
}

#topmenu .menulink {
  text-decoration: none;
  color: black;
  display: block;
  width: 45vw;
  font-size: 12px;
  font-weight: bold;
}

.date {
  text-align: right;
}

.court-list {
  width: 80vw;
  border-spacing: 10px;
}

.graybox {
  float: right;
  text-align: center;
  margin-left: 10px;
  pointer-events: none;
}

.yellowbox {
  float: right;
  background-color: yellow;
  text-align: center;
  margin-left: 10px;
  pointer-events: none;
}

.black_bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white_bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  paddding: 20px;
}
</style>
