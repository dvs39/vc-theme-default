/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-csstransforms-csstransforms3d-touch-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-cssclassprefix:supports!
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.fontface=function(){var a;return w('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" supports-"+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" supports-js supports-"+t.join(" supports-"):""),e}(this,this.document);
/*
BSD 2-Clause License

Copyright (c) 2016, Benjamin Cordier
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var Interactor = function (config) {
    // Call Initialization on Interactor Call
    this.__init__(config);
};

Interactor.prototype = {

    // Initialization
    __init__: function (config) {

        var interactor = this;
        
        // Argument Assignment          // Type Checks                                                                          // Default Values
        interactor.interactions = typeof (config.interactions) == "boolean" ? config.interactions : true,
        interactor.interactionElements = Array.isArray(config.interactionElements) === true ? config.interactionElements : ['interaction'],
        interactor.interactionEvents = Array.isArray(config.interactionEvents) === true ? config.interactionEvents : ['mouseup', 'touchend'],     
        interactor.endpoint = typeof (config.endpoint) == "string" ? config.endpoint : '/interactions',
        interactor.async = typeof (config.async) == "boolean" ? config.async : true,
        interactor.debug = typeof (config.debug) == "boolean" ? config.debug : true,
        interactor.records = [],
        interactor.session = {},
        interactor.loadTime = new Date();

        // Initialize Session
        interactor.__initializeSession__();
        // Call Event Binding Method
        interactor.__bindEvents__();

        return interactor;
    },

    // Create Events to Track
    __bindEvents__: function () {

        var interactor = this;

        // Set Interaction Capture
        if (interactor.interactions === true) {
            for (var i = 0; i < interactor.interactionEvents.length; i++) {
                var ev = interactor.interactionEvents[i];
                for (var elIndex = 0; elIndex < interactor.interactionElements.length; elIndex++) {
                    var className = interactor.interactionElements[elIndex];
                    var targets = document.getElementsByClassName(className);
                    if (targets) {
                        for (var j = 0; j < targets.length; j++) {
                            var targetElement = targets[j];
                            var interationArg = targetElement.getAttributeNode("interactor-arg");
                            var eventListener =  {
                                className: className,
                                content:  interationArg ? interationArg.value : "",
                                handleEvent : function(e) {
                                    e.stopPropagation();
                                    interactor.__addInteraction__(e, this.className, this.content);
                                }
                            };
                            targets[j].removeEventListener(ev, eventListener);
                            targets[j].addEventListener(ev, eventListener);
                        }
                    }
                }
            }
        }

        // Bind onbeforeunload Event
        window.onbeforeunload = function (e) {
            interactor.__sendInteractions__();
        };

        return interactor;
    },

    // Add Interaction Object Triggered By Events to Records Array
    __addInteraction__: function (e, type, arg) {


        var interactor = this,

            // Interaction Object
            interaction = {
                type: type,
                event: e.type,
                targetTag: e.target.nodeName,
                targetClasses: e.target.className,
                content: arg,//e.target.innerText,
                clientPosition: {
                    x: e.clientX,
                    y: e.clientY
                },
                screenPosition: {
                    x: e.screenX,
                    y: e.screenY
                },
                createdAt: new Date()
            };

        // Insert into Records Array
        interactor.records.push(interaction);

        // Log Interaction if Debugging
        if (interactor.debug) {
            // Close Session & Log to Console
            interactor.__closeSession__();
            console.log("Session:\n", interactor.session);
        }

        return interactor;
    },

    // Generate Session Object & Assign to Session Property
    __initializeSession__: function () {
        var interactor = this;

        // Assign Session Property
        interactor.session = {
            loadTime: interactor.loadTime,
            unloadTime: new Date(),
            language: window.navigator.language,
            platform: window.navigator.platform,
            port: window.location.port,
            clientStart: {
                name: window.navigator.appVersion,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
                outerWidth: window.outerWidth,
                outerHeight: window.outerHeight
            },
            page: {
                location: window.location.pathname,
                href: window.location.href,
                origin: window.location.origin,
                title: document.title
            },
            endpoint: interactor.endpoint
        };

        return interactor;
    },

    // Insert End of Session Values into Session Property
    __closeSession__: function () {

        var interactor = this;

        // Assign Session Properties
        interactor.session.unloadTime = new Date();
        interactor.session.interactions = interactor.records;
        interactor.session.clientEnd = {
            name: window.navigator.appVersion,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            outerWidth: window.outerWidth,
            outerHeight: window.outerHeight
        };

        return interactor;
    },


    // Gather Additional Data and Send Interaction(s) to Server
    __sendInteractions__: function () {

        var interactor = this,
            // Initialize Cross Header Request
            xhr = new XMLHttpRequest();

        // Close Session
        interactor.__closeSession__();

        // Post Session Data Serialized as JSON
        xhr.open('POST', interactor.endpoint, interactor.async);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.send(JSON.stringify(interactor.session));

        return interactor;
    }

};
/*! Ideal Image Slider v1.5.0 */
var IdealImageSlider=function(){"use strict";var a=function(a,b){return a["r"+b]||a["webkitR"+b]||a["mozR"+b]||a["msR"+b]||function(a){setTimeout(a,1e3/60)}}(window,"equestAnimationFrame"),b=function(b,c){function d(){var g=(new Date).getTime(),h=g-e;h>=c?b.call():f.value=a(d)}var e=(new Date).getTime(),f={};return f.value=a(d),f},c=function(a,b){var c=Object.prototype.toString.call(b).slice(8,-1);return void 0!==b&&null!==b&&c===a},d=function(a){return Math.round(a)===a},e=function(a){a=a||{};for(var b=1;b<arguments.length;b++){var d=arguments[b];if(d)for(var f in d)d.hasOwnProperty(f)&&(c("Object",d[f])&&null!==d[f]?e(a[f],d[f]):a[f]=d[f])}return a},f=function(a,b){return b?a.classList?a.classList.contains(b):new RegExp("(^| )"+b+"( |$)","gi").test(a.className):!1},g=function(a,b){b&&(a.classList?a.classList.add(b):a.className+=" "+b)},h=function(a,b){b&&(a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," "))},i=function(a){return Array.prototype.slice.call(a)},j=function(a,b,c){null!==a&&"undefined"!=typeof a&&(a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c)},k=function(a,b){if(!a.style.backgroundImage){var c=new Image;c.setAttribute("src",a.getAttribute("data-src")),c.onload=function(){a.style.backgroundImage="url("+a.getAttribute("data-src")+")",a.setAttribute("data-actual-width",this.naturalWidth),a.setAttribute("data-actual-height",this.naturalHeight),"function"==typeof b&&b(this)}}},l=function(){var a="(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";return window.devicePixelRatio>1?!0:window.matchMedia&&window.matchMedia(a).matches?!0:!1},m=function(a,b,c){a.style.webkitTransitionDuration=a.style.MozTransitionDuration=a.style.msTransitionDuration=a.style.OTransitionDuration=a.style.transitionDuration=c+"ms",a.style.webkitTransform=a.style.MozTransform=a.style.msTransform=a.style.OTransform="translateX("+b+"px)"},n=function(a){a.style.removeProperty("-webkit-transition-duration"),a.style.removeProperty("transition-duration"),a.style.removeProperty("-webkit-transform"),a.style.removeProperty("-ms-transform"),a.style.removeProperty("transform")},o=function(b){var c=b.time,d=+new Date+c,e=function(){var f=+new Date,g=d-f;if(60>g)return void b.run(1);var h=1-g/c;b.run(h),a(e)};e()},p=function(a,b){if("undefined"==typeof b&&(b=!0),!d(a.settings.height)){var c=Math.round(a._attributes.container.offsetHeight),e=c;if(a._attributes.aspectWidth&&a._attributes.aspectHeight)e=a._attributes.aspectHeight/a._attributes.aspectWidth*a._attributes.container.offsetWidth;else{var f=a._attributes.currentSlide.getAttribute("data-actual-width"),g=a._attributes.currentSlide.getAttribute("data-actual-height");f&&g&&(e=g/f*a._attributes.container.offsetWidth)}var h=parseInt(a.settings.maxHeight,10);h&&e>h&&(e=h),e=Math.round(e),e!==c&&(b?o({time:a.settings.transitionDuration,run:function(b){a._attributes.container.style.height=Math.round(b*(e-c)+c)+"px"}}):a._attributes.container.style.height=e+"px")}},q={vars:{start:{},delta:{},isScrolling:void 0,direction:null},start:function(a){if(!f(this._attributes.container,this.settings.classes.animating)){var b=a.touches[0];q.vars.start={x:b.pageX,y:b.pageY,time:+new Date},q.vars.delta={},q.vars.isScrolling=void 0,q.vars.direction=null,this.stop(),this.settings.beforeChange.apply(this),g(this._attributes.container,this.settings.classes.touching)}},move:function(a){if(!f(this._attributes.container,this.settings.classes.animating)&&!(a.touches.length>1||a.scale&&1!==a.scale)){var b=a.touches[0];q.vars.delta={x:b.pageX-q.vars.start.x,y:b.pageY-q.vars.start.y},"undefined"==typeof q.vars.isScrolling&&(q.vars.isScrolling=!!(q.vars.isScrolling||Math.abs(q.vars.delta.x)<Math.abs(q.vars.delta.y))),q.vars.isScrolling||(a.preventDefault(),m(this._attributes.previousSlide,q.vars.delta.x-this._attributes.previousSlide.offsetWidth,0),m(this._attributes.currentSlide,q.vars.delta.x,0),m(this._attributes.nextSlide,q.vars.delta.x+this._attributes.currentSlide.offsetWidth,0))}},end:function(a){if(!f(this._attributes.container,this.settings.classes.animating)){var c=+new Date-q.vars.start.time,d=Number(c)<250&&Math.abs(q.vars.delta.x)>20||Math.abs(q.vars.delta.x)>this._attributes.currentSlide.offsetWidth/2,e=q.vars.delta.x<0?"next":"previous",i=this.settings.transitionDuration?this.settings.transitionDuration/2:0;q.vars.isScrolling||(d?(q.vars.direction=e,"next"==q.vars.direction?(m(this._attributes.currentSlide,-this._attributes.currentSlide.offsetWidth,i),m(this._attributes.nextSlide,0,i)):(m(this._attributes.previousSlide,0,i),m(this._attributes.currentSlide,this._attributes.currentSlide.offsetWidth,i)),b(q.transitionEnd.bind(this),i)):"next"==e?(m(this._attributes.currentSlide,0,i),m(this._attributes.nextSlide,this._attributes.currentSlide.offsetWidth,i)):(m(this._attributes.previousSlide,-this._attributes.previousSlide.offsetWidth,i),m(this._attributes.currentSlide,0,i)),i&&(g(this._attributes.container,this.settings.classes.animating),b(function(){h(this._attributes.container,this.settings.classes.animating)}.bind(this),i)))}},transitionEnd:function(a){if(q.vars.direction){n(this._attributes.previousSlide),n(this._attributes.currentSlide),n(this._attributes.nextSlide),h(this._attributes.container,this.settings.classes.touching),h(this._attributes.previousSlide,this.settings.classes.previousSlide),h(this._attributes.currentSlide,this.settings.classes.currentSlide),h(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","true");var b=this._attributes.slides,c=b.indexOf(this._attributes.currentSlide);"next"==q.vars.direction?(this._attributes.previousSlide=this._attributes.currentSlide,this._attributes.currentSlide=b[c+1],this._attributes.nextSlide=b[c+2],"undefined"==typeof this._attributes.currentSlide&&"undefined"==typeof this._attributes.nextSlide?(this._attributes.currentSlide=b[0],this._attributes.nextSlide=b[1]):"undefined"==typeof this._attributes.nextSlide&&(this._attributes.nextSlide=b[0]),k(this._attributes.nextSlide)):(this._attributes.nextSlide=this._attributes.currentSlide,this._attributes.previousSlide=b[c-2],this._attributes.currentSlide=b[c-1],"undefined"==typeof this._attributes.currentSlide&&"undefined"==typeof this._attributes.previousSlide?(this._attributes.currentSlide=b[b.length-1],this._attributes.previousSlide=b[b.length-2]):"undefined"==typeof this._attributes.previousSlide&&(this._attributes.previousSlide=b[b.length-1]),k(this._attributes.previousSlide)),g(this._attributes.previousSlide,this.settings.classes.previousSlide),g(this._attributes.currentSlide,this.settings.classes.currentSlide),g(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),p(this),this.settings.afterChange.apply(this)}}},r=function(a){this.settings={selector:"",height:"auto",initialHeight:400,maxHeight:null,interval:4e3,transitionDuration:700,effect:"slide",disableNav:!1,keyboardNav:!0,previousNavSelector:"",nextNavSelector:"",classes:{container:"ideal-image-slider",slide:"iis-slide",previousSlide:"iis-previous-slide",currentSlide:"iis-current-slide",nextSlide:"iis-next-slide",previousNav:"iis-previous-nav",nextNav:"iis-next-nav",animating:"iis-is-animating",touchEnabled:"iis-touch-enabled",touching:"iis-is-touching",directionPrevious:"iis-direction-previous",directionNext:"iis-direction-next"},onInit:function(){},onStart:function(){},onStop:function(){},onDestroy:function(){},beforeChange:function(){},afterChange:function(){}},"string"==typeof a?this.settings.selector=a:"object"==typeof a&&e(this.settings,a);var b=document.querySelector(this.settings.selector);if(!b)return null;var c=i(b.children),h=[];b.innerHTML="",Array.prototype.forEach.call(c,function(a,c){if(a instanceof HTMLImageElement||a instanceof HTMLAnchorElement){var d=document.createElement("a"),f="",i="";if(a instanceof HTMLAnchorElement){f=a.getAttribute("href"),i=a.getAttribute("target");var j=a.querySelector("img");if(null===j)return;a=j}"undefined"!=typeof a.dataset?(e(d.dataset,a.dataset),a.dataset.src?d.dataset.src=a.dataset.src:d.dataset.src=a.src,l()&&a.dataset["src-2x"]&&(d.dataset.src=a.dataset["src-2x"])):a.getAttribute("data-src")?d.setAttribute("data-src",a.getAttribute("data-src")):d.setAttribute("data-src",a.getAttribute("src")),f&&d.setAttribute("href",f),i&&d.setAttribute("target",i),a.getAttribute("className")&&g(d,a.getAttribute("className")),a.getAttribute("id")&&d.setAttribute("id",a.getAttribute("id")),a.getAttribute("title")&&d.setAttribute("title",a.getAttribute("title")),a.getAttribute("alt")&&(d.innerHTML=a.getAttribute("alt")),d.setAttribute("role","tabpanel"),d.setAttribute("aria-hidden","true"),d.style.cssText+="-webkit-transition-duration:"+this.settings.transitionDuration+"ms;-moz-transition-duration:"+this.settings.transitionDuration+"ms;-o-transition-duration:"+this.settings.transitionDuration+"ms;transition-duration:"+this.settings.transitionDuration+"ms;",b.appendChild(d),h.push(d)}}.bind(this));var m=h;if(m.length<=1)return b.innerHTML="",Array.prototype.forEach.call(c,function(a,c){b.appendChild(a)}),null;if(!this.settings.disableNav){var n,o;this.settings.previousNavSelector?n=document.querySelector(this.settings.previousNavSelector):(n=document.createElement("a"),b.appendChild(n)),this.settings.nextNavSelector?o=document.querySelector(this.settings.nextNavSelector):(o=document.createElement("a"),b.appendChild(o)),g(n,this.settings.classes.previousNav),g(o,this.settings.classes.nextNav),j(n,"click",function(){return f(this._attributes.container,this.settings.classes.animating)?!1:(this.stop(),void this.previousSlide())}.bind(this)),j(o,"click",function(){return f(this._attributes.container,this.settings.classes.animating)?!1:(this.stop(),void this.nextSlide())}.bind(this)),("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(this.settings.effect="slide",n.style.display="none",o.style.display="none",g(b,this.settings.classes.touchEnabled),j(b,"touchstart",q.start.bind(this),!1),j(b,"touchmove",q.move.bind(this),!1),j(b,"touchend",q.end.bind(this),!1)),this.settings.keyboardNav&&j(document,"keyup",function(a){a=a||window.event;var b="number"==typeof a.which?a.which:a.keyCode;if(37==b){if(f(this._attributes.container,this.settings.classes.animating))return!1;this.stop(),this.previousSlide()}else if(39==b){if(f(this._attributes.container,this.settings.classes.animating))return!1;this.stop(),this.nextSlide()}}.bind(this))}if(this._attributes={container:b,slides:m,previousSlide:"undefined"!=typeof m[m.length-1]?m[m.length-1]:m[0],currentSlide:m[0],nextSlide:"undefined"!=typeof m[1]?m[1]:m[0],timerId:0,origChildren:c,aspectWidth:0,aspectHeight:0},d(this.settings.height))this._attributes.container.style.height=this.settings.height+"px";else{if(d(this.settings.initialHeight)&&(this._attributes.container.style.height=this.settings.initialHeight+"px"),this.settings.height.indexOf(":")>-1){var r=this.settings.height.split(":");2==r.length&&d(parseInt(r[0],10))&&d(parseInt(r[1],10))&&(this._attributes.aspectWidth=parseInt(r[0],10),this._attributes.aspectHeight=parseInt(r[1],10))}j(window,"resize",function(){p(this,!1)}.bind(this))}g(b,this.settings.classes.container),g(b,"iis-effect-"+this.settings.effect),Array.prototype.forEach.call(this._attributes.slides,function(a,b){g(a,this.settings.classes.slide)}.bind(this)),g(this._attributes.previousSlide,this.settings.classes.previousSlide),g(this._attributes.currentSlide,this.settings.classes.currentSlide),g(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),k(this._attributes.currentSlide,function(){this.settings.onInit.apply(this),p(this,!1)}.bind(this)),k(this._attributes.previousSlide),k(this._attributes.nextSlide)};return r.prototype.get=function(a){return this._attributes?this._attributes.hasOwnProperty(a)?this._attributes[a]:void 0:null},r.prototype.set=function(a,b){return this._attributes?this._attributes[a]=b:null},r.prototype.start=function(){this._attributes&&(this._attributes.timerId=setInterval(this.nextSlide.bind(this),this.settings.interval),this.settings.onStart.apply(this),window.onblur=function(){this.stop()}.bind(this))},r.prototype.stop=function(){this._attributes&&(clearInterval(this._attributes.timerId),this._attributes.timerId=0,this.settings.onStop.apply(this))},r.prototype.previousSlide=function(){this.settings.beforeChange.apply(this),h(this._attributes.previousSlide,this.settings.classes.previousSlide),h(this._attributes.currentSlide,this.settings.classes.currentSlide),h(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","true");var a=this._attributes.slides,c=a.indexOf(this._attributes.currentSlide);this._attributes.nextSlide=this._attributes.currentSlide,this._attributes.previousSlide=a[c-2],this._attributes.currentSlide=a[c-1],"undefined"==typeof this._attributes.currentSlide&&"undefined"==typeof this._attributes.previousSlide?(this._attributes.currentSlide=a[a.length-1],this._attributes.previousSlide=a[a.length-2]):"undefined"==typeof this._attributes.previousSlide&&(this._attributes.previousSlide=a[a.length-1]),k(this._attributes.previousSlide),g(this._attributes.previousSlide,this.settings.classes.previousSlide),g(this._attributes.currentSlide,this.settings.classes.currentSlide),g(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),g(this._attributes.container,this.settings.classes.directionPrevious),b(function(){h(this._attributes.container,this.settings.classes.directionPrevious)}.bind(this),this.settings.transitionDuration),this.settings.transitionDuration&&(g(this._attributes.container,this.settings.classes.animating),b(function(){h(this._attributes.container,this.settings.classes.animating)}.bind(this),this.settings.transitionDuration)),p(this),this.settings.afterChange.apply(this)},r.prototype.nextSlide=function(){this.settings.beforeChange.apply(this),h(this._attributes.previousSlide,this.settings.classes.previousSlide),h(this._attributes.currentSlide,this.settings.classes.currentSlide),h(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","true");var a=this._attributes.slides,c=a.indexOf(this._attributes.currentSlide);this._attributes.previousSlide=this._attributes.currentSlide,this._attributes.currentSlide=a[c+1],this._attributes.nextSlide=a[c+2],"undefined"==typeof this._attributes.currentSlide&&"undefined"==typeof this._attributes.nextSlide?(this._attributes.currentSlide=a[0],this._attributes.nextSlide=a[1]):"undefined"==typeof this._attributes.nextSlide&&(this._attributes.nextSlide=a[0]),k(this._attributes.nextSlide),g(this._attributes.previousSlide,this.settings.classes.previousSlide),g(this._attributes.currentSlide,this.settings.classes.currentSlide),g(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),g(this._attributes.container,this.settings.classes.directionNext),b(function(){h(this._attributes.container,this.settings.classes.directionNext)}.bind(this),this.settings.transitionDuration),this.settings.transitionDuration&&(g(this._attributes.container,this.settings.classes.animating),b(function(){h(this._attributes.container,this.settings.classes.animating)}.bind(this),this.settings.transitionDuration)),p(this),this.settings.afterChange.apply(this)},r.prototype.gotoSlide=function(a){this.settings.beforeChange.apply(this),this.stop(),h(this._attributes.previousSlide,this.settings.classes.previousSlide),h(this._attributes.currentSlide,this.settings.classes.currentSlide),h(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","true"),a--;var c=this._attributes.slides,d=c.indexOf(this._attributes.currentSlide);this._attributes.previousSlide=c[a-1],this._attributes.currentSlide=c[a],this._attributes.nextSlide=c[a+1],"undefined"==typeof this._attributes.previousSlide&&(this._attributes.previousSlide=c[c.length-1]),"undefined"==typeof this._attributes.nextSlide&&(this._attributes.nextSlide=c[0]),k(this._attributes.previousSlide),k(this._attributes.currentSlide),k(this._attributes.nextSlide),g(this._attributes.previousSlide,this.settings.classes.previousSlide),g(this._attributes.currentSlide,this.settings.classes.currentSlide),g(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),d>a?(g(this._attributes.container,this.settings.classes.directionPrevious),b(function(){h(this._attributes.container,this.settings.classes.directionPrevious)}.bind(this),this.settings.transitionDuration)):(g(this._attributes.container,this.settings.classes.directionNext),b(function(){h(this._attributes.container,this.settings.classes.directionNext)}.bind(this),this.settings.transitionDuration)),this.settings.transitionDuration&&(g(this._attributes.container,this.settings.classes.animating),b(function(){h(this._attributes.container,this.settings.classes.animating)}.bind(this),this.settings.transitionDuration)),p(this),this.settings.afterChange.apply(this)},r.prototype.destroy=function(){clearInterval(this._attributes.timerId),this._attributes.timerId=0,this._attributes.container.innerHTML="",Array.prototype.forEach.call(this._attributes.origChildren,function(a,b){this._attributes.container.appendChild(a)}.bind(this)),h(this._attributes.container,this.settings.classes.container),h(this._attributes.container,"iis-effect-"+this.settings.effect),this._attributes.container.style.height="",this.settings.onDestroy.apply(this)},{_hasClass:f,_addClass:g,_removeClass:h,Slider:r}}();
/*
 * Ideal Image Slider: Bullet Navigation Extension v1.0.2
 *
 * By Gilbert Pellegrom
 * http://gilbert.pellegrom.me
 *
 * Copyright (C) 2014 Dev7studios
 * https://raw.githubusercontent.com/gilbitron/Ideal-Image-Slider/master/LICENSE
 */

(function(IIS) {
	"use strict";

	var _updateActiveBullet = function(slider, activeIndex) {
		var bullets = slider._attributes.bulletNav.querySelectorAll('a');
		if (!bullets) return;

		Array.prototype.forEach.call(bullets, function(bullet, i) {
			IIS._removeClass(bullet, 'iis-bullet-active');
			bullet.setAttribute('aria-selected', 'false');
			if (i === activeIndex) {
				IIS._addClass(bullet, 'iis-bullet-active');
				bullet.setAttribute('aria-selected', 'true');
			}
		}.bind(this));
	};

	IIS.Slider.prototype.addBulletNav = function() {
		IIS._addClass(this._attributes.container, 'iis-has-bullet-nav');

		// Create bullet nav
		var bulletNav = document.createElement('div');
		IIS._addClass(bulletNav, 'iis-bullet-nav');
		bulletNav.setAttribute('role', 'tablist');

		// Create bullets
		Array.prototype.forEach.call(this._attributes.slides, function(slide, i) {
			var bullet = document.createElement('a');
			bullet.innerHTML = i + 1;
			bullet.setAttribute('role', 'tab');

			bullet.addEventListener('click', function() {
				if (IIS._hasClass(this._attributes.container, this.settings.classes.animating)) return false;
				this.stop();
				this.gotoSlide(i + 1);
			}.bind(this));

			bulletNav.appendChild(bullet);
		}.bind(this));

		this._attributes.bulletNav = bulletNav;
		this._attributes.container.appendChild(bulletNav);
		_updateActiveBullet(this, 0);

		// Hook up to afterChange events
		var origAfterChange = this.settings.afterChange;
		var afterChange = function() {
			var slides = this._attributes.slides,
				index = slides.indexOf(this._attributes.currentSlide);
			_updateActiveBullet(this, index);
			return origAfterChange();
		}.bind(this);
		this.settings.afterChange = afterChange;
	};

	return IIS;

})(IdealImageSlider);
/*
 * Ideal Image Slider: Captions Extension v1.0.1
 *
 * By Gilbert Pellegrom
 * http://gilbert.pellegrom.me
 *
 * Copyright (C) 2014 Dev7studios
 * https://raw.githubusercontent.com/gilbitron/Ideal-Image-Slider/master/LICENSE
 */

(function(IIS) {
	"use strict";

	IIS.Slider.prototype.addCaptions = function() {
		IIS._addClass(this._attributes.container, 'iis-has-captions');

		Array.prototype.forEach.call(this._attributes.slides, function(slide, i) {
			var caption = document.createElement('div');
			IIS._addClass(caption, 'iis-caption');

			var captionContent = '';
			if (slide.getAttribute('title')) {
				captionContent += '<div class="iis-caption-title">' + slide.getAttribute('title') + '</div>';
			}
			if (slide.getAttribute('data-caption')) {
				var dataCaption = slide.getAttribute('data-caption');
				if (dataCaption.substring(0, 1) == '#' || dataCaption.substring(0, 1) == '.') {
					var external = document.querySelector(dataCaption);
					if (external) {
						captionContent += '<div class="iis-caption-content">' + external.innerHTML + '</div>';
					}
				} else {
					captionContent += '<div class="iis-caption-content">' + slide.getAttribute('data-caption') + '</div>';
				}
			} else {
				if (slide.innerHTML) {
					captionContent += '<div class="iis-caption-content">' + slide.innerHTML + '</div>';
				}
			}

			slide.innerHTML = '';
			if (captionContent) {
				caption.innerHTML = captionContent;
				slide.appendChild(caption);
			}
		}.bind(this));
	};

	return IIS;

})(IdealImageSlider);
var storefrontAppDependencies = [
    'ui.bootstrap',
    'ngStorage',
    'pascalprecht.translate',
    'ngSanitize',
]
var storefrontApp = angular.module('storefrontApp', storefrontAppDependencies);

storefrontApp.factory('httpErrorInterceptor', ['$q', '$rootScope', function ($q, $rootScope) {
    var httpErrorInterceptor = {};

    httpErrorInterceptor.responseError = function (rejection) {
        if (rejection.data && rejection.data.message) {
            $rootScope.$broadcast('storefrontError', {
                type: 'error',
                title: [rejection.config.method, rejection.config.url, rejection.status, rejection.statusText, rejection.data.message].join(' '),
                message: rejection.data.stackTrace,
            });
        }
        return $q.reject(rejection);
    };
    httpErrorInterceptor.requestError = function (rejection) {
        if (rejection.data && rejection.data.message) {
            $rootScope.$broadcast('storefrontError', {
                type: 'error',
                title: [rejection.config.method, rejection.config.url, rejection.status, rejection.statusText, rejection.data.message].join(' '),
                message: rejection.data.stackTrace,
            });
        }
        return $q.reject(rejection);
    };

    return httpErrorInterceptor;
}])

storefrontApp.config(['$httpProvider', '$translateProvider', function ($httpProvider, $translateProvider) {
    $httpProvider.interceptors.push('httpErrorInterceptor');

    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    $translateProvider.useUrlLoader(BASE_URL + 'themes/localization.json');
    $translateProvider.preferredLanguage('en');

}]);
var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('bulkOrderController', ['$scope',
    function ($scope) {
        $scope.atLeastOneNotEmpty = function () {
            var bulkOrder = $scope.bulkOrder;
            $scope.skuRowsIsEmpty = true;
            if (angular.isDefined(bulkOrder)) {
                angular.forEach(bulkOrder.skuRows, function (rows) {
                    angular.forEach(rows, function (row) {
                        if (row.length > 0)
                            $scope.skuRowsIsEmpty = false;
                    })
                });
            }
        }

    }]);
var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('cartController', ['$rootScope', '$scope', '$timeout', 'cartService', 'catalogService', function ($rootScope, $scope, $timeout, cartService, catalogService) {
    var timer;

    initialize();

    $scope.setCartForm = function (form) {
        $scope.formCart = form;
    }

    $scope.changeLineItemQuantity = function (lineItemId, quantity) {
        var lineItem = _.find($scope.cart.items, function (i) { return i.id == lineItemId });
        if (!lineItem || quantity < 1 || $scope.cartIsUpdating || $scope.formCart.$invalid) {
            return;
        }
        var initialQuantity = lineItem.quantity;
        lineItem.quantity = quantity;
        $timeout.cancel(timer);
        timer = $timeout(function () {
            $scope.cartIsUpdating = true;
            cartService.changeLineItemQuantity(lineItemId, quantity).then(function (response) {
                getCart();
                $rootScope.$broadcast('cartItemsChanged');
            }, function (response) {
                lineItem.quantity = initialQuantity;
                $scope.cartIsUpdating = false;
            });
        }, 300);
    }

    $scope.changeLineItemPrice = function (lineItemId, newPrice) {
    	var lineItem = _.find($scope.cart.items, function (i) { return i.id == lineItemId });
    	if (!lineItem || $scope.cartIsUpdating) {
    		return;
    	}
    	$scope.cartIsUpdating = true;
        cartService.changeLineItemPrice(lineItemId, newPrice).then(function (response) {
    		getCart();
    		$rootScope.$broadcast('cartItemsChanged');
    	}, function (response) {
    		$scope.cart.items = initialItems;
    		$scope.cartIsUpdating = false;
    	});
    };
    $scope.removeLineItem = function (lineItemId) {
        var lineItem = _.find($scope.cart.items, function (i) { return i.id == lineItemId });
        if (!lineItem || $scope.cartIsUpdating) {
            return;
        }
        $scope.cartIsUpdating = true;
        var initialItems = angular.copy($scope.cart.items);
        $scope.recentCartItemModalVisible = false;
        $scope.cart.items = _.without($scope.cart.items, lineItem);
        cartService.removeLineItem(lineItemId).then(function (response) {
            getCart();
            $rootScope.$broadcast('cartItemsChanged');
        }, function (response) {
            $scope.cart.items = initialItems;
            $scope.cartIsUpdating = false;
        });
    }   

    $scope.submitCart = function () {
        $scope.formCart.$setSubmitted();
        if ($scope.formCart.$invalid) {
            return;
        }
        cartService.updateCartComment($scope.cart.comment).then(function (resp) {
            $scope.outerRedirect($scope.baseUrl + 'cart/checkout');
        });
    }

    $scope.searchProduct = function () {
        $scope.productSearchResult = null;
        if ($scope.productSkuOrName) {
            $timeout.cancel(timer);
            timer = $timeout(function () {
                $scope.productSearchProcessing = true;
                var criteria = {
                    keyword: $scope.productSkuOrName,
                    start: 0,
                    pageSize: 5
                }
                catalogService.search(criteria).then(function (response) {
                    $scope.productSearchProcessing = false;
                    $scope.productSearchResult = response.data.products;
                }, function (response) {
                    $scope.productSearchProcessing = false;
                });
            }, 300);
        }
    }

    $scope.selectSearchedProduct = function (product) {
        $scope.productSearchResult = null;
        $scope.selectedSearchedProduct = product;
        $scope.productSkuOrName = product.name;
    }

    $scope.addProductToCart = function (product, quantity) {
        $scope.cartIsUpdating = true;
        cartService.addLineItem(product.id, quantity).then(function (response) {
            getCart();
            $scope.productSkuOrName = null;
            $scope.selectedSearchedProduct = null;
            $rootScope.$broadcast('cartItemsChanged');
        });
    }

    function initialize() {
        getCart();
    }

    function getCart() {
        $scope.cartIsUpdating = true;
        cartService.getCart().then(function (response) {
            var cart = response.data;
            cart.hasValidationErrors = _.some(cart.validationErrors) || _.some(cart.items, function (item) { return _.some(item.validationErrors) });
            $scope.cart = cart;
            $scope.cartIsUpdating = false;
        }, function (response) {
            $scope.cartIsUpdating = false;
        });
    }
}]);

storefrontApp.controller('cartBarController', ['$scope', 'cartService', function ($scope, cartService) {
    getCartItemsCount();

    $scope.$on('cartItemsChanged', function (event, data) {
        getCartItemsCount();
    });

    function getCartItemsCount() {
        cartService.getCartItemsCount().then(function (response) {
            $scope.cartItemsCount = response.data;
        });
    }
}]);

storefrontApp.controller('recentlyAddedCartItemDialogController', ['$scope', '$window', '$uibModalInstance', 'dialogData', function ($scope, $window, $uibModalInstance, dialogData) {
    $scope.$on('cartItemsChanged', function (event, data) {
        dialogData.updated = true;
    });

    $scope.dialogData = dialogData;

    $scope.close = function () {
        $uibModalInstance.close();
    }

    $scope.redirect = function (url) {
        $window.location = url;
    }
}]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.directive('vcContentPlace', ['$compile', 'marketingService', function ($compile, marketingService) {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            marketingService.getDynamicContent(attrs.id).then(function (response) {
                element.html($compile(response.data)(scope));
            });
        },
        replace: true
    }
}]);

storefrontApp.directive('fallbackSrc', function () {
    return {
        link: function (scope, element, attrs) {
            element.on('error', errorHandler);

            scope.$on('$destroy', function() {
                element.off('error', errorHandler);
            });

            function errorHandler(event) {
                if (element.attr('src') !== attrs.fallbackSrc) {
                    element.attr('src', attrs.fallbackSrc);
                }
                else {
                    element.off(event);
                }
            };
        }
    }
});

var storefrontApp = angular.module('storefrontApp');

storefrontApp.filter('imgurl', function () {
    return function (input, type) {
        if (!type)
            return input;

        var extention = '.' + input.split('.').pop();
        var suffix = "_" + type;
        var result = input.replace(extention, suffix+extention);
        return result;
    };
});
var storefrontApp = angular.module('storefrontApp');


storefrontApp.controller('mainController', ['$scope', '$location', '$window', 'customerService', 'storefrontApp.mainContext',
    function($scope, $location, $window, customerService, mainContext) {

        //Base store url populated in layout and can be used for construction url inside controller
        $scope.baseUrl = {};

        $scope.$watch(function() {
            $scope.currentPath = $location.$$path.replace('/', '');
        });

        $scope.$on('storefrontError', function(event, data) {
            $scope.storefrontNotification = data;
            $scope.storefrontNotification.detailsVisible = false;
        });

        $scope.toggleNotificationDetails = function() {
            $scope.storefrontNotification.detailsVisible = !$scope.storefrontNotification.detailsVisible;
        }

        $scope.closeNotification = function() {
            $scope.storefrontNotification = null;
        }

        //For outside app redirect (To reload the page after changing the URL, use the lower-level API)
        $scope.outerRedirect = function(absUrl) {
            $window.location.href = absUrl;
        };

        //change in the current URL or change the current URL in the browser (for app route)
        $scope.innerRedirect = function(path) {
            $location.path(path);
            $scope.currentPath = $location.$$path.replace('/', '');
        };

        $scope.stringifyAddress = function(address) {
            var stringifiedAddress = address.firstName + ' ' + address.lastName + ', ';
            stringifiedAddress += address.organization ? address.organization + ', ' : '';
            stringifiedAddress += address.countryName + ', ';
            stringifiedAddress += address.regionName ? address.regionName + ', ' : '';
            stringifiedAddress += address.city + ' ';
            stringifiedAddress += address.line1 + ', ';
            stringifiedAddress += address.line2 ? address.line2 : '';
            stringifiedAddress += address.postalCode;
            return stringifiedAddress;
        }

        $scope.getObjectSize = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    size++;
                }
            }
            return size;
        }

        mainContext.getCustomer = $scope.getCustomer = function() {
            customerService.getCurrentCustomer().then(function(response) {
                if (!response.data.addresses) {
                    response.data.addresses = [];
                }
                var addressId = 1;
                _.each(response.data.addresses, function(address) {
                    address.id = addressId;
                    addressId++;
                });
                response.data.isContact = response.data.memberType === 'Contact';
                mainContext.customer = $scope.customer = response.data;
            });
        };

        $scope.getCustomer();
    }])

    .factory('storefrontApp.mainContext', function() {
        return {};
    });

var storefrontApp = angular.module('storefrontApp');
storefrontApp.controller('orderController', ['$scope', '$window', 'orderService', function ($scope, $window, orderService) {
    getOrder($window.orderNumber);

    function getOrder(orderNumber) {
        orderService.getOrder(orderNumber).then(function (response) {
            if (response && response.data) {
                $scope.order = response.data;
            }
        });
    }
}]);
var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('productListController', ['$scope', '$window', 'pricingService', function ($scope, $window, pricingService) {
    $scope.productListPricesLoaded = false;
    $scope.productListPrices = [];

    pricingService.getActualProductPrices($window.productList).then(function (response) {
        var prices = response.data;
        if (prices.length) {
            for (var i = 0; i < prices.length; i++) {
                $scope.productListPrices[prices[i].productId] = prices[i];
            }
        }
        var productListPricesSize = $scope.getObjectSize($scope.productListPrices);
        $scope.productListPricesLoaded = productListPricesSize > 0;
    });
}]);
var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('productController', ['$rootScope', '$scope', '$window', 'dialogService', 'catalogService', 'cartService', 'quoteRequestService', 'customerService', 'listService', '$localStorage',
    function ($rootScope, $scope, $window, dialogService, catalogService, cartService, quoteRequestService, customerService, listService, $localStorage) {
        //TODO: prevent add to cart not selected variation
        // display validator please select property
        // display price range

        var allVariations = [];

        $scope.selectedVariation = {};
        $scope.allVariationPropsMap = {};
        $scope.productPrice = null;
        $scope.productPriceLoaded = false;
        $scope.addToWishlistDisabled = false;
        $scope.availableLists = null;
        $scope.listType = null;

        $scope.addProductToCart = function (product, quantity) {
            var dialogData = toDialogDataModel(product, quantity);
            dialogService.showDialog(dialogData, 'recentlyAddedCartItemDialogController', 'storefront.recently-added-cart-item-dialog.tpl');
            cartService.addLineItem(product.id, quantity).then(function (response) {
                $rootScope.$broadcast('cartItemsChanged');
            });
        };
        $scope.addProductToCartById = function (productId, quantity, event) {
            event.preventDefault();
            catalogService.getProduct([productId]).then(function (response) {
                if (response.data && response.data.length) {
                    var product = response.data[0];
                    $scope.addProductToCart(product, quantity);
                }
            });
        };
        $scope.addProductToWishlist = function (product) {
            var dialogData = toDialogDataModel(product, 1);
            dialogData.listType = $scope.listType;
            dialogService.showDialog(dialogData, 'recentlyAddedListItemDialogController', 'storefront.recently-added-list-item-dialog.tpl');
        };
        $scope.addProductToActualQuoteRequest = function (product, quantity) {
            var dialogData = toDialogDataModel(product, quantity);
            dialogService.showDialog(dialogData, 'recentlyAddedActualQuoteRequestItemDialogController', 'storefront.recently-added-actual-quote-request-item-dialog.tpl');
            quoteRequestService.addProductToQuoteRequest(product.id, quantity).then(function (response) {
                $rootScope.$broadcast('actualQuoteRequestItemsChanged');
            });
        };
        
        $scope.initAvailableLists = function(lists) {
            $scope.listType = lists.default_list_type;
        }

        function toDialogDataModel(product, quantity) {
            return {
                imageUrl: product.primaryImage ? product.primaryImage.url : null,
                listPrice: product.price.listPrice,
                id: product.id,
                listPriceWithTax: product.price.listPriceWithTax,
                name: product.name,
                placedPrice: product.price.actualPrice,
                placedPriceWithTax: product.price.actualPriceWithTax,
                quantity: quantity,
                updated: false
            };
        }

        function initialize() {
            var productIds = _.map($window.products, function (product) { return product.id });
            if (!productIds || !productIds.length) {
                return;
            }
            catalogService.getProduct(productIds).then(function (response) {
                var product = response.data[0];
                //Current product is also a variation (titular)
                allVariations = [product].concat(product.variations || []);
                $scope.allVariationPropsMap = getFlatternDistinctPropertiesMap(allVariations);

                //Auto select initial product as default variation  (its possible because all our products is variations)
                var propertyMap = getVariationPropertyMap(product);
                _.each(_.keys(propertyMap), function (x) {
                    $scope.checkProperty(propertyMap[x][0]);
                });

                $scope.selectedVariation = product;
            });
        };

        function getFlatternDistinctPropertiesMap(variations) {
            var retVal = {};
            _.each(variations, function (variation) {
                var propertyMap = getVariationPropertyMap(variation);
                //merge
                _.each(_.keys(propertyMap), function (x) {
                    retVal[x] = _.uniq(_.union(retVal[x], propertyMap[x]), "value");
                });
            });
            return retVal;
        };

        function getVariationPropertyMap(variation) {
            return _.groupBy(variation.variationProperties, function (x) { return x.displayName });
        }

        function getSelectedPropsMap(variationPropsMap) {
            var retVal = {};
            _.each(_.keys(variationPropsMap), function (x) {
                var property = _.find(variationPropsMap[x], function (y) {
                    return y.selected;
                });
                if (property) {
                    retVal[x] = [property];
                }
            });
            return retVal;
        }

        function comparePropertyMaps(propMap1, propMap2) {
            return _.every(_.keys(propMap1), function (x) {
                var retVal = propMap2.hasOwnProperty(x);
                if (retVal) {
                    retVal = propMap1[x][0].value == propMap2[x][0].value;
                }
                return retVal;
            });
        };

        function findVariationBySelectedProps(variations, selectedPropMap) {
            return _.find(variations, function (x) {
                return comparePropertyMaps(getVariationPropertyMap(x), selectedPropMap);
            });
        }

        //Method called from View when user clicks one property value
        $scope.checkProperty = function (property) {
            //Select appropriate property and unselect previous selection
            _.each($scope.allVariationPropsMap[property.displayName], function (x) {
                x.selected = x != property ? false : !x.selected;
            });

            //try to find the best variation match for selected properties
            $scope.selectedVariation = findVariationBySelectedProps(allVariations, getSelectedPropsMap($scope.allVariationPropsMap));
        };

        initialize();
    }]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('quoteRequestController', ['$rootScope', '$scope', '$window', '$location', 'quoteRequestService', 'cartService',
    function ($rootScope, $scope, $window, $location, quoteRequestService, cartService) {
    initialize();

    $scope.setQuoteRequestForm = function (form) {
        $scope.formQuoteRequest = form;
    }

    $scope.displayForStatuses = function (statuses) {
        return _.contains(statuses, $scope.quoteRequest.status);
    }

    $scope.addTierPrice = function (quoteItem) {
        quoteItem.proposalPrices.push({
            id: quoteItem.proposalPrices.length + 1,
            price: quoteItem.salePrice,
            quantity: 1
        });
    }

    $scope.changeTierPriceQuantity = function (tierPrice, quantity) {
        if (quantity < 1 || quantity.isNaN) {
            return;
        }
        tierPrice.quantity = quantity;
    }

    $scope.removeTierPrice = function (quoteItem, tierPrice) {
        quoteItem.proposalPrices = _.without(quoteItem.proposalPrices, tierPrice);
    }

    $scope.removeProductFromQuoteRequest = function (quoteItem) {
        var initialQuoteItems = angular.copy($scope.quoteRequest.items);
        $scope.quoteRequest.items = _.without($scope.quoteRequest.items, quoteItem);
        quoteRequestService.removeProductFromQuoteRequest($scope.quoteRequest.id, quoteItem.id).then(function (response) {
            getQuoteRequest($scope.quoteRequest.id);
            $rootScope.$broadcast('actualQuoteRequestItemsChanged');
        }, function (response) {
            $scope.quoteRequest.items = initialQuoteItems;
        });
    }

    $scope.setCountry = function (addressType, countryName) {
        var country = _.find($scope.countries, function (c) { return c.name == countryName });
        if (!country) {
            return;
        }
        if (addressType == 'Billing') {
            $scope.billingCountry = country;
            $scope.billingCountryRegions = [];
            $scope.quoteRequest.billingAddress.countryCode = country.code3 || country.code2;
            $scope.quoteRequest.billingAddress.regionId = null;
            $scope.quoteRequest.billingAddress.regionName = null;
        }
        if (addressType == 'Shipping') {
            $scope.shippingCountry = country;
            $scope.shippingCountryRegions = [];
            $scope.quoteRequest.shippingAddress.countryCode = country.code3 || country.code2;
            $scope.quoteRequest.shippingAddress.regionId = null;
            $scope.quoteRequest.shippingAddress.regionName = null;
        }
        if (country.code3) {
            getCountryRegions(addressType, country.code3);
        }
    }

    $scope.setCountryRegion = function (addressType) {
        if (addressType == 'Billing') {
            var countryRegion = _.find($scope.billingCountryRegions, function (r) { return r.name == $scope.quoteRequest.billingAddress.regionName });
            if (!countryRegion) {
                return;
            }
            $scope.quoteRequest.billingAddress.regionId = countryRegion.code;
        }
        if (addressType == 'Shipping') {
            var countryRegion = _.find($scope.shippingCountryRegions, function (r) { return r.name == $scope.quoteRequest.shippingAddress.regionName });
            if (!countryRegion) {
                return;
            }
            $scope.quoteRequest.shippingAddress.regionId = countryRegion.code;
        }
    }

    $scope.selectCustomerAddress = function (addressType) {
        if (addressType === 'Billing') {
            var billingAddress = _.find($scope.customer.addresses, function (a) { return a.id === $scope.quoteRequest.billingAddress.id });
            if (billingAddress) {
                billingAddress.type = 'Billing';
                if (billingAddress.countryCode) {
                    getCountryRegions('Billing', billingAddress.countryCode);
                }
                $scope.quoteRequest.billingAddress = angular.copy(billingAddress);
            }
        }
        if (addressType === 'Shipping') {
            var shippingAddress = _.find($scope.customer.addresses, function (a) { return a.id === $scope.quoteRequest.shippingAddress.id });
            if (shippingAddress) {
                shippingAddress.type = 'Shipping';
                if (shippingAddress.countryCode) {
                    getCountryRegions('Shipping', shippingAddress.countryCode);
                }
                $scope.quoteRequest.shippingAddress = angular.copy(shippingAddress);
            }
        }
    }

    $scope.stringifyAddress = function (address) {
        if (!address) {
            return;
        }
        var stringifiedAddress = address.firstName + ' ' + address.lastName + ', ';
        stringifiedAddress += address.organization ? address.organization + ', ' : '';
        stringifiedAddress += address.countryName + ', ';
        stringifiedAddress += address.regionName ? address.regionName + ', ' : '';
        stringifiedAddress += address.city + ' ';
        stringifiedAddress += address.line1 + ', ';
        stringifiedAddress += address.line2 ? address.line2 : '';
        stringifiedAddress += address.postalCode;
        return stringifiedAddress;
    }

    $scope.submitQuoteRequest = function () {
        $scope.formQuoteRequest.$setSubmitted();
        if ($scope.formQuoteRequest.$invalid) {
            return;
        }
        $scope.quoteRequest.billingAddress.email = $scope.quoteRequest.email;
        if ($scope.quoteRequest.shippingAddress) {
            $scope.quoteRequest.shippingAddress.email = $scope.quoteRequest.email;
        }
        quoteRequestService.submitQuoteRequest($scope.quoteRequest.id, toFormModel($scope.quoteRequest)).then(function (response) {
            if ($scope.customer.isRegisteredUser) {
                $scope.outerRedirect($scope.baseUrl + 'account/quoterequests');
            } else {
                $scope.outerRedirect($scope.baseUrl + 'account/login');
            }
        });
    }

    $scope.rejectQuoteRequest = function () {
        quoteRequestService.rejectQuoteRequest($scope.quoteRequest.id).then(function (response) {
            quoteRequestService.getQuoteRequest($scope.quoteRequest.id).then(function (response) {
                $scope.quoteRequest = response.data;
            });
        });
    }

    $scope.selectTierPrice = function () {
        quoteRequestService.getTotals($scope.quoteRequest.id, toFormModel($scope.quoteRequest)).then(function (response) {
            $scope.quoteRequest.totals = response.data;
        });
    }

    $scope.confirmQuoteRequest = function () {
        quoteRequestService.confirmQuoteRequest($scope.quoteRequest.id, toFormModel($scope.quoteRequest)).then(function (response) {
            $scope.outerRedirect($scope.baseUrl + 'cart/checkout/#/shipping-address');
        });
    }

    $scope.setRequestShippingQuote = function () {
        if (!$scope.quoteRequest.requestShippingQuote) {
            $scope.quoteRequest.shippingAddress = null;
        }
    }

    $scope.setShippingAddressEqualsBilling = function () {
        if ($scope.quoteRequest.shippingAddressEqualsBilling) {
            $scope.quoteRequest.shippingAddress = angular.copy($scope.quoteRequest.billingAddress);
            $scope.quoteRequest.shippingAddress.type = 'Shipping';
            if ($scope.quoteRequest.shippingAddress.countryCode) {
                $scope.shippingCountry = $scope.billingCountry;
                getCountryRegions('Shipping', $scope.quoteRequest.shippingAddress.countryCode);
            }
        }
    }

    $scope.tierPricesUnique = function (quoteItem) {
        var quantities = _.map(quoteItem.proposalPrices, function (p) { return p.quantity });
        return _.uniq(quantities).length == quoteItem.proposalPrices.length;
    }

    function initialize() {
        var quoteRequestNumber = $location.url().replace('/', '') || $window.currentQuoteRequestNumber;
        $scope.billingCountry = null;
        $scope.shippingCountry = null;
        getCountries();
        if (quoteRequestNumber) {
            getQuoteRequest(quoteRequestNumber);
        } else {
            $scope.quoteRequest = { itemsCount: 0 };
        }
    }

    function getQuoteRequest(number) {
        quoteRequestService.getQuoteRequest(number).then(function (response) {
            var quoteRequest = response.data;
            if (!quoteRequest.billingAddress) {
                if ($scope.customer.addresses && $scope.customer.addresses.length) {
                    quoteRequest.billingAddress = angular.copy($scope.customer.addresses[0]);
                    quoteRequest.billingAddress.type = 'Billing';
                    if (quoteRequest.billingAddress.countryCode) {
                        getCountryRegions('Billing', quoteRequest.billingAddress.countryCode);
                    }
                } else {
                    quoteRequest.billingAddress = {
                        firstName: $scope.customer.firstName,
                        lastName: $scope.customer.lastName
                    };
                }
            }
            _.each(quoteRequest.items, function (quoteItem) {
                var i = 1;
                _.each(quoteItem.proposalPrices, function (tierPrice) {
                    tierPrice.id = i;
                    if (quoteItem.selectedTierPrice.quantity == tierPrice.quantity) {
                        quoteItem.selectedTierPrice = tierPrice;
                    }
                    i++;
                });
            });
            quoteRequest.requestShippingQuote = true;
            $scope.quoteRequest = quoteRequest;
        });
    }

    function getCountries() {
        cartService.getCountries().then(function (response) {
            $scope.countries = response.data;
        });
    }

    function getCountryRegions(addressType, countryCode) {
        cartService.getCountryRegions(countryCode).then(function (response) {
            var countryRegions = response.data;
            if (addressType == 'Billing') {
                $scope.billingCountryRegions = countryRegions || [];
            }
            if (addressType == 'Shipping') {
                $scope.shippingCountryRegions = countryRegions || [];
            }
        });
    }

    function toFormModel(quoteRequest) {
        var quoteRequestFormModel = {
            id: quoteRequest.id,
            tag: quoteRequest.tag,
            status: quoteRequest.status,
            comment: quoteRequest.comment,
            billingAddress: quoteRequest.billingAddress,
            shippingAddress: quoteRequest.shippingAddress,
            items: []
        };
        _.each(quoteRequest.items, function (quoteItem) {
            var quoteItemFormModel = {
                id: quoteItem.id,
                comment: quoteItem.comment,
                selectedTierPrice: {
                    price: quoteItem.selectedTierPrice.price.amount,
                    quantity: quoteItem.selectedTierPrice.quantity
                },
                proposalPrices: []
            };
            _.each(quoteItem.proposalPrices, function (tierPrice) {
                quoteItemFormModel.proposalPrices.push({
                    price: tierPrice.price.amount,
                    quantity: tierPrice.quantity
                });
            });
            quoteRequestFormModel.items.push(quoteItemFormModel);
        });

        return quoteRequestFormModel;
    }
}]);

storefrontApp.controller('actualQuoteRequestBarController', ['$scope', 'quoteRequestService', function ($scope, quoteRequestService) {
    getCurrentQuoteRequest();

    $scope.$on('actualQuoteRequestItemsChanged', function (event, data) {
        getCurrentQuoteRequest();
    });

    function getCurrentQuoteRequest() {
        quoteRequestService.getCurrentQuoteRequest().then(function (response) {
            $scope.actualQuoteRequest = response.data;
        });
    }
}]);

storefrontApp.controller('recentlyAddedActualQuoteRequestItemDialogController', ['$scope', '$window', '$uibModalInstance', 'dialogData',
    function ($scope, $window, $uibModalInstance, dialogData) {

    $scope.$on('actualQuoteRequestItemsChanged', function (event, data) {
        dialogData.updated = true;
    });

    $scope.dialogData = dialogData;

    $scope.close = function () {
        $uibModalInstance.close();
    }

    $scope.redirect = function (url) {
        $window.location = url;
    }
}]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('recommendationsController', ['$scope', '$timeout', 'recommendationService', function ($scope, $timeout, recommendationService) {
   
    $scope.isBlockVisible = false;
    $scope.productListRecommendationsLoaded = false;
    $scope.productListRecommendations = [];
   
    $scope.getRecommendations = function (evalContext) {
     
        if (_.isString(evalContext.productIds)) {
            if (evalContext.productIds.match(",")) {
                var values = evalContext.productIds.split(',');
                evalContext.productIds = values;
            }
            else {
                evalContext.productIds = [evalContext.productIds];
            }
        }
        recommendationService.getRecommendedProducts(evalContext).then(function (response) {
            var products = response.data;
            if (products.length) {
                for (var i = 0; i < products.length; i++) {
                    $scope.productListRecommendations.push(products[i]);
                }

                $scope.isBlockVisible = products.length > 0;
            }

            $scope.productListRecommendationsLoaded = true;            
        });
    }
    $scope.startRecordInteraction = function () {
        //Necessary condition for ensure what angularjs rendering process finished
        $timeout(function () {
           window.startRecordInteraction();
        });
    }
}]);
var storefrontApp = angular.module('storefrontApp');
storefrontApp.controller('searchBarController', ['$scope', '$timeout', '$window', 'catalogService', function ($scope, $timeout, $window, catalogService) {
    var timer;

    $scope.query = $window.searchQuery;

    $scope.getSuggestions = function () {
        if (!$scope.query) {
            return;
        }
        $timeout.cancel(timer);
        timer = $timeout(function () {
            $scope.searching = true;
            $scope.categorySuggestions = [];
            $scope.productSuggestions = [];
            var searchCriteria = {
                keyword: $scope.query,
                start: 0,
                pageSize: $window.suggestionsLimit
            }
            catalogService.searchCategories(searchCriteria).then(function (response) {
                var categories = response.data.categories;
                if (categories.length > 5) {
                    searchCriteria.pageSize = $window.suggestionsLimit - 5;
                    $scope.categorySuggestions = _.first(categories, 5);
                } else {
                    searchCriteria.pageSize = $window.suggestionsLimit - categories.length;
                    $scope.categorySuggestions = categories;
                }
                catalogService.search(searchCriteria).then(function (response) {
                    var products = response.data.products;
                    $scope.productSuggestions = products;
                    $scope.searching = false;
                });
            });
        }, 300);
    }
}]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.service('dialogService', ['$uibModal', function ($uibModal) {
    return {
        showDialog: function (dialogData, controller, templateUrl, onClosed) {
            var modalInstance = $uibModal.open({
                controller: controller,
                templateUrl: templateUrl,
                resolve: {
                    dialogData: function () {
                        return dialogData;
                    }
                }
            }).result.then(function (result) {
                if (onClosed) {
                    onClosed(result);
                }
            });
            return modalInstance;
        }
    }
}]);

storefrontApp.service('feedbackService', ['$http', function ($http) {
    return {
        postFeedback: function (data) {
            return $http.post('storefrontapi/feedback', data);
        }
    }
}]);

storefrontApp.service('customerService', ['$http', function ($http) {
    return {
        getCurrentCustomer: function () {
            return $http.get('storefrontapi/account?t=' + new Date().getTime());
        }
    }
}]);

storefrontApp.service('marketingService', ['$http', function ($http) {
    return {
        getDynamicContent: function (placeName) {
            return $http.get('storefrontapi/marketing/dynamiccontent/' + placeName + '?t=' + new Date().getTime());
        },
    }
}]);

storefrontApp.service('pricingService', ['$http', function ($http) {
	return {
		getActualProductPrices: function (products) {
		    return $http.post('storefrontapi/pricing/actualprices', products);
		}
	}
}]);

storefrontApp.service('compareProductService', ['$http', '$localStorage', function($http, $localStorage) {
    return {
        isInProductCompareList: function(productId) {
            var containProduct;
            if (!_.some($localStorage['productCompareListIds'], function(id) { return id === productId })) {
                containProduct = false;
            }
            else
                containProduct = true
            return containProduct;
        },
        addProduct: function(productId) {
            if (!$localStorage['productCompareListIds']) {
                $localStorage['productCompareListIds'] = [];
            }
            $localStorage['productCompareListIds'].push(productId);
            _.uniq($localStorage['productCompareListIds']);
        },
        getProductsIds: function() {
            if (!$localStorage['productCompareListIds']) {
                $localStorage['productCompareListIds'] = [];
                return;
            }
            var ids = [];
            for (i = 0; i < $localStorage['productCompareListIds'].length; i++) {
                ids.push('productIds=' + $localStorage['productCompareListIds'][i]);
            }
            return ids.join("&");
        },
        getProductsCount: function() {
            var count = $localStorage['productCompareListIds'] ? $localStorage['productCompareListIds'].length : 0;
            return count;
        },
        clearComapreList: function() {
            $localStorage['productCompareListIds'] = [];
        },
        removeProduct: function(productId) {
            $localStorage['productCompareListIds'] = _.without($localStorage['productCompareListIds'], productId);
        }
    }
}]);

storefrontApp.service('catalogService', ['$http', function($http, $localStorage) {
    return {
        getProduct: function(productIds) {
            return $http.get('storefrontapi/products?productIds=' + productIds + '&t=' + new Date().getTime());
        },
        getProducts: function(productIds) {
            return $http.get('storefrontapi/products?' + productIds + '&t=' + new Date().getTime());
        },
        search: function (criteria) {
            return $http.post('storefrontapi/catalog/search', criteria);
        },
        searchCategories: function (criteria) {
            return $http.post('storefrontapi/categories/search', criteria);
        }
    }
}]);

storefrontApp.service('cartService', ['$http', function ($http) {
    return {
        getCart: function () {
            return $http.get('storefrontapi/cart?t=' + new Date().getTime());
        },
        getCartItemsCount: function () {
            return $http.get('storefrontapi/cart/itemscount?t=' + new Date().getTime());
        },
        addLineItem: function (productId, quantity) {
            return $http.post('storefrontapi/cart/items', { id: productId, quantity: quantity });
        },
        changeLineItemQuantity: function (lineItemId, quantity) {
            return $http.put('storefrontapi/cart/items', { lineItemId: lineItemId, quantity: quantity });
        },
        removeLineItem: function (lineItemId) {
            return $http.delete('storefrontapi/cart/items?lineItemId=' + lineItemId);
        },
        changeLineItemPrice: function (lineItemId, newPrice) {
        	return $http.put('storefrontapi/cart/items/price', { lineItemId: lineItemId, newPrice: newPrice});
        },
        clearCart: function () {
            return $http.post('storefrontapi/cart/clear');
        },
        getCountries: function () {
            return $http.get('storefrontapi/countries?t=' + new Date().getTime());
        },
        getCountryRegions: function (countryCode) {
        	return $http.get('storefrontapi/countries/' + countryCode + '/regions?t=' + new Date().getTime());
        },
        addCoupon: function (couponCode) {
            return $http.post('storefrontapi/cart/coupons/' + couponCode);
        },
        removeCoupon: function () {
            return $http.delete('storefrontapi/cart/coupons');
        },
        addOrUpdateShipment: function (shipment) {
            return $http.post('storefrontapi/cart/shipments', shipment);
        },
        addOrUpdatePayment: function (payment) {
            return $http.post('storefrontapi/cart/payments', payment );
        },
        getAvailableShippingMethods: function (shipmentId) {
            return $http.get('storefrontapi/cart/shipments/' + shipmentId + '/shippingmethods?t=' + new Date().getTime());
        },
        getAvailablePaymentMethods: function () {
            return $http.get('storefrontapi/cart/paymentmethods?t=' + new Date().getTime());
        },
        addOrUpdatePaymentPlan: function (plan) {
            return $http.post('storefrontapi/cart/paymentPlan', plan);
        },
        removePaymentPlan: function () {
            return $http.delete('storefrontapi/cart/paymentPlan');
        },
        createOrder: function (bankCardInfo) {
            return $http.post('storefrontapi/cart/createorder', bankCardInfo);
        },
        updateCartComment: function (cartComment) {
            return $http.put('storefrontapi/cart/comment', { comment: cartComment });
        }
    }
}]);

storefrontApp.service('listService', ['$http', function ($http) {
    return {
        getWishlist: function (listName, type) {
            return $http.get('storefrontapi/lists/' + listName + '/' + type + '?t=' + new Date().getTime());
        },
        getListsWithProduct: function (productId, listNames, type) {
            return $http.post('storefrontapi/lists/getlistswithproduct', { productId: productId, listNames: listNames, type: type });
        },
        addLineItem: function (productId, listName, type) {
            return $http.post('storefrontapi/lists/items', { productId: productId, listName: listName, type: type });
        },
        removeLineItem: function (lineItemId, listName, type) {
            return $http.delete('storefrontapi/lists/' + listName + '/' + type + '/items/' + lineItemId);
        },
        searchLists: function (searchCriteria) {
            return $http.post('storefrontapi/lists/search', searchCriteria);
        },
        createList: function(listName, type) {
            return $http.post('storefrontapi/lists/' + listName + '/' + type + '/create');
        },
        deleteListsByIds: function(listIds) {
            return $http.delete('storefrontapi/lists/deletelistsbyids?listIds=' + listIds.join('&listIds='));
        },
        mergeWithCurrentCart: function(listName, type) {
            return $http.post('storefrontapi/lists/' + listName + '/' + type + '/mergewithcurrentcart');
        }
    }
}]);

storefrontApp.service('quoteRequestService', ['$http', function ($http) {
    return {
        getCurrentQuoteRequest: function () {
            return $http.get('storefrontapi/quoterequest/current?t=' + new Date().getTime());
        },
        getQuoteRequest: function (number) {
            return $http.get('storefrontapi/quoterequests/' + number + '?t=' + new Date().getTime());
        },
        getQuoteRequestItemsCount: function (number) {
            return $http.get('storefrontapi/quoterequests/' + number + '/itemscount?t=' + new Date().getTime());
        },
        addProductToQuoteRequest: function (productId, quantity) {
            return $http.post('storefrontapi/quoterequests/current/items', { productId: productId, quantity: quantity });
        },
        removeProductFromQuoteRequest: function (quoteRequestNumber, quoteItemId) {
            return $http.delete('storefrontapi/quoterequests/' + quoteRequestNumber + '/items/' + quoteItemId);
        },
        submitQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/submit', quoteRequest);
        },
        rejectQuoteRequest: function (quoteRequestNumber) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/reject');
        },
        updateQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.put('storefrontapi/quoterequests/' + quoteRequestNumber + '/update', quoteRequest);
        },
        getTotals: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/totals', quoteRequest);
        },
        confirmQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/confirm', quoteRequest);
        }
    }
}]);

