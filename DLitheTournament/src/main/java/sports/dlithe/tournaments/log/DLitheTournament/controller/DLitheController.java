package sports.dlithe.tournaments.log.DLitheTournament.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import sports.dlithe.tournaments.log.DLitheTournament.model.Tournament;
import sports.dlithe.tournaments.log.DLitheTournament.services.AthleteService;
import sports.dlithe.tournaments.log.DLitheTournament.services.TournamentService;

@RestController
public class DLitheController 
{
	@Autowired
	TournamentService tservice;
	@Autowired
	AthleteService aservice;
	
	@GetMapping("/")
	public String hai()
	{
		return "Project is working fine";
	}
	
	@PostMapping("/add")
	public String addingTour(@RequestBody Tournament tournament)
	{
		return tservice.newOne(tournament);
	}
}
