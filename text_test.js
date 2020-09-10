
var text=[
    {"n":"1", "page":"Q1", "question":"이화이언의 묘미는", "button1":"집단적 독백이다.", "button2":"벗들의 재치있고 세심한 댓글이다."},
    {"n":"2", "page":"Q2", "question":"이슈가 된 주제가 있다면,", "button1":"같은 주제로 새롭게 글을 쓴다.", "button2":"관련 글에 댓글을 단다."},
    {"n":"3", "page":"Q3", "question":"낚시글로", "button1":"낚는 편이다.", "button2":"낚이는 편이다."},
    {"n":"4", "page":"Q4", "question":"이화이언에 골라 달라는 글을", "button1":"쓰는 편이다.", "button2":"골라주는 편이다."},
    {"n":"5", "page":"Q5", "question":"DB글을 주로", "button1":"쓰는 편이다.", "button2":"읽는 편이다."}
  ]

  var page = 0;

  if (page<20){
      page++;
      nn = text[page]["button1"];
  }

  console.log(nn);