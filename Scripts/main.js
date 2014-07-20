

$(document).ready(function() {

    console.log("document loaded");

    var hideAll = function() {
        $('#list').hide();
        $('#detail').hide();
    };

    hideAll();

    var startupUrl = '#/list';

    var sammy = new Sammy.Application(function () {
        
        this.get('#/list', function (context) {
            hideAll();
            $('#list').show();


            context.log('list');
        });


        this.get('#/detail', function (context) {
            hideAll();
            $('#detail').show();
            
            // load from 

            context.log('detail');
        });

        this.get('', function() {
            this.app.runRoute('get', startupUrl);
        });

    });

    sammy.run();

});
