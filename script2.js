
    let text = localStorage.getItem("text");
    let rating = document.getElementById('rating');
    rating.textContent = `You selected ${text} out of 5`;
