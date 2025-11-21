jQuery('.str3').liMarquee({
    circular:true,
    startShow:true
});

jQuery(window).on('load',function() {
    if (jQuery('body').hasClass('page-template-page-home-new')) {
        jQuery('html, body').animate({scrollTop: 1}, 100);
    }
})

jQuery('.wpcf7-form').submit(function(){
    const countryCode = jQuery('.custom-select .phoneInput .selected-dial-code').text();
    const contactName = jQuery('.custom-select .trigger').text();
    jQuery('.userCountryCode').val(countryCode);
    jQuery('.userContactName').val(contactName);

    const userContactVal = $('input.userContact').val();

    if ( userContactVal === '') {
        $('.select-box .trigger').addClass('not-valid');
        return false;
    }
});

jQuery(document).ready(function(){
    jQuery('#technology .tabs > .tab').click(function(){
        jQuery("#technology .tabs > .tab").not(this).removeClass('active');
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
        } else {
            jQuery(this).addClass('active');
        }

        return false;
    });
});

(function($) {
    $(function() {
        $(".userContact").intlTelInput({
            geoIpLookup: function(callback) {
                $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                });
            },
            initialCountry: "auto",
            separateDialCode: true,
            customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                return "e.g. " + selectedCountryPlaceholder;
            },
        });
    });
})(jQuery);

function countDigits(n) {
    let i;
    for(i = 0; n > 1; i++) {
        n /= 10;
    }
    return i;
}

const regEx = /[^\d]/g;

const SelectList = {
    fn: {
        prepare: function () {
            const select = jQuery('<div class="select-box"/>');
            let html = '<div class="trigger">Additional method of contact <span class="arrowIcon"></span></div>';
            html += '<ul class="choices">';

            jQuery('option', '.selectSelect:first').not('option:first').each(function () {
                const $option = jQuery(this);
                const value = $option.val();
                html += '<li data-value="' + value + '"><span>' + value + '</span></li>';
            });

            html += '</ul>';
            select.html(html).insertBefore('.selectSelect');
        },

        showHide: function () {
            jQuery('.trigger', '.select-box').on('click', function () {
                const $trigger = jQuery(this);
                $trigger.toggleClass('active').removeClass('not-valid');
                jQuery('.custom-select .textField .wpcf7-not-valid-tip').hide();
                const list = $trigger.next();
                if (list.is(':hidden')) {
                    list.slideDown(300);
                } else {
                    list.slideUp(300);
                }
            });

            jQuery('.changeContact', '.label-head').on('click', function () {
                const $trigger = jQuery(this);
                $trigger.toggleClass('active');
                jQuery('.trigger').show();
                const list = jQuery('.trigger').next();
                if (list.is(':hidden')) {
                    list.slideDown(300);
                } else {
                    list.slideUp(300);
                }
            });
        },

        select: function () {
            const $trigger = jQuery('.trigger');
            const $select = jQuery('.selectSelect');
            jQuery('li', '.choices').on('click', function () {
                const $li = jQuery(this);
                const value = $li.data('value');
                const countryCode = jQuery('.custom-select .phoneInput .selected-dial-code').text();
                jQuery('.custom-select .active-feed-field').show();

                if (value === 'Phone' || value === 'WhatsApp') {
                    jQuery('.userCountryCode').val(countryCode);
                    jQuery("#textField").inputmask({"mask": "(99) 999-9999"});

                    $('#textField').keypress(function (event) {
                        if (value === 'Phone' || value === 'WhatsApp') {
                            const hasError = jQuery('.active-feed-field').find( ".wpcf7-not-valid-tip" ).length;
                            console.log(jQuery(this).val().match(/[0-9]/g).length, 'symbols');
                            if (jQuery(this).val().match(/[0-9]/g).length !== 9) {
                                if (hasError === 0) {
                                    jQuery(this).closest('.textField').after('<span class="wpcf7-not-valid-tip" aria-hidden="true">Number short!</span>');
                                } else {
                                    jQuery('.active-feed-field').find( ".wpcf7-not-valid-tip" ).text('Number short!');
                                }
                            } else {
                                jQuery('.active-feed-field').find( ".wpcf7-not-valid-tip" ).text('');
                            }

                            if (jQuery(this).val().match(/[0-9]/g).length === 9) {
                                jQuery('.active-feed-field').find( ".wpcf7-not-valid-tip" ).text('');
                            }
                        }
                    })

                } else {
                    jQuery("#textField").inputmask("remove");
                }

                if (value === 'Telegram') {
                    jQuery(".userContact").attr("placeholder", `@username`).removeClass('phoneInput');
                    jQuery('.custom-select .active-feed-field .textField .flag-container').hide();
                    jQuery('.active-feed-field').find( ".wpcf7-not-valid-tip" ).text('')
                } else if (value === 'WhatsApp') {
                    jQuery(".userContact").attr("placeholder", `Phone number`).addClass('phoneInput');
                    jQuery('.custom-select .active-feed-field .textField .flag-container').show();
                } else if (value === 'Phone') {
                    jQuery(".userContact").attr("placeholder", `Phone number`).addClass('phoneInput');
                    jQuery('.custom-select .active-feed-field .textField .flag-container').show();
                } else if (value === 'Email') {
                    jQuery('.active-feed-field').find( ".wpcf7-not-valid-tip" ).text('');
                    jQuery(".userContact").attr("placeholder", `Email address`).removeClass('phoneInput');
                    jQuery('.custom-select .active-feed-field .textField .flag-container').hide();
                } else if (value === 'Discord') {
                    jQuery('.active-feed-field').find( ".wpcf7-not-valid-tip" ).text('')
                    jQuery(".userContact").attr("placeholder", `Username`).removeClass('phoneInput');
                    jQuery('.custom-select .active-feed-field .textField .flag-container').hide();
                } else if (value === 'LinkedIn') {
                    jQuery('.active-feed-field').find( ".wpcf7-not-valid-tip" ).text('')
                    jQuery(".userContact").attr("placeholder", `Link to the profile`).removeClass('phoneInput');
                    jQuery('.custom-select .active-feed-field .textField .flag-container').hide();
                }
                jQuery('.custom-select .active-feed-field .label-title').text(value);
                $trigger.removeClass('active').html(`${value}<span class="arrowIcon"></span>`);
                $li.parent().slideUp(300, function () {
                    $select.val(value);
                });
            });
        }
    },

    init: function () {
        for (const method in this.fn) {
            this.fn[method]();
        }
    }
};

