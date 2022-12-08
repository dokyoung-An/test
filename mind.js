
const button = document.querySelector("#copy");
const buttonF = document.querySelector("#copy-f-f");
const buttonM = document.querySelector("#copy-f-m");

const buttonW = document.querySelector("#copy-w");
const buttonWf = document.querySelector("#copy-w-f");
const buttonWm = document.querySelector("#copy-w-m");


//신랑측 수정사항
button.addEventListener("click",() =>{
    const copy = (text) => {
        const $textarea = document.createElement("textarea");
        document.body.appendChild($textarea);

        $textarea.value = text;
        $textarea.select();

        document.execCommand('copy');
        document.body.removeChild($textarea)
    }
    copy("카카오뱅크 705-5034-8512-11 ")
    alert("복사되었습니다.")
})

buttonF.addEventListener("click", () => {
    const copy = (text) => {
        // 임시의 textarea 생성
        const $textarea = document.createElement("textarea");
      
        // body 요소에 존재해야 복사가 진행됨
        document.body.appendChild($textarea);
        
        // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
        $textarea.value = text;
        $textarea.select();
        
        // 복사 후 textarea 지우기
        document.execCommand('copy');
        document.body.removeChild($textarea);
      }
      
      copy("카카오뱅크 705-5034-8512-12");
      alert("복사되었습니다.")

})
buttonM.addEventListener("click", () => {
    const copy = (text) => {
        // 임시의 textarea 생성
        const $textarea = document.createElement("textarea");
      
        // body 요소에 존재해야 복사가 진행됨
        document.body.appendChild($textarea);
        
        // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
        $textarea.value = text;
        $textarea.select();
        
        // 복사 후 textarea 지우기
        document.execCommand('copy');
        document.body.removeChild($textarea);
      }
      
      copy("카카오뱅크 705-5034-8512-13");
      alert("복사되었습니다.")

})

//신부측 수정사항

buttonW.addEventListener("click",() =>{
    const copy = (text) => {
        const $textarea = document.createElement("textarea");
        document.body.appendChild($textarea);

        $textarea.value = text;
        $textarea.select();

        document.execCommand('copy');
        document.body.removeChild($textarea)
    }
    copy("카카오뱅크 705-5034-8512-11 ")
    alert("복사되었습니다.")
})

buttonWf.addEventListener("click", () => {
    const copy = (text) => {
        // 임시의 textarea 생성
        const $textarea = document.createElement("textarea");
      
        // body 요소에 존재해야 복사가 진행됨
        document.body.appendChild($textarea);
        
        // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
        $textarea.value = text;
        $textarea.select();
        
        // 복사 후 textarea 지우기
        document.execCommand('copy');
        document.body.removeChild($textarea);
      }
      
      copy("카카오뱅크 705-5034-8512-12");
      alert("복사되었습니다.")

})
buttonWm.addEventListener("click", () => {
    const copy = (text) => {
        // 임시의 textarea 생성
        const $textarea = document.createElement("textarea");
      
        // body 요소에 존재해야 복사가 진행됨
        document.body.appendChild($textarea);
        
        // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
        $textarea.value = text;
        $textarea.select();
        
        // 복사 후 textarea 지우기
        document.execCommand('copy');
        document.body.removeChild($textarea);
      }
      
      copy("카카오뱅크 705-5034-8512-13");
      alert("복사되었습니다.")

})