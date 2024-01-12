/**
 * @param type_value : string
 * @param time_value : string
 * @returns {boolean}
 */
const isInputFilled = (type_value, time_value) => {
    return (type_value !== "" && time_value !== "");
};

/**
 * @param time_value : string
 * @returns {boolean}
 */
const isValidTime = (time_value) => {
    const time_hour = parseInt(time_value);
    return (!isNaN(time_hour) && (0 < time_hour && time_hour <= 24));
};

/**
 * @param time_value : string
 * @returns {number}
 */
const calcDays = (time_value) => {
    const time_hour = parseInt(time_value);
    return Math.round((10000 / time_hour));
};

/**
 * @param type_value : string
 * @param study_days : number
 */
const viewResult = (type_value, study_days) => {
    const hide_sections = document.querySelectorAll(".hide-section");

    if(hide_sections.length !== 0) {
        hide_sections[0].classList.replace("hide-section", "result-area");
        hide_sections[1].classList.replace("hide-section", "result-btn-area");
    }

    const result_which_type = document.querySelector(".result-which-type");
    const result_spend_time = document.querySelector(".result-spend-time");

    result_which_type.innerHTML = type_value;
    result_spend_time.innerHTML = String(study_days);
}