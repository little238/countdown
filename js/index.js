var Messenger = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Chúc mọi người năm mới' ,'tiền vào bạc tỉ, tiền ra rỉ rỉ', 'miệng cười hi hi, vạn sự như ý, cung hỉ, cung hỉ!','Chúc mừng năm mới bách nhẫn thái hòa.', 'Chúc mừng năm mới phúc sinh lễ nghĩa gia đình thịnh Lộc tiền vinh hoa phú quý xuân!','Chúc mừng năm mới Đa lộc, đa tài, đa phú quý Đắc thời, đắc thắng, đắc nhân tâm.', 'Chúc mừng năm mới Hoa khai phú quý Lộc quyền lai Khai tài nở lộc Toàn gia đại phát','Chúc mừng năm mới','Chúc mừng năm mới tấn tài, tấn lộc Chúc mừng năm mới ngũ phúc lâm môn. ','Chúc mừng năm mới Xuân đến gia đình vui xum họp Tết về con cháu hưởng bình an','Chúc mừng năm mới!','Sung sướng trong tình yêu, sung túc trong công việc và sung mãn trong sức khỏe em nhé ','CHÚC MỪNG NĂM MỚI 2018 .','12 tháng phú quý,','365 ngày phát tài','8760 giờ sung túc','525600 phút thành công ','31536000 giây VẠN SỰ NHƯ Ý','Chúc năm Mậu Tuất thành công luôn tới, sức khỏe tuyệt vời, may mắn khắp nơi, làm nhiều điều mới.'
    ];
    
    setTimeout(m.animateIn, 100);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 20);
    } else { 
      setTimeout(m.animateFadeBuffer, 20);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = false;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    
    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    
    setTimeout(m.animateIn, 200);
  };
  
  m.init();
}

console.clear();
var messenger = new Messenger($('#messenger'));