package sports.dlithe.tournaments.log.DLitheTournament.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sports.dlithe.tournaments.log.DLitheTournament.model.Athlete;
import sports.dlithe.tournaments.log.DLitheTournament.repos.AthleteRepository;

@Service
public class AthleteService 
{
	@Autowired
	AthleteRepository arepo;
	
	public String enroll(Athlete athlete)
	{
		return arepo.save(athlete).getName()+" has enrolled the "+athlete.getTournament().getName();
	}
}
