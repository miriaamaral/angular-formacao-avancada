
    const input = document.querySelector("#name");
    console.log(input.value);

    setTimeout(() => {
        input.value = "Guilherme";
        console.log(input.value);
    }, 1000);