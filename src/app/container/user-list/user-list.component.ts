import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ImageService } from '../../services/image.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {

  teams = [
    {
      team_name: 'Mumbai Indians',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2021/12/Mumbai-Indians-logo.png',
      captain: 'Rohit Sharma',
      owner: 'Reliance Industries',
      winning_years: [2013, 2015, 2017, 2019, 2020],
      home_stadium: 'Wankhede Stadium',
      coach: 'Mahela Jayawardene',
      team_colors: ['Blue', 'Gold'],
      founding_year: 2008,
      website_url: 'https://www.mumbaiindians.com/',
      winner: 'Winners'
    },
    {
      team_name: 'Chennai Super Kings',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2021/12/CSK-Logo.png',
      captain: 'MS Dhoni',
      owner: 'India Cements',
      winning_years: [2010, 2011, 2018, 2021, 2023],
      home_stadium: 'M. A. Chidambaram Stadium',
      coach: 'Stephen Fleming',
      team_colors: ['Yellow', 'Blue'],
      founding_year: 2008,
      website_url: 'https://www.chennaisuperkings.com/',
      winner: 'Winners'
    },
    {
      team_name: 'Kolkata Knight Riders',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2021/12/KKR-Logo.png',
      captain: 'Nitish Rana',
      owner: 'Red Chillies Entertainment and Mehta Group',
      winning_years: [2012, 2014],
      home_stadium: 'Eden Gardens',
      coach: 'Chandrakant Pandit',
      team_colors: ['Purple', 'Gold'],
      founding_year: 2008,
      website_url: 'https://www.kkr.in/',
      winner: 'Winners'
    },
    {
      team_name: 'Royal Challengers Bangalore',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2021/12/Royal-Challengers-Bangalore-Logo.png',
      captain: 'Faf du Plessis',
      owner: 'United Spirits',
      winning_years: [],
      home_stadium: 'M. Chinnaswamy Stadium',
      coach: 'Sanjay Bangar',
      team_colors: ['Red', 'Gold'],
      founding_year: 2008,
      website_url: 'https://www.royalchallengers.com/',
      winner: 'Non-Winners'
    },
    {
      team_name: 'Delhi Capitals',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2021/12/Delhi-Capitals-Logo.png',
      captain: 'David Warner',
      owner: 'JSW Group and GMR Group',
      winning_years: [],
      home_stadium: 'Arun Jaitley Stadium',
      coach: 'Ricky Ponting',
      team_colors: ['Blue', 'Red'],
      founding_year: 2008,
      website_url: 'https://www.delhicapitals.in/',
      winner: 'Non-Winners'
    },
    {
      team_name: 'Punjab Kings',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2021/12/Punjab-Kings.png',
      captain: 'Shikhar Dhawan',
      owner: 'Mohit Burman, Ness Wadia, Preity Zinta, Karan Paul',
      winning_years: [],
      home_stadium: 'Punjab Cricket Association IS Bindra Stadium',
      coach: 'Trevor Bayliss',
      team_colors: ['Red', 'White'],
      founding_year: 2008,
      website_url: 'https://www.punjabkingsipl.in/',
      winner: 'Non-Winners'
    },
    {
      team_name: 'Sunrisers Hyderabad',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2022/01/SRH-team-logo.png',
      captain: 'Aiden Markram',
      owner: 'Sun TV Network',
      winning_years: [2016],
      home_stadium: 'Rajiv Gandhi International Cricket Stadium',
      coach: 'Brian Lara',
      team_colors: ['Orange', 'Black'],
      founding_year: 2013,
      website_url: 'https://www.sunrisershyderabad.in/',
      winner: 'Winners'
    },
    {
      team_name: 'Rajasthan Royals',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2021/12/Rajasthan-Royals-Logo-1920x1080.jpg',
      captain: 'Sanju Samson',
      owner: 'Manoj Badale, Lachlan Murdoch',
      winning_years: [2008],
      home_stadium: 'Sawai Mansingh Stadium',
      coach: 'Kumar Sangakkara',
      team_colors: ['Pink', 'Blue'],
      founding_year: 2008,
      website_url: 'https://www.rajasthanroyals.com/',
      winner: 'Winners'
    },
    {
      team_name: 'Gujarat Titans',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2022/02/Gujarat-Titans-Logo.png',
      captain: 'Hardik Pandya',
      owner: 'CVC Capital Partners',
      winning_years: [2022],
      home_stadium: 'Narendra Modi Stadium',
      coach: 'Ashish Nehra',
      team_colors: ['Navy Blue', 'Silver'],
      founding_year: 2021,
      website_url: 'https://www.gujarattitansipl.com/',
      winner: 'Winners'
    },
    {
      team_name: 'Lucknow Super Giants',
      team_logo: 'https://www.timesofsports.com/wp-content/uploads/2022/01/Lucnow-Supergiants-IPL-Logo.png',
      captain: 'KL Rahul',
      owner: 'RP-Sanjiv Goenka Group',
      winning_years: [],
      home_stadium: 'BRSABV Ekana Cricket Stadium',
      coach: 'Andy Flower',
      team_colors: ['Blue', 'Green', 'Orange'],
      founding_year: 2021,
      website_url: 'https://www.lucknowsupergiants.in/',
      winner: 'Non-Winners'
    },
  ];

  filteredTeams = [];

  constructor(private searchService: SearchService, private imgSer: ImageService) {}

  ngOnInit() {

    this.searchService.search$.subscribe((searchValue) => {
      this.filteredTeams = this.filterTeams(searchValue);
    });
  }

  allTeams = this.teams.length;
  winners = this.teams.filter((p) => p.winning_years.length != 0).length;
  nonWinners = this.allTeams - this.winners;

  selectedFilterRadio: string = 'All Teams';

  onChangedSelectedFilter(value: string) {
    console.log(this.selectedFilterRadio);
    this.selectedFilterRadio = value;
  }

  filterTeams(searchValue: string) {
    if (searchValue.trim() === '') {
      return this.teams;
    }
    return this.teams.filter((team) =>
      team.team_name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  onJoinButtonClicked(imageUrl: string): void {
    // Pass the image URL to the form component using the shared service
    this.imgSer.updateImageUrl(imageUrl);
  }
  
}
