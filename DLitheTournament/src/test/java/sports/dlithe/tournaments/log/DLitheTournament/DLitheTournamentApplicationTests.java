package sports.dlithe.tournaments.log.DLitheTournament;

import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import sports.dlithe.tournaments.log.DLitheTournament.model.Athlete;
import sports.dlithe.tournaments.log.DLitheTournament.model.Tournament;
import sports.dlithe.tournaments.log.DLitheTournament.repos.AthleteRepository;
import sports.dlithe.tournaments.log.DLitheTournament.repos.TournamentRepository;
import sports.dlithe.tournaments.log.DLitheTournament.services.AthleteService;
import sports.dlithe.tournaments.log.DLitheTournament.services.TournamentService;

@SpringBootTest
@RunWith(SpringRunner.class)
class DLitheTournamentApplicationTests {

	@MockBean
	TournamentRepository trepo;
	@MockBean
	AthleteRepository arepo;
	
	@Autowired
	TournamentService tserv;
	@Autowired
	AthleteService aserv;
	
	@Test
	public void testFetchingAllTournaments()
	{
		Athlete a1=new Athlete();a1.setContactNo(7656789L);a1.setEnrollId(1);a1.setName("Mohit");a1.setWeight(45.6);
		Athlete a2=new Athlete();a2.setContactNo(6567676767L);a2.setEnrollId(2);a2.setName("Pavan");a2.setWeight(63.1);
		Athlete a3=new Athlete();a3.setContactNo(8765456765L);a3.setEnrollId(3);a3.setName("Kalpana");a3.setWeight(55.3);
		Athlete a4=new Athlete();a4.setContactNo(87654567656L);a4.setEnrollId(10);a4.setName("Navya");a4.setWeight(54.9);
		Tournament tournament1=new Tournament();tournament1.setName("Boxing");
		tournament1.setParticipants(Stream.of(a1,a2).toList());tournament1.setPrice(10000);
		tournament1.setStartDate(new Date(2022, 2, 12));tournament1.setTournamentId(1);
		tournament1.setVenue("MITE");tournament1.setWinner("Mohit");
		
		Tournament tournament2=new Tournament();tournament2.setName("Tennis");
		tournament2.setParticipants(Stream.of(a2,a4).toList());tournament2.setPrice(5000);
		tournament2.setStartDate(new Date(2022, 2, 27));tournament2.setTournamentId(5);
		tournament2.setVenue("SDMIT");tournament2.setWinner("Navya");
		
		Tournament tournament3=new Tournament();tournament3.setName("Football");
		tournament3.setParticipants(Stream.of(a2,a3).toList());tournament3.setPrice(50000);
		tournament3.setStartDate(new Date(2022, 2, 10));tournament3.setTournamentId(14);
		tournament3.setVenue("MITE");tournament3.setWinner("Pavan");
		
		when(trepo.findAll()).thenReturn(Stream.of(tournament1,tournament2,tournament3).toList());
		
		assertEquals(tournament2,tserv.fetchingAll().get(1));
		
		assertTrue(tserv.fetchingAll().size()>=3);
		
	}
	
	@Test
	public void testAddTournament()
	{
		Athlete a1=new Athlete();a1.setContactNo(7656789L);a1.setEnrollId(1);a1.setName("Mohit");a1.setWeight(45.6);
		Athlete a2=new Athlete();a2.setContactNo(6567676767L);a2.setEnrollId(2);a2.setName("Pavan");a2.setWeight(63.1);
		Athlete a3=new Athlete();a3.setContactNo(8765456765L);a3.setEnrollId(3);a3.setName("Kalpana");a3.setWeight(55.3);
		Tournament tournament1=new Tournament();tournament1.setName("Boxing");
		tournament1.setParticipants(Stream.of(a1,a2).toList());tournament1.setPrice(10000);
		tournament1.setStartDate(new Date(2022, 2, 12));tournament1.setTournamentId(1);
		tournament1.setVenue("MITE");tournament1.setWinner("Mohit");
		
		when(trepo.save(tournament1)).thenReturn(tournament1);
		
		assertEquals("Boxing has added as upcoming event",tserv.newOne(tournament1));
		
	}
	
	@Test
	public void testOneTournament()
	{
		Athlete a1=new Athlete();a1.setContactNo(7656789L);a1.setEnrollId(1);a1.setName("Mohit");a1.setWeight(45.6);
		Athlete a2=new Athlete();a2.setContactNo(6567676767L);a2.setEnrollId(2);a2.setName("Pavan");a2.setWeight(63.1);
		Athlete a3=new Athlete();a3.setContactNo(8765456765L);a3.setEnrollId(3);a3.setName("Kalpana");a3.setWeight(55.3);
		Athlete a4=new Athlete();a4.setContactNo(87654567656L);a4.setEnrollId(10);a4.setName("Navya");a4.setWeight(54.9);
		Tournament tournament1=new Tournament();tournament1.setName("Boxing");
		tournament1.setParticipants(Stream.of(a1,a2).toList());tournament1.setPrice(10000);
		tournament1.setStartDate(new Date(2022, 2, 12));tournament1.setTournamentId(1);
		tournament1.setVenue("MITE");tournament1.setWinner("Mohit");
		
		Tournament tournament2=new Tournament();tournament2.setName("Tennis");
		tournament2.setParticipants(Stream.of(a2,a4).toList());tournament2.setPrice(5000);
		tournament2.setStartDate(new Date(2022, 2, 27));tournament2.setTournamentId(5);
		tournament2.setVenue("SDMIT");tournament2.setWinner("Navya");
		
		Tournament tournament3=new Tournament();tournament3.setName("Football");
		tournament3.setParticipants(Stream.of(a2,a3).toList());tournament3.setPrice(50000);
		tournament3.setStartDate(new Date(2022, 2, 10));tournament3.setTournamentId(14);
		tournament3.setVenue("MITE");tournament3.setWinner("Pavan");
		
		when(trepo.findAll()).thenReturn(Stream.of(tournament1,tournament2,tournament3).toList());
		
		
		
	}

}