jQuery(function() {
    SelectList.init();
});

(function($) {
    $(function() {
        $(".userContact").intlTelInput({
            autoPlaceholder: "off",
            geoIpLookup: function(callback) {
                $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                });
            },
            hiddenInput: "full_number",
            initialCountry: "auto",
            nationalMode: false,
            placeholderNumberType: "MOBILE",
            separateDialCode: true,
        });
    });
})(jQuery);

jQuery('#clearUploadField').on("click", function () {
    jQuery('#fileuploadfield').val('');
    $('.uploadfieldtrick .uploadBtn').prop('disabled', false);
    $('#uploadFile .fileName').text('');
    $('#uploadFile .uploadedFile').removeClass('active');
});

(function($) {
    $(".uploadBtn").click(function() { $('#fileuploadfield').click() });
    // $("#uploadFile").click(function() { $('#fileuploadfield').click() });
        $('#fileuploadfield').change(function () {
            if (document.getElementById('fileuploadfield').value !== "") {
                $('#uploadFile .uploadedFile').addClass('active');
                $('.uploadfieldtrick .uploadBtn').prop('disabled', true);
                const fileName = document.getElementById('fileuploadfield').value;
                $('#uploadFile .fileName').text(fileName.split("\\").pop());
            }
        });
}
)(jQuery);

$('a[href="#back"]').attr('href', 'javascript:;');

jQuery(document).ready(function () {
    jQuery('a[href*="#"]').on("click", function (e) {
        const anchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(anchor.attr('href')).offset().top - 60
        }, 777);
        e.preventDefault();
        return false;
    });
});

Revealator.scroll_padding = '-1500';
Revealator.effects_padding = '-500';