storefrontApp.service('recommendationService', ['$http', function ($http) {
    return {
        getRecommendedProducts: function (requestData) {
            return $http.post('storefrontapi/recommendations', requestData );
        }
    }
}]);

storefrontApp.service('orderService', ['$http', function ($http) {
    return {
        getOrder: function (orderNumber) {
            return $http.get('storefrontapi/orders/' + orderNumber + '?t=' + new Date().getTime());
        }
    }
}]);

//  ['$resource', function ($resource) {
//     return $resource('api/customerReviews', {}, {
//         search: { method: 'POST', url: 'api/customerReviews/search' },
//         update: { method: 'POST' }
//     });
// }]);
storefrontApp.service('customerReviewsApi', ['$http', function($http){
    return {
        search: function(productId) {
            return $http.post('storefront/customerReviews/search', { productIds: [productId]});
        }
    }
}]);

angular.module('storefrontApp')
    .component('addToCompareButton', {
        templateUrl: 'themes/assets/js/products-compare/add-to-compare-button.tpl.html',
        bindings: {
            productId: '<',
            buttonType: '<',
            customClass: '<',
            buttonWidth: '<'
        },
        controller: ['$rootScope', 'catalogService', 'dialogService', 'compareProductService', function($rootScope, catalogService, dialogService, compareProductService) {
            var $ctrl = this;

            $ctrl.showButtonName = true;
            if ($ctrl.buttonType == 'small') {
                $ctrl.showButtonName = false;
            }

            $ctrl.$onInit = function () {
                $ctrl.containProduct = compareProductService.isInProductCompareList($ctrl.productId);
            }

            $ctrl.addProductToCompareList = function (event) {
                event.preventDefault();
                catalogService.getProduct($ctrl.productId).then(function(response) {
                    var product = response.data[0];
                    var productQuantity = compareProductService.getProductsCount();
                    if (productQuantity == 4) {
                        dialogService.showDialog({ capacityExceeded: true }, 'productCompareListDialogController', 'storefront.product-compare-list-dialog.tpl');
                        return;
                    }
                    if (!$ctrl.containProduct && productQuantity < 4) {
                        compareProductService.addProduct($ctrl.productId);
                        dialogService.showDialog(product, 'productCompareListDialogController', 'storefront.product-compare-list-dialog.tpl');
                        $rootScope.$broadcast('productCompareListChanged');
                    }
                    else {
                        var existingProduct = product;
                        dialogService.showDialog(existingProduct, 'productCompareListDialogController', 'storefront.product-compare-list-dialog.tpl');
                        return;
                    }
                    $ctrl.containProduct = true;
                })
            };
        }]
    })

