package sports.dlithe.tournaments.log.DLitheTournament.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sports.dlithe.tournaments.log.DLitheTournament.model.Tournament;

@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Integer>
{

}
