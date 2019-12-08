document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("formOne");
    // debugger;

    form.addEventListener("submit", () => {
        debugger;
        let formData = new FormData(form);
        console.log(formData.toString());
        debugger;

    });
});