$(document).ready(function(){
    $("#uploadtextfield").on("input", updateText).trigger($.Event("input"));

    function updateText()
    {
        $("#uploadTextDiv").text($(this).val() + "\n");
        $(this).css("width", $("#uploadTextDiv").width()+2);
        $(this).css("height", $("#uploadTextDiv").height());
    }
});

let openLink = (t, e) => {
  let n, o, i;
  for (n = 0, o = document.getElementsByClassName("tab-tech-toggl"); n < o.length; n++) o[n].style.display = "none";
  for (n = 0, i = document.getElementsByClassName("tablink"); n < o.length; n++) i[n].className = i[n].className.replace(" active", "");
  document.getElementById(e).style.display = "grid", t.currentTarget.className += " active"
};

var e, n;
$(".menu-btn").on("click", function() {
  !0 !== $(this).parents(".sidebar").is(".opened-menu") && ($(".sidebar").addClass("opened-menu"), $("#responsive-menu").addClass("opened")), $("#responsive-menu .nav ul li a, a.contacts-link").on("click", function() {
    $(".sidebar").removeClass("opened-menu"), $("#responsive-menu").removeClass("opened")
  })
}), $(".menu-btn-close").on("click", function() {
  $(".sidebar").removeClass("opened-menu"), $("#responsive-menu").removeClass("opened")
}), $(".contacts-link").on("click", function() {
  $(".b-menu, .btn-menu, .big-nav, .fs-menu, body").removeClass("open-nav")
}), $(".b-menu").on("click", function() {
  $(".b-menu, .btn-menu, .big-nav, .fs-menu, body").toggleClass("open-nav")
}), $(".cd-dropdown-content li.ancor a").on("click", function() {
  $(".b-menu, .btn-menu, .big-nav, .fs-menu, body").removeClass("open-nav")
}), $(".big-nav > li > ul, .big-nav > li > ul > li > ul").each(function() {
  jQuery(this).parent().addClass("has-children")
}), jQuery(document).ready(function() {
  jQuery(".big-nav > li > a").hover(function() {
    jQuery(".big-nav > li").removeClass("active"), jQuery(this).closest("li.has-children").addClass("active").children("ul").fadeIn()
  })
}), jQuery(document).ready(function() {
  jQuery(".big-nav > li > ul > li > a").hover(function() {
    jQuery(".big-nav > li > ul > li").removeClass("active"), jQuery(this).closest("li.has-children").addClass("active").children("ul").fadeIn()
  })
}), $("#contacts").length && (e = $("section#contacts").offset().top - 55, n = $("section#contacts").height(), $(document).on("scroll", function() {
  var t = $(document).scrollTop();
  t > e && t < e + n ? $("a.contacts-link").addClass("active") : $("a.contacts-link").removeClass("active")
})), jQuery(document).ready(function(t) {
  jQuery(".cd-dropdown-content > li > ul > li").children("ul").addClass("is-hidden"), jQuery(".cd-dropdown-content > li").children("ul").addClass("cd-secondary-dropdown is-hidden"), t(".cd-dropdown-content > li > ul, .cd-dropdown-content > li > ul > li > ul").each(function() {
    jQuery(this).parent().addClass("has-children")
  }), t(".has-children").children("a").on("click", function(e) {
    e.preventDefault(), t(this).next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("move-out")
  });
  var e = function(e) {
    t(document).width() > 1200 ? (jQuery(document).ready(function() {
      jQuery(".cd-dropdown-content > li > a").hover(function() {
        jQuery(".cd-dropdown-content > li").removeClass("is-active"), jQuery(".cd-dropdown-content > li").children("ul").removeClass("is-active").addClass("is-hidden"), jQuery(this).closest("li.has-children").addClass("is-active").children("ul").fadeIn().removeClass("is-hidden").addClass("is-active")
      })
    }), jQuery(document).ready(function() {
      jQuery(".cd-dropdown-content > li > ul > li > a").hover(function() {
        jQuery(".cd-dropdown-content > li > ul > li").removeClass("is-active"), jQuery(".cd-dropdown-content > li > ul > li").children("ul").removeClass("is-active").addClass("is-hidden"), jQuery(this).closest("li.has-children").addClass("is-active").children("ul").fadeIn().removeClass("is-hidden").addClass("is-active")
      })
    })) : (jQuery(document).ready(function() {
      jQuery(".cd-dropdown-content > li").removeClass("is-active"), jQuery(".cd-dropdown-content > li").children("ul").removeClass("is-active").addClass("is-hidden")
    }), jQuery(document).ready(function() {
      jQuery(".cd-dropdown-content > li > ul > li").removeClass("is-active"), jQuery(".cd-dropdown-content > li > ul > li").children("ul").removeClass("is-active").addClass("is-hidden")
    }))
  };
  window.innerWidth, e(), t(window).on("resize", function() {
    window.innerWidth, e()
  }), t(".go-back").on("click", function() {
    var e = t(this);
    t(this).parent("ul").parent(".has-children").parent("ul"), e.parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("move-out")
  })
})

