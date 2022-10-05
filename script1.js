
        let submit = document.getElementById('submit');
        ha = document.querySelectorAll('.ha');
        let text;
        for (var i = 0; i < ha.length; i++){
            ha[i].addEventListener('click', numclick);
        }
        let numcontainer = document.getElementById('numcontainer');
        submit.addEventListener('click', clicker);

        function clicker(){
            if(!text){
                alert("Please choose your rating first");
            }else{
            submit.classList.remove('submit');
            submit.classList.add('active')
            window.open('/page2.html', '_self');}
        }
        function numclick(){
            ha.forEach(hmm => {
            hmm.classList.remove('numactive');
            hmm.classList.add('num');
            });
            this.classList.add('numactive')
            this.classList.remove('num');
            text = this.textContent;
            localStorage.setItem("text",text);
        }