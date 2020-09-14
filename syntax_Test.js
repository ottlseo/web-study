// part only. (not executed)

} else if(x<3 & y<3 & z<3){ //프로공감러형
    name = result[7]["name"];
    image = result[7]["image"];
    description = result[7]["description"];
    friend = result[0]["name"];
    event = recommend[7]["event"];
    event_link = recommend[7]["event_link"];
    event_image = recommend[7]["event_image"];
    goods = recommend[7]["goods"];
    goods_link = recommend[7]["goods_link"];
    goods_image = recommend[7]["goods_image"];

}
document.getElementById("page_number").innerHTML = name;
document.getElementById("page_question").innerHTML = `<div class="result_contents">
                                                        <img src="${image}">
                                                        <p>
                                                          ${description}
                                                          <br><br><br>
                                                          나랑 잘 맞는 화연: <b>${friend}</b>
                                                        </p>
                                                      </div>`;
document.getElementById("page_button").innerHTML = '';
document.getElementById("event").innerHTML = `나와 어울리는<br>
  <b>배꽃정원 이벤트</b><br>
  <img src="${event_image}" width="200px"><br>
  <b style="font-size: 25px;"><a href="${event_link}">${event}</a></b>
`;
document.getElementById("goods").innerHTML = `나와 어울리는<br>
  <b>배꽃정원 굿즈</b><br>
  <img src="${goods_image}" width="200px"><br>
  <b style="font-size: 25px;"><a href="${goods_link}">${goods}</a></b><br>
`;
}