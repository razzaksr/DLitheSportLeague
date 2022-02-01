package sports.dlithe.tournaments.log.DLitheTournament.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sports.dlithe.tournaments.log.DLitheTournament.repos.AthleteRepository;

@Service
public class AthleteService 
{
	@Autowired
	AthleteRepository arepo;
}
