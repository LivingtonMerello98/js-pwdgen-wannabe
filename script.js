        // bonus2
        const n = Math.floor((Math.random() * 100) + 1);
        const firstName = prompt( "Please enter your name:" );
        const lastName = prompt( "Please enter your last name:");
        const favouriteColor =  prompt("What is your favorite color?");
        document.getElementById("my_id").innerHTML = firstName +lastName + favouriteColor + n;
        // bonus1
        console.log(firstName + lastName + favouriteColor);