jQuery(".white_block a.call-form").click(function(t) {
  jQuery(".fullscreen-modal").addClass("active"), jQuery("body").addClass("full-modal"), t.preventDefault()
}), jQuery(".vacancy .call-form").click(function(t) {
  jQuery(".fullscreen-modal").addClass("active"), jQuery("body").addClass("full-modal"), t.preventDefault()
}), jQuery(".banner-closer").click(function(t) {
  jQuery(".banner-main").remove(), t.preventDefault()
}), jQuery(".vacancy .call-contacts").click(function(t) {
  jQuery(".career-contacts-block").toggleClass("active"), t.preventDefault()
}), jQuery(".fullscreen-modal .close").click(function(t) {
  jQuery(".fullscreen-modal").removeClass("active"), jQuery("body").removeClass("full-modal")
}), $(document).ready(function() {
  $('.post-content a[href*="#"], .staticPage_list a[href*="#"], .audit .blocks a[href*="#"]').on("click", function(t) {
    var e = $(this);
    return $("html, body").stop().animate({
      scrollTop: $(e.attr("href")).offset().top - 60
    }, 777), t.preventDefault(), !1
  })
}), $(function() {
  !0 === jQuery("body").hasClass("single") && $(window).on("scroll resize", function() {
    var t = $(window).scrollTop() / ($(document).height() - $(window).height() - $("header").height() - $("footer").height());
    $(".progress-bar").css({
      width: (100 * t | 0) + "%"
    }), $("progress")[0].value = t
  })
}), $(function() {
  var t, e;
  !0 === jQuery("main").hasClass("audit") && (t = jQuery(".blocks").children(".block"), e = jQuery(t).children(".button").children("a.btn"), jQuery(e).click(function(n) {
    jQuery(".careers__form").fadeIn("slow"), jQuery(t).removeClass("active").addClass("disable"), jQuery(e).removeClass("active").text("Select"), jQuery(this).closest(".block").addClass("active").removeClass("disable"), jQuery(this).addClass("active").text("Selected");
    var o = jQuery(this).closest(".block").children("h3").text();
    return jQuery("input.serviceName").val(o), jQuery("div.serviceName span").text(o), jQuery("html, body").animate({
      scrollTop: jQuery("#block_1").offset().top - 100
    }, 1e3), !1
  }))
}), $(".tabs-block").length > 0 && jQuery(".tabs-block ul.nav-tabs li").click(function() {
  var t = jQuery(this).attr("data-tab");
  jQuery(".tabs-block ul.nav-tabs li").removeClass("active"), jQuery(".tabs-block .tabs-cont.active").removeClass("active"), jQuery(this).addClass("active"), jQuery("#" + t).addClass("active")
});
var e = .01 * window.innerHeight;
document.documentElement.style.setProperty("--vh", e + "px")

var n, o, i, a, s = jQuery("body").hasClass("blog"),
    r = jQuery("body").hasClass("single-post");
