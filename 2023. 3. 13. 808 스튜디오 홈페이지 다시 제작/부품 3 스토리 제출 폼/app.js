const nodemailer = require('nodemailer');

// 이메일 전송을 위한 transporter 설정
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'my-email@gmail.com', // 이메일 계정
    pass: 'my-password', // 이메일 계정 비밀번호
  },
});

// 폼 제출 시 실행될 함수
function handleSubmit(event) {
  event.preventDefault(); // 기본 제출 동작 막기

  // 입력된 값을 가져오기
  const phoneNumber = document.getElementById('phone-number').value;
  const content = document.getElementById('content').value;
  const checkbox1 = document.getElementById('checkbox-1').checked;
  const checkbox2 = document.getElementById('checkbox-2').checked;

  // 이메일 전송을 위한 옵션 설정
  const mailOptions = {
    from: 'angdra63@gmail.com', // 보내는 사람 이메일 주소
    to: 'angdra63@gmail.com', // 받는 사람 이메일 주소 (핸드폰 번호와 함께)
    subject: '808 스튜디오 무료쿠폰 이벤트 자기만의 스토리 제출', // 이메일 제목
    text: `전화번호: ${phoneNumber}\n내용: ${content}\n체크박스 1: ${checkbox1}\n체크박스 
