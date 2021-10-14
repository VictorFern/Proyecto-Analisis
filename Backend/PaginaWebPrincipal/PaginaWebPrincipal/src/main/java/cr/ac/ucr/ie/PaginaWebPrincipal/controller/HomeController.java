package cr.ac.ucr.ie.PaginaWebPrincipal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
public class HomeController {
	@GetMapping("/home")
	public String index() {

		return "index.html";

	}
}
