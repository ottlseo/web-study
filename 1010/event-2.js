/*----------------------------실행 변수---------------------------*/
var page_number = 0;   //페이지 변수
var rest;    //질문 섞기 위한 나머지값 변수
var x = 0;   //주목/반응 변수
var y = 0;   //이슈/정독 변수
var z = 0;   //해결/공감 변수
/*----------------------------결과 변수---------------------------*/
var name = '';   //결과 이름 변수 생성
var image = '';  //결과 이미지 변수 생성
var description = '';   //결과 내용 변수 생성
/*----------------------------추천 변수---------------------------*/
var friend = ''; //어울리는 친구 추천 변수 생성
var friend_image = '';
var events='';    //어울리는 이벤트 변수 생성
var events_link=''; 
var events_image='';
var goods='';   //어울리는 굿즈 변수 생성
var goods_link='';
var goods_image='';

/*---------------------------텍스트 변수--------------------------*/
var contents=[
    {"number":"1", "page":"Q1", "question":"이화이언의 묘미는", "button1":"집단적 독백이다.", "button2":"벗들의 재치있고 세심한 댓글이다."},
    {"number":"2", "page":"Q2", "question":"이화이언에 접속하면", "button1":"조회수 높은 글부터 본다.", "button2":"새로고침하면서 최신 글부터 차근차근 본다."},
    {"number":"3", "page":"Q3", "question":"내가 작성하는 글은 주로", "button1":"정보 공유형 글이다.", "button2":"흥미 위주형 글이다."},
    {"number":"4", "page":"Q4", "question":"말하고자 하는 바를", "button1":"제목에 다 적는 편이다.", "button2":"제목보다는 본문에 적는 편이다."},
    {"number":"5", "page":"Q5", "question":"이슈가 된 주제가 있다면,", "button1":"같은 주제로 새롭게 글을 쓴다.", "button2":"관련 글에 댓글을 단다."},
    {"number":"6", "page":"Q6", "question":"정보글을 발견하면", "button1":"공감,주목글 지정 후 나중에 본다.", "button2":"당장 꼼꼼히 정독한다."},
    {"number":"7", "page":"Q7", "question":"고민이 담긴 글을 봤을 때", "button1":"잘 모르는 내용이면 그냥 넘어간다.", "button2":"잘 몰라도 감정적 공감을 해주는 편이다."},
    {"number":"8", "page":"Q8", "question":"나는 이화이언에", "button1":"밤(새벽)에 더 활발하게 접속한다.", "button2":"낮에 더 활발하게 접속한다."},
    {"number":"9", "page":"Q9", "question":"나는", "button1":"낚시글을 쓰는 편이다.", "button2":"낚시글에 낚이는 편이다."},
    {"number":"10", "page":"Q10", "question":"이화이언에 접속하면", "button1":"관심있는 키워드만 검색한다.", "button2":"인기 검색어에 있는 건 일단 다 눌러본다."},
    {"number":"11", "page":"Q11", "question":"내가 쓴 글에 댓글 알림이 왔을 때", "button1":"문제 해결 방법을 제시한 댓글을 기대한다.", "button2":"문제에 공감하는 댓글을 기대한다."},
    {"number":"12", "page":"Q12", "question":"레벨을 높이는 데에", "button1":"관심이 많고, 레벨을 높이기 위해 노력한다.", "button2":"큰 관심이 없다."},
    {"number":"13", "page":"Q13",  "question":"이화이언에 선택지를", "button1":"골라 달라는 글을 쓰는 편이다.", "button2":"골라주는 편이다."},
    {"number":"14", "page":"Q14", "question":"이화이언 레전드를", "button1":"대강 알고 있는 편이다.", "button2":"속속들이 알고 있는 편이다."},
    {"number":"15", "page":"Q15", "question":"나와 다른 의견을 가진 화연이를 보았을 때", "button1":"나의 의견을 소개해주려고 한다.", "button2":"글 쓴 화연이의 입장에서 생각해보려 한다."},
    {"number":"16", "page":"Q16", "question":"제품, 0TT 계정 등 공동구매 시", "button1":"총대를 메는 편이다.", "button2":"공동구매에 참여하는 편이다."},
    {"number":"17", "page":"Q17", "question":"DB글을 주로", "button1":"쓰는 편이다.", "button2":"읽는 편이다."},
    {"number":"18", "page":"Q18", "question":"이화이언에", "button1":"간간히 접속하여 흐름을 본다.", "button2":"주기적으로 접속하여 꼼꼼히 읽는다."},
    {"number":"19", "page":"Q19", "question":"나는", "button1":"DB가 담긴 정보성 글을 선호한다.", "button2":"유머가 섞인 일상 글을 선호한다."},
    {"number":"20", "page":"Q20", "question":"이화이언을 이용할 때", "button1":"모든 게시판에 들어가보는 편이다.", "button2":"주로 쓰는 게시판만 이용하는 편이다."}
]
var result=[
    {"number":"1","name":"정확한 타이밍과 센스로 벗들의 취향을 저격한다! <b>스나이퍼형</b>","image":"./public/image/1.PNG","description":"트렌드에 민감한 당신은 핵심을 아는 스나이퍼형입니다! 누구보다 흐름을 정확하게 파악하고 빠르게 적응하며, 글에 적합한 댓글을 달아주는군요! 예리한 눈썰미와 뛰어난 적응력을 갖춘 당신, 이번 배꽃정원의 게임 올림픽에 참여해보는 건 어떠신가요?"},
    {"number":"2","name":"조회수에 오르는 건 기본! <b>인싸형</b>","image":"./public/image/2.PNG","description":"적극적으로 글을 쓰고 벗들과 잘 어울리는 당신은 인싸형입니다! 벗들이 쓴 글에 열심히 공감해 주고, 새로운 플로우를 만들기도 하는군요! 새내기 이벤트를 통해 다양한 벗들을 만나며 당신의 친화력을 발휘해보는 건 어떠신가요?"},
    {"number":"3","name":"오늘 플로우는 내가 이끈다! <b>리더형</b>","image":"./public/image/3.PNG","description":"글을 꼼꼼히 읽고, 벗들에게 올바른 해결책을 제시하는 당신은 리더형입니다. 벗들의 글 하나하나 세심히 관찰하면서도 새로운 글로 플로우를 이끄시는군요! 이번 배꽃정원의 게임 올림픽에서 당신만의 리더십을 발휘해보는 건 어떠신가요?"},
    {"number":"4","name":"리젠은 내가 높인다! <b>이야기꾼형</b>","image":"./public/image/4.PNG","description":"당신은 다양한 주제로 벗들과 소통하는 것을 좋아하는 이야기꾼형입니다! 본인의 이야기뿐만 아니라 다른 유저들의 이야기에도 진심으로 귀 기울여 공감하는군요! 벗들과의 진정한 소통을 즐기는 당신, 이번 배꽃정원의 온라인 꿀단지에 참여하여 이화이언 안에서 또 다른 즐거움을 느껴보는 건 어떠신가요?"},
    {"number":"5","name":"이화이언 레전드는 모두 섭렵했다! <b>백과사전형</b>","image":"./public/image/5.PNG","description":"당신은 이화이언의 레전드를 속속들이 꿰뚫고 있는 백과사전형입니다! 기발하면서도 진정성이 듬뿍 담긴 댓글을 남기는 당신은 이화이언의 이슈에 대해 모르는 것이 없을 것 같군요! 누구보다 이화이언을 잘 아는 당신, 미션! 이화이언에 참여해보는 건 어떠신가요?"},
    {"number":"6","name":"벗들의 고민 해결사! <b>힐링요정형</b>","image":"./public/image/6.PNG","description":"당신은 벗들의 이야기와 고민에 진심으로 귀 기울일 줄 아는 힐링요정형입니다! 당신의 따뜻한 댓글은 유저들이 보다 활발하게 활동할 수 있는 원동력이 된답니다! 이번 배꽃정원 온라인 꿀단지를 통해 벗들과 따뜻한 마음을 나누어보는 건 어떠신가요?"},
    {"number":"7","name":"골라주는 건 내가 전문! <b>척척박사형</b>","image":"./public/image/7.PNG","description":"벗들의 선택지에 길잡이가 되어주는 당신은 바로 척척박사형입니다! 꼼꼼하게 게시글을 읽으면서 공감과 센스 있는 댓글을 남겨 벗들의 고민을 해결해 주는군요! 이번 배꽃정원 새내기 이벤트에 참여하여 선후배 간의 고민을 나누어보는 건 어떠신가요?"},
    {"number":"8","name":"어디서든 공감장전! <b>프로공감러형</b>","image":"./public/image/8.PNG","description":"게시글에 공감을 잘 눌러주는 당신은 바로 프로공감형입니다! 벗들의 고민을 읽으면서 공감과 댓글로 벗들과 함께하는군요! 이번에 배꽃정원이 열린 만큼 이벤트 이후에도 벗들과 함께 재미를 나누는 것을 원하시면 미션! 이화이언 이벤트에 참여하는 것을 추천합니다!"},
]
var recommend=[
    {"number":"1","events":"게임올림픽","events_link":"","goods":"미정","goods_link":""},
    {"number":"2","events":"리뉴얼 이벤트","events_link":"","goods":"미정","goods_link":""},
    {"number":"3","events":"만렙화연 이벤트","events_link":"","goods":"미정","goods_link":""},
    {"number":"4","events":"온라인 꿀단지","events_link":"","goods":"미정","goods_link":""},
    {"number":"5","events":"성향 테스트","events_link":"","goods":"미정","goods_link":""},
    {"number":"6","events":"사이버불링 방지 캠페인","events_link":"","goods":"미정","goods_link":""},
    {"number":"7","events":"새내기 이벤트","events_link":"","goods":"미정","goods_link":""},
    {"number":"8","events":"미션! 이화이언","events_link":"","goods":"미정","goods_link":""}
]

