package ru.techhaven.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavigationController {

    @GetMapping("/index")
    public String indexPage() {
        return "index";
    }

    @GetMapping("/blog")
    public String blogPage() {
        return "blog";
    }

    @GetMapping("/assemblies")
    public String assembliesPage() {
        return "assemblies";
    }

    @GetMapping("/services")
    public String servicesPage() {
        return "services";
    }

    @GetMapping("/gallery")
    public String galleryPage() {
        return "gallery";
    }

    @GetMapping("/privacyPolicy")
    public String privacyPolicyPage() {
        return "privacyPolicy";
    }

    @GetMapping("/feedback")
    public String feedbackPage() {
        return "feedback";
    }
}

