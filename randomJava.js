/**
 * Created by Manideep.
 */
$(document).ready(function() {
    function newQuote() {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            data: {
                method: "getQuote",
                lang: "en",
                format: "jsonp"
            },
            success: function(apiResponse) {
                quote = apiResponse.quoteText;
                if (apiResponse.quoteAuthor) {
                    author = " -" + apiResponse.quoteAuthor;
                    $('.qauthor').html(author);
                } else {
                    $('.qauthor').html("-Unknown");
                }
                $('.saying').html(quote);

            }
        });
    };
    newQuote();

    $('.randomquote').click(function(e) {
        e.preventDefault();
        newQuote();
    });

    $('.tweet').click(function() {
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " " + author));
    });
});
