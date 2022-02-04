package sports.dlithe.tournaments.log.DLitheTournament.repos;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import sports.dlithe.tournaments.log.DLitheTournament.model.Tournament;

/* array: index>> 0 to N
 * list: index>> 0 to size
 * map: position>> 100 - Downey, 120 - evans, 80 - scarlet, 
 * 
 * Repository:
 * save
 * findAll
 * findById(json)/ getById(xml)
 * delete
 */

@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Integer>
{
	// Hibernate Query Language
//	@Query("Select tournamentId,name from Tournament")
//	public List<Object[]> findFew();
}
