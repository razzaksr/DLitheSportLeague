package sports.dlithe.tournaments.log.DLitheTournament.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

/* 
 * entity relationships
 * 1 to 1
 * 1 to many
 * many to 1
 * many to many
 */

@Entity
public class Tournament 
{
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private int tournamentId;
	private Date startDate;
	private int price;
	private String winner;
	private String venue;
	@OneToMany(cascade = CascadeType.PERSIST)
	@JoinTable(name="record",joinColumns = @JoinColumn(name="eventId"),
				inverseJoinColumns = @JoinColumn(name="participantId"))
	private Collection<Athlete> participants=new ArrayList<Athlete>();
	public int getTournamentId() {
		return tournamentId;
	}
	public void setTournamentId(int tournamentId) {
		this.tournamentId = tournamentId;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getWinner() {
		return winner;
	}
	public void setWinner(String winner) {
		this.winner = winner;
	}
	public String getVenue() {
		return venue;
	}
	public void setVenue(String venue) {
		this.venue = venue;
	}
	public Collection<Athlete> getParticipants() {
		return participants;
	}
	public void setParticipants(Collection<Athlete> participants) {
		this.participants = participants;
	}
}
