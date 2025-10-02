$(function() {
  $('.hamburger').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('active');
  });
});

$(function() {
  $('.nav').click(function() {
    $('.menu').toggleClass('open');
    $('.active').toggleClass('active');
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // 画面幅が700px以下のときだけ動かす
  if (window.innerWidth <= 700) {
    const mapTabs = [
      { name: "全体マップ", img: ["picture/map/zentai.png", "picture/map/itiran.png"] },
      { name: "グラウンド", img: ["picture/map/guraundo.png", "picture/map/itiran.png"] },
      { name: "スクールアベニュー", img: ["picture/map/abe.png", "picture/map/itiran.png"] },
      { name: "A棟", img: ["picture/map/A.png", "picture/map/itiran.png"] },
      { name: "D棟", img: ["picture/map/D.png", "picture/map/itiran.png"] }
    ];

    let currentMapIndex = 0;

    const mobileMapTab = document.getElementById("mobileMapTab");
    const mobileMapContent = document.getElementById("mobileMapContent");
    const leftArrow = document.querySelector(".mobile-tab-wrapper .arrow.left");
    const rightArrow = document.querySelector(".mobile-tab-wrapper .arrow.right");

    function updateMobileMap() {
      const tab = mapTabs[currentMapIndex];
      mobileMapTab.textContent = tab.name;
      mobileMapContent.innerHTML = `
        <div class="map">
          <img src="${tab.img[0]}">
          <img src="${tab.img[1]}">
        </div>
      `;
    }

    leftArrow.addEventListener("click", () => {
      currentMapIndex = (currentMapIndex - 1 + mapTabs.length) % mapTabs.length;
      updateMobileMap();
    });

    rightArrow.addEventListener("click", () => {
      currentMapIndex = (currentMapIndex + 1) % mapTabs.length;
      updateMobileMap();
    });

    // 初期表示
    updateMobileMap();
  }
});
