const quotes = [
  {
    quote:
      "The ones that love us never really leave us, And you can always find, in here.",
    author:
      "사랑하는 사람에게 이별은 없어, 늘 마음속에 살아있지. -《해리포터3》",
  },
  {
    quote: "I want to choose my own path. Live in the moment. ",
    author: "이젠 나의 길을 가겠어.매 순간을 누리며. -《토르》",
  },
  {
    quote:
      "Every great wizard in history has started out as nothing more than we are now, students.",
    author:
      "역사상 위대했던 마법사들도 전부 처음엔 우리처럼 학생이었어. -《해리포터5》",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That's why we call it the present.",
    author:
      "어제는 역사고, 내일은 알 수 없지만 오늘은 선물이야. 그래서 현재(present)라고 불러. -《쿵푸팬더》",
  },
  {
    quote: "You often meet fate on the path you choose to avoid.",
    author: "운명을 피하려 선택한 길에서 종종 운명을 만나게 돼. -《쿵푸팬더》",
  },
  {
    quote:
      "If you don't know where ou want to go, then it doesn't matter which path you take.",
    author:
      "네가 어디로 가고 싶은지 모른다는건, 어떤 길이든 선택할 수 있다는 뜻이잖아. -《이상한 나라의 앨리스》",
  },
  {
    quote: "lf you can't say something nice don't say anything at all.",
    author: "멋진 말을 할 수 없다면, 아무 말도 하지 말아줘. -《밤비》",
  },
  {
    quote:
      "The past can hurt. but the way i see it, you can either run from it or learn from it.",
    author:
      "과거는 아플 수 있어. 하지만 말이야, 너는 과거로부터 도망칠 수도 배울 수도 있어. -《라이온 킹》",
  },
  {
    quote:
      "You are the light of my life, my precious son, my little Star-Lord.",
    author:
      "넌 내 삶의 빛이고, 가장 소중한 보물이란다, 나의 작은 스타. -《가디언즈 오브 갤럭시》",
  },
  {
    quote:
      "Don’t close your eyes. Look! The reality of fear can be different than you think.",
    author:
      "눈을 감지 마, 봐봐! 공포의 실체가 너가 생각하는 것과 다를 수도 있어. -《니모를 찾아서》",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
