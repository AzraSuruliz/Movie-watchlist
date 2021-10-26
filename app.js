var movies = [
    {
        odgledan: "ne",
        naziv: "No time to die",
        godina: 2021,
        drzava: "United States",
        napomena: "",
        glumci: ["Daniel Craig","Rami Malek", "Léa Seydoux", "Lashana Lynch"]
    },
    {
        odgledan: "ne",
        naziv: "The Godfather",
        godina: 1972,
        drzava: "United States",
        napomena: "",
        glumci: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"]
    },
    {
        odgledan: "ne",
        naziv: "Bohemian Rhapsody",
        godina: 2018,
        drzava: "United Kingdom",
        napomena: "",
        glumci: ["Lucy Boynton", "Rami Malek", "Ben Hardy", "Aidan Gillen"]
    },
    {
        odgledan: "ne",
        naziv: "Shutter Island",
        godina: 2010,
        drzava: "United States",
        napomena: "",
        glumci: ["Leonardo DiCaprio", "Michelle Williams", "Ben Kingsley"]
    },
    {
        odgledan: "ne",
        naziv: "Me before you",
        godina: 2016,
        drzava: "United Kingdom",
        napomena: "",
        glumci: ["Emilia Clarke", "Sam Claflin", "Charles Dance"]
    },
    {
        odgledan: "ne",
        naziv: "Memento",
        godina: 2000,
        drzava: "United States",
        napomena: "",
        glumci: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"]
    }


];


function checkCheckbox(){
    document.addEventListener('DOMContentLoaded', function() {
        var checkboxes = document.getElementsByClassName("watched_checkbox");
     
        for (var checkbox of checkboxes)
        {
            checkbox.addEventListener('change', function(event)
            {
                if (event.target.checked) {
                    alert(`${event.target.value} is checked`);
                }
                else {
                    alert(`${event.target.value} is unchecked`);
                }
            });
        }
    }, false);
}

function check(){
    $(function() {
        $('td:first-child input').change(function() {
            $(this).closest('tr').toggleClass("highlight",this.checked);
            //$(this).closest('td').next().html('da');
        });
    });
}

function displayMoviesAsTable(moviesToShow = null){

    if(moviesToShow == null) moviesToShow = movies;

    let tableContents = "";
    moviesToShow.forEach((movie) => {
        tableContents += `<tr>
                            <td><input type="checkbox" id="watched_checkbox"></td>
                            <td>${movie.naziv}</td>
                            <td>${movie.godina}</td>
                            <td>${movie.drzava}</td>
                            <td>${movie.napomena}</td>
                            <td>${movie.glumci}</td>
                        </tr>`;
    });

    document.getElementById("movies_table_body").innerHTML = tableContents;
    check();
}

function makeArrayOfActors(element){
    let actors = element.split(',');
    return actors;
}

function getUserInputs(){

    let naziv = document.getElementById("name_input").value;
    let godina = document.getElementById("year_input").value;
    let drzava = document.getElementById("country_input").value;
    let napomena = document.getElementById("additional_input").value;
    let glumci = makeArrayOfActors(document.getElementById("actors_input").value);

    //console.log(glumci);
    return {
        odgledan: "ne",
        naziv: naziv,
        godina: godina,
        drzava: drzava,
        napomena: napomena,
        glumci: glumci
    }
}

function clearInputs(){
    // ako koristimo formu
    document.getElementById('new_movie_form').reset();
}

function addNewMovie(){
    let newMovie = getUserInputs();
    movies.push(newMovie);
    displayMoviesAsTable();
    clearInputs();
}

// ako koristimo formu
document.getElementById('new_movie_form').addEventListener('submit', (e) => {
    e.preventDefault();
    addNewMovie();
});


displayMoviesAsTable();

