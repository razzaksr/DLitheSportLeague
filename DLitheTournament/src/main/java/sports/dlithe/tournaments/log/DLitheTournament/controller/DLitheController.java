package sports.dlithe.tournaments.log.DLitheTournament.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import sports.dlithe.tournaments.log.DLitheTournament.services.AthleteService;
import sports.dlithe.tournaments.log.DLitheTournament.services.TournamentService;

@RestController
public class DLitheController 
{
	@Autowired
	TournamentService tservice;
	@Autowired
	AthleteService aservice;
}
