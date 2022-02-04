package sports.dlithe.tournaments.log.DLitheTournament.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sports.dlithe.tournaments.log.DLitheTournament.model.Tournament;
import sports.dlithe.tournaments.log.DLitheTournament.repos.TournamentRepository;

@Service
public class TournamentService 
{
	@Autowired
	TournamentRepository trepo;
	
	public String newOne(Tournament tournament)
	{
		return trepo.save(tournament).getName()+" has added as upcoming event";
	}
	
	public List<Tournament> fetchingAll()
	{
		return trepo.findAll();
	}
}
