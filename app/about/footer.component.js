System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SOCIAL, FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SOCIAL = [
                { "url": "http://www.github.com/s37syed", "name": "GitHub", "img": "./images/github.png" },
                { "url": "https://www.hackerrank.com/s37syed", "name": "HackerRank", "img": "./images/hackerrank.png" },
                { "url": "http://www.linkedin.com/in/s37syed", "name": "LinkedIn", "img": "./images/linkedin.png" },
                { "url": "http://www.stackoverflow.com/users/2951014/s37syed", "name": "StackOverflow", "img": "./images/stacko.png" },
                { "url": "http://www.twitch.tv/shahdeys/", "name": "Twitch", "img": "./images/twitch.png" },
                { "url": "http://uhunt.felix-halim.net/id/326591", "name": "UVa uHunt", "img": "./images/uva.png" },
            ];
            FooterComponent = (function () {
                function FooterComponent() {
                    this.social = SOCIAL;
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'cust-footer',
                        templateUrl: 'app/about/footer.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            })();
            exports_1("FooterComponent", FooterComponent);
        }
    }
});
//# sourceMappingURL=footer.component.js.map