/*----------------------------------이벤트 함수---------------------------------*/
function start(){  //페이지수 증가
    page_number += 1;
}
function button1(){  //버튼1 선택 시
    rest = page_number % 4; //질문 섞어서 나머지로 분류
    
    if(rest === 1){
        x += 1;
        y += 0;
        z += 0;
    } else if(rest === 2){
        x += 0;
        y += 1;
        z += 0;
    } else if(rest === 3){
        x += 0;
        y += 0;
        z += 1;
    }
    page_number += 1;
}
function button2(){  //버튼2 선택 시
    page_number += 1;
}
function textchange(){  //선택지 화면 변화
    if(page_number != 0 & page_number <= 20){ 
        document.getElementById("page_number").innerHTML = `<progress value="${contents[page_number-1]["number"]}" max="20"></progress>`;
        document.getElementById("page_question").innerHTML = contents[page_number-1]["question"];
        document.getElementById("page_button").innerHTML =  `<button class="button_choose1" onclick='button1();textchange()'>
                                                              ${contents[page_number-1]["button1"]}
                                                            </button>
                                                            <button class="button_choose2" onclick='button2();textchange()'>
                                                              ${contents[page_number-1]["button2"]}
                                                            </button>`;
    } // end of 1~20 page: 선택지 화면
    /* 21 page: 로딩화면 */
    else if(page_number==21) {  
        if(x>=3 & y>=3 & z>=3){ // 스나이퍼형
            name = result[0]["name"];
            image = result[0]["image"];
            description = result[0]["description"];
            friend = result[7]["name"];
            friend_image = result[7]["image"];
            events = recommend[0]["events"];
            events_link = recommend[0]["events_link"];
            events_image = recommend[0]["events_image"];
            goods = recommend[0]["goods"];
            goods_link = recommend[0]["goods_link"];
            goods_image = recommend[0]["goods_image"];
        } else if(x>=3 & y>=3 & z<3){ // 인싸형
            name = result[1]["name"];
            image = result[1]["image"];
            description = result[1]["description"];
            friend = result[6]["name"];
            friend_image = result[6]["image"];
            events = recommend[1]["events"];
            events_link = recommend[1]["events_link"];
            events_image = recommend[1]["events_image"];
            goods = recommend[1]["goods"];
            goods_link = recommend[1]["goods_link"];
            goods_image = recommend[1]["goods_image"];
        } else if(x>=3 & y<3 & z>=3){ // 리더형
            name = result[2]["name"];
            image = result[2]["image"];
            description = result[2]["description"];
            friend = result[4]["name"];
            friend_image = result[4]["image"];
            events = recommend[2]["events"];
            events_link = recommend[2]["events_link"];
            events_image = recommend[2]["events_image"];
            goods = recommend[2]["goods"];
            goods_link = recommend[2]["goods_link"];
            goods_image = recommend[2]["goods_image"];
        } else if(x>=3 & y<3 & z<3){ // 이야기꾼형
            name = result[3]["name"];
            image = result[3]["image"];
            description = result[3]["description"];
            friend = result[5]["name"];
            friend_image = result[5]["image"];
            events = recommend[3]["events"];
            events_link = recommend[3]["events_link"];
            events_image = recommend[3]["events_image"];
            goods = recommend[3]["goods"];
            goods_link = recommend[3]["goods_link"];
            goods_image = recommend[3]["goods_image"];
        } else if(x<3 & y>=3 & z>=3){  // 백과사전형
            name = result[4]["name"];
            image = result[4]["image"];
            description = result[4]["description"];
            friend = result[2]["name"];
            friend_image = result[2]["image"];
            events = recommend[4]["events"];
            events_link = recommend[4]["events_link"];
            events_image = recommend[4]["events_image"];
            goods = recommend[4]["goods"];
            goods_link = recommend[4]["goods_link"];
            goods_image = recommend[4]["goods_image"];
        } else if(x<3 & y>=3 & z<3){ // 힐링요정형
            name = result[5]["name"];
            image = result[5]["image"];
            description = result[5]["description"];
            friend = result[3]["name"];
            friend_image = result[3]["image"];
            events = recommend[5]["events"];
            events_link = recommend[5]["events_link"];
            events_image = recommend[5]["events_image"];
            goods = recommend[5]["goods"];
            goods_link = recommend[5]["goods_link"];
            goods_image = recommend[5]["goods_image"];
        } else if(x<3 & y<3 & z>=3){ // 척척박사형
            name = result[6]["name"];
            image = result[6]["image"];
            description = result[6]["description"];
            friend = result[1]["name"];
            friend_image = result[1]["image"];
            events = recommend[6]["events"];
            events_link = recommend[6]["events_link"];
            events_image = recommend[6]["events_image"];
            goods = recommend[6]["goods"];
            goods_link = recommend[6]["goods_link"];
            goods_image = recommend[6]["goods_image"];
        } else if(x<3 & y<3 & z<3){ //프로공감러형
            name = result[7]["name"];
            image = result[7]["image"];
            description = result[7]["description"];
            friend = result[0]["name"];
            friend_image = result[0]["image"];
            events = recommend[7]["events"];
            events_link = recommend[7]["events_link"];
            events_image = recommend[7]["events_image"];
            goods = recommend[7]["goods"];
            goods_link = recommend[7]["goods_link"];
            goods_image = recommend[7]["goods_image"];
        }
        // 로딩 페이지
        document.getElementById("loading").innerHTML = `<div id="loader">
                                                            <div class="result_contents">
                                                                <img src="public/image/loading1.png" id="slide">
                                                            </div>
                                                            <div class="loading-bar"></div>
                                                        </div>`;
        page_number += 1; //page_number==22가 됨
        
    } else { /* 22 page: 결과화면 */
        document.getElementById("page_title").innerHTML = `<h6>나의 이화이언 이용 성향은?</h6>`;
        document.getElementById("page_number").innerHTML = `<span>${name}</span>`;
        document.getElementById("page_question").innerHTML = `<div class="result_contents">
                                                                <img src="${image}">
                                                                <div>
                                                                  ${description}
                                                                </div>
                                                                <div class="result_friend">
                                                                  나랑 잘 맞는 화연: <b>${friend}</b>
                                                                  <img src="${friend_image}">
                                                                </div>

                                                                <div class="result_more">
                                                                  <div>
                                                                    <p>나와 어울리는 배꽃정원 이벤트</p>
                                                                    <img src="./public/image/logo2.PNG">
                                                                    <a href="${events_link}">"${events}"</a>
                                                                  </div>
                                                                  <div>
                                                                    <p>나와 어울리는 배꽃정원 굿즈</p>
                                                                    <img src="./public/image/logo2.PNG">
                                                                    <a href="${goods_link}">"${goods}"</a>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                             `;
        document.getElementById("page_button").innerHTML= `<div class="button_more">
                                                             <input type="button" value="다시 테스트하기" onclick="location.href='./start.html'">
                                                             <input type="button" value="다른 유형 살펴보기" onclick="location.href='./more.html'">
                                                           </div>`;
    }
}
