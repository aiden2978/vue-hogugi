<template>
  <!-- 예약하기 모달 -->
  <div class="black_bg" v-if="modalOpen == true">
    <div class="white_bg">
      <p>{{ court[i] }} {{ time[j] }} 예약하기</p>
      <p>대표자 관등성명</p>
      <input type="text" /><br />
      <p>인원</p>
      <input type="text" /><br />
      <p>사용 시간 및 수칙을 준수하여 주시기 바랍니다.</p>
      <input type="button" @click="modalOpen = false" value="예약하기" />
    </div>
  </div>

  <!-- 예약자 명단 모달 -->
  <div class="black_bg" v-if="modalOpen2 == true">
    <div class="white_bg">
      <p>예약자 명단</p>
      <input type="button" @click="modalOpen2 = false" value="닫기" />
    </div>
  </div>

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

  <!-- 날짜 및 예약가능/불가 버튼   -->
  <div class="date">
    <input type="date" @change="input" />
    <input type="button" @click="click" value="선택" />
  </div>
  <br />
  <button class="yellowbox">예약불가</button>
  <button class="graybox">예약가능</button>
  <br />
  <br />

  <!-- 예약하기   -->
  <h4 style="text-align: center">이용 가능한 시설</h4>
  <div class="court">
    <div class="menu">
      <p>A 풋살장</p>
      <img
        src="https://data.ac-illust.com/data/thumbnails/5c/5c2f9076c6a00ea6f7f266199dde85e5_t.jpeg"
        style="width: 100px; height: 80px; display: inline"
      />
    </div>
    <div class="court_time">
      <input
        type="button"
        @click="modalOpen = true"
        value="16시"
        @click="i = 0"
        @click="j = 0"
      />
      <input
        type="button"
        @click="modalOpen = true"
        value="17시"
        @click="i = 0"
        @click="j = 1"
      />
      <input
        type="button"
        @click="modalOpen = true"
        value="18시"
        @click="i = 0"
        @click="j = 2"
      />
      <input
        type="button"
        @click="modalOpen = true"
        value="19시"
        @click="i = 0"
        @click="j = 3"
      />
    </div>
  </div>

  <div class="court">
    <div class="menu">
      <p>B 풋살장</p>
      <img
        src="https://data.ac-illust.com/data/thumbnails/5c/5c2f9076c6a00ea6f7f266199dde85e5_t.jpeg"
        style="width: 100px; height: 80px; display: inline"
      />
    </div>
    <div class="court_time">
      <input
        type="button"
        @click="modalOpen = true"
        value="16시"
        @click="i = 1"
        @click="j = 0"
      />
      <input
        type="button"
        @click="modalOpen = true"
        value="17시"
        @click="i = 1"
        @click="j = 1"
      />
      <input
        type="button"
        @click="modalOpen = true"
        value="18시"
        @click="i = 1"
        @click="j = 2"
      />
      <input
        type="button"
        @click="modalOpen = true"
        value="19시"
        @click="i = 1"
        @click="j = 3"
      />
    </div>
  </div>

  <div class="court">
    <div class="menu">
      <p>A 농구장</p>
      <img
        src="https://us.123rf.com/450wm/praewpailin/praewpailin1903/praewpailin190300582/124292922-%EB%82%98%EB%AC%B4-%ED%8C%A8%ED%84%B4-%EC%A7%88%EA%B0%90-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%84%A0%EC%9D%B4-%EC%9E%88%EB%8A%94-%EB%86%8D%EA%B5%AC-%EC%BD%94%ED%8A%B8-%EB%B0%94%EB%8B%A5-%EB%86%8D%EA%B5%AC%EC%9E%A5-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-.jpg?ver=6"
        style="width: 100px; height: 80px; display: inline"
      />
    </div>
    <div class="court_time">
      <input
        type="button"
        @click="modalOpen = true"
        value="16시"
        @click="i = 2"
        @click="j = 0"
      />
      <input
        type="button"
        @click="modalOpen = true"
        value="17시"
        @click="i = 2"
        @click="j = 1"
      />
      <input
        type="button"
        @click="modalOpen = true"
        value="18시"
        @click="i = 2"
        @click="j = 2"
      />
      <input
        type="button"
        @click="modalOpen = true"
        value="19시"
        @click="i = 2"
        @click="j = 3"
      />
    </div>
  </div>
  <br />
  <input type="button" @click="modalOpen2 = true" value="예약자 확인하기" />
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
      modalOpen2: false,
      court: ["A 풋살장", "B 풋살장", "A 농구장"],
      time: ["16시", "17시", "18시", "19시"],
      i: 0,
      j: 0,

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

.graybox {
  float: right;
  text-align: center;
  margin-left: 5px;
  pointer-events: none;
}

.yellowbox {
  float: right;
  background-color: yellow;
  text-align: center;
  margin-left: 5px;
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
  padding: 20px;
}

.court {
  border: 2px solid;
  padding: 0 0 10px 0;
  margin: 0 0 15px 0;
}
</style>