angular.module('storefrontApp')
    .component('productCompareListBar', {
        templateUrl: "product-compare-bar.tpl.html",
        controller: ['compareProductService', '$scope',
            function(compareProductService, $scope) {
                var $ctrl = this;
                $ctrl.$onInit = function() {
                    $ctrl.itemsCount = compareProductService.getProductsCount();
                }
                $scope.$on('productCompareListChanged', function(event, data) {
                    $ctrl.itemsCount = compareProductService.getProductsCount();
                });
            }]
    });

var storefrontApp = angular.module('storefrontApp');
storefrontApp.controller('productCompareListController', ['$rootScope', '$scope', 'catalogService', 'compareProductService',
    function($rootScope, $scope, catalogService, compareProductService) {

        $scope.properties = [];
        $scope.products = [];

        function initialize() {
            $scope.loaded = false;
            var productsIds = compareProductService.getProductsIds();
            if (_.isEmpty(productsIds)) {
                $scope.loaded = true;
                return;
            }
            catalogService.getProducts(productsIds).then(function(response) {
                if (_.indexOf(productsIds, '&') != -1) {
                    $scope.products = response.data;
                    _.each($scope.products, function(product) {
                        modifyProperty(product);
                    })
                }
                else {
                    var product = response.data[0];
                    modifyProperty(product);
                    $scope.products.push(product);
                }
                $scope.getProductProperties();
                $scope.loaded = true;
            })
        };

        $scope.getProductProperties = function () {
            if (_.isEmpty($scope.products))
                return [];
            var grouped = {};
            var properties = _.flatten(_.map($scope.products, function(product) { return product.properties; }));
            var propertyDisplayNames = _.uniq(_.map(properties, function(property) { return property.displayName; }));
            _.each(propertyDisplayNames, function(displayName) {
                grouped[displayName] = [];
                var props = _.where(properties, { displayName: displayName });
                _.each($scope.products, function(product) {
                    var productProperty = _.find(props, function(prop) { return prop.productId === product.id });
                    if (productProperty) {
                        grouped[displayName].push(productProperty);
                    } else {
                        grouped[displayName].push({ valueType: 'ShortText', value: '-' });
                    }
                });
            });
            $scope.properties = grouped;
        };

        function modifyProperty(product) {
            _.each(product.properties, function(property) {
                property.productId = product.id;
                if (property.valueType.toLowerCase() === 'number') {
                    property.value = formatNumber(property.value);
                }
            })
            return product;
        }

        $scope.hasValues = function(properties, onlyDifferences) {
            var uniqueValues = _.uniq(_.map(properties, function (p) { return p.value }));
            if (onlyDifferences && properties.length > 1 && uniqueValues.length == 1) {
                return false;
            }
            return true;
        };

        $scope.clearCompareList = function() {
            compareProductService.clearComapreList();
            $scope.products = [];
            $rootScope.$broadcast('productCompareListChanged');
            $scope.properties = [];
        };

        $scope.removeProduct = function (product) {
            compareProductService.removeProduct(product.id)
            $scope.products = _.without($scope.products, product);
            $rootScope.$broadcast('productCompareListChanged');
            $scope.getProductProperties();
        };

        function formatNumber(number) {
            var float = parseFloat(number);
            return !isNaN(float) ? float : number;
        };
        initialize();
    }
])

