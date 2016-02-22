System.register(['angular2/core', 'angular2/router', './list/projectList/projectList.component', './list/chatserver/chatserver.component', './list/java-poker/java-poker.component', './list/joypad/joypad.component', './list/mappy-stars/mappy-stars.component', './list/reddit-clone/reddit-clone.component', './list/space-invaders/space-invaders.component', './list/torcom/torcom.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, projectList_component_1, chatserver_component_1, java_poker_component_1, joypad_component_1, mappy_stars_component_1, reddit_clone_component_1, space_invaders_component_1, torcom_component_1;
    var ProjectsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (projectList_component_1_1) {
                projectList_component_1 = projectList_component_1_1;
            },
            function (chatserver_component_1_1) {
                chatserver_component_1 = chatserver_component_1_1;
            },
            function (java_poker_component_1_1) {
                java_poker_component_1 = java_poker_component_1_1;
            },
            function (joypad_component_1_1) {
                joypad_component_1 = joypad_component_1_1;
            },
            function (mappy_stars_component_1_1) {
                mappy_stars_component_1 = mappy_stars_component_1_1;
            },
            function (reddit_clone_component_1_1) {
                reddit_clone_component_1 = reddit_clone_component_1_1;
            },
            function (space_invaders_component_1_1) {
                space_invaders_component_1 = space_invaders_component_1_1;
            },
            function (torcom_component_1_1) {
                torcom_component_1 = torcom_component_1_1;
            }],
        execute: function() {
            ProjectsComponent = (function () {
                function ProjectsComponent() {
                }
                ProjectsComponent = __decorate([
                    core_1.Component({
                        selector: 'projects',
                        directives: [router_1.ROUTER_DIRECTIVES, projectList_component_1.ProjectListComponent, chatserver_component_1.ChatserverComponent, java_poker_component_1.JavapokerComponent, joypad_component_1.JoypadComponent, mappy_stars_component_1.MappystarsComponent, reddit_clone_component_1.RedditComponent, space_invaders_component_1.SpaceComponent, torcom_component_1.TorcomComponent],
                        templateUrl: 'app/projects/projects.component.html'
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'ProjectList',
                            component: projectList_component_1.ProjectListComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/chatserver',
                            name: 'Chatserver',
                            component: chatserver_component_1.ChatserverComponent
                        },
                        {
                            path: '/java-poker',
                            name: 'Poker',
                            component: java_poker_component_1.JavapokerComponent
                        },
                        {
                            path: '/joy-pad',
                            name: 'Joy',
                            component: joypad_component_1.JoypadComponent
                        },
                        {
                            path: '/mappy-stars',
                            name: 'Mappy',
                            component: mappy_stars_component_1.MappystarsComponent
                        },
                        {
                            path: '/reddit-clone',
                            name: 'Reddit',
                            component: reddit_clone_component_1.RedditComponent
                        },
                        {
                            path: '/space-invaders',
                            name: 'Space',
                            component: space_invaders_component_1.SpaceComponent
                        },
                        {
                            path: '/torcom',
                            name: 'Torcom',
                            component: torcom_component_1.TorcomComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ProjectsComponent);
                return ProjectsComponent;
            })();
            exports_1("ProjectsComponent", ProjectsComponent);
        }
    }
});
//# sourceMappingURL=projects.component.js.map