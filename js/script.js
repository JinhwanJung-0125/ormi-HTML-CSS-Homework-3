const calc_btn = document.querySelector(".calc-btn");
const result_btn = document.querySelector(".result-btn");
const close_btn = document.querySelector(".close-btn");

calc_btn.addEventListener("click", () => {
    const input_which_type = document.querySelector(".input-which-type");
    const input_spend_time = document.querySelector(".input-spend-time");

    const type_value = input_which_type.value;
    const time_value = input_spend_time.value;

    if(!isInputFilled(type_value, time_value)) {
        alert("빈칸을 모두 입력해주세요!");
        return undefined;
    }

    if(!isValidTime(time_value)) {
        alert("올바른 시간을 입력해주세요! (1시간 ~ 24시간)");
        return undefined;
    }

    const study_days = calcDays(time_value);

    viewResult(type_value, study_days);

    return undefined;
});
result_btn.addEventListener("click", () => {
    const hide_section = document.querySelector(".hide-section");

    if(hide_section === undefined) {
        return undefined;
    }

    hide_section.classList.replace("hide-section", "modal");

    return undefined;
});
close_btn.addEventListener("click", () => {
   const modal = document.querySelector(".modal");

   modal.classList.replace("modal", "hide-section");
});