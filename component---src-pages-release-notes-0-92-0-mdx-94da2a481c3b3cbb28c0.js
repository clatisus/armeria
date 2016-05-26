"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[5915],{6696:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n,r=a(63366),i=(a(67294),a(64983)),s=a(20370),l=["components"],o={},p=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={_frontmatter:o},h=s.Z;function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(h,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"date"},"23rd September 2019"),(0,i.kt)("h2",{id:"new-features",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can now easily get the request URI using ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestHeaders.uri()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpRequest.uri()"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2092"},"#2092"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RequestHeaders headers = RequestHeaders.of(HttpMethod.GET, "/foo",\n                                           HttpHeaderNames.SCHEME, "https",\n                                           HttpHeaderNames.AUTHORITY, "example.com"));\nassert headers.uri().equals(URI.create("https://example.com/foo"));\nassert HttpRequest.of(header).uri() == headers.uri();\n'))),(0,i.kt)("li",{parentName:"ul"},"You can now decorate the ",(0,i.kt)("inlineCode",{parentName:"li"},"Runnable")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Thread")," created using ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadFactoryBuilder"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2047"},"#2047")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2067"},"#2067"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ThreadFactories.builder(...)\n               .eventLoop(true)\n               .daemon(true)\n               .priority(...)\n               .taskFunction(task -> {\n                   // Specify your logic here so it's executed before the Runnable.\n                   task.run();\n                   // Specify your logic here so it's executed after the Runnable.\n               })\n               .build();\n"))),(0,i.kt)("li",{parentName:"ul"},"You can now configure ",(0,i.kt)("inlineCode",{parentName:"li"},"Server")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"Consumer<ServerBuilder>")," as well as ",(0,i.kt)("inlineCode",{parentName:"li"},"ArmeriaServerConfigurator")," when integrating with Spring Boot. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2070"},"#2070"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic Consumer<ServerBuilder> customizer() {\n    return sb -> sb.port(...)\n                   ...\n                   .service(...);\n}\n"))),(0,i.kt)("li",{parentName:"ul"},"You can now set example requests using ",(0,i.kt)("inlineCode",{parentName:"li"},"AnnotatedServiceRegistrationBean"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1855"},"#1855")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2026"},"#2026"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic AnnotatedServiceRegistrationBean okService() {\n    return new AnnotatedServiceRegistrationBean()\n            .setServiceName("myAnnotatedService")\n            .setPathPrefix("/my_service")\n            .setService(new MyAnnotatedService())\n            .setExampleRequests(Lists.of(\n                    AnnotatedExampleRequest.of("myMethod", "{\\"foo\\":\\"bar\\"}")));\n}\n'))),(0,i.kt)("li",{parentName:"ul"},"You can be aware of whether the response content is empty from an HTTP status code. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2058"},"#2058"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"HttpStatus status = ...\nif (!status.isContentAlwaysEmpty()) {\n    // We may have a body!\n}\n"))),(0,i.kt)("li",{parentName:"ul"},"You can use ",(0,i.kt)("inlineCode",{parentName:"li"},"SettableHealthIndicator")," for health check responses when using Spring boot autoconfigure. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2088"},"#2088"))),(0,i.kt)("h2",{id:"improvements",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#improvements","aria-label":"improvements permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You will see the doc service automatically scrolls down to the debug form if the URL contains a request. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1682"},"#1682")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2045"},"#2045")),(0,i.kt)("li",{parentName:"ul"},"The performance for parsing a struct context in Thrift is improved, thanks to the ",(0,i.kt)("a",{parentName:"li",href:"https://openjdk.java.net/jeps/259"},"Stack-Walking API")," in Java 9. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1686"},"#1686")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2055"},"#2055")),(0,i.kt)("li",{parentName:"ul"},"You will see the int values of Enum members if they have in doc service. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1966"},"#1966")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2015"},"#2015")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RequestContext")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestLog")," is used for trace parsing and sampling. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2038"},"#2038"))),(0,i.kt)("h2",{id:"bug-fixes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can now get the gRPC web trailers in the client. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2030"},"#2030")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2076"},"#2076")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://www.baeldung.com/spring-boot-actuators"},"actuator")," now responds with the correct Spring boot content type. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2061"},"#2061")),(0,i.kt)("li",{parentName:"ul"},"The blocking stub in gRPC now can read messages. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2065"},"#2065")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2066"},"#2066")),(0,i.kt)("li",{parentName:"ul"},"The listeners for ",(0,i.kt)("inlineCode",{parentName:"li"},"EndpointGroup")," are notified after the first health check even when all endpoints are unhealthy. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2074"},"#2074")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2075"},"#2075")),(0,i.kt)("li",{parentName:"ul"},"The subscriber who subscribes to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Response")," from a ",(0,i.kt)("inlineCode",{parentName:"li"},"WebClient")," gets notified when it's complete. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2080"},"#2080")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2087"},"#2087")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IllegalStateException")," that indicates the log should have at least one child is no longer raised when retrying. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2082"},"#2082")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2083"},"#2083")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultEventLoopScheduler")," respects ",(0,i.kt)("inlineCode",{parentName:"li"},"maxNumEventLoopsPerHttpHttp1Endpoint")," set from ",(0,i.kt)("inlineCode",{parentName:"li"},"ClientFactoryBuilder"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2086"},"#2086"))),(0,i.kt)("h2",{id:"deprecation",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#deprecation","aria-label":"deprecation permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Deprecation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"EventLoopThreadFactory")," has been deprecated in favor of ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadFactories"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2067"},"#2067"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ThreadFactory factory = ThreadFactories.builder("myThread")\n                                       .eventLoop(true)\n                                       .build();\n')))),(0,i.kt)("h2",{id:"breaking-changes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specifying an ",(0,i.kt)("inlineCode",{parentName:"p"},":authority")," header in a request has no effect anymore. The current ",(0,i.kt)("inlineCode",{parentName:"p"},"Endpoint")," always determines the authority. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2092"},"#2092")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// This does NOT work anymore.\nfinal HttpClient client = HttpClient.of("https://127.0.0.1:8080/");\nclient.execute(RequestHeaders.of(HttpMethod.GET, "/",\n                                 HttpHeaderNames.AUTHORITY, "foo.com"));\n// This works.\nfinal HttpClient client =\n        HttpClient.of(SessionProtocol.HTTPS,\n                      Endpoint.of("foo.com", 8080).withIpAddr("127.0.0.1"));\nclient.get("/");\n')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Instead, you can now use ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientOption.HTTP_HEADERS")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"{Client,Service}RequestContext.additional{Request,Response}{Headers,Trailers}()")," to override the existing headers, including ",(0,i.kt)("inlineCode",{parentName:"p"},":authority"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2092"},"#2092")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// This works.\nfinal HttpHeaders customHeaders =\n        HttpHeaders.of(HttpHeaderNames.AUTHORITY, "foo.com");\nfinal HttpClient client =\n        HttpClient.of("http://127.0.0.1:8080/",\n                      ClientOption.HTTP_HEADERS.newValue(customHeaders));\nclient.get("/");\n\n// This also works.\nfinal HttpClient client = HttpClient.of("http://127.0.0.1:8080/");\ntry (SafeCloseable ignored = Clients.withHttpHeader(\n             HttpHeaderNames.AUTHORITY, "foo.com")) {\n    client.get("/");\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ExceptionHandlerFunction.handleExeption()")," accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceRequestContext")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContext"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2060"},"#2060")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You don't have to downcast anymore. :)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GrpcServiceRegistrationBean.ExampleRequest")," has been removed. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"GrpcExampleRequest"),"."))),(0,i.kt)("h2",{id:"dependencies",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Micrometer 1.2.0 -> 1.2.1"),(0,i.kt)("li",{parentName:"ul"},"Netty 4.1.39.Final -> 4.1.41.Final"),(0,i.kt)("li",{parentName:"ul"},"Tomcat 9.0.24 -> 9.0.26",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tomcat8 8.5.43 -> 8.5.45")))),(0,i.kt)("h2",{id:"thank-you",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),(0,i.kt)(p,{usernames:["andrewoma","anirudhr95","anuraaga","codefromthecrypt","eugene70","heowc","hirakida","ikhoon","imasahiro","jyblue","kojilin","minwoox","moonchanyong","SooJungDev","taejs","trustin","Waynefn"],mdxType:"ThankYou"}))}c.isMDXComponent=!0},20370:function(e,t,a){a(88025);var n=a(1923),r=a(25444),i=a(67294),s=a(55746),l=a(8284),o=a(96759),p=a(46731),m=a(9396),h=n.Z.Title,c=Object.keys(l)[0],u=d(c);function d(e){return e.substring(e.lastIndexOf("/")+1)}t.Z=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(l).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var k=(0,m.Z)(e.location),N=e.version||d(k);return N.match(/^[0-9]/)||(N=void 0),i.createElement(p.Z,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:N?N+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),N&&N!==u?i.createElement(o.Ch,null,"You're seeing the release note of an old version. Check out"," ",i.createElement(r.Link,{to:c},"the latest release note"),"."):"",N?i.createElement(h,{id:"release-notes",level:1},i.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),N," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-92-0-mdx-94da2a481c3b3cbb28c0.js.map