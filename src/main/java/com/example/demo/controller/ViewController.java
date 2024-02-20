package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping(value = "/")
    public String home() {
        return "home";
    }

    @GetMapping(value = "/albacloud")
    public String albacloud() {
        return "landing";
    }

    @GetMapping(value = "/webshop")
    public String webshophome() {
        return "home_page";
    }

}
