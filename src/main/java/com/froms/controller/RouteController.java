package com.froms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RouteController {
    @RequestMapping(value = { "/forms", "/{x:^(?!api|static|resources).*$}/**" })
    public String index() {
        return "forward:/index.html";
    }
}