!0 === s && (n = jQuery(".section__title-block.blog-head").offset().top, jQuery(window).scroll(function() {
  var t = jQuery(window).scrollTop(),
    e = jQuery(".logo-header .mobile-logo");
  t >= n ? (e.addClass("active"), jQuery("a.logo.logo-blog").attr("href", "/blog/")) : (e.removeClass("active"), jQuery("a.logo.logo-blog").attr("href", "/"))
}), jQuery(document).ready(function() {
  var t = jQuery(".logo-header .mobile-logo"),
    e = jQuery(".single-post #header");
  jQuery(this).scrollTop() > 1 ? (t.addClass("active"), e.removeClass("no-scroll"), jQuery("a.logo.logo-blog").attr("href", "/blog/")) : (t.removeClass("active"), e.addClass("no-scroll"), jQuery("a.logo.logo-blog").attr("href", "/"))
})), !0 === r && (o = function(t) {
  a.toggleClass("active", t)
}, jQuery(window).scroll(function() {
  var t = jQuery(".logo-header .mobile-logo"),
    e = jQuery(".single-post #header");
  jQuery(this).scrollTop() > 1 ? (t.addClass("active"), jQuery("a.logo.logo-blog").attr("href", "/blog/"), e.removeClass("no-scroll")) : (t.removeClass("active"), e.addClass("no-scroll"), jQuery("a.logo.logo-blog").attr("href", "/"))
}), jQuery(document).ready(function() {
  var t = jQuery(".logo-header .mobile-logo"),
    e = jQuery(".single-post #header");
  jQuery(this).scrollTop() > 1 ? (t.addClass("active"), e.removeClass("no-scroll"), jQuery("a.logo.logo-blog").attr("href", "/blog/")) : (t.removeClass("active"), e.addClass("no-scroll"), jQuery("a.logo.logo-blog").attr("href", "/"))
}), i = $(window), a = $(".related-service"), i.on("scroll", function() {
  o(i.scrollTop() > 300)
})), $(function() {
  $(document).on("click", "button.subcat_link", function() {
    var t = jQuery(this).text();
    jQuery(".sf-label-checkbox:contains('" + t + "')").trigger("click")
  }), $(document).on("click", "button.tagname_link", function() {
    var t = jQuery(this).text();
    jQuery(".sf-label-checkbox:contains('" + t + "')").trigger("click")
  }), $("#checkAll").click(function() {
    $("input:checkbox").not(this).prop("checked", this.checked)
  })
}), $(".home .post-item > a").text(function(t, e) {
  if (e.length >= 135) {
    var n = (e = e.substring(0, 135)).lastIndexOf(" ");
    e = e.substring(0, n) + "..."
  }
  $(this).text(e)
}), jQuery(".filters-button").click(function(t) {
  jQuery(".blog_sidebar").toggleClass("active")
}), jQuery("button.blog-search").click(function(t) {
  jQuery(".search-block").toggleClass("active")
}), jQuery(document).ready(function() {
  var t = $(".blog_sidebar").find("li.sf-option-active").length;
  jQuery(".counter-filters").text(t)
}), jQuery(".sf-label-checkbox").click(function() {
  setTimeout(function() {
    var t = $(".blog_sidebar").find("li.sf-option-active").length;
    jQuery(".counter-filters").text(t)
  }, 100)
}), jQuery(".spoiler > .head").on("click", function(t) {
  jQuery(this).parent("div.spoiler").children(".cont").stop().slideToggle(300).toggleClass("active"), jQuery(this).toggleClass("active"), t.preventDefault()
}), jQuery(".wpcf7-form-control-wrap").click(function() {
  jQuery(this).children(".wpcf7-not-valid-tip").fadeOut("slow")
})

$("#button-file").click(function() {
  $("input[type='file']").trigger("click")
});

function maxItemHeight() {
  setTimeout(function() {
    let itemsHeight = [];

    let slides = $('.home #clients .cases_home_sliders .swiper-wrapper > .swiper-slide');

    slides.removeAttr('style');

    slides.each(function() {
      $(this)
      itemsHeight.push($(this).height());
    });

    slides.each(function() {
      $(this).height( Math.max(...itemsHeight) )
    });
  }, 1000);
}

maxItemHeight();

$(window).on('resize', function() {
  maxItemHeight();
});