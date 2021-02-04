
//houskeeping
if (typeof $ == 'undefined') {
    var $ = jQuery;
}

jQuery(document).ready(function(){

    // listen to change of lang selector
    jQuery('.language-switch-select').on('change', function() {
        window.location.href= $(this).find(':selected').data('url');
    });

    // check for cookie and display cookie layer
    var accepted = getCookie('consent_given');
    if (accepted == "" || !accepted) {
        // display cookie layer
        jQuery('.cookie-policy').show();
    }

    // listen for cookie accept button
    jQuery("#accept_cookies").on("click", function(){
        // set accepted cookie
        setCookie('consent_given', 'true', 999);
        setCookie('marketing_consent', 'true', 999);
        setCookie('analytics_consent', 'true', 999);
        jQuery('.cookie-policy').hide();
    });

    // listen for cookie cancel button
    jQuery("#cancel_cookies").on("click", function(){
        // set accepted cookie
        setCookie('consent_given', 'true', 999);
        setCookie('marketing_consent', 'false', 999);
        setCookie('analytics_consent', 'false', 999);
        jQuery('.cookie-policy').hide();
    });

    // TRACKING

    // listen for button clicks
    jQuery("a.button").on("click", function(){
        var buttontext = jQuery(this).text();
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'genericEvent',
            'eventCategory': 'Buttons',
            'eventAction': 'Click',
            'eventLabel': buttontext
        });
    });

    // listen for submit buttons clicks
    jQuery("input:submit").on("click", function(){
        var formname = jQuery(this).closest("form").prop("name");
        var company = jQuery("input[name='company']").val();
        var directmarketing = jQuery("input[name='directmarketing']").prop('checked');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'formSend',
            'eventCategory': 'Forms',
            'eventAction': 'Successful Form Send',
            'eventLabel': formname, // Replace with actual form name!
            'eventValue': 0, // Optionally add a value if one is provided by GETAC
            'company': company, //insert company name if customer enters a company e.g. 'TWT Interactive'
            'contactPreference': 'phone call', //insert customers contact preference as provided within the dropdown
            'directMarketingConsent': directmarketing //insert direct marketing consent as bool (true if given, false if not)
        });
    });


    // WHITEPAPER

    // listen to teaser button click to show eloqua form

    jQuery("#download_teaser").on("click", function(){
        jQuery("#whitepaper_form_container").toggle();
    });


    // AUGMENTED TEASER

   jQuery(".teaser-augmented-reality-content").on("click", function(){
       // get attributes of clicked link to update DOM / overlay
       var data_embed = jQuery(this).data('embed');
       var data_mobile = jQuery(this).data('mobile');
       var data_qr = jQuery(this).data('qr');

       if(mobileCheck()) {
           window.open(data_mobile);
       } else {
           overlay = jQuery(".gt-lightbox-content");
           overlay.show();
           var offset = overlay.offset();
           offset.top -=60;
           jQuery("html, body").animate({
               scrollTop: offset.top
           });
           jQuery("#modelcontainer").load("/ar/show.php?product="+data_embed, function(){
               jQuery("#modelcontainer main").css("width","746px");
               jQuery("#modelcontainer main").css("height","523px");
           });

           // mobile or desktop?
           var mobile = mobileCheck();

           if(mobile || jQuery.urlParam('device') == 'mobile') {
               // show link in data_mobile
               jQuery("#embed_container").html(data_embed);
               jQuery("#augmented_mobile").show();
           } else {
               // insert embed code
               jQuery("#qrcode").prop("src",data_qr);
               jQuery("#qrlink").prop("href", data_mobile);
               jQuery("#augmented_desktop").show();
           }
           overlay.show();

           // reposition the friggin footer
           window.setTimeout(500);
           console.log($(document).height());
           $('footer').offset({top: $(document).height() - 60})
       }
   });

   // AUGMENTED TEASER CLOSE BUTTON
    // listen for modal close button
    jQuery("button.gt-lightbox-close").on("click",function(){
        var teaser = jQuery("#teaser_ar");
        var offset = teaser.offset();
        offset.top -= 60;
        jQuery("html, body").animate({
            scrollTop: offset.top
        });
        overlay.hide();

        // reposition the friggin footer
        window.setTimeout(500);
        console.log($(document).height());
        $('footer').offset({top: $(document).height() - 60})
    });



});

// parse query string
jQuery.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
        .exec(window.location.href);
    if (results == null) {
        return 0;
    }
    return results[1] || 0;
}

// read cookies
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// write cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

 function mobileCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}