.controller('productCompareListDialogController', ['$scope', '$window', 'dialogData', '$uibModalInstance',
    function ($scope, $window, dialogData, $uibModalInstance) {
        $scope.dialogData = dialogData;

        $scope.close = function() {
            $uibModalInstance.close();
        };

        $scope.redirect = function(url) {
            $window.location = url;
        };
    }
]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('recentlyAddedListItemDialogController', ['$scope', '$window', '$uibModalInstance', 'dialogData', 'listService', '$translate', function ($scope, $window, $uibModalInstance, dialogData, listService, $translate) {
    $scope.availableLists = [];
    $scope.selectedList = {};
    $scope.dialogData = dialogData;
    $scope.inProgress = false;
    $scope.itemAdded = false;
    $scope.type = dialogData.listType;

    $scope.addProductToList = function () {
        $scope.inProgress = true;
        listService.addLineItem(dialogData.id, $scope.selectedList.name, $scope.selectedList.type).then(function (response) {
            if (response.data) {
                $scope.inProgress = false;
                $scope.itemAdded = true;
            }
        });
    };
    $scope.selectList = function (list) {
        $scope.selectedList = list;
    };

    $scope.close = function () {
        $uibModalInstance.close();
    };

    $scope.redirect = function (url) {
        $window.location = url;
    };

    $scope.initialize = function () {
        listService.searchLists({
            pageSize: 10000,
            type: $scope.type
        }).then(function (response) {
            $scope.lists = response.data.results;

            _.each($scope.lists, function(list) {
                var foundItem = _.find(list.items, function(item) {
                        return item.productId === dialogData.id;
                });

                if (foundItem) {
                    list.contains = true;
                }
            });
        });
    };

    $scope.initialize();
}]);
//# sourceMappingURL=scripts.js.map
