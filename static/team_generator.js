$(function(){

    const $easternTeams = $('#easternRows');

    $.ajax({
        type: 'GET',
        url: '/geteasternteams',
        success: function(easternTeams) {
            $.each(easternTeams, function(i, data) {
                // console.log(data)
                $easternTeams.append('<a className="" href=#>' +
                    '<img src="/static/images/team_logos/' + data.teamName + '.png"' +
                    ' class = teamButton ' +
                    'id="' + data.teamAbbrev + '"></a> ');

            });
        }
    });

    // $(function() {
    //       $('a#test').on('click', function(e) {
    //         e.preventDefault()
    //         $.getJSON('/get_roster', {"team": "GSW"} ,
    //             function(data) {
    //           //do nothing
    //         });
    //         return false;
    //       });
    //     });

    jQuery(document).ready(function(){
    $("#easternRows").on("click", ".teamButton", function(event){
     $('#teamRows, #loadingRows').toggleClass('hidden');
    });

    $("#easternRows").on("click", ".teamButton", function(e){
         e.preventDefault()
        $.getJSON('/get_roster', {"team": e.target.id},
            function(data) {
          //do nothing
        });
        return false;
    });

    });





    // $.getJSON('/static/eastern_teams.json', function(data) {
    //     $.each(data, function(index) {
    //         $easternTeams.append('<a className="" href="/">' +
    //         '<img src="/static/images/team_logos/' + data[index].teamName + ' .png" style=""></a> ');
    //     });
    // });


});