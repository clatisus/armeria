"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[9446],{80155:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return u}});var r,i=t(63366),n=(t(67294),t(64983)),o=t(20370),l=["components"],p={},s=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),c={_frontmatter:p},m=o.Z;function u(e){var a=e.components,t=(0,i.Z)(e,l);return(0,n.kt)(m,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",{className:"date"},"30th November 2020"),(0,n.kt)("h2",{id:"-new-features",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now use ",(0,n.kt)("a",{parentName:"p",href:"https://unixism.net/loti/what_is_io_uring.html"},"io_uring")," for efficient I/O\nprocessing in Linux. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3182"},"#3182")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Specify the ",(0,n.kt)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.transportType=io_uring")," JVM option to enable it."),(0,n.kt)("li",{parentName:"ul"},"Netty's ",(0,n.kt)("inlineCode",{parentName:"li"},"io_uring")," transport is currently experimental, so you should be careful using the feature."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The metrics of requests to a ",(0,n.kt)("a",{parentName:"p",href:"type://TransientService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/TransientService.html"},"type://TransientService")," are not collected anymore by default. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3061"},"#3061")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3081"},"#3081")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Access logs and service logs are not recorded as well."),(0,n.kt)("li",{parentName:"ul"},"You should use ",(0,n.kt)("a",{parentName:"li",href:"type://TransientServiceOption:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/TransientServiceOption.html"},"type://TransientServiceOption")," to enable them.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"HealthCheckService.builder()\n                  .transientServiceOptions(TransientServiceOption.WITH_METRIC_COLLECTION,\n                                           TransientServiceOption.WITH_SERVICE_LOGGING,\n                                           TransientServiceOption.WITH_ACCESS_LOGGING)\n                  .build();\n"))),(0,n.kt)("li",{parentName:"ul"},"Currently, ",(0,n.kt)("a",{parentName:"li",href:"type://HealthCheckService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/healthcheck/HealthCheckService.html"},"type://HealthCheckService")," and ",(0,n.kt)("a",{parentName:"li",href:"type://PrometheusExpositionService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/metric/PrometheusExpositionService.html"},"type://PrometheusExpositionService")," are\n",(0,n.kt)("a",{parentName:"li",href:"typeplural://TransientService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/TransientService.html"},"typeplural://TransientService"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now use Protobuf's ",(0,n.kt)("inlineCode",{parentName:"p"},"Message")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalapb/ScalaPB"},"ScalaPB's"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"GeneratedMessage")," as a request/response object in an annotated service. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3088"},"#3088")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3124"},"#3124")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3192"},"#3192")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-protobuf"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-scalapb_2.12")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-scalapb_2.13")," dependencies."),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"/docs/advanced-scalapb#supporting-scalapb-in-annotated-services"},"Supporting ScalaPB in annotated services"),"\nfor more information."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now use Scala ",(0,n.kt)("inlineCode",{parentName:"p"},"Future")," in an annotated service. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3189"},"#3189")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'@Get("/items/{id}")\ndef items(@Param id: Int)(implicit ec: ExecutionContext): Future[String] = {\n  Future {\n    // Perform asynchronous task using Armeria\'s event loop.\n    ...\n  }\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now use ",(0,n.kt)("a",{parentName:"p",href:"type://HttpDeframer"},"type://HttpDeframer")," to conveniently decode a stream of ",(0,n.kt)("a",{parentName:"p",href:"typeplural://HttpObject:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpObject.html"},"typeplural://HttpObject"),"\nto N objects. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2981"},"#2981")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"HttpDeframerHandler<String> decoder = ...\nHttpDeframer<String> deframer = HttpDeframer.of(decoder, ByteBufAllocator.DEFAULT);\nHttpRequest request = ...;\nrequest.subscribe(deframer);\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"type://HttpDeframer"},"type://HttpDeframer")," for more information."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now apply ",(0,n.kt)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," per request path. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3134"},"#3134"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3135"},"#3135")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"CircuitBreakerFactory factory = ...\n// CircuitBreaker is applied per the combination of host and path.\nCircuitBreakerMapping mapping = CircuitBreakerMapping.builder()\n                                                     .perPath()\n                                                     .perHost()\n                                                     .build(factory);\nCircuitBreakerRule rule = ...\nCircuitBreakerClient.newDecorator(mapping, rule);\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now apply the different ",(0,n.kt)("inlineCode",{parentName:"p"},"maxTotalAttempts")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"responseTimeout")," for ",(0,n.kt)("a",{parentName:"p",href:"type://RetryingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryingClient.html"},"type://RetryingClient"),"\nusing ",(0,n.kt)("a",{parentName:"p",href:"type://RetryConfig:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryConfig.html"},"type://RetryConfig"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3145"},"#3145")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'BiFunction<ClientRequestContext, Request, String> keyFactory =\n    (ctx, req) -> ctx.endpoint().host();\nBiFunction<ClientRequestContext, Request, RetryConfig<HttpResponse>> configFactory = (ctx, req) -> {\n    String host = ctx.endpoint().host();\n    RetryConfigBuilder builder = RetryConfig.<HttpResponse>builder(RetryRule.onException());\n    if (host.equals("host1")) {\n        builder.maxTotalAttempts(2);\n    } else if (host.equals("host2")) {\n        builder.maxTotalAttempts(4);\n    } else {\n        builder.maxTotalAttempts(1);\n    }\n    return builder.build();\n};\nRetryConfigMapping mapping = RetryConfigMapping.of(keyFactory, configFactory);\nRetryingClient.newDecoratorWithMapping(mapping);\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now split the ",(0,n.kt)("a",{parentName:"p",href:"type://ResponseHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/ResponseHeaders.html"},"type://ResponseHeaders")," and bodies using ",(0,n.kt)("a",{parentName:"p",href:"type://HttpResponse#split():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html#split()"},"type://HttpResponse#split()"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3038"},"#3038")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"HttpResponse response = ...\nSplitHttpResponse splitHttpResponse = response.split();\nCompletableFuture<ResponseHeaders> headersFuture = splitHttpResponse.headers();\nStreamMessage<HttpData> bodyStream = splitHttpResponse.body();\n\nheadersFuture.thenApply(headers -> {\n    if (headers.contentType() == MediaType.JSON_SEQ) {\n        // Subscribe to a stream of HttpData.\n        Flux.from(bodyStream)\n            .map(httpData -> {\n                // Convert HttpData to your domain object\n            });\n            ...\n    }\n});\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now customize for mapping an exception to a gRPC status. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3197"},"#3197")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"GrpcService.builder()\n           .addExceptionMapping(AccessDeniedException.class, Status.UNAUTHENTICATED);\n// Or, use GrpcStatusFunction.\nGrpcService.builder()\n           .exceptionMapping(cause -> {\n               if (cause instanceof AccessDeniedException) {\n                   return Status.UNAUTHENTICATED;\n               }\n               if (cause instanceof FileNotFoundException) {\n                   return Status.NOT_FOUND;\n               }\n               return null; // Return null to use Armeria's default exception mapping.\n           });\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now specify the Caffeine spec for the DNS resolver cache. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2970"},"#2970")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3007"},"#3007"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now specify a prefix for MDC keys using the ",(0,n.kt)("inlineCode",{parentName:"p"},"<prefix>")," element. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3086"},"#3086")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3112"},"#3112")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n  ...\n  <appender name="RCEA" class="com.linecorp.armeria.common.logback.RequestContextExportingAppender">\n    ...\n    \x3c!-- set the prefix of exports which is not wrapped with the <exportGroup> element --\x3e\n    <prefix>armeria.</prefix>\n    <export>remote.id</export>\n    <export>req.headers.user-agent</export>\n    ...\n    <exportGroup>\n      \x3c!-- set the prefix of exports in this <exportGroup> --\x3e\n      <prefix>some_prefix.</prefix>\n      <export>some_value=attr:com.example.AttrKeys#SOME_KEY</export>\n      ...\n    </exportGroup>\n    <exportGroup>\n      \x3c!-- if <prefix> is not defined, no prefix is added to exports --\x3e\n      <export>tracking_id=attr:com.example.AttrKeys#TRACKING_ID_KEY</export>\n      ...\n    </exportGroup>\n  </appender>\n  ...\n</configuration>\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now use the unsafe TLS cipher using ",(0,n.kt)("a",{parentName:"p",href:"type://ClientFactoryBuilder#tlsAllowUnsafeCiphers(boolean):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactoryBuilder.html#tlsAllowUnsafeCiphers(boolean)"},"type://ClientFactoryBuilder#tlsAllowUnsafeCiphers(boolean)"),".\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3157"},"#3157")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3172"},"#3172"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now specify an arbitrary type for ",(0,n.kt)("a",{parentName:"p",href:"type://@Header:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Header.html"},"type://@Header")," and ",(0,n.kt)("a",{parentName:"p",href:"type://@Param:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Param.html"},"type://@Param")," if the\ntype has one of following static methods or the constructor. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2574"},"#2574")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3143"},"#3143")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3164"},"#3164")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"public static T of(String) { ... }")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"public static T valueOf(String) { ... }")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"public static T fromString(String) { ... }")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"public T(String) { ... } // constructor"))),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class UserService {\n\n    @Get("/api")\n    public HttpResponse get(@Param User user) {\n        ...\n    }\n\n    private static class User {\n        User(String userId) { ... } // This constructor is used to create User.\n        ...\n    }\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now build and execute an ",(0,n.kt)("a",{parentName:"p",href:"type://HttpRequest:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpRequest.html"},"type://HttpRequest")," fluently. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3110"},"#3110")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// Creates a POST HttpRequest whose URI is "/foo?q=bar"\n// with headers "cookie: name=value" and "authorization: value" and a JSON body.\nHttpRequest.builder()\n           .post("/{resource}")\n           .pathParam("resource", "foo")\n           .queryParam("q", "bar")\n           .cookie(Cookie.of("name", "value"))\n           .header("authorization", "value")\n           .content(MediaType.JSON, "{\\"foo\\":\\"bar\\"}"));\n// You can also use WebClient.prepare().\nWebClient client = ...\nclient.prepare()\n      .post("/{resource}")\n      .pathParam("resource", "foo")\n      .queryParam("q", "bar")\n      .cookie(Cookie.of("name", "value"))\n      .header("authorization", "value")\n      .content(MediaType.JSON, "{\\"foo\\":\\"bar\\"}")\n      .execute();\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now easily handle cookies by applying ",(0,n.kt)("a",{parentName:"p",href:"type://CookieClient#newDecorator():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/cookie/CookieClient.html#newDecorator()"},"type://CookieClient#newDecorator()"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2637"},"#2637")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3118"},"#3118")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"WebClient client = WebClient.builder()\n                            .factory(factory)\n                            .decorator(CookieClient.newDecorator())\n                            .build();\nclient.get(...); // The cookies that are received from the origin server\n                 // are added to the request headers.\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now use the custom Thrift protocol by using ",(0,n.kt)("a",{parentName:"p",href:"type://ThriftProtocolFactoryProvider:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/thrift/ThriftProtocolFactoryProvider.html"},"type://ThriftProtocolFactoryProvider")," and SPI. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3183"},"#3183")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class TTupleFactoryProvider extends ThriftProtocolFactoryProvider {\n    @Override\n    public Set<ThriftProtocolFactoryProvider.Entry> entries() {\n        return ImmutableSet.of(new ThriftProtocolFactoryProvider.Entry(\n                SerializationFormat.of("ttuple"), new TTupleProtocol.Factory()));\n    }\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now collect more detailed DNS metrics. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1887"},"#1887")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2935"},"#2935")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria.client.dns.queries#count{...,result=success}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria.client.dns.queries#count{...,result=failure}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria.client.dns.queries.written#count{...}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria.client.dns.queries.cancelled#count{...}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria.client.dns.queries.redirected#count{...}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria.client.dns.queries.cnamed#count{...}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria.client.dns.queries.noanswer#count{...}")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now customize the ",(0,n.kt)("a",{parentName:"p",href:"type://HealthCheckService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/healthcheck/HealthCheckService.html"},"type://HealthCheckService")," when using Spring integration. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3144"},"#3144")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic HealthCheckServiceConfigurator healthCheckServiceConfigurator() {\n    return builder -> builder.updatable(true);\n}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now use ",(0,n.kt)("a",{parentName:"p",href:"type://RequestHeaders#acceptLanguage()"},"type://RequestHeaders#acceptLanguage()")," to choose language. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3177"},"#3177")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3179"},"#3179")))),(0,n.kt)("h2",{id:"-improvements",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Various improvements for ",(0,n.kt)("a",{parentName:"li",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3149"},"#3149")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3150"},"#3150")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3167"},"#3167")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3188"},"#3188"))),(0,n.kt)("h2",{id:"️-bug-fixes",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://HealthCheckedEndpointGroup#endpoints()"},"type://HealthCheckedEndpointGroup#endpoints()")," now returns healthy endpoints properly even when\n",(0,n.kt)("a",{parentName:"li",href:"type://EndpointGroup#orElse(EndpointGroup):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointGroup.html#orElse(com.linecorp.armeria.client.endpoint.EndpointGroup)"},"type://EndpointGroup#orElse(EndpointGroup)")," is used. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3181"},"#3181")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ServletRequest.getProtocol()")," now returns the proper value when using ",(0,n.kt)("a",{parentName:"li",href:"type://TomcatService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/tomcat/TomcatService.html"},"type://TomcatService")," and\n",(0,n.kt)("a",{parentName:"li",href:"type://JettyService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/jetty/JettyService.html"},"type://JettyService"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3194"},"#3194")),(0,n.kt)("li",{parentName:"ul"},"The route decorators are now evaluated in the reverse order they applied. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3160"},"#3160")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3166"},"#3166"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The purpose of this change is to make sure we provide a consistent experience when decorating a service.\nFor example, when we decorate a service like the following:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"myService\n  .decorate(decoratorA)\n  .decorate(decoratorB);\n")),"we expect ",(0,n.kt)("inlineCode",{parentName:"li"},"decoratorA")," decorates ",(0,n.kt)("inlineCode",{parentName:"li"},"myService")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"decoratorB")," decorates ",(0,n.kt)("inlineCode",{parentName:"li"},"decoratorA"),".\nRoute decorators were breaking this expectation."))),(0,n.kt)("li",{parentName:"ul"},"You now get the FORBIDDEN status if your service does not handle preflight requests regardless of\nroute decorators. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3152"},"#3152")),(0,n.kt)("li",{parentName:"ul"},"A gRPC ",(0,n.kt)("inlineCode",{parentName:"li"},"ServerCall")," is now closed exactly only once. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3153"},"#3153")),(0,n.kt)("li",{parentName:"ul"},"You no longer see ",(0,n.kt)("inlineCode",{parentName:"li"},"AnnotatedConnectException")," when the ",(0,n.kt)("a",{parentName:"li",href:"type://Endpoint:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html"},"type://Endpoint")," is created with an\nIPv6 scope ID. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3158"},"#3158")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3178"},"#3178")),(0,n.kt)("li",{parentName:"ul"},"Armeria server does not reject the request path whose first segment includes a colon anymore. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3154"},"#3154"))),(0,n.kt)("h2",{id:"️-deprecations",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerClient#newPerHostAndMethodDecorator(BiFunction,CircuitBreakerRule):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html#newPerHostAndMethodDecorator(java.util.function.BiFunction,com.linecorp.armeria.client.circuitbreaker.CircuitBreakerRule)"},"type://CircuitBreakerClient#newPerHostAndMethodDecorator(BiFunction,CircuitBreakerRule)")," is now deprecated.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3135"},"#3135"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerClient#newDecorator(CircuitBreakerMapping,CircuitBreakerRule):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html#newDecorator(com.linecorp.armeria.client.circuitbreaker.CircuitBreakerMapping,com.linecorp.armeria.client.circuitbreaker.CircuitBreakerRule)"},"type://CircuitBreakerClient#newDecorator(CircuitBreakerMapping,CircuitBreakerRule)")," with the customized\n",(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerMapping:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerMapping.html"},"type://CircuitBreakerMapping")," using ",(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerMapping#builder():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerMapping.html#builder()"},"type://CircuitBreakerMapping#builder()"),"."))),(0,n.kt)("li",{parentName:"ul"},"The response timeout and max total attempts setters in ",(0,n.kt)("a",{parentName:"li",href:"type://RetryingClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryingClientBuilder.html"},"type://RetryingClientBuilder")," are now deprecated.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3128"},"#3128")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3145"},"#3145"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The static factory methods that take those parameters in ",(0,n.kt)("a",{parentName:"li",href:"type://RetryingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryingClient.html"},"type://RetryingClient")," are now deprecated as well."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"type://RetryConfigMapping:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryConfigMapping.html"},"type://RetryConfigMapping")," and ",(0,n.kt)("a",{parentName:"li",href:"type://RetryConfig:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryConfig.html"},"type://RetryConfig"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://Route#apply(RoutingContext):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html#apply(com.linecorp.armeria.server.RoutingContext)?full"},"type://Route#apply(RoutingContext)?full")," is deprecated. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3152"},"#3152"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"type://Route#apply(RoutingContext,boolean):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html#apply(com.linecorp.armeria.server.RoutingContext,boolean)?full"},"type://Route#apply(RoutingContext,boolean)?full"),"."))),(0,n.kt)("li",{parentName:"ul"},"The constructor of ",(0,n.kt)("a",{parentName:"li",href:"type://PrometheusExpositionService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/metric/PrometheusExpositionService.html"},"type://PrometheusExpositionService")," is now deprecated. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3081"},"#3081"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"type://PrometheusExpositionService#of(CollectorRegistry):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/metric/PrometheusExpositionService.html#of(io.prometheus.client.CollectorRegistry)"},"type://PrometheusExpositionService#of(CollectorRegistry)"),".")))),(0,n.kt)("h2",{id:"️-breaking-changes",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Route decorators are now evaluated in the reverse order they applied. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3160"},"#3160")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3166"},"#3166"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The purpose of this change is to make sure we provide a consistent experience when decorating a service.\nFor example, when we decorate a service like the following:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"myService\n  .decorate(decoratorA)\n  .decorate(decoratorB);\n")),"we expect ",(0,n.kt)("inlineCode",{parentName:"li"},"decoratorA")," decorates ",(0,n.kt)("inlineCode",{parentName:"li"},"myService")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"decoratorB")," decorates ",(0,n.kt)("inlineCode",{parentName:"li"},"decoratorA"),".\nRoute decorators were breaking this expectation.")))),(0,n.kt)("h2",{id:"-dependencies",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dropwizard 2.0.13 → 2.0.16"),(0,n.kt)("li",{parentName:"ul"},"Fastutil 8.4.2 → 8.4.3"),(0,n.kt)("li",{parentName:"ul"},"gRPC 1.33.0 → 1.33.1"),(0,n.kt)("li",{parentName:"ul"},"grpc-kotlin-stub 0.2.0 → 0.2.1"),(0,n.kt)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.13 → 4.1.15"),(0,n.kt)("li",{parentName:"ul"},"Jackson 2.11.2 → 2.12.0"),(0,n.kt)("li",{parentName:"ul"},"JCTools 3.1.0 → 3.2.0"),(0,n.kt)("li",{parentName:"ul"},"javax.annotation-api 1.3.2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"jakarta-annotation-api 2.0 has been released with a breaking change so we use javax.annotation-api instead."))),(0,n.kt)("li",{parentName:"ul"},"Micrometer 1.5.5 → 1.6.1"),(0,n.kt)("li",{parentName:"ul"},"Netty 4.1.53.Final → 4.1.54.Final"),(0,n.kt)("li",{parentName:"ul"},"BouncyCastle 1.66 → 1.67"),(0,n.kt)("li",{parentName:"ul"},"Reactor 3.3.10.RELEASE → 3.4.0"),(0,n.kt)("li",{parentName:"ul"},"Spring Boot 2.3.4.RELEASE → 2.4.0"),(0,n.kt)("li",{parentName:"ul"},"Spring 5.2.9.RELEASE → 5.3.1"),(0,n.kt)("li",{parentName:"ul"},"Tomcat 9.0.39 → 9.0.40")),(0,n.kt)("h2",{id:"-thank-you",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),(0,n.kt)(s,{usernames:["anuraaga","codefromthecrypt","ghkim3221","haithamgabr","heowc","ikhoon","jrhee17","KarboniteKream","kojilin","masonshin","minwoox","okue","perlun","rolandblain","techno","tobias-","trustin","tumile","Ubehebe","wickedev","windmeup"],mdxType:"ThankYou"}))}u.isMDXComponent=!0},20370:function(e,a,t){t(88025);var r=t(1923),i=t(25444),n=t(67294),o=t(55746),l=t(8284),p=t(96759),s=t(46731),c=t(9396),m=r.Z.Title,u=Object.keys(l)[0],h=d(u);function d(e){return e.substring(e.lastIndexOf("/")+1)}a.Z=function(e){var a={},t={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(o).forEach((function(e){var t=e[0],r=e[1];a[r]=t})),Object.entries(l).forEach((function(e){var a=e[0],r=e[1];t[r]=a}));var k=(0,c.Z)(e.location),N=e.version||d(k);return N.match(/^[0-9]/)||(N=void 0),n.createElement(s.Z,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:N?N+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),N&&N!==h?n.createElement(p.Ch,null,"You're seeing the release note of an old version. Check out"," ",n.createElement(i.Link,{to:u},"the latest release note"),"."):"",N?n.createElement(m,{id:"release-notes",level:1},n.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),N," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-1-3-0-mdx-b2b710382c6a442946bf.js.map