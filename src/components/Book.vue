<template>
  <div class="date">
    <input type="date">
  </div>
  <br>
  <button class="yellowbox">예약불가</button>
  <button class="graybox">예약가능</button>
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
            <img src = "https://data.ac-illust.com/data/thumbnails/5c/5c2f9076c6a00ea6f7f266199dde85e5_t.jpeg" style = "width: 100px; height: 80px; display: inline;">
          </td>
          <td>
            <input type = "button" id = "modal_open" value = "16시"></input>
            <button>17시</button>
            <button class="court-1ist-1-18">18시</button>
            <button class="court-1ist-1-19">19시</button>

            <div id = "modal">
              
              <div class = "modal_content">
                <p>A 풋살장 16시 예약하기</p>
                <input type="text" placeholder = "대표자 관등성명">
                <button id = "modal_close">예약하기</button>
              </div>  
              <div class="modal_layer"></div>
            <div>

          </td>
        </tr>
        <tr>
          <td>
            <p>B 풋살장</p>
            <img src = "https://data.ac-illust.com/data/thumbnails/5c/5c2f9076c6a00ea6f7f266199dde85e5_t.jpeg" style = "width: 100px; height: 80px; display: inline;">
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
              <img src = "https://us.123rf.com/450wm/praewpailin/praewpailin1903/praewpailin190300582/124292922-%EB%82%98%EB%AC%B4-%ED%8C%A8%ED%84%B4-%EC%A7%88%EA%B0%90-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%84%A0%EC%9D%B4-%EC%9E%88%EB%8A%94-%EB%86%8D%EA%B5%AC-%EC%BD%94%ED%8A%B8-%EB%B0%94%EB%8B%A5-%EB%86%8D%EA%B5%AC%EC%9E%A5-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-.jpg?ver=6" style = "width: 100px; height: 80px; display: inline;">
          </td>
          <td>
            <button class="court-1ist-3-16">16시</button>
            <button class="court-1ist-3-17">17시</button>
            <button class="court-1ist-3-18">18시</button>
            <button class="court-1ist-3-19">19시</button>
          </td>
        </tr>
      </tbody>
</